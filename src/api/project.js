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

const Project = [
    {
        Id: '1',
        pImg: pImg1,
        title: 'Mobile App Design',
        slug: 'Mobile-App-Design',
        sub: 'App Design',
        description: 'Our all-encompassing IELTS Coaching curriculum encompasses every aspect...',
    },
    {
        Id: '2',
        pImg: pImg2,
        title: 'TOEFL Coaching',
        slug: 'TOEFL-Coaching',
        sub: '',
        description: 'Our experienced coaches are not just educators; they are partners in your journey..',
    },
    {
        Id: '3',
        pImg: pImg3,
        title: 'Dashboard Design',
        slug: 'Dashboard-Design',
        sub: 'Web Design',
        description: 'The contents of the citizenship test typically cover a range of subjects ...',
    },
    {
        Id: '4',
        pImg: pImg1,
        title: 'Mobile App Design',
        slug: 'Mobile-App-Design',
        sub: 'App Design',
        description: 'Our all-encompassing IELTS Coaching curriculum encompasses every aspect...',
    },
    {
        Id: '5',
        pImg: pImg2,
        title: 'TOEFL Coaching',
        slug: 'TOEFL-Coaching',
        sub: '',
        description: 'Our experienced coaches are not just educators; they are partners in your journey..',
    },
    {
        Id: '6',
        pImg: pImg3,
        title: 'Dashboard Design',
        slug: 'Dashboard-Design',
        sub: 'Web Design',
        description: 'The contents of the citizenship test typically cover a range of subjects ...',
    },
    {
        Id: '7',
        pImg: pImg4,
        title: 'Drivora',
        slug: 'drivora',
        sub: 'Blockchain',
        Industry: 'Blockchain',
        Country: 'TX, US',
        Technologies1: tImg1,
        Technologies2: tImg2,
        description: 'Our platform is a real asset NFT marketplace that enables seamless ownership transfer of physical assets, such as cars, through blockchain technology. When a user purchases an NFT representing a car, both the digital NFT and the physical vehicle are securely transferred to them.',
    },
    {
        Id: '8',
        pImg: pImg5,
        title: 'Joinyoho',
        slug: 'joinyoho',
        sub: 'SASS',
        Industry: 'Marketing',
        Country: 'FL, US',
        Technologies1: tImg1,
        Technologies2: tImg3,
        description: 'Yoho is that our cutting-edge Software as a Service (SaaS) platform designed specifically for digital marketing teams. With Yoho, you can rapidly produce impactful content while waving goodbye to the chaos often associated with content management.',
    },
    {
        Id: '9',
        pImg: pImg6,
        title: 'Liberkeys',
        slug: 'Liberkeys',
        sub: 'Real Estate',
        Industry: 'Real estate',
        Country: 'France, Paris',
        Technologies1: tImg4,
        Technologies2: tImg5,
        description: 'Liberkeys is a modern real estate platform that is revolutionizing the way people buy, sell, and rent properties. With a focus on transparency, efficiency, and customer satisfaction, Liberkeys streamlines.',
    },
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
        Id: '17',
        pImg: studentCircusImg,
        title: 'Student Circus',
        slug: 'student-circus',
        thumb1: 'Career Platform',
        thumb2: 'Global Jobs',
        category: 'saas',
        description: 'Global career platform connecting international students with visa-sponsored job opportunities.',
        features: [
            'Visa-sponsored job listings',
            'Immigration Guide',
            'Job Seekers Toolkit',
            'Country Guides',
            'University partnerships'
        ],
        technologies: [
            'Vue.js',
            'Nginx',
            'PrimeVue',
            'jQuery 3.5.1',
            'AccessiBe'
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
]

export default Project;