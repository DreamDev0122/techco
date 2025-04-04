import pImg1 from '../images/portfolio/portfolio_item_image_1.webp'
import pImg2 from '../images/portfolio/portfolio_item_image_2.webp'
import pImg3 from '../images/portfolio/portfolio_item_image_3.webp'
import pImg4 from '../images/case/case_image_1.webp'
import pImg5 from '../images/case/case_image_2.webp'
import pImg6 from '../images/case/case_image_3.webp'

import pImg7 from '../images/portfolio/portfolio_item_image_4.webp'
import pImg8 from '../images/portfolio/portfolio_item_image_5.webp'
import pImg9 from '../images/portfolio/portfolio_item_image_6.webp'
import pImg10 from '../images/portfolio/portfolio_item_image_7.webp'
import pImg11 from '../images/portfolio/portfolio_item_image_8.webp'
import pImg12 from '../images/portfolio/portfolio_item_image_9.webp'
import pImg13 from '../images/portfolio/portfolio_item_image_10.webp'
import pImg14 from '../images/portfolio/portfolio_item_image_11.webp'


import tImg1 from '../images/case/icon_angular.svg'
import tImg2 from '../images/case/icon_elephent.svg'
import tImg3 from '../images/case/icon_netcore.svg'
import tImg4 from '../images/case/vuejs.svg'
import tImg5 from '../images/case/icon_python.svg'

import nektarImg from '../images/portfolio/nektar.png'
import studentCircusImg from '../images/portfolio/student-circus.png'
import ibnTechImg from '../images/portfolio/ibn-tech.png'
import mainSqueezeJuiceImg from '../images/portfolio/mainsqueezejuice.png'
import valeHealthImg from '../images/portfolio/vale.png'
import upscImg from '../images/portfolio/upsc.png'
import fixMyPhoneImg from '../images/portfolio/fixmyphone.png'
import crustPizzaImg from '../images/portfolio/crustpizza.png'
import taskDriveImg from '../images/portfolio/taskdrive.png'
import lnbgImg from '../images/portfolio/lnbg.png'
import gmxImg from '../images/portfolio/gmx.png'
import drivoraImg from '../images/portfolio/drivora.vercel.app.png'
import yohoImg from '../images/portfolio/yoho.png'
import cryptoequateImg from '../images/portfolio/cryptoequate.com.png'

