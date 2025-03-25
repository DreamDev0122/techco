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

const Project = [

    {
        Id: '10',
        pImg: nektarImg,
        title: 'Nektar.ai',
        slug: 'nektar-ai',
        thumb1: 'AI/ML',
        thumb2: 'SaaS',
        category: 'aiml',
        description: 'AI-driven platform transforming customer interactions and Salesforce data into actionable insights.',
        features: [
            'AI-powered Salesforce activity capture',
            'Customer insights and relationship monitoring',
            'Meeting quality analysis',
            'Decision maker analysis',
            'OCR creation'
        ],
        technologies: [
            'WordPress 6.7.2',
            'Elementor',
            'Particles.js',
            'Goober',
            'jQuery'
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
        description: 'Comprehensive finance, accounting, IPA, and IT services provider with 25+ years experience.',
        features: [
            'Finance & Accounting Services',
            'Intelligent Process Automation',
            'IT & Cloud Solutions',
            'CFO & Treasury Management'
        ],
        technologies: [
            'WordPress',
            'Yoast SEO',
            'Google Analytics',
            'Microsoft Clarity'
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
        description: 'Specialized healthcare provider offering chiropractic care and therapeutic treatments.'
    },
    {
        Id: '14',
        pImg: upscImg,
        title: 'Saurabh Pandey UPSC',
        slug: 'saurabh-pandey',
        thumb1: 'Education',
        thumb2: 'UPSC',
        category: 'edtech',
        description: 'Premier EdTech platform for UPSC preparation with comprehensive study materials.'
    },
    {
        Id: '15',
        pImg: mainSqueezeJuiceImg,
        title: 'Main Squeeze Juice Co',
        slug: 'main-squeeze',
        thumb1: 'E-commerce',
        thumb2: 'Health & Wellness',
        category: 'ecommerce',
        description: 'Premium health brand specializing in cold-pressed juices and superfood smoothies.'
    },
    {
        Id: '16',
        pImg: fixMyPhoneImg,
        title: 'FixMyPhone',
        slug: 'fix-my-phone',
        thumb1: 'E-commerce',
        thumb2: 'Device Repair',
        category: 'ecommerce',
        description: 'Leading device repair service specializing in phones, tablets, laptops with lifetime warranty on part defects.',
        technologies: [
            'WordPress',
            'PHP 8.1.21',
            'Bootstrap 3.3.2',
            'jQuery 2.1.1',
            'Moment.js 2.8.3',
            'Cloudflare'
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
        description: 'Premium pizza restaurant with online ordering platform, featuring fresh handcrafted ingredients and daily prepared dough.',
        technologies: [
            'PHP',
            'AWS',
            'AngularJS',
            'Bootstrap',
            'jQuery 3.7.1',
            'FancyBox 5.0.30',
            'Amazon S3 CDN'
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
        description: 'Global talent recruitment platform helping businesses reduce hiring costs while maintaining quality through data-driven approach.',
        features: [
            'Cost reduction up to 70%',
            'Love Not Fear framework',
            'Virtual assistant hiring',
            'Customer support recruitment',
            '180-day replacement guarantee'
        ],
        technologies: [
            'React',
            'Node.js',
            'TypeScript',
            'MongoDB',
            'AWS',
            'reCAPTCHA'
        ]
    },
    {
        Id: '19',
        pImg: lnbgImg,
        title: 'Secure, AI-powered yield aggregator on the LNBG blockchain',
        slug: 'lnbg',
        thumb1: 'Blockchain',
        thumb2: 'FinTech',
        category: 'blockchain',
        description: 'Secure, AI-powered yield aggregator on the LNBG blockchain for non-professional crypto investors.',
        features: [
            'Investment vaults',
            'Tailored strategies',
            'CertiK and Assure DeFi audited',
            'Bug bounty program',
            'CEX and DEX token listings'
        ],
        technologies: [
            'React',
            'Next.js',
            'Tailwind CSS',
            'Radix UI',
            'lit-html',
            'lit-element',
            'Vercel'
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
        description: 'Decentralized perpetual exchange enabling cryptocurrency trading with up to 100x leverage directly from user wallets.',
        features: [
            'Up to 100x leverage trading',
            'Multi-chain support (Arbitrum & Avalanche)',
            'Low-cost transactions',
            'Reduced liquidation risks',
            'Multiple liquidity provider tokens',
            'Competitive APY earnings'
        ],
        technologies: [
            'React',
            'Next.js',
            'Tailwind CSS',
            'Radix UI',
            'lit-html',
            'lit-element',
            'Vercel'
        ],
        tradingPairs: [
            'BTC',
            'ETH',
            'AVAX'
        ]
    },
]

export default Project;