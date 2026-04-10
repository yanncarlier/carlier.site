// ========================================
// Yann Carlier - Landing Page Interactions
// ========================================

// ========================================
// Internationalization (i18n)
// ========================================

const translations = {
    en: {
        nav: {
            about: 'About',
            skills: 'Skills',
            cta: "Let's Talk"
        },
        hero: {
            title1: 'Founder',
            title2: '& Product Engineer',
            subtitle1: 'Building ',
            highlight1: 'Mobile Apps',
            subtitle2: ', ',
            highlight2: 'SaaS solutions',
            subtitle3: ' and ',
            highlight3: 'AI Systems',
            subtitle4: ' that scale.',
            subtitle5: 'From concept to launch, Transforming Ideas into Products.',
            cta: 'Get in Touch'
        },
        about: {
            tag: 'About Me',
            title: 'Building products that matter',
            text1: "I'm a founder and full-stack developer passionate about creating impactful products. With expertise spanning from mobile development, SaaS, AI Systems & Systems Architecture, I help startups and businesses bring their visions to life.",
            text2: "Whether it's a native mobile app, an AI system, a cross-platform solution, or a scalable SaaS platform, I approach every project with a focus on user experience, performance, and business goals.",
            value1: { title: 'Fast Execution', desc: 'Rapid prototyping and iterative development to get your product to market quickly.' },
            value2: { title: 'End-to-End', desc: 'From design to deployment, I handle every aspect of product development.' },
            value3: { title: 'Quality First', desc: 'Clean code, thoughtful UX, and scalable architecture in every project.' }
        },
        skills: {
            tag: 'Expertise',
            title: 'Technologies I work with',
            mobile: 'Mobile Development',
            web: 'Web & SaaS',
            design: 'Design & Product',
            ai: 'AI Systems',
            infra: 'Infrastructure Architect'
        },
        contact: {
            tag: 'Get In Touch',
            title: "Let's build something amazing together",
            text: "Have a project in mind? Looking for a technical partner? I'd love to hear about it. Let's discuss how we can bring your vision to life."
        },
        footer: {
            tagline: 'Building products that make a difference.',
            about: 'About',
            skills: 'Skills',
            contact: 'Contact',
            copyright: '© 2026 Yann Carlier. All rights reserved.',
            crafted: 'Crafted with passion'
        }
    },
    pt: {
        nav: {
            about: 'Sobre',
            skills: 'Habilidades',
            cta: 'Vamos Conversar'
        },
        hero: {
            title1: 'Fundador',
            title2: '& Engenheiro de Produto',
            subtitle1: 'Construindo ',
            highlight1: 'Apps Mobile',
            subtitle2: ', ',
            highlight2: 'soluções SaaS',
            subtitle3: ' e ',
            highlight3: 'Sistemas de IA',
            subtitle4: ' que escalam.',
            subtitle5: 'Do conceito ao lançamento, Transformando Ideias em Produtos.',
            cta: 'Entre em Contato'
        },
        about: {
            tag: 'Sobre Mim',
            title: 'Construindo produtos que importam',
            text1: 'Sou fundador e desenvolvedor full-stack apaixonado por criar produtos impactantes. Com expertise que abrange desenvolvimento mobile, SaaS, Sistemas de IA e Arquitetura de Sistemas, ajudo startups e empresas a realizarem suas visões.',
            text2: 'Seja um aplicativo mobile nativo, um sistema de IA, uma solução multiplataforma ou uma plataforma SaaS escalável, abordo cada projeto com foco na experiência do usuário, performance e objetivos de negócio.',
            value1: { title: 'Execução Rápida', desc: 'Prototipagem rápida e desenvolvimento iterativo para levar seu produto ao mercado rapidamente.' },
            value2: { title: 'Ponta a Ponta', desc: 'Do design ao deployment, cuido de cada aspecto do desenvolvimento de produtos.' },
            value3: { title: 'Qualidade Primeiro', desc: 'Código limpo, UX bem pensada e arquitetura escalável em cada projeto.' }
        },
        skills: {
            tag: 'Expertise',
            title: 'Tecnologias com as quais trabalho',
            mobile: 'Desenvolvimento Mobile',
            web: 'Web & SaaS',
            design: 'Design & Produto',
            ai: 'Sistemas de IA',
            infra: 'Arquiteto de Infraestrutura'
        },
        contact: {
            tag: 'Entre em Contato',
            title: 'Vamos construir algo incrível juntos',
            text: 'Tem um projeto em mente? Procurando um parceiro técnico? Adoraria ouvir sobre isso. Vamos discutir como podemos realizar sua visão.'
        },
        footer: {
            tagline: 'Construindo produtos que fazem a diferença.',
            about: 'Sobre',
            skills: 'Habilidades',
            contact: 'Contato',
            copyright: '© 2026 Yann Carlier. Todos os direitos reservados.',
            crafted: 'Criado com paixão'
        }
    },
    es: {
        nav: {
            about: 'Sobre',
            skills: 'Habilidades',
            cta: 'Hablemos'
        },
        hero: {
            title1: 'Fundador',
            title2: '& Ingeniero de Producto',
            subtitle1: 'Construyendo ',
            highlight1: 'Apps Móviles',
            subtitle2: ', ',
            highlight2: 'soluciones SaaS',
            subtitle3: ' y ',
            highlight3: 'Sistemas de IA',
            subtitle4: ' que escalan.',
            subtitle5: 'Del concepto al lanzamiento, Transformando Ideas en Productos.',
            cta: 'Ponte en Contacto'
        },
        about: {
            tag: 'Sobre Mí',
            title: 'Construyendo productos que importan',
            text1: 'Soy fundador y desarrollador full-stack apasionado por crear productos impactantes. Con experiencia que abarca desde desarrollo móvil, SaaS, Sistemas de IA y Arquitectura de Sistemas, ayudo a startups y empresas a hacer realidad sus visiones.',
            text2: 'Ya sea una aplicación móvil nativa, un sistema de IA, una solución multiplataforma o una plataforma SaaS escalable, abordo cada proyecto con enfoque en la experiencia del usuario, rendimiento y objetivos de negocio.',
            value1: { title: 'Ejecución Rápida', desc: 'Prototipado rápido y desarrollo iterativo para llevar tu producto al mercado rápidamente.' },
            value2: { title: 'De Principio a Fin', desc: 'Del diseño al deployment, manejo cada aspecto del desarrollo de productos.' },
            value3: { title: 'Calidad Primero', desc: 'Código limpio, UX bien pensada y arquitectura escalable en cada proyecto.' }
        },
        skills: {
            tag: 'Experiencia',
            title: 'Tecnologías con las que trabajo',
            mobile: 'Desarrollo Móvil',
            web: 'Web & SaaS',
            design: 'Diseño & Producto',
            ai: 'Sistemas de IA',
            infra: 'Arquitecto de Infraestructura'
        },
        contact: {
            tag: 'Ponte en Contacto',
            title: 'Construyamos algo increíble juntos',
            text: '¿Tienes un proyecto en mente? ¿Buscas un socio técnico? Me encantaría saber de ello. Discutamos cómo podemos hacer realidad tu visión.'
        },
        footer: {
            tagline: 'Construyendo productos que marcan la diferencia.',
            about: 'Sobre',
            skills: 'Habilidades',
            contact: 'Contacto',
            copyright: '© 2026 Yann Carlier. Todos los derechos reservados.',
            crafted: 'Creado con pasión'
        }
    },
    fr: {
        nav: {
            about: 'À Propos',
            skills: 'Compétences',
            cta: 'Discutons'
        },
        hero: {
            title1: 'Fondateur',
            title2: '& Ingénieur Produit',
            subtitle1: 'Construire des ',
            highlight1: 'Apps Mobiles',
            subtitle2: ', des ',
            highlight2: 'solutions SaaS',
            subtitle3: ' et des ',
            highlight3: 'Systèmes IA',
            subtitle4: ' qui passent à l\'échelle.',
            subtitle5: 'Du concept au lancement, Transformer les Idées en Produits.',
            cta: 'Prenez Contact'
        },
        about: {
            tag: 'À Propos de Moi',
            title: 'Construire des produits qui comptent',
            text1: 'Je suis fondateur et développeur full-stack passionné par la création de produits impactants. Avec une expertise couvrant le développement mobile, le SaaS, les Systèmes d\'IA et l\'Architecture Système, j\'aide les startups et les entreprises à réaliser leurs visions.',
            text2: 'Qu\'il s\'agisse d\'une application mobile native, d\'un système d\'IA, d\'une solution multiplateforme ou d\'une plateforme SaaS scalable, j\'aborde chaque projet avec un focus sur l\'expérience utilisateur, la performance et les objectifs business.',
            value1: { title: 'Exécution Rapide', desc: 'Prototypage rapide et développement itératif pour mettre votre produit sur le marché rapidement.' },
            value2: { title: 'De A à Z', desc: 'Du design au déploiement, je gère chaque aspect du développement produit.' },
            value3: { title: 'Qualité d\'Abord', desc: 'Code propre, UX réfléchie et architecture scalable dans chaque projet.' }
        },
        skills: {
            tag: 'Expertise',
            title: 'Technologies avec lesquelles je travaille',
            mobile: 'Développement Mobile',
            web: 'Web & SaaS',
            design: 'Design & Produit',
            ai: 'Systèmes d\'IA',
            infra: 'Architecte Infrastructure'
        },
        contact: {
            tag: 'Prenez Contact',
            title: 'Construisons quelque chose d\'incroyable ensemble',
            text: 'Vous avez un projet en tête ? Vous cherchez un partenaire technique ? J\'adorerais en entendre parler. Discutons de la façon dont nous pouvons concrétiser votre vision.'
        },
        footer: {
            tagline: 'Construire des produits qui font la différence.',
            about: 'À Propos',
            skills: 'Compétences',
            contact: 'Contact',
            copyright: '© 2026 Yann Carlier. Tous droits réservés.',
            crafted: 'Conçu avec passion'
        }
    },
    'zh-TW': {
        nav: {
            about: '關於',
            skills: '技能',
            cta: '聯繫我'
        },
        hero: {
            title1: '創辦人',
            title2: '兼產品工程師',
            subtitle1: '構建',
            highlight1: '移動應用',
            subtitle2: '、',
            highlight2: 'SaaS 解決方案',
            subtitle3: '和',
            highlight3: 'AI 系統',
            subtitle4: '，實現規模化。',
            subtitle5: '從概念到發布，將創意轉化為產品。',
            cta: '聯繫我'
        },
        about: {
            tag: '關於我',
            title: '構建有價值的產品',
            text1: '我是一名創辦人兼全端開發者，熱衷於創造有影響力的產品。憑藉從移動開發、SaaS、AI 系統到系統架構的專業知識，我幫助初創企業和公司實現他們的願景。',
            text2: '無論是原生移動應用、AI 系統、跨平台解決方案還是可擴展的 SaaS 平台，我以用戶體驗、性能和業務目標為重點來處理每個項目。',
            value1: { title: '快速執行', desc: '快速原型設計和迭代開發，讓您的產品快速進入市場。' },
            value2: { title: '端到端', desc: '從設計到部署，我處理產品開發的各個方面。' },
            value3: { title: '品質優先', desc: '每個項目都注重清晰的代碼、周到的 UX 和可擴展的架構。' }
        },
        skills: {
            tag: '專業領域',
            title: '我使用的技術',
            mobile: '移動開發',
            web: '網頁與 SaaS',
            design: '設計與產品',
            ai: 'AI 系統',
            infra: '基礎設施架構師'
        },
        contact: {
            tag: '聯繫我',
            title: '讓我們一起構建驚人的產品',
            text: '有項目想法？正在尋找技術合作夥伴？我很樂意聽取您的想法。讓我們討論如何實現您的願景。'
        },
        footer: {
            tagline: '構建改變世界的產品。',
            about: '關於',
            skills: '技能',
            contact: '聯繫',
            copyright: '© 2026 Yann Carlier. 版權所有。',
            crafted: '用心打造'
        }
    },
    'zh-CN': {
        nav: {
            about: '关于',
            skills: '技能',
            cta: '联系我'
        },
        hero: {
            title1: '创始人',
            title2: '兼产品工程师',
            subtitle1: '构建',
            highlight1: '移动应用',
            subtitle2: '、',
            highlight2: 'SaaS 解决方案',
            subtitle3: '和',
            highlight3: 'AI 系统',
            subtitle4: '，实现规模化。',
            subtitle5: '从概念到发布，将创意转化为产品。',
            cta: '联系我'
        },
        about: {
            tag: '关于我',
            title: '构建有价值的产品',
            text1: '我是一名创始人兼全栈开发者，热衷于创造有影响力的产品。凭借从移动开发、SaaS、AI 系统到系统架构的专业知识，我帮助初创企业和公司实现他们的愿景。',
            text2: '无论是原生移动应用、AI 系统、跨平台解决方案还是可扩展的 SaaS 平台，我以用户体验、性能和业务目标为重点来处理每个项目。',
            value1: { title: '快速执行', desc: '快速原型设计和迭代开发，让您的产品快速进入市场。' },
            value2: { title: '端到端', desc: '从设计到部署，我处理产品开发的各个方面。' },
            value3: { title: '品质优先', desc: '每个项目都注重清晰的代码、周到的 UX 和可扩展的架构。' }
        },
        skills: {
            tag: '专业领域',
            title: '我使用的技术',
            mobile: '移动开发',
            web: '网页与 SaaS',
            design: '设计与产品',
            ai: 'AI 系统',
            infra: '基础设施架构师'
        },
        contact: {
            tag: '联系我',
            title: '让我们一起构建惊人的产品',
            text: '有项目想法？正在寻找技术合作伙伴？我很乐意听取您的想法。让我们讨论如何实现您的愿景。'
        },
        footer: {
            tagline: '构建改变世界的产品。',
            about: '关于',
            skills: '技能',
            contact: '联系',
            copyright: '© 2026 Yann Carlier. 版权所有。',
            crafted: '用心打造'
        }
    }
};

