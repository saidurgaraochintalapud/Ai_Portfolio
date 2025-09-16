// Portfolio Main JavaScript

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    console.log(`${APP_CONFIG.name} v${APP_CONFIG.version} loaded successfully!`);
    initializeApp();
});

// Initialize Application
function initializeApp() {
    console.log('Initializing Portfolio...');
    
    // Hide loader after page loads
    setTimeout(hideLoader, 1500);
    
    // Render dynamic content
    renderProjects();
    renderExperience();
    renderSkills();
    renderContactInfo();
    
    // Setup all functionality
    setupEventListeners();
    initializeTypingEffect();
    initializeScrollAnimations();
    initializeSkillBars();
    initializeNavbar();
    initializeSmoothScrolling();
    initializeNavbarHighlighting();
    initializeAdvancedAnimations();
    initializeScrollProgress();
}

// Hide Loader with Enhanced Animation
function hideLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
        // Add fade out animation
        loader.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        loader.style.opacity = '0';
        loader.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            loader.style.display = 'none';
            // Trigger entrance animations for main content
            triggerEntranceAnimations();
        }, 800);
    }
}

// Trigger entrance animations after loader disappears
function triggerEntranceAnimations() {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.classList.add('animate-in');
    }
}

// Enhanced Typing Effect
function initializeTypingEffect() {
    const typingText = document.getElementById('typing-text');
    const texts = [
        'Full Stack Java Developer',
        'Backend Developer',
        'Frontend Developer',
        'Problem Solver',
        'Tech Enthusiast',
        'AI Enthusiast',
        'Code Craftsman'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        // Add blinking cursor effect
        typingText.style.borderRight = '2px solid #667eea';
        
        let typeSpeed = isDeleting ? 30 : 80; // Faster typing
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 1500; // Shorter pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 300; // Shorter pause before next text
        }
        
        setTimeout(typeEffect, typeSpeed);
    }
    
    if (typingText) {
        // Start typing effect after a short delay
        setTimeout(typeEffect, 1000);
    }
}

// Navbar Scroll Effect
function initializeNavbar() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.15)';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.1)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    });
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Smooth scroll for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Trigger skill bars animation
                if (entry.target.classList.contains('skills')) {
                    animateSkillBars();
                }
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });
    
    // Observe cards
    document.querySelectorAll('.project-card, .skill-card, .timeline-content, .contact-item').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// Skill Bars Animation
function initializeSkillBars() {
    // This will be triggered by scroll animation
}

function animateSkillBars() {
    document.querySelectorAll('.progress-bar').forEach(bar => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = width + '%';
        }, 200);
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Contact form submission
    const contactForm = document.querySelector('.form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Smooth scroll for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add hover effects for project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    console.log('Event listeners setup complete');
}

// Contact Form Handler
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name') || e.target.querySelector('input[placeholder="Your Name"]').value;
    const email = formData.get('email') || e.target.querySelector('input[placeholder="Your Email"]').value;
    const subject = formData.get('subject') || e.target.querySelector('input[placeholder="Subject"]').value;
    const message = formData.get('message') || e.target.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    // Simulate form submission
    showMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
    e.target.reset();
}

// Utility Functions
function showMessage(message, type = 'info') {
    // Create a toast notification
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    // Style the toast
    Object.assign(toast.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 2rem',
        borderRadius: '10px',
        color: 'white',
        fontWeight: '600',
        zIndex: '10000',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease',
        background: type === 'success' ? 
            'linear-gradient(45deg, #28a745, #20c997)' : 
            'linear-gradient(45deg, #dc3545, #fd7e14)'
    });
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

function handleError(error) {
    console.error('Error occurred:', error);
    showMessage(MESSAGES.ERROR_GENERIC, 'error');
}

// Particles Effect (Optional Enhancement)
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Add CSS for particles animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.5; }
        50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
    }
    
    .hero-particles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
    }
`;
document.head.appendChild(style);

// Initialize particles
setTimeout(createParticles, 1000);

// ===== PHASE 5: ANIMATIONS & INTERACTIVITY =====

// Smooth Scrolling Implementation
function initializeSmoothScrolling() {
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar Highlighting Based on Current Section
function initializeNavbarHighlighting() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveNavLink() {
        let current = '';
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Update on scroll with throttling
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateActiveNavLink();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Initial call
    updateActiveNavLink();
}

// Advanced Animations and Interactions
function initializeAdvancedAnimations() {
    // Enhanced scroll animations with stagger effect
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Stagger animations for child elements
                const children = entry.target.querySelectorAll('.project-card, .skill-card, .timeline-item, .contact-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-in-stagger');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe all sections for stagger animations
    document.querySelectorAll('section').forEach(section => {
        staggerObserver.observe(section);
    });
    
    // Enhanced hover effects for interactive elements
    initializeEnhancedHoverEffects();
    
    // Parallax effect for hero section
    initializeParallaxEffect();
}

// Enhanced Hover Effects
function initializeEnhancedHoverEffects() {
    // Project cards with 3D tilt effect
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            this.style.transform = 'translateY(-15px) rotateX(5deg) rotateY(5deg) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.3)';
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mouseleave', function(e) {
            this.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        });
        
        // Mouse move effect for subtle tilt
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `translateY(-15px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
    });
    
    // Button hover effects
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.4)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.2)';
        });
    });
    
    // Social links pulse effect
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 0.6s ease-in-out';
        });
        
        link.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });
}

// Parallax Effect for Hero Section
function initializeParallaxEffect() {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const codeEditor = document.querySelector('.code-editor');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        const rate2 = scrolled * -0.3;
        
        if (heroContent) {
            heroContent.style.transform = `translateY(${rate}px)`;
        }
        if (codeEditor) {
            codeEditor.style.transform = `translateY(${rate2}px)`;
        }
    });
}

