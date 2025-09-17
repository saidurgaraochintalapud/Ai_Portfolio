// AI Workshop Project Constants

// Application Configuration
const APP_CONFIG = {
    name: 'AI Workshop Project',
    version: '1.0.0',
    author: 'Workshop Participant'
};

// API Endpoints (if needed)
const API_ENDPOINTS = {
    // Add your API endpoints here
    // Example: BASE_URL: 'https://api.example.com'
};

// UI Constants
const UI_CONSTANTS = {
    ANIMATION_DURATION: 300,
    FADE_DURATION: 200,
    DEBOUNCE_DELAY: 500
};

// GitHub Color Scheme
const COLORS = {
    PRIMARY: '#0969da',        // GitHub blue
    SECONDARY: '#6f42c1',      // GitHub purple
    SUCCESS: '#1a7f37',        // GitHub green
    WARNING: '#d1242f',        // GitHub red
    ERROR: '#cf222e',          // GitHub error red
    INFO: '#0969da',           // GitHub info blue
    BACKGROUND_PRIMARY: '#0d1117',    // GitHub dark background
    BACKGROUND_SECONDARY: '#161b22',  // GitHub secondary dark
    BACKGROUND_TERTIARY: '#21262d',   // GitHub tertiary dark
    BORDER: '#30363d',         // GitHub border color
    TEXT_PRIMARY: '#f0f6fc',   // GitHub primary text
    TEXT_SECONDARY: '#8b949e', // GitHub secondary text
    TEXT_MUTED: '#656d76'      // GitHub muted text
};

// Messages
const MESSAGES = {
    LOADING: 'Loading...',
    ERROR_GENERIC: 'Something went wrong. Please try again.',
    SUCCESS_GENERIC: 'Operation completed successfully!'
};