// Language labels for the switcher
const langLabels = {
    en: 'EN',
    pt: 'PT',
    es: 'ES',
    fr: 'FR',
    'zh-TW': '繁中',
    'zh-CN': '简中'
};

// ========================================
// i18n Functions
// ========================================

function getStoredLanguage() {
    return localStorage.getItem('preferred-language') || 'en';
}

function setStoredLanguage(lang) {
    localStorage.setItem('preferred-language', lang);
}

function updateContent(lang) {
    const t = translations[lang];
    if (!t) return;

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = t;
        
        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                value = undefined;
                break;
            }
        }
        
        if (value !== undefined) {
            el.textContent = value;
        }
    });

    // Update language switcher UI
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    const currentLangEl = document.querySelector('.current-lang');
    if (currentLangEl) {
        currentLangEl.textContent = langLabels[lang];
    }
}

function initLanguageSwitcher() {
    const langSwitcher = document.querySelector('.language-switcher');
    const langToggle = document.querySelector('.lang-toggle');
    const langOptions = document.querySelectorAll('.lang-option');

    if (!langSwitcher || !langToggle) return;

    // Toggle dropdown
    langToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        langSwitcher.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        langSwitcher.classList.remove('active');
    });

    // Language selection
    langOptions.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setStoredLanguage(lang);
            updateContent(lang);
            langSwitcher.classList.remove('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize language
    const preferredLang = getStoredLanguage();
    updateContent(preferredLang);
    initLanguageSwitcher();

    // ========================================
    // Navigation Scroll Effect
    // ========================================
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // ========================================
    // Mobile Menu Toggle
    // ========================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // ========================================
    // Smooth Scroll for Navigation Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // Scroll Reveal Animations
    // ========================================
    const revealElements = document.querySelectorAll(
        '.section-header, .about-content, .about-visual, .skill-category, .project-card, .contact-content, .contact-form-wrapper'
    );

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal', 'active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    // ========================================
    // Parallax Effect for Gradient Orbs
    // ========================================
    const orbs = document.querySelectorAll('.gradient-orb');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        orbs.forEach((orb, index) => {
            const speed = 0.3 + (index * 0.1);
            const yPos = -(scrolled * speed);
            orb.style.transform = `translateY(${yPos}px)`;
        });
    });

    // ========================================
    // Contact Form Handling
    // ========================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show success message
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = `
                <span>Message Sent!</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 6L9 17l-5-5"/>
                </svg>
            `;
            submitBtn.style.background = 'linear-gradient(135deg, #34d399, #10b981)';
            
            // Reset form
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
            }, 3000);
            
            // Log form data (replace with actual submission)
            console.log('Form submitted:', data);
        });
    }

    // ========================================
    // Counter Animation for Stats
    // ========================================
    const stats = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element) => {
        const text = element.textContent;
        const numericPart = parseInt(text.replace(/[^0-9]/g, ''));
        const suffix = text.replace(/[0-9]/g, '');
        
        if (isNaN(numericPart)) return;
        
        const duration = 2000;
        const step = timestamp => {
            if (!element.dataset.startTime) {
                element.dataset.startTime = timestamp;
            }
            
            const progress = timestamp - element.dataset.startTime;
            const percentage = Math.min(progress / duration, 1);
            
            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
            const current = Math.floor(easeOutQuart * numericPart);
            
            element.textContent = current + suffix;
            
            if (percentage < 1) {
                requestAnimationFrame(step);
            } else {
                element.textContent = text;
            }
        };
        
        requestAnimationFrame(step);
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => {
        statsObserver.observe(stat);
    });

    // ========================================
    // Typing Effect for Code Block
    // ========================================
    const codeContent = document.querySelector('.code-content code');
    
    if (codeContent) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add a subtle animation when code block comes into view
                    entry.target.parentElement.style.animation = 'fadeInUp 0.8s ease-out';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(codeContent);
    }

    // ========================================
    // Hover Effects Enhancement
    // ========================================
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // ========================================
    // Keyboard Navigation
    // ========================================
    document.addEventListener('keydown', (e) => {
        // Close mobile menu on Escape
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // ========================================
    // Prefers Reduced Motion
    // ========================================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Disable parallax and complex animations
        orbs.forEach(orb => {
            orb.style.animation = 'none';
        });
        
        document.querySelectorAll('.scroll-indicator').forEach(el => {
            el.style.display = 'none';
        });
    }
});

// ========================================
// Utility Functions
// ========================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