// Scroll Progress Indicator
function initializeScrollProgress() {
    const scrollIndicator = document.getElementById('scroll-indicator');
    
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        
        if (scrollIndicator) {
            scrollIndicator.style.width = scrollPercent + '%';
        }
    });
}

// ===== DYNAMIC CONTENT RENDERING FUNCTIONS =====

// Render Projects Section
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid || !PORTFOLIO_DATA.projects) return;
    
    // Clear existing content
    projectsGrid.innerHTML = '';
    
    // Filter featured projects or show all
    const projectsToShow = PORTFOLIO_DATA.projects.filter(project => project.featured);
    
    projectsToShow.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card glass-effect';
        
        projectCard.innerHTML = `
            <div class="project-image">
                <div class="project-placeholder">
                    <i class="${project.image}"></i>
                </div>
                <div class="project-overlay">
                    <div class="project-links">
                        <a href="${project.links.live}" class="project-link" target="_blank">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                        <a href="${project.links.github}" class="project-link" target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    console.log(`Rendered ${projectsToShow.length} projects`);
}

// Render Experience Section
function renderExperience() {
    const timeline = document.querySelector('.timeline');
    if (!timeline || !PORTFOLIO_DATA.experience) return;
    
    // Clear existing content
    timeline.innerHTML = '';
    
    PORTFOLIO_DATA.experience.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        // Determine icon based on type
        let icon = 'fas fa-briefcase';
        if (item.type === 'education') icon = 'fas fa-graduation-cap';
        if (item.type === 'training') icon = 'fas fa-code';
        if (item.type === 'project') icon = 'fas fa-project-diagram';
        
        timelineItem.innerHTML = `
            <div class="timeline-dot">
                <i class="${icon}"></i>
            </div>
            <div class="timeline-content glass-effect">
                <div class="timeline-date">${item.duration}</div>
                <h3 class="timeline-title">${item.title}</h3>
                <h4 class="timeline-company">${item.company}</h4>
                ${item.location ? `<div class="timeline-location"><i class="fas fa-map-marker-alt"></i> ${item.location}</div>` : ''}
                <p class="timeline-description">${item.description}</p>
                ${item.skills ? `
                    <div class="timeline-skills">
                        <strong>Key Skills:</strong>
                        <div class="skills-tags">
                            ${item.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                        </div>
                    </div>
                ` : ''}
                ${item.current ? '<div class="timeline-current"><i class="fas fa-circle"></i> Current</div>' : ''}
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
    
    console.log(`Rendered ${PORTFOLIO_DATA.experience.length} experience items`);
}

// Render Skills Section
function renderSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid || !PORTFOLIO_DATA.skills) return;
    
    // Clear existing content
    skillsGrid.innerHTML = '';
    
    PORTFOLIO_DATA.skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card glass-effect';
        
        skillCard.innerHTML = `
            <div class="skill-icon">
                <i class="${skill.icon}"></i>
            </div>
            <h3 class="skill-name">${skill.name}</h3>
            <div class="skill-progress">
                <div class="progress-bar" data-width="${skill.level}"></div>
                <span class="skill-percentage">${skill.level}%</span>
            </div>
            <div class="skill-category">${skill.category}</div>
        `;
        
        skillsGrid.appendChild(skillCard);
    });
    
    console.log(`Rendered ${PORTFOLIO_DATA.skills.length} skills`);
}

// Render Contact Information
function renderContactInfo() {
    const contactInfo = document.querySelector('.contact-info');
    if (!contactInfo || !PORTFOLIO_DATA.contact) return;
    
    const { personal, social, resume } = PORTFOLIO_DATA.contact;
    
    // Clear existing content
    contactInfo.innerHTML = '';
    
    // Render personal contact items
    const emailItem = document.createElement('div');
    emailItem.className = 'contact-item glass-effect';
    emailItem.innerHTML = `
        <div class="contact-icon">
            <i class="fas fa-envelope"></i>
        </div>
        <div class="contact-details">
            <h3>Email</h3>
            <p>${personal.email}</p>
        </div>
    `;
    contactInfo.appendChild(emailItem);
    
    const phoneItem = document.createElement('div');
    phoneItem.className = 'contact-item glass-effect';
    phoneItem.innerHTML = `
        <div class="contact-icon">
            <i class="fas fa-phone"></i>
        </div>
        <div class="contact-details">
            <h3>Phone</h3>
            <p>${personal.phone}</p>
        </div>
    `;
    contactInfo.appendChild(phoneItem);
    
    const locationItem = document.createElement('div');
    locationItem.className = 'contact-item glass-effect';
    locationItem.innerHTML = `
        <div class="contact-icon">
            <i class="fas fa-map-marker-alt"></i>
        </div>
        <div class="contact-details">
            <h3>Location</h3>
            <p>${personal.location}</p>
        </div>
    `;
    contactInfo.appendChild(locationItem);
    
    // Render social links
    const socialLinks = document.createElement('div');
    socialLinks.className = 'social-links';
    
    social.forEach(link => {
        const socialLink = document.createElement('a');
        socialLink.href = link.url;
        socialLink.target = '_blank';
        socialLink.className = 'social-link glass-effect';
        socialLink.innerHTML = `<i class="${link.icon}"></i>`;
        socialLink.title = link.name;
        socialLinks.appendChild(socialLink);
    });
    
    contactInfo.appendChild(socialLinks);
    
    // Update resume link if it exists
    const resumeBtn = document.querySelector('a[href*="drive.google.com"]');
    if (resumeBtn && resume.url) {
        resumeBtn.href = resume.url;
    }
    
    console.log('Rendered contact information');
}
