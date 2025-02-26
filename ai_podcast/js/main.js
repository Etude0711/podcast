/**
 * 探索播客 - 主JavaScript文件
 * 
 * 这个文件包含了所有与用户交互相关的逻辑：
 * - 加载和展示播客卡片
 * - 处理筛选功能
 * - 处理收藏功能
 * - 响应式设计调整
 */

// 等待HTML完全加载后执行脚本
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素引用
    const podcastGrid = document.getElementById('podcastGrid');
    const loadingContainer = document.getElementById('loadingContainer');
    const emptyState = document.getElementById('emptyState');
    const refreshBtn = document.getElementById('refreshBtn');
    const emptyStateRefreshBtn = document.getElementById('emptyStateRefreshBtn');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileFilterMenu = document.getElementById('mobileFilterMenu');
    const header = document.querySelector('.header');
    
    // 筛选状态
    let currentFilters = {
        platform: 'all',
        category: 'all',
        language: 'all'
    };
    
    // 收藏的播客IDs
    let favoritePodcasts = JSON.parse(localStorage.getItem('favoritePodcasts')) || [];
    
    // 初始化
    initializeApp();
    
    /**
     * 初始化应用程序
     */
    function initializeApp() {
        // 克隆桌面筛选器到移动菜单
        setupMobileMenu();
        
        // 加载初始播客数据
        loadPodcasts();
        
        // 设置事件监听器
        setupEventListeners();
        
        // 监听滚动以添加导航栏阴影
        setupScrollEffects();
    }
    
    /**
     * 设置移动端菜单
     */
    function setupMobileMenu() {
        // 将桌面筛选器克隆到移动菜单
        const filterContainer = document.querySelector('.filter-container');
        const filterClone = filterContainer.cloneNode(true);
        
        // 添加克隆的筛选器到移动菜单
        mobileFilterMenu.appendChild(filterClone);
        
        // 确保移动菜单中的筛选按钮也能生效
        setupFilterButtons(mobileFilterMenu.querySelectorAll('.filter-btn'));
    }
    
    /**
     * 设置所有事件监听器
     */
    function setupEventListeners() {
        // 设置筛选按钮
        setupFilterButtons(document.querySelectorAll('.filter-btn'));
        
        // 刷新按钮事件
        refreshBtn.addEventListener('click', function() {
            refreshContent();
        });
        
        // 空状态刷新按钮事件
        emptyStateRefreshBtn.addEventListener('click', function() {
            refreshContent();
        });
        
        // 移动菜单按钮事件
        mobileMenuBtn.addEventListener('click', function() {
            mobileFilterMenu.classList.toggle('active');
        });
        
        // 点击页面其他区域关闭移动菜单
        document.addEventListener('click', function(event) {
            if (!mobileMenuBtn.contains(event.target) && 
                !mobileFilterMenu.contains(event.target) && 
                mobileFilterMenu.classList.contains('active')) {
                mobileFilterMenu.classList.remove('active');
            }
        });
    }
    
    /**
     * 设置筛选按钮的事件监听器
     * @param {NodeList} buttons - 筛选按钮元素列表
     */
    function setupFilterButtons(buttons) {
        buttons.forEach(btn => {
            btn.addEventListener('click', function() {
                const filterType = this.parentNode.parentNode.querySelector('.filter-label').textContent.slice(0, -1);
                const filterValue = this.dataset.platform || this.dataset.category || this.dataset.language;
                
                // 更新相应筛选器的激活状态
                updateButtonStates(filterType.toLowerCase(), filterValue);
                
                // 更新当前筛选条件
                if (this.dataset.platform) currentFilters.platform = filterValue;
                if (this.dataset.category) currentFilters.category = filterValue;
                if (this.dataset.language) currentFilters.language = filterValue;
                
                // 根据新的筛选条件重新加载内容
                loadPodcasts();
            });
        });
    }
    
    /**
     * 更新按钮状态(激活/非激活)
     * @param {string} filterType - 筛选类型(platform/category/language)
     * @param {string} activeValue - 当前激活的值
     */
    function updateButtonStates(filterType, activeValue) {
        // 更新主菜单中的按钮状态
        updateButtonGroupState(
            document.querySelectorAll(`.filter-container .filter-group:nth-child(${getFilterIndex(filterType)}) .filter-btn`), 
            activeValue
        );
        
        // 更新移动菜单中的按钮状态
        updateButtonGroupState(
            document.querySelectorAll(`#mobileFilterMenu .filter-group:nth-child(${getFilterIndex(filterType)}) .filter-btn`),
            activeValue
        );
    }
    
    /**
     * 根据筛选类型获取在菜单中的索引位置
     * @param {string} filterType - 筛选类型
     * @returns {number} - 索引位置
     */
    function getFilterIndex(filterType) {
        const types = {'平台': 1, 'platform': 1, '分类': 2, 'category': 2, '语言': 3, 'language': 3};
        return types[filterType] || 1;
    }
    
    /**
     * 更新按钮组中的激活状态
     * @param {NodeList} buttons - 按钮元素列表
     * @param {string} activeValue - 当前激活的值
     */
    function updateButtonGroupState(buttons, activeValue) {
        buttons.forEach(btn => {
            const btnValue = btn.dataset.platform || btn.dataset.category || btn.dataset.language;
            if (btnValue === activeValue) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    
    /**
     * 设置滚动效果
     */
    function setupScrollEffects() {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    /**
     * 加载播客内容
     */
    function loadPodcasts() {
        // 显示加载提示
        showLoading();
        
        // 模拟API请求延迟
        setTimeout(() => {
            // 获取筛选后的播客列表
            const filteredPodcasts = filterPodcasts();
            
            // 如果没有找到匹配的播客，显示空状态
            if (filteredPodcasts.length === 0) {
                showEmptyState();
                return;
            }
            
            // 显示播客卡片
            displayPodcasts(filteredPodcasts);
            
            // 隐藏加载提示和空状态
            hideLoading();
            hideEmptyState();
        }, 600); // 模拟加载延迟
    }
    
    /**
     * 根据当前筛选条件过滤播客
     * @returns {Array} - 筛选后的播客数组
     */
    function filterPodcasts() {
        // 从全局数据中筛选播客
        return window.podcastsData.filter(podcast => {
            const platformMatch = currentFilters.platform === 'all' || podcast.platform === currentFilters.platform;
            const categoryMatch = currentFilters.category === 'all' || podcast.category === currentFilters.category;
            const languageMatch = currentFilters.language === 'all' || podcast.language === currentFilters.language;
            
            return platformMatch && categoryMatch && languageMatch;
        });
    }
    
    /**
     * 刷新内容，随机打乱顺序
     */
    function refreshContent() {
        // 添加刷新按钮动画
        refreshBtn.classList.add('loading');
        
        // 延迟以显示动画效果
        setTimeout(() => {
            loadPodcasts();
            refreshBtn.classList.remove('loading');
        }, 600);
    }
    
    /**
     * 显示播客卡片
     * @param {Array} podcasts - 要显示的播客数组
     */
    function displayPodcasts(podcasts) {
        // 清空当前内容
        podcastGrid.innerHTML = '';
        
        // 随机打乱播客顺序
        const shuffledPodcasts = shuffleArray([...podcasts]);
        
        // 获取播客卡片模板
        const template = document.getElementById('podcastCardTemplate');
        
        // 遍历播客数据并创建卡片
        shuffledPodcasts.forEach((podcast, index) => {
            // 克隆模板
            const podcastCard = template.content.cloneNode(true);
            
            // 设置播客信息
            const card = podcastCard.querySelector('.podcast-card');
            const image = podcastCard.querySelector('.podcast-image');
            const title = podcastCard.querySelector('.podcast-title');
            const description = podcastCard.querySelector('.podcast-description');
            const platformBadge = podcastCard.querySelector('.platform-badge');
            const favoriteBtn = podcastCard.querySelector('.favorite-btn');
            
            // 延迟加载以创建错落动画效果
            card.style.animationDelay = `${index * 0.05}s`;
            
            // 填充数据
            image.src = podcast.imageUrl;
            image.alt = podcast.title;
            title.textContent = podcast.title;
            description.textContent = podcast.description;
            
            // 设置平台徽章
            platformBadge.setAttribute('data-platform', podcast.platform);
            
            // 设置平台图标
            const platformIcons = {
                'apple': '<i class="fab fa-apple"></i>',
                'spotify': '<i class="fab fa-spotify"></i>',
                'xiaoyuzhou': '<i class="fas fa-rocket"></i>'
            };
            platformBadge.innerHTML = platformIcons[podcast.platform] || '';
            
            // 设置播客卡片点击事件
            card.addEventListener('click', function(e) {
                // 如果点击的是收藏按钮，不要跳转
                if (e.target.closest('.favorite-btn')) {
                    return;
                }
                // 在新标签页打开原始链接
                window.open(podcast.originalUrl, '_blank');
            });
            
            // 设置收藏按钮状态
            if (favoritePodcasts.includes(podcast.id)) {
                favoriteBtn.classList.add('active');
                favoriteBtn.querySelector('i').classList.remove('far');
                favoriteBtn.querySelector('i').classList.add('fas');
            }
            
            // 设置收藏按钮点击事件
            favoriteBtn.addEventListener('click', function(e) {
                e.stopPropagation(); // 防止触发卡片点击事件
                toggleFavorite(podcast.id, this);
            });
            
            // 添加卡片到网格
            podcastGrid.appendChild(podcastCard);
        });
    }
    
    /**
     * 切换播客收藏状态
     * @param {number} podcastId - 播客ID
     * @param {HTMLElement} button - 收藏按钮元素
     */
    function toggleFavorite(podcastId, button) {
        const iconElement = button.querySelector('i');
        
        // 检查播客是否已收藏
        const isFavorite = favoritePodcasts.includes(podcastId);
        
        if (isFavorite) {
            // 如果已收藏，移除收藏
            favoritePodcasts = favoritePodcasts.filter(id => id !== podcastId);
            button.classList.remove('active');
            iconElement.classList.remove('fas');
            iconElement.classList.add('far');
        } else {
            // 如果未收藏，添加收藏
            favoritePodcasts.push(podcastId);
            button.classList.add('active');
            iconElement.classList.remove('far');
            iconElement.classList.add('fas');
            // 添加心跳动画
            iconElement.style.animation = 'none';
            setTimeout(() => {
                iconElement.style.animation = 'heartBeat 0.3s';
            }, 10);
        }
        
        // 保存收藏状态到本地存储
        localStorage.setItem('favoritePodcasts', JSON.stringify(favoritePodcasts));
    }
    
    /**
     * 随机打乱数组顺序
     * @param {Array} array - 要打乱的数组
     * @returns {Array} - 打乱后的数组
     */
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    /**
     * 显示加载提示
     */
    function showLoading() {
        loadingContainer.style.display = 'flex';
        
        // 添加骨架屏
        showSkeletons();
    }
    
    /**
     * 隐藏加载提示
     */
    function hideLoading() {
        loadingContainer.style.display = 'none';
    }
    
    /**
     * 显示空状态提示
     */
    function showEmptyState() {
        emptyState.style.display = 'flex';
        podcastGrid.innerHTML = '';
    }
    
    /**
     * 隐藏空状态提示
     */
    function hideEmptyState() {
        emptyState.style.display = 'none';
    }
    
    /**
     * 显示骨架屏加载状态
     */
    function showSkeletons() {
        // 清空网格
        podcastGrid.innerHTML = '';
        
        // 获取骨架屏模板
        const template = document.getElementById('skeletonCardTemplate');
        
        // 添加6个骨架屏卡片
        for (let i = 0; i < 6; i++) {
            const skeleton = template.content.cloneNode(true);
            podcastGrid.appendChild(skeleton);
        }
    }
    
    /**
     * 添加收藏功能的页面实现（如果需要）
     * 这部分功能在PRD中标记为可选
     */
    function setupFavoritesPage() {
        // 可以在未来扩展这个功能
        // 目前我们只在localStorage中存储收藏的ID
    }
});
