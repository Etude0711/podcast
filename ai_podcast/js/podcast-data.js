/**
 * 播客数据文件
 * 
 * 这个文件包含了播客数据，用于在网页上展示。
 * 在实际项目中，这些数据通常会从服务器API获取。
 * 为了简化演示，我们在前端直接使用这些数据。
 */

// 播客数据数组
const podcastsData = [
    {
        id: 1,
        title: "科技杂谈",
        description: "每周讨论最新科技趋势和产品，深入浅出地解析科技背后的故事。",
        imageUrl: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        platform: "apple",
        category: "technology",
        language: "zh",
        originalUrl: "https://podcasts.apple.com/podcast/id1000000001"
    },
    {
        id: 2,
        title: "The Daily",
        description: "This is what the news should sound like. The biggest stories of our time, told by the best journalists in the world.",
        imageUrl: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        platform: "spotify",
        category: "news",
        language: "en",
        originalUrl: "https://open.spotify.com/show/1000000002"
    },
    {
        id: 3,
        title: "故事FM",
        description: "用你的声音，讲述你的故事。每周一期，让平凡人的非凡故事被更多人听见。",
        imageUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        platform: "xiaoyuzhou",
        category: "entertainment",
        language: "zh",
        originalUrl: "https://www.xiaoyuzhoufm.com/podcast/1000000003"
    },
    {
        id: 4,
        title: "TED Talks Daily",
        description: "Every weekday, TED Talks Daily brings you the latest talks in audio format. Hear thought-provoking ideas on every subject imaginable.",
        imageUrl: "https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        platform: "apple",
        category: "education",
        language: "en",
        originalUrl: "https://podcasts.apple.com/podcast/id1000000004"
    },
    {
        id: 5,
        title: "商业就是这样",
        description: "一档用中文讲述商业故事的播客节目，每周更新。我们追求卓越，但不仅仅是商业上的成功。",
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        platform: "xiaoyuzhou",
        category: "education",
        language: "zh",
        originalUrl: "https://www.xiaoyuzhoufm.com/podcast/1000000005"
    },
    {
        id: 6,
        title: "Freakonomics Radio",
        description: "Discover the hidden side of everything with Stephen J. Dubner, co-author of the Freakonomics books.",
        imageUrl: "https://images.unsplash.com/photo-1520004434532-668416a08753?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        platform: "spotify",
        category: "education",
        language: "en",
        originalUrl: "https://open.spotify.com/show/1000000006"
    },
    {
        id: 7,
        title: "声动早咖啡",
        description: "每周一至周五早上更新，用15分钟通勤时间获取最新资讯，高效开启一天。",
        imageUrl: "https://images.unsplash.com/photo-1534470397273-a1d3f21a0e91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        platform: "xiaoyuzhou",
        category: "news",
        language: "zh",
        originalUrl: "https://www.xiaoyuzhoufm.com/podcast/1000000007"
    },
    {
        id: 8,
        title: "Reply All",
        description: "A show about the internet and trained rats, hosted by PJ Vogt and Alex Goldman.",
        imageUrl: "https://images.unsplash.com/photo-1525130166207-8731bb54b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        platform: "spotify",
        category: "technology",
        language: "en",
        originalUrl: "https://open.spotify.com/show/1000000008"
    },
    {
        id: 9,
        title: "编程语言与AI",
        description: "深入探讨编程语言的设计原理与人工智能的最新进展，适合对计算机科学感兴趣的听众。",
        imageUrl: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        platform: "apple",
        category: "technology",
        language: "zh",
        originalUrl: "https://podcasts.apple.com/podcast/id1000000009"
    },
    {
        id: 10,
        title: "How I Built This",
        description: "Guy Raz dives into the stories behind some of the world's best known companies and movements.",
        imageUrl: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        platform: "apple",
        category: "education",
        language: "en",
        originalUrl: "https://podcasts.apple.com/podcast/id1000000010"
    },
    {
        id: 11,
        title: "一言不合",
        description: "记录当下年轻人的生活状态与思考，探讨社会文化现象，分享有趣的人和事。",
        imageUrl: "https://images.unsplash.com/photo-1519248253573-4b1e85836bf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        platform: "xiaoyuzhou",
        category: "entertainment",
        language: "zh",
        originalUrl: "https://www.xiaoyuzhoufm.com/podcast/1000000011"
    },
    {
        id: 12,
        title: "This American Life",
        description: "This American Life is a weekly public radio show broadcast on more than 500 stations to about 2.2 million listeners.",
        imageUrl: "https://images.unsplash.com/photo-1596313683949-78fa2ff73b12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        platform: "spotify",
        category: "entertainment",
        language: "en",
        originalUrl: "https://open.spotify.com/show/1000000012"
    },
    {
        id: 13,
        title: "财经早餐",
        description: "每日清晨为你提供最新财经资讯概要，让你快速了解市场动态。",
        imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        platform: "apple",
        category: "news",
        language: "zh",
        originalUrl: "https://podcasts.apple.com/podcast/id1000000013"
    },
    {
        id: 14,
        title: "Science Vs",
        description: "Science Vs takes on fads, trends, and the opinionated mob to find out what's fact, what's not, and what's somewhere in between.",
        imageUrl: "https://images.unsplash.com/photo-1523239624119-1571bb4916cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        platform: "spotify",
        category: "education",
        language: "en",
        originalUrl: "https://open.spotify.com/show/1000000014"
    },
    {
        id: 15,
        title: "旅行中的建筑",
        description: "带你领略世界各地的建筑奇观，了解不同文化背景下的建筑艺术与历史。",
        imageUrl: "https://images.unsplash.com/photo-1564501049559-0b54b6f0dc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        platform: "xiaoyuzhou",
        category: "education",
        language: "zh",
        originalUrl: "https://www.xiaoyuzhoufm.com/podcast/1000000015"
    },
    {
        id: 16,
        title: "The Joe Rogan Experience",
        description: "The Joe Rogan Experience podcast is a long form conversation hosted by comedian Joe Rogan with guests from all walks of life.",
        imageUrl: "https://images.unsplash.com/photo-1505509814636-9ba0de70d6f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        platform: "spotify",
        category: "entertainment",
        language: "en",
        originalUrl: "https://open.spotify.com/show/1000000016"
    },
    {
        id: 17,
        title: "设计思维",
        description: "探讨设计如何影响我们的生活，分享设计的理念、方法和案例。",
        imageUrl: "https://images.unsplash.com/photo-1512136146408-dab5f2ba8776?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        platform: "apple",
        category: "technology",
        language: "zh",
        originalUrl: "https://podcasts.apple.com/podcast/id1000000017"
    },
    {
        id: 18,
        title: "Radiolab",
        description: "Radiolab is a show about curiosity. Where sound illuminates ideas, and the boundaries blur between science, philosophy, and human experience.",
        imageUrl: "https://images.unsplash.com/photo-1533533834087-54937f197552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        platform: "apple",
        category: "education",
        language: "en",
        originalUrl: "https://podcasts.apple.com/podcast/id1000000018"
    },
    {
        id: 19,
        title: "城市漫步",
        description: "带你探索不同城市的历史、文化、美食和风土人情，感受城市的独特魅力。",
        imageUrl: "https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        platform: "xiaoyuzhou",
        category: "entertainment",
        language: "zh",
        originalUrl: "https://www.xiaoyuzhoufm.com/podcast/1000000019"
    },
    {
        id: 20,
        title: "Planet Money",
        description: "The economy explained. Imagine you could call up a friend and say, 'Meet me at the bar and tell me what's going on with the economy.'",
        imageUrl: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        platform: "spotify",
        category: "education",
        language: "en",
        originalUrl: "https://open.spotify.com/show/1000000020"
    }
];

// 导出数据，使其可以在其他JS文件中使用
// 在实际环境中，这可能是通过模块系统完成的
// 但为了简单起见，我们直接将其暴露为全局变量
window.podcastsData = podcastsData;