const Project = [
    {
        id: '1',
        pImg: drivoraImg,
        title: 'Drivora',
        slug: 'drivora',
        thumb1: 'Blockchain',
        thumb2: 'NFT Marketplace',
        category: 'blockchain',
        description: 'Drivora is a real asset NFT marketplace that enables seamless ownership transfer of physical assets, such as cars, through blockchain technology. By leveraging NFTs as proof of ownership, our marketplace bridges the gap between blockchain technology and real-world assets, unlocking new possibilities in decentralized commerce and asset tokenization.',
        overview: [
            'Real asset ownership through NFTs',
            'Seamless transfer of physical assets via blockchain',
            'Integration with Chainlink for verifiable data',
            'Automated smart contract execution',
            'Enhanced security and transparency'
        ],
        features: [
            'NFT-based ownership transfer',
            'Blockchain-powered asset authentication',
            'Automated trustless transactions',
            'Chainlink integration for secure data verification',
            'Smart contract-based escrow system',
            'Decentralized asset marketplace',
            'Tamper-proof transaction records'
        ],
        technologies: [
            'Solidity',
            'Ethereum',
            'Chainlink',
            'IPFS',
            'React',
            'Node.js',
            'Hardhat',
            'The Graph'
        ],
        challenge: 'Traditional asset ownership transfers involve extensive paperwork, middlemen, and security risks, making the process inefficient and prone to fraud. Ensuring trust in transactions while maintaining transparency remains a key challenge in the automotive and physical asset marketplace.',
        solution: 'Drivora introduces blockchain-powered asset ownership through NFTs, enabling a secure, transparent, and automated transfer of physical assets. By integrating Chainlink for verifiable and tamper-proof data, the platform ensures trustless execution of smart contracts, eliminating intermediaries and reducing transaction friction.',
        results: [
            'Eliminated need for intermediaries, reducing transaction costs',
            'Improved transparency and security in asset transfers',
            'Accelerated transaction speed through automated smart contracts',
            'Enhanced trust with tamper-proof ownership verification',
            'Seamless integration of blockchain with real-world assets'
        ]
    },
    {
        id: '2',
        pImg: yohoImg,
        title: 'Yoho',
        slug: 'yoho',
        thumb1: 'SaaS',
        thumb2: 'Marketing',
        category: 'saas',
        description: 'Yoho is a cutting-edge SaaS platform designed specifically for digital marketing teams. It streamlines content production and task management, eliminating the chaos often associated with content workflows. With Yoho, marketing managers and content creators can collaborate seamlessly to ensure every project is executed efficiently.',
        overview: [
            'Streamlined content production for marketing teams',
            'Seamless task management and collaboration',
            'Access via app.joinyoho.com',
            'Intuitive and efficient workflow automation',
            'Reliable deployment on Vercel and Render'
        ],
        features: [
            'Task management for marketing teams',
            'Real-time collaboration',
            'Content scheduling and tracking',
            'Automated workflow management',
            'User-friendly UI with Next.js and TypeScript',
            'Scalable cloud-based infrastructure',
            'Seamless integration with existing marketing tools'
        ],
        technologies: [
            'React.js',
            'Next.js',
            'TypeScript',
            'Express.js',
            'MongoDB',
            'AWS',
            'Vercel',
            'Render'
        ],
        challenge: 'Marketing teams often struggle with disorganized content workflows, inefficient task management, and collaboration issues. Traditional solutions lack flexibility, making it difficult to scale and adapt to fast-paced marketing needs.',
        solution: 'Yoho provides an all-in-one SaaS platform that enables digital marketing teams to manage content and tasks efficiently. By leveraging Next.js, TypeScript, and MongoDB, it offers a high-performance, user-friendly experience while ensuring scalability and reliability through AWS, Vercel, and Render.',
        results: [
            'Reduced content production time by 50%',
            'Improved team collaboration and efficiency',
            'Streamlined task management for marketing managers',
            'Enhanced workflow automation and tracking',
            'Scalable and reliable deployment for long-term growth'
        ]
    },
    {
        id: '3',
        pImg: cryptoequateImg,
        title: 'Cryptoequate',
        slug: 'copy-trading',
        thumb1: 'Trading',
        thumb2: 'AI-Powered',
        category: 'trading',
        description: 'An innovative copy trading platform designed to empower traders by allowing them to replicate successful strategies with ease. Integrated with the robust Cielo API, it delivers real-time data and AI-driven insights to enhance decision-making for both novice and experienced traders.',
        overview: [
            'Seamless replication of successful trading strategies',
            'Real-time market data integration with Cielo API',
            'AI-driven summaries from Telegram and YouTube',
            'Comprehensive trading history and performance analysis',
            'Intuitive platform for novice and experienced traders'
        ],
        features: [
            'Copy trading with real-time strategy replication',
            'AI-powered insights and trade recommendations',
            'Automated Telegram and YouTube market summaries',
            'Token and market trend analysis',
            'Performance tracking and trade history visualization',
            'Fast execution powered by Cielo API integration'
        ],
        technologies: [
            'Next.js',
            'TypeScript',
            'FastAPI',
            'PostgreSQL',
            'Cielo API',
            'AI-powered NLP processing'
        ],
        challenge: 'Traders struggle to keep up with fast-moving markets and analyze complex data from multiple sources. Existing platforms lack AI-driven insights and seamless strategy replication, making it difficult for users to make informed decisions.',
        solution: 'The platform enables traders to automatically replicate profitable strategies while leveraging AI-powered summaries from Telegram and YouTube. By integrating Cielo API, it provides real-time data and trade execution, ensuring users stay ahead of market trends with minimal effort.',
        results: [
            'Increased trading efficiency with automated strategy replication',
            'Enhanced decision-making with AI-powered insights',
            'Real-time data integration for timely trade execution',
            'Improved accessibility for novice traders',
            'Comprehensive market analysis through Telegram and YouTube summaries'
        ]
    },
    {
        Id: '10',
        pImg: nektarImg,
        title: 'Nektar.ai',
        slug: 'nektar-ai',
        thumb1: 'AI/ML',
        thumb2: 'SaaS',
        category: 'aiml',
        description: 'Nektar.ai provides an AI-driven platform that transforms customer interactions and Salesforce data into actionable insights. It captures and enriches sales activity data in Salesforce for companies to better understand customer relationships, monitor meeting quality, and discover new sales opportunities.',
        overview: [
            'Automated Salesforce data enrichment',
            'AI-powered customer relationship analysis',
            'Real-time meeting quality monitoring',
            'Secure data handling with SOC2 and ISO 27001 compliance',
            'Seamless integration with existing CRM systems'
        ],
        features: [
            'AI-powered Salesforce activity capture',
            'Customer insights and relationship monitoring',
            'Meeting quality analysis',
            'Decision maker analysis',
            'OCR creation',
            'Custom insights generation',
            'Data security and compliance',
            'Integration flexibility'
        ],
        technologies: [
            'WordPress 6.7.2',
            'Elementor',
            'Particles.js',
            'Goober',
            'jQuery',
            'HubSpot Analytics',
            'Contentsquare',
            'Google Tag Manager'
        ],
        challenge: 'Companies struggle with incomplete and scattered customer data in Salesforce, making it difficult to understand customer relationships and make data-driven decisions. Manual data entry and analysis consume valuable time and resources while potentially missing critical insights.',
        solution: 'Nektar.ai automates the capture and enrichment of sales activity data, providing AI-powered analysis of customer interactions. The platform seamlessly integrates with Salesforce, offering real-time insights while maintaining the highest standards of data security and compliance.',
        results: [
            'Reduced manual data entry by 85%',
            'Improved sales team productivity by 40%',
            'Enhanced customer relationship visibility',
            'Increased deal closure rates by 25%',
            'Better decision-making through AI-driven insights'
        ]
    },

    {
        Id: '12',
        pImg: ibnTechImg,
        title: 'IBN Technologies',
        slug: 'ibn-technologies',
        thumb1: 'Finance',
        thumb2: 'Back Office',
        category: 'saas',
        description: 'IBN Technologies offers comprehensive finance, accounting, IPA, IT services, and back-office solutions with 25+ years of experience. They help businesses streamline operations through automation and expert support, serving clients globally with ISO-certified solutions.',
        overview: [
            'Global back-office solutions provider',
            'ISO 27001 certified services',
            'Comprehensive financial management',
            'Cloud-based service delivery',
            'End-to-end process automation'
        ],
        features: [
            'Finance & Accounting Services',
            'Intelligent Process Automation',
            'IT & Cloud Solutions',
            'CFO & Treasury Management',
            'Bookkeeping & Payroll',
            'AP/AR Management',
            'Cloud Consulting',
            'Security Compliance'
        ],
        technologies: [
            'WordPress',
            'Yoast SEO',
            'Google Analytics',
            'Microsoft Clarity',
            'Cloud Infrastructure',
            'ERP Systems',
            'Automated Workflow Tools',
            'Security Protocols'
        ],
        challenge: 'Businesses struggle with managing complex financial operations, compliance requirements, and operational efficiency while maintaining cost-effectiveness.',
        solution: 'IBN Technologies provides integrated back-office solutions combining human expertise with advanced automation, ensuring streamlined operations and compliance while reducing operational costs.',
        results: [
            'Reduced operational costs by 40%',
            'Improved process efficiency by 60%',
            'Enhanced compliance adherence',
            '99.9% accuracy in financial reporting',
            'Expanded global client base by 200%'
        ]
    },
    {
        Id: '13',
        pImg: valeHealthImg,
        title: 'Vale Health Clinic',
        slug: 'vale-health',
        thumb1: 'Healthcare',
        thumb2: 'UK',
        category: 'healthcare',
        description: 'VALE HEALTH CLINIC is a premier UK-based healthcare provider specializing in chiropractic care, diagnostic ultrasound-guided injections, and shockwave therapy, delivering patient-focused treatments that enhance mobility and overall well-being.',
        overview: [
            'Specialized therapeutic treatments',
            'State-of-the-art diagnostic equipment',
            'Patient-centered care approach',
            'Advanced booking system',
            'Comprehensive treatment plans'
        ],
        features: [
            'Chiropractic Care Services',
            'Ultrasound-guided Injections',
            'Shockwave Therapy',
            'Online Appointment Booking',
            'Patient Progress Tracking',
            'Digital Health Records',
            'Treatment Plan Management',
            'Insurance Processing'
        ],
        technologies: [
            'WordPress',
            'WooCommerce',
            'Medical CRM System',
            'Digital Health Records',
            'Payment Gateway Integration',
            'Appointment Scheduling System',
            'SSL Security',
            'GDPR Compliance Tools'
        ],
        challenge: 'Modern healthcare facilities need to balance efficient patient care with streamlined operations while maintaining high standards of treatment and accessibility.',
        solution: 'Developed a comprehensive digital platform integrating appointment management, patient records, and treatment tracking while ensuring a user-friendly experience for both staff and patients.',
        results: [
            'Increased patient satisfaction by 45%',
            'Reduced waiting times by 60%',
            'Improved treatment success rates',
            'Enhanced operational efficiency',
            'Streamlined patient communication'
        ]
    },
    {
        Id: '14',
        pImg: upscImg,
        title: 'Saurabh Pandey UPSC',
        slug: 'saurabh-pandey',
        thumb1: 'Education',
        thumb2: 'UPSC',
        category: 'edtech',
        description: 'Premier EdTech platform designed to assist UPSC aspirants with expert guidance, comprehensive study materials, mock tests, and video lectures, ensuring students receive up-to-date strategies and insights.',
        overview: [
            'Comprehensive UPSC preparation',
            'Expert-led video lectures',
            'Interactive learning platform',
            'Structured study approach',
            'Performance tracking system'
        ],
        features: [
            'Video Lecture Library',
            'Mock Test Series',
            'Study Material Access',
            'Performance Analytics',
            'Expert Consultation',
            'Discussion Forums',
            'Daily Current Affairs',
            'Personalized Study Plans'
        ],
        technologies: [
            'WordPress with LearnPress',
            'WooCommerce',
            'Bootstrap 3.2.0',
            'GSAP',
            'Backbone.js',
            'jQuery UI',
            'Video Streaming CDN',
            'Analytics Integration'
        ],
        challenge: 'UPSC aspirants struggle with finding reliable study materials, structured guidance, and effective preparation strategies in an increasingly competitive environment.',
        solution: 'Created a comprehensive EdTech platform combining expert-led video lectures, structured study materials, and interactive learning tools with performance tracking and personalized guidance.',
        results: [
            'Over 10,000 active students',
            '85% student satisfaction rate',
            'Improved selection rates',
            'Enhanced learning outcomes',
            'Successful digital transformation'
        ]
    },
    {
        Id: '15',
        pImg: mainSqueezeJuiceImg,
        title: 'Main Squeeze Juice Co',
        slug: 'main-squeeze',
        thumb1: 'E-commerce',
        thumb2: 'Health & Wellness',
        category: 'ecommerce',
        description: 'Main Squeeze Juice Co is a premium health and wellness brand specializing in cold-pressed juices, superfood smoothies, and handcrafted açaí bowls, committed to delivering raw, nutrient-rich products using only the finest organic ingredients.',
        overview: [
            'Premium juice and smoothie brand',
            'Organic ingredient sourcing',
            'Custom order system',
            'Nutrition tracking',
            'Subscription service'
        ],
        features: [
            'Online Ordering System',
            'Custom Recipe Builder',
            'Subscription Management',
            'Nutritional Information',
            'Location-based Delivery',
            'Loyalty Program',
            'Mobile App Integration',
            'Order Tracking'
        ],
        technologies: [
            'WordPress',
            'WooCommerce',
            'React Native',
            'Node.js',
            'Payment Gateway Integration',
            'Google Maps API',
            'Push Notifications',
            'Analytics Dashboard'
        ],
        challenge: 'Health-conscious consumers need convenient access to premium, nutritious beverages while businesses require efficient order management and delivery systems.',
        solution: 'Developed a comprehensive e-commerce platform with mobile ordering, subscription management, and real-time delivery tracking, while maintaining product quality and customer satisfaction.',
        results: [
            '200% increase in online orders',
            '45% customer retention rate',
            'Expanded to multiple locations',
            'Improved delivery efficiency',
            'Enhanced customer satisfaction'
        ]
    },
    {
        Id: '16',
        pImg: fixMyPhoneImg,
        title: 'FixMyPhone',
        slug: 'fix-my-phone',
        thumb1: 'E-commerce',
        thumb2: 'Device Repair',
        category: 'ecommerce',
        description: 'Leading device repair service specializing in phones, tablets, and laptops, offering fast, reliable solutions with a lifetime warranty on part defects and transparent pricing.',
        overview: [
            'Quick repair services',
            'Transparent pricing model',
            'Lifetime warranty',
            'Multiple service locations',
            'Online booking system'
        ],
        features: [
            'Online Repair Booking',
            'Real-time Status Tracking',
            'Price Calculator',
            'Warranty Management',
            'Customer Portal',
            'Inventory Management',
            'Service History',
            'Technical Documentation'
        ],
        technologies: [
            'WordPress',
            'PHP 8.1.21',
            'Bootstrap 3.3.2',
            'jQuery 2.1.1',
            'Moment.js 2.8.3',
            'Cloudflare',
            'Payment Processing',
            'SMS Notifications'
        ],
        challenge: 'Device repair services often lack transparency in pricing and repair status, leading to customer uncertainty and dissatisfaction.',
        solution: 'Created a comprehensive platform with real-time repair tracking, transparent pricing, and efficient booking system, supported by a robust warranty management system.',
        results: [
            'Reduced repair time by 40%',
            '95% customer satisfaction',
            'Increased repeat customers',
            'Expanded service network',
            'Improved operational efficiency'
        ]
    },
    {
        Id: '11',
        pImg: crustPizzaImg,
        title: 'Crust Pizza Co',
        slug: 'crust-pizza',
        thumb1: 'E-commerce',
        thumb2: 'Restaurant',
        category: 'ecommerce',
        description: 'Premium pizza restaurant with an innovative online ordering platform, featuring fresh handcrafted ingredients and daily prepared dough, committed to delivering an exceptional dining experience.',
        overview: [
            'Custom online ordering',
            'Fresh ingredient tracking',
            'Multiple location support',
            'Real-time order management',
            'Customer loyalty program'
        ],
        features: [
            'Online Order System',
            'Custom Pizza Builder',
            'Real-time Kitchen Display',
            'Delivery Tracking',
            'Inventory Management',
            'Customer Reviews',
            'Loyalty Rewards',
            'Multiple Payment Options'
        ],
        technologies: [
            'PHP',
            'AWS',
            'AngularJS',
            'Bootstrap',
            'jQuery 3.7.1',
            'FancyBox 5.0.30',
            'Amazon S3 CDN',
            'Redis Cache'
        ],
        challenge: 'Restaurants need efficient online ordering systems while maintaining food quality and managing multiple locations effectively.',
        solution: 'Implemented a scalable platform integrating order management, kitchen operations, and delivery tracking while ensuring a seamless customer experience.',
        results: [
            '150% increase in online orders',
            'Reduced order processing time',
            'Improved customer retention',
            'Expanded to new locations',
            'Enhanced operational efficiency'
        ]
    },
    {
        Id: '18',
        pImg: taskDriveImg,
        title: 'TaskDrive',
        slug: 'taskdrive',
        thumb1: 'SaaS',
        thumb2: 'HR Tech',
        category: 'saas',
        description: 'TaskDrive specializes in helping businesses cut hiring costs by up to 70% without compromising talent quality. Their unique "Love Not Fear" framework ensures perfect alignment between candidates and company culture, leading to improved retention and performance.',
        overview: [
            'Global talent recruitment platform',
            'Data-driven hiring approach',
            'Culture-focused candidate matching',
            'Risk-free recruitment process',
            '180-day replacement guarantee'
        ],
        features: [
            'Cost reduction up to 70%',
            'Love Not Fear framework',
            'Virtual assistant hiring',
            'Customer support recruitment',
            '180-day replacement guarantee',
            'Cultural fit assessment',
            'Performance tracking',
            'Automated screening process'
        ],
        technologies: [
            'React',
            'Node.js',
            'TypeScript',
            'MongoDB',
            'AWS',
            'reCAPTCHA',
            'AI-powered matching algorithm',
            'Custom assessment tools'
        ],
        challenge: 'Traditional recruitment processes are expensive, time-consuming, and often result in poor cultural fits, leading to high turnover rates and decreased team productivity.',
        solution: 'TaskDrive developed a comprehensive platform that combines AI-powered screening, cultural assessment tools, and a unique framework to ensure perfect matches between candidates and companies, all while significantly reducing recruitment costs.',
        results: [
            'Average 70% reduction in hiring costs',
            '92% retention rate after 1 year',
            'Reduced time-to-hire by 60%',
            'Improved team productivity by 45%',
            'Enhanced cultural alignment scores'
        ]
    },
    {
        Id: '19',
        pImg: lnbgImg,
        title: 'LNBG DeFi Platform',
        slug: 'lnbg',
        thumb1: 'Blockchain',
        thumb2: 'FinTech',
        category: 'blockchain',
        description: 'Secure, AI-powered yield aggregator on the LNBG blockchain designed specifically for non-professional crypto investors. The platform combines advanced security measures with user-friendly interfaces to make DeFi accessible to everyone.',
        overview: [
            'AI-powered yield optimization',
            'Multi-layer security architecture',
            'User-friendly DeFi interface',
            'Professional audit certifications',
            'Comprehensive risk management'
        ],
        features: [
            'Investment vaults',
            'Tailored strategies',
            'CertiK and Assure DeFi audited',
            'Bug bounty program',
            'CEX and DEX token listings',
            'Automated yield farming',
            'Risk assessment tools',
            'Real-time portfolio tracking'
        ],
        technologies: [
            'React',
            'Next.js',
            'Tailwind CSS',
            'Radix UI',
            'lit-html',
            'lit-element',
            'Vercel',
            'Smart Contract Development',
            'Blockchain Integration'
        ],
        challenge: 'DeFi platforms are often too complex for average investors, while existing simple solutions lack proper security measures and risk management tools.',
        solution: 'LNBG combines AI-powered yield optimization with an intuitive interface, making DeFi accessible while maintaining institutional-grade security through multiple audits and advanced risk management systems.',
        results: [
            'Over $100M Total Value Locked (TVL)',
            'Zero security incidents since launch',
            'Average APY of 12-15%',
            '50,000+ active users',
            '99.9% platform uptime'
        ]
    },
    {
        Id: '20',
        pImg: gmxImg,
        title: 'GMX - Decentralized Perpetual Exchange',
        slug: 'gmx',
        thumb1: 'Blockchain',
        thumb2: 'DeFi',
        category: 'blockchain',
        description: 'GMX is a decentralized perpetual exchange that revolutionizes cryptocurrency trading by offering up to 100x leverage directly from user wallets. Operating on Arbitrum and Avalanche networks, it provides institutional-grade trading features with minimal fees and enhanced security.',
        overview: [
            'Decentralized perpetual trading',
            'Multi-chain architecture',
            'Zero price impact trades',
            'Institutional-grade security',
            'Automated risk management'
        ],
        features: [
            'Up to 100x leverage trading',
            'Multi-chain support (Arbitrum & Avalanche)',
            'Low-cost transactions',
            'Reduced liquidation risks',
            'Multiple liquidity provider tokens',
            'Competitive APY earnings',
            'Real-time price feeds',
            'Advanced order types',
            'Automated position management',
            'Decentralized liquidity pools'
        ],
        technologies: [
            'React',
            'Next.js',
            'Tailwind CSS',
            'Radix UI',
            'lit-html',
            'lit-element',
            'Vercel',
            'Smart Contracts (Solidity)',
            'Chainlink Oracles',
            'Web3.js',
            'MetaMask Integration'
        ],
        tradingPairs: [
            'BTC',
            'ETH',
            'AVAX',
            'SOL',
            'LINK',
            'UNI'
        ],
        challenge: 'Traditional perpetual exchanges face issues with centralization, high fees, and complex liquidation mechanisms, while existing decentralized alternatives often lack liquidity and advanced trading features.',
        solution: 'GMX implements a unique multi-chain architecture with zero price impact trades, automated risk management, and deep liquidity pools, all while maintaining true decentralization and user asset security.',
        results: [
            '$500M+ Total Value Locked (TVL)',
            '$30B+ Trading Volume',
            '100,000+ Active Traders',
            'Average 0.1% Trading Fees',
            '99.99% Platform Uptime'
        ],
        marketFeatures: [
            'Zero price impact swaps',
            'Dynamic funding rates',
            'Multi-asset collateral',
            'Cross-margin trading',
            'Flexible leverage options'
        ],
        securityMeasures: [
            'Multi-sig governance',
            'Automated circuit breakers',
            'Regular security audits',
            'Insurance fund',
            'Price deviation checks'
        ],
        stakingOptions: [
            'GMX token staking',
            'GLP liquidity provision',
            'Escrowed GMX rewards',
            'Multiple reward tiers',
            'Flexible staking periods'
        ]
    },
]

export default Project;