// Portfolio Data
const PORTFOLIO_DATA = {
    // Projects Data
    projects: [
        {
            id: 1,
            title: 'AI Portfolio',
            description: 'A modern, responsive portfolio website showcasing my skills and projects with dynamic content rendering and beautiful animations.',
            image: 'fas fa-robot',
            tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
            links: {
                live: '#',
                github: '#'
            },
            featured: true
        },
        {
            id: 2,
            title: 'Food Delivery Application',
            description: 'Full stack food delivery application with comprehensive backend API, user authentication, and modern frontend interface.',
            image: 'fas fa-utensils',
            tech: ['Java', 'Spring Boot', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
            links: {
                live: '#',
                github: '#'
            },
            featured: true
        },
        {
            id: 3,
            title: 'Hand Gesture Detection',
            description: 'Real-time hand gesture recognition system using computer vision and machine learning techniques for interactive applications.',
            image: 'fas fa-hand-paper',
            tech: ['Python', 'OpenCV', 'MediaPipe', 'Machine Learning', 'Computer Vision'],
            links: {
                live: '#',
                github: '#'
            },
            featured: true
        },
        {
            id: 4,
            title: 'E-Commerce Platform',
            description: 'Complete e-commerce solution with product management, shopping cart, payment integration, and admin dashboard.',
            image: 'fas fa-shopping-cart',
            tech: ['Java', 'Spring Framework', 'React', 'MySQL', 'REST API'],
            links: {
                live: '#',
                github: '#'
            },
            featured: false
        },
        {
            id: 5,
            title: 'Task Management System',
            description: 'Collaborative task management application with real-time updates, team collaboration, and project tracking features.',
            image: 'fas fa-tasks',
            tech: ['JavaScript', 'Node.js', 'MongoDB', 'Socket.io', 'Express'],
            links: {
                live: '#',
                github: '#'
            },
            featured: false
        }
    ],

    // Experience & Education Data
    experience: [
        {
            id: 1,
            type: 'training',
            title: 'Full Stack Java Developer Training',
            company: 'Tap Academy',
            location: 'Bangalore, India',
            duration: '2025 - Present',
            description: 'Comprehensive training in full stack Java development including Spring Framework, Hibernate, REST APIs, frontend technologies, and database management.',
            skills: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'HTML/CSS', 'JavaScript', 'REST APIs'],
            current: true
        },
        {
            id: 2,
            type: 'education',
            title: 'Bachelor of Technology',
            company: 'Engineering College',
            location: 'India',
            duration: '2022 - 2025',
            description: 'Strong foundation in computer science fundamentals, programming concepts, data structures, algorithms, and software engineering principles.',
            skills: ['Programming Fundamentals', 'Data Structures', 'Algorithms', 'Database Systems', 'Software Engineering'],
            current: false
        },
        {
            id: 3,
            type: 'project',
            title: 'Salesforce Developer Virtual Internship',
            company: 'Salesforce',
            location: 'Remote',
            duration: '2023 - 2024',
            description: 'Completed a Salesforce Developer Virtual Internship, where I learned to build and customize CRM solutions on Salesforce. Worked on creating custom objects, Apex triggers, and Lightning components, as well as designing workflows and automation processes. Enhanced my skills in problem-solving, cloud platforms, and delivering business-focused solutions.',
            skills: ['Salesforce', 'Apex', 'Lightning Components', 'CRM Solutions', 'Workflow Automation', 'Cloud Platforms'],
            current: false
        },
        {
            id: 4,
            type: 'project',
            title: 'Hand Gesture Detection',
            company: 'Personal Development',
            location: 'Remote',
            duration: '2024 - 2025',
            description: 'Developed a real-time hand gesture recognition system using Python, OpenCV, and ML and Implemented machine learning algorithms to classify gestures with 90% accuracy',
            skills: ['Python', 'Machine Learning', 'OpenCV', 'Data Analysis', 'Computer Vision'],
            current: false

        }
    ],

    // Skills Data
    skills: [
        {
            id: 1,
            name: 'Java',
            icon: 'fab fa-java',
            level: 85,
            category: 'backend'
        },
        {
            id: 2,
            name: 'Spring Boot',
            icon: 'fas fa-leaf',
            level: 80,
            category: 'backend'
        },
        {
            id: 3,
            name: 'HTML5',
            icon: 'fab fa-html5',
            level: 90,
            category: 'frontend'
        },
        {
            id: 4,
            name: 'CSS3',
            icon: 'fab fa-css3-alt',
            level: 85,
            category: 'frontend'
        },
        {
            id: 5,
            name: 'JavaScript',
            icon: 'fab fa-js-square',
            level: 80,
            category: 'frontend'
        },
        {
            id: 6,
            name: 'MySQL',
            icon: 'fas fa-database',
            level: 75,
            category: 'database'
        },
        {
            id: 7,
            name: 'Python',
            icon: 'fab fa-python',
            level: 70,
            category: 'backend'
        },
        {
            id: 8,
            name: 'Git',
            icon: 'fab fa-git-alt',
            level: 75,
            category: 'tools'
        },
        {
            id: 9,
            name: 'REST APIs',
            icon: 'fas fa-exchange-alt',
            level: 80,
            category: 'backend'
        },
        {
            id: 10,
            name: 'Responsive Design',
            icon: 'fas fa-mobile-alt',
            level: 85,
            category: 'frontend'
        }
    ],

    // Contact Information
    contact: {
        personal: {
            name: 'Sai Durga Rao Chintalapudi',
            title: 'Full Stack Java Developer',
            email: 'saidurgaraochintalapudi@gmail.com',
            phone: '+91 9346148766',
            location: 'India',
            availability: 'Available for opportunities'
        },
        social: [
            {
                id: 1,
                name: 'LinkedIn',
                icon: 'fab fa-linkedin',
                url: 'https://linkedin.com/in/saidurgarao',
                username: '@saidurgarao'
            },
            {
                id: 2,
                name: 'GitHub',
                icon: 'fab fa-github',
                url: 'https://github.com/saidurgarao',
                username: '@saidurgarao'
            },
            {
                id: 3,
                name: 'Twitter',
                icon: 'fab fa-twitter',
                url: 'https://twitter.com/saidurgarao',
                username: '@saidurgarao'
            },
            {
                id: 4,
                name: 'Instagram',
                icon: 'fab fa-instagram',
                url: 'https://instagram.com/saidurgarao',
                username: '@saidurgarao'
            }
        ],
        resume: {
            url: 'https://drive.google.com/file/d/1LBzUSCG4KXpsVgy6GGkEl1jPqp9vy5UD/view?usp=drive_link',
            filename: 'Sai_Durga_Rao_Resume.pdf'
        }
    }
};

