// ========================================
// Carlier - Landing Page Interactions
// ========================================

// ========================================
// Internationalization (i18n)
// ========================================

const translations = {
    en: {
        nav: {
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            cta: "Let's Talk"
        },
        hero: {
            title1: 'From concept to launch, Transforming Ideas into Products.',
            title2: '',
            subtitle1: 'Building ',
            highlight1: 'Mobile Apps',
            subtitle2: ', ',
            highlight2: 'SaaS solutions',
            subtitle3: ' and ',
            highlight3: 'AI Systems',
            subtitle4: ' that scale.',
            subtitle5: 'Building Mobile Apps, SaaS solutions and AI Systems that scale',
            cta: 'Get in Touch'
        },
        about: {
            tag: 'About Me',
            title: 'Building products that matter',
            text1: "I'm a founder and Software Engineer passionate about creating impactful products. With expertise spanning from mobile development, SaaS, AI Systems & Systems Architecture, I help startups and businesses bring their visions to life.",
            text2: "Whether it's a native mobile app, an AI system, a cross-platform solution, or a scalable SaaS platform, I approach every project with a focus on user experience, performance, and business goals.",
            value1: { title: 'Execution', desc: 'Rapid prototyping and iterative development to get your product to market quickly.' },
            value2: { title: 'End-to-End', desc: 'From design to deployment, I handle every aspect of product development.' },
            value3: { title: 'Quality', desc: 'Clean code, thoughtful UX, and scalable architecture in every project.' }
        },
        skills: {
            tag: 'Expertise',
            title: 'Technologies I work with',
            mobile: 'Mobile Development',
            web: 'Web & SaaS',
            business: 'Business Software Solutions',
            design: 'Design & Product',
            ai: 'AI Systems',
            infra: 'Infrastructure'
        },
        projects: {
            tag: 'Featured Work',
            title: "AI mobile Apps",
            view: 'Get the app',
            tags: {
                mobile: 'Mobile App',
                aiScanner: 'AI Scanner',
                aiTutor: 'AI Tutor'
            },
            coin: {
                title: 'Coin Identifier',
                desc: 'AI-powered coin scanner app for collectors. Instantly identify coins, estimate market values, check rarity, and catalog your collection.'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: 'Learn Chinese Cantonese, practice real conversations, and translate in real time with a live AI Chinese Cantonese teacher featuring voice chat, camera-based context, and instant translation support.'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: 'Learn Chinese Mandarin, practice real conversations, and translate in real time with a live AI Chinese Mandarin teacher featuring voice chat, camera-based context, and instant translation support.'
            },
            vchytel: {
                title: 'AI Agent Vchytel (not published yet)',
                desc: 'Learn Ukrainian, practice real conversations, and translate in real time with a live AI Ukrainian teacher featuring voice chat, camera-based context, and instant translation support.'
            },
            khru: {
                title: 'AI Agent Khru (not published yet)',
                desc: 'Learn Thai, practice real conversations, and translate in real time with a live AI Thai teacher featuring voice chat, camera-based context, and instant translation support.'
            }
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
            projects: 'Projects',
            contact: 'Contact',
            landing: {
                cantonese: 'Learn Cantonese',
                chinese: 'Learn Chinese',
                thai: 'Learn Thai',
                ukrainian: 'Learn Ukrainian'
            },
            copyright: '© 2026 Carlier. All rights reserved.',
            crafted: 'Crafted with passion'
        },
        accessibility: {
            skipToMain: 'Skip to main content'
        }
    },
    uk: {
        nav: {
            about: 'Про мене',
            skills: 'Навички',
            projects: 'Проєкти',
            cta: "Зв'язатися"
        },
        hero: {
            title1: 'Від ідеї до запуску, перетворюю ідеї на продукти.',
            title2: '',
            subtitle1: 'Створюю ',
            highlight1: 'Мобільні додатки',
            subtitle2: ', ',
            highlight2: 'SaaS рішення',
            subtitle3: ' та ',
            highlight3: 'ШІ системи',
            subtitle4: ' що масштабуються.',
            subtitle5: 'Створюю Мобільні додатки, SaaS рішення та ШІ системи, що масштабуються.',
            cta: 'Зв\'язатися'
        },
        about: {
            tag: 'Про мене',
            title: 'Створюю продукти, які мають значення',
            text1: "Я засновник і Software Engineer, який захоплюється створенням впливових продуктів. Маючи досвід від мобільної розробки, SaaS, ШІ систем до архітектури систем, я допомагаю стартапам і бізнесам втілювати їхні бачення.",
            text2: "Будь то нативний мобільний додаток, ШІ система, кросплатформне рішення або масштабована SaaS платформа, я підходжу до кожного проєкту з фокусом на користувацький досвід, продуктивність та бізнес-цілі.",
            value1: { title: 'Виконання', desc: 'Швидке прототипування та ітеративна розробка для швидкого виведення вашого продукту на ринок.' },
            value2: { title: 'Від і до', desc: 'Від дизайну до розгортання, я керую кожним аспектом розробки продукту.' },
            value3: { title: 'Якість', desc: 'Чистий код, продуманий UX і масштабована архітектура в кожному проєкті.' }
        },
        skills: {
            tag: 'Експертиза',
            title: 'Технології, з якими я працюю',
            mobile: 'Мобільна розробка',
            web: 'Web та SaaS',
            business: 'Рішення для бізнесу',
            design: 'Дизайн та продукт',
            ai: 'ШІ системи',
            infra: 'Інфраструктура'
        },
        projects: {
            tag: 'Вибрані роботи',
            title: "ШІ мобільні додатки",
            view: 'Завантажити додаток',
            tags: {
                mobile: 'Мобільний додаток',
                aiScanner: 'ШІ сканер',
                aiTutor: 'ШІ репетитор'
            },
            coin: {
                title: 'Coin Identifier',
                desc: 'Додаток-сканер монет на основі ШІ для колекціонерів. Миттєво ідентифікуйте монети, оцінюйте їхню ринкову вартість і каталогізуйте свою колекцію.'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: 'Спілкуйтесь і практикуйте кантонську в реальному часі з живим ШІ викладачем кантонської з природним голосовим чатом і контекстом на основі камери.'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: 'Практикуйте мандаринську в реальному часі з живим ШІ тренером мандаринської за допомогою голосу в реальному часі, практики під керівництвом зору та миттєвих виправлень.'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: 'Вчіть українську, практикуйте реальні розмови та перекладайте в реальному часі з живим ШІ-репетитором української з голосовим чатом, контекстом через камеру та миттєвим перекладом.'
            },
            khru: {
                title: 'AI Agent Khru (ще не опубліковано)',
                desc: 'Вчіть і практикуйте тайську в реальному часі з живим ШІ викладачем тайської за допомогою голосового чату, словника на основі камери та структурованих виправлень.'
            }
        },
        contact: {
            tag: 'Зв\'язатися',
            title: "Давайте створимо щось дивовижне разом",
            text: "Є ідея проєкту? Шукаєте технічного партнера? Я б із задоволенням почув про це. Давайте обговоримо, як ми можемо втілити ваше бачення."
        },
        footer: {
            tagline: 'Створюю продукти, які змінюють світ.',
            about: 'Про мене',
            skills: 'Навички',
            projects: 'Проєкти',
            contact: 'Контакти',
            landing: {
                cantonese: 'Вчитись кантонською',
                chinese: 'Вчитись китайською',
                thai: 'Вчитись тайською',
                ukrainian: 'Вчитись українською'
            },
            copyright: '© 2026 Carlier. Всі права захищені.',
            crafted: 'Створено з пристрастю'
        },
        accessibility: {
            skipToMain: 'Перейти до основного вмісту'
        }
    },
    th: {
        nav: {
            about: 'เกี่ยวกับ',
            skills: 'ทักษะ',
            projects: 'โปรเจกต์',
            cta: "ติดต่อเรา"
        },
        hero: {
            title1: 'จากแนวคิดสู่การเปิดตัว, เปลี่ยนไอเดียให้เป็นผลิตภัณฑ์.',
            title2: '',
            subtitle1: 'สร้าง ',
            highlight1: 'แอปพลิเคชันมือถือ',
            subtitle2: ', ',
            highlight2: 'โซลูชัน SaaS',
            subtitle3: ' และ ',
            highlight3: 'ระบบ AI',
            subtitle4: ' ที่สามารถปรับขนาดได้.',
            subtitle5: 'สร้างแอปพลิเคชันมือถือ, โซลูชัน SaaS และระบบ AI ที่สามารถปรับขนาดได้.',
            cta: 'ติดต่อเรา'
        },
        about: {
            tag: 'เกี่ยวกับฉัน',
            title: 'สร้างผลิตภัณฑ์ที่มีความหมาย',
            text1: "ฉันเป็นผู้ก่อตั้งและวิศวกรซอฟต์แวร์ที่หลงใหลในการสร้างผลิตภัณฑ์ที่มีผลกระทบ ด้วยความเชี่ยวชาญตั้งแต่การพัฒนาแอปมือถือ, SaaS, ระบบ AI ไปจนถึงสถาปัตยกรรมระบบ ฉันช่วยให้สตาร์ทอัพและธุรกิจต่างๆ บรรลุวิสัยทัศน์ของตน",
            text2: "ไม่ว่าจะเป็นแอปพลิเคชันมือถือแบบเนทีฟ, ระบบ AI, โซลูชันข้ามแพลตฟอร์ม หรือแพลตฟอร์ม SaaS ที่สามารถปรับขนาดได้ ฉันเข้าถึงแต่ละโปรเจกต์โดยให้ความสำคัญกับประสบการณ์ผู้ใช้ ประสิทธิภาพ และเป้าหมายทางธุรกิจ",
            value1: { title: 'การดำเนินการ', desc: 'การสร้างต้นแบบอย่างรวดเร็วและการพัฒนาแบบทำซ้ำเพื่อให้ผลิตภัณฑ์ของคุณออกสู่ตลาดได้อย่างรวดเร็ว.' },
            value2: { title: 'ครบวงจร', desc: 'ตั้งแต่การออกแบบจนถึงการปรับใช้ ฉันจัดการทุกแง่มุมของการพัฒนาผลิตภัณฑ์.' },
            value3: { title: 'คุณภาพ', desc: 'โค้ดที่สะอาด, UX ที่คิดมาอย่างดี และสถาปัตยกรรมที่สามารถปรับขนาดได้ในทุกโปรเจกต์.' }
        },
        skills: {
            tag: 'ความเชี่ยวชาญ',
            title: 'เทคโนโลยีที่ฉันทำงานด้วย',
            mobile: 'การพัฒนามือถือ',
            web: 'เว็บ & SaaS',
            business: 'โซลูชันซอฟต์แวร์ธุรกิจ',
            design: 'การออกแบบ & ผลิตภัณฑ์',
            ai: 'ระบบ AI',
            infra: 'โครงสร้างพื้นฐาน'
        },
        projects: {
            tag: 'ผลงานที่โดดเด่น',
            title: "แอปพลิเคชันมือถือ AI",
            view: 'ดาวน์โหลดแอป',
            tags: {
                mobile: 'แอปพลิเคชันมือถือ',
                aiScanner: 'AI สแกนเนอร์',
                aiTutor: 'AI ติวเตอร์'
            },
            coin: {
                title: 'Coin Identifier',
                desc: 'แอปพลิเคชันสแกนเหรียญด้วย AI สำหรับนักสะสม ระบุเหรียญได้ทันที, ประเมินมูลค่าตลาด และจัดหมวดหมู่คอลเล็กชันของคุณ.'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: 'พูดคุยและฝึกฝนภาษากวางตุ้งแบบเรียลไทม์กับครู AI ภาษากวางตุ้งสด พร้อมแชทด้วยเสียงที่เป็นธรรมชาติและบริบทที่อิงตามกล้อง.'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: 'ฝึกฝนภาษาจีนกลางแบบเรียลไทม์กับโค้ช AI ภาษาจีนกลางสด ด้วยเสียงแบบเรียลไทม์, การฝึกฝนที่ชี้นำด้วยการมองเห็น และการแก้ไขในทันที.'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: 'เรียนรู้ภาษายูเครน ฝึกสนทนาจริง และแปลแบบเรียลไทม์กับครู AI ยูเครนสด ด้วยแชทด้วยเสียง, บริบทจากกล้อง และการแปลทันที.'
            },
            khru: {
                title: 'AI Agent Khru (ยังไม่เผยแพร่)',
                desc: 'เรียนรู้และฝึกฝนภาษาไทยแบบเรียลไทม์กับครู AI ภาษาไทยสด ด้วยแชทด้วยเสียง, คำศัพท์ที่อิงตามกล้อง และการแก้ไขที่มีโครงสร้าง.'
            }
        },
        contact: {
            tag: 'ติดต่อเรา',
            title: "มาร่วมสร้างสิ่งที่น่าทึ่งด้วยกันเถอะ",
            text: "มีไอเดียโปรเจกต์? กำลังมองหาพาร์ทเนอร์ทางเทคนิค? ฉันอยากฟังความคิดของคุณ มาคุยกันว่าเราจะทำให้วิสัยทัศน์ของคุณเป็นจริงได้อย่างไร."
        },
        footer: {
            tagline: 'สร้างผลิตภัณฑ์ที่สร้างความแตกต่าง.',
            about: 'เกี่ยวกับ',
            skills: 'ทักษะ',
            projects: 'โปรเจกต์',
            contact: 'ติดต่อ',
            landing: {
                cantonese: 'เรียนภาษากวางตุ้ง',
                chinese: 'เรียนภาษาจีน',
                thai: 'เรียนภาษาไทย',
                ukrainian: 'เรียนภาษาอุโกครินะ'
            },
            copyright: '© 2026 Carlier. สงวนลิขสิทธิ์.',
            crafted: 'สร้างด้วยความหลงใหล'
        },
        accessibility: {
            skipToMain: 'ข้ามไปยังเนื้อหาหลัก'
        }
    },
    pt: {
        nav: {
            about: 'Sobre',
            skills: 'Competências',
            projects: 'Projetos',
            cta: 'Fale Comigo'
        },
        hero: {
            title1: 'Do conceito ao lançamento, Transformar Ideias em Produtos.',
            title2: '',
            subtitle1: 'A construir ',
            highlight1: 'Apps Móveis',
            subtitle2: ', ',
            highlight2: 'soluções SaaS',
            subtitle3: ' e ',
            highlight3: 'Sistemas de IA',
            subtitle4: ' que escalam.',
            subtitle5: 'A construir Apps Móveis, soluções SaaS e Sistemas de IA que escalam.',
            cta: 'Contacte-me'
        },
        about: {
            tag: 'Sobre Mim',
            title: 'A construir produtos que importam',
            text1: 'Sou fundador e Engenheiro de Software apaixonado por criar produtos impactantes. Com conhecimento especializado que abrange desenvolvimento móvel, SaaS, Sistemas de IA e Arquitetura de Sistemas, ajudo startups e empresas a realizarem as suas visões.',
            text2: 'Seja uma aplicação móvel nativa, um sistema de IA, uma solução multiplataforma ou uma plataforma SaaS escalável, abordo cada projeto com foco na experiência do utilizador, no desempenho e nos objetivos de negócio.',
            value1: { title: 'Execução', desc: 'Criação rápida de protótipos e desenvolvimento iterativo para levar o seu produto ao mercado rapidamente.' },
            value2: { title: 'De Ponta a Ponta', desc: 'Do design ao deployment, trato de cada aspeto do desenvolvimento de produtos.' },
            value3: { title: 'Qualidade', desc: 'Código limpo, UX bem pensada e arquitetura escalável em cada projeto.' }
        },
        skills: {
            tag: 'Especialização',
            title: 'Tecnologias com as quais trabalho',
            mobile: 'Desenvolvimento Móvel',
            web: 'Web & SaaS',
            business: 'Soluções de Software Empresarial',
            design: 'Design & Produto',
            ai: 'Sistemas de IA',
            infra: 'Infraestrutura'
        },
        projects: {
            tag: 'Trabalhos em Destaque',
            title: 'Apps móveis de IA',
            view: 'Obter a app',
            tags: {
                mobile: 'App Móvel',
                aiScanner: 'Scanner de IA',
                aiTutor: 'Tutor de IA'
            },
            coin: {
                title: 'Coin Identifier',
                desc: 'Aplicação de scanner de moedas com IA para colecionadores. Identifique moedas instantaneamente, estime valores de mercado e catalogue a sua coleção.'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: 'Fale e pratique cantonês em tempo real com um tutor de IA ao vivo com chat de voz natural e contexto de câmara.'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: 'Pratique mandarim em tempo real com um tutor de IA ao vivo com voz em tempo real, prática guiada por visão e correções instantâneas.'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: 'Aprenda ucraniano, pratique conversas reais e traduza em tempo real com um tutor de IA ucraniano ao vivo, com chat de voz, contexto baseado em câmara e tradução instantânea.'
            },
            khru: {
                title: 'AI Agent Khru (ainda não publicado)',
                desc: 'Aprenda e pratique tailandês em tempo real com um tutor de IA ao vivo com chat de voz, vocabulário baseado em câmara e correções estruturadas.'
            }
        },
        contact: {
            tag: 'Contacte-me',
            title: 'Vamos construir algo incrível juntos',
            text: 'Tem um projeto em mente? À procura de um parceiro técnico? Gostaria muito de ouvir falar sobre isso. Vamos discutir como podemos concretizar a sua visão.'
        },
        footer: {
            tagline: 'A construir produtos que fazem a diferença.',
            about: 'Sobre',
            skills: 'Competências',
            projects: 'Projetos',
            contact: 'Contacto',
            landing: {
                cantonese: 'Aprender Cantones',
                chinese: 'Aprender Chinês',
                thai: 'Aprender Tailandês',
                ukrainian: 'Aprender Ucraniano'
            },
            copyright: '© 2026 Carlier. Todos os direitos reservados.',
            crafted: 'Criado com paixão'
        },
        accessibility: {
            skipToMain: 'Saltar para o conteúdo principal'
        }
    },
    es: {
        nav: {
            about: 'Sobre',
            skills: 'Habilidades',
            projects: 'Proyectos',
            cta: 'Hablemos'
        },
        hero: {
            title1: 'Del concepto al lanzamiento, Transformando Ideas en Productos.',
            title2: '',
            subtitle1: 'Construyendo ',
            highlight1: 'Apps Móviles',
            subtitle2: ', ',
            highlight2: 'soluciones SaaS',
            subtitle3: ' y ',
            highlight3: 'Sistemas de IA',
            subtitle4: ' que escalan.',
            subtitle5: 'Construyendo Apps Móviles, soluciones SaaS y Sistemas de IA que escalan.',
            cta: 'Ponte en Contacto'
        },
        about: {
            tag: 'Sobre Mí',
            title: 'Construyendo productos que importan',
            text1: 'Soy fundador e Ingeniero de Software apasionado por crear productos impactantes. Con experiencia que abarca desde desarrollo móvil, SaaS, Sistemas de IA y Arquitectura de Sistemas, ayudo a startups y empresas a hacer realidad sus visiones.',
            text2: 'Ya sea una aplicación móvil nativa, un sistema de IA, una solución multiplataforma o una plataforma SaaS escalable, abordo cada proyecto con enfoque en la experiencia del usuario, rendimiento y objetivos de negocio.',
            value1: { title: 'Ejecución', desc: 'Prototipado rápido y desarrollo iterativo para llevar tu producto al mercado rápidamente.' },
            value2: { title: 'De Principio a Fin', desc: 'Del diseño al deployment, manejo cada aspecto del desarrollo de productos.' },
            value3: { title: 'Calidad', desc: 'Código limpio, UX bien pensada y arquitectura escalable en cada proyecto.' }
        },
        skills: {
            tag: 'Experiencia',
            title: 'Tecnologías con las que trabajo',
            mobile: 'Desarrollo Móvil',
            web: 'Web & SaaS',
            business: 'Soluciones de Software Empresarial',
            design: 'Diseño & Producto',
            ai: 'Sistemas de IA',
            infra: 'Infraestructura'
        },
        projects: {
            tag: 'Trabajos Destacados',
            title: 'Apps móviles de IA',
            view: 'Obtener la app',
            tags: {
                mobile: 'App Móvil',
                aiScanner: 'Escáner de IA',
                aiTutor: 'Tutor de IA'
            },
            coin: {
                title: 'Coin Identifier',
                desc: 'Aplicación de escáner de monedas con IA para coleccionistas. Identifica monedas al instante, estima valores de mercado y cataloga tu colección.'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: 'Habla y practica cantonés en tiempo real con un tutor de IA en vivo con chat de voz natural y contexto de cámara.'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: 'Practica mandarín en tiempo real con un tutor de IA en vivo con voz en tiempo real, práctica guiada por visión y correcciones al instante.'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: 'Aprenda ucraniano, practique conversaciones reales y traduzca en tiempo real con un tutor de IA ucraniano en vivo con chat de voz, contexto basado en cámara y traducción instantánea.'
            },
            khru: {
                title: 'AI Agent Khru (aún no publicado)',
                desc: 'Aprende y practica tailandés en tiempo real con un tutor de IA en vivo con chat de voz, vocabulario basado en cámara y correcciones estructuradas.'
            }
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
            projects: 'Proyectos',
            contact: 'Contacto',
            landing: {
                cantonese: 'Aprender Cantones',
                chinese: 'Aprender Chino',
                thai: 'Aprender Tailandés',
                ukrainian: 'Aprender Ucraniano'
            },
            copyright: '© 2026 Carlier. Todos los derechos reservados.',
            crafted: 'Creado con pasión'
        },
        accessibility: {
            skipToMain: 'Saltar al contenido principal'
        }
    },
    fr: {
        nav: {
            about: 'À Propos',
            skills: 'Compétences',
            projects: 'Projets',
            cta: 'Discutons'
        },
        hero: {
            title1: 'Du concept au lancement, Transformer les Idées en Produits.',
            title2: '',
            subtitle1: 'Construire des ',
            highlight1: 'Apps Mobiles',
            subtitle2: ', des ',
            highlight2: 'solutions SaaS',
            subtitle3: ' et des ',
            highlight3: 'Systèmes IA',
            subtitle4: ' qui passent à l\'échelle.',
            subtitle5: 'Construire des Apps Mobiles, des solutions SaaS et des Systèmes IA qui passent à l\'échelle.',
            cta: 'Prenez Contact'
        },
        about: {
            tag: 'À Propos de Moi',
            title: 'Construire des produits qui comptent',
            text1: 'Je suis fondateur et Ingénieur logiciel passionné par la création de produits impactants. Avec une expertise couvrant le développement mobile, le SaaS, les Systèmes d\'IA et l\'Architecture Système, j\'aide les startups et les entreprises à réaliser leurs visions.',
            text2: 'Qu\'il s\'agisse d\'une application mobile native, d\'un système d\'IA, d\'une solution multiplateforme ou d\'une plateforme SaaS scalable, j\'aborde chaque projet avec un focus sur l\'expérience utilisateur, la performance et les objectifs business.',
            value1: { title: 'Exécution', desc: 'Prototypage rapide et développement itératif pour mettre votre produit sur le marché rapidement.' },
            value2: { title: 'De A à Z', desc: 'Du design au déploiement, je gère chaque aspect du développement produit.' },
            value3: { title: 'Qualité', desc: 'Code propre, UX réfléchie et architecture scalable dans chaque projet.' }
        },
        skills: {
            tag: 'Expertise',
            title: 'Technologies avec lesquelles je travaille',
            mobile: 'Développement Mobile',
            web: 'Web & SaaS',
            business: 'Solutions logicielles d\'entreprise',
            design: 'Design & Produit',
            ai: 'Systèmes d\'IA',
            infra: 'Infrastructure'
        },
        projects: {
            tag: 'Travaux Récents',
            title: 'Apps mobiles IA',
            view: 'Obtenir l\'app',
            tags: {
                mobile: 'App Mobile',
                aiScanner: 'Scanner IA',
                aiTutor: 'Tuteur IA'
            },
            coin: {
                title: 'Coin Identifier',
                desc: 'Application de scanner de pièces alimentée par l\'IA pour les collectionneurs. Identifiez instantanément les pièces, estimez les valeurs de marché et cataloguez votre collection.'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: 'Parlez et pratiquez le cantonais en temps réel avec un tuteur IA en direct avec chat vocal naturel et contexte de caméra.'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: 'Pratiquez le mandarin en temps réel avec un tuteur IA en direct avec voix en temps réel, pratique guidée par la vision et corrections instantanées.'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: 'Apprenez l’ukrainien, pratiquez des conversations réelles et traduisez en temps réel avec un tuteur IA ukrainien en direct avec chat vocal, contexte caméra et traduction instantanée.'
            },
            khru: {
                title: 'AI Agent Khru (pas encore publié)',
                desc: 'Apprenez et pratiquez le thaï en temps réel avec un tuteur IA en direct avec chat vocal, vocabulaire basé sur la caméra et corrections structurées.'
            }
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
            projects: 'Projets',
            contact: 'Contact',
            landing: {
                cantonese: 'Apprendre le Cantonais',
                chinese: 'Apprendre le Chinois',
                thai: 'Apprendre le Thaï',
                ukrainian: 'Apprendre l\'Ukrainien'
            },
            copyright: '© 2026 Carlier. Tous droits réservés.',
            crafted: 'Conçu avec passion'
        },
        accessibility: {
            skipToMain: 'Aller au contenu principal'
        }
    },
    'zh-TW': {
        nav: {
            about: '關於',
            skills: '技能',
            projects: '專案',
            cta: '聯繫我'
        },
        hero: {
            title1: '從概念到發布，將創意轉化為產品。',
            title2: '',
            subtitle1: '構建',
            highlight1: '移動應用',
            subtitle2: '、',
            highlight2: 'SaaS 解決方案',
            subtitle3: '和',
            highlight3: 'AI 系統',
            subtitle4: '，實現規模化。',
            subtitle5: '構建移動應用、SaaS 解決方案和AI 系統，實現規模化。',
            cta: '聯繫我'
        },
        about: {
            tag: '關於我',
            title: '構建有價值的產品',
            text1: '我是一名創辦人兼軟體工程師，熱衷於創造有影響力的產品。憑藉從移動開發、SaaS、AI 系統到系統架構的專業知識，我幫助初創企業和公司實現他們的願景。',
            text2: '無論是原生移動應用、AI 系統、跨平台解決方案還是可擴展的 SaaS 平台，我以用戶體驗、性能和業務目標為重點來處理每個項目。',
            value1: { title: '執行', desc: '快速原型設計和迭代開發，讓您的產品快速進入市場。' },
            value2: { title: '端到端', desc: '從設計到部署，我處理產品開發的各個方面。' },
            value3: { title: '品質', desc: '每個項目都注重清晰的代碼、周到的 UX 和可擴展的架構。' }
        },
        skills: {
            tag: '專業領域',
            title: '我使用的技術',
            mobile: '移動開發',
            web: '網頁與 SaaS',
            business: '企業軟件解決方案',
            design: '設計與產品',
            ai: 'AI 系統',
            infra: '基礎設施'
        },
        projects: {
            tag: '精選作品',
            title: 'AI 行動應用',
            view: '取得應用程式',
            tags: {
                mobile: '行動應用',
                aiScanner: 'AI 掃描器',
                aiTutor: 'AI 導師'
            },
            coin: {
                title: 'Coin Identifier',
                desc: '專為收藏家設計的 AI 硬幣掃描應用。即時識別硬幣、估算市場價值並整理您的收藏。'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: '透過即時語音聊天與相機輔助上下文，與 AI 粵語老師進行即時粵語對話與練習。'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: '透過即時語音、視覺引導練習與即時糾錯，與 AI 國語教練進行即時國語練習。'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: '學習烏克蘭語、練習真實對話，並透過即時語音聊天、相機上下文與即時翻譯，與 AI 烏克蘭語老師進行即時學習。'
            },
            khru: {
                title: 'AI Agent Khru (尚未發佈)',
                desc: '透過語音聊天、基於相機的詞彙練習與結構化糾錯，與 AI 泰語老師進行即時泰語學習與練習。'
            }
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
            projects: '專案',
            contact: '聯繫',
            landing: {
                cantonese: '學習粵語',
                chinese: '學習中文',
                thai: '學習泰語',
                ukrainian: '學習烏克蘭語'
            },
            copyright: '© 2026 Carlier. 版權所有。',
            crafted: '用心打造'
        },
        accessibility: {
            skipToMain: '跳至主要內容'
        }
    },
    'zh-CN': {
        nav: {
            about: '关于',
            skills: '技能',
            projects: '项目',
            cta: '联系我'
        },
        hero: {
            title1: '从概念到发布，将创意转化为产品。',
            title2: '',
            subtitle1: '构建',
            highlight1: '移动应用',
            subtitle2: '、',
            highlight2: 'SaaS 解决方案',
            subtitle3: '和',
            highlight3: 'AI 系统',
            subtitle4: '，实现规模化。',
            subtitle5: '构建移动应用、SaaS 解决方案和AI 系统，实现规模化。',
            cta: '联系我'
        },
        about: {
            tag: '关于我',
            title: '构建有价值的产品',
            text1: '我是一名创始人兼软件工程师，热衷于创造有影响力的产品。凭借从移动开发、SaaS、AI 系统到系统架构的专业知识，我帮助初创企业和公司实现他们的愿景。',
            text2: '无论是原生移动应用、AI 系统、跨平台解决方案还是可扩展的 SaaS 平台，我以用户体验、性能 and 业务目标为重点来处理每个项目。',
            value1: { title: '执行', desc: '快速原型设计和迭代开发，让您的产品快速进入市场。' },
            value2: { title: '端到端', desc: '从设计到部署，我处理产品开发的各个方面。' },
            value3: { title: '品质', desc: '每个项目都注重清晰的代码、周到的 UX 和可扩展的架构。' }
        },
        skills: {
            tag: '专业领域',
            title: '我使用的技术',
            mobile: '移动开发',
            web: '网页与 SaaS',
            business: '企业软件解决方案',
            design: '设计与产品',
            ai: 'AI 系统',
            infra: '基础设施'
        },
        projects: {
            tag: '精选作品',
            title: 'AI 移动应用',
            view: '获取应用',
            tags: {
                mobile: '移动应用',
                aiScanner: 'AI 扫描器',
                aiTutor: 'AI 导师'
            },
            coin: {
                title: 'Coin Identifier',
                desc: '专为收藏家设计的 AI 硬币扫描应用。即时识别硬币、估算市场价值并整理您的收藏。'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: '通过即时语音聊天与相机辅助上下文，与 AI 粤语老师进行即时粤语对话与练习。'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: '通过即时语音、视觉引导练习与即时纠错，与 AI 国语教练进行即时国语练习。'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: '学习乌克兰语、练习真实对话，并通过即时语音聊天、相机上下文与即时翻译，与 AI 乌克兰语老师进行实时学习。'
            },
            khru: {
                title: 'AI Agent Khru (尚未发布)',
                desc: '通过语音聊天、基于相机的词汇练习与结构化纠错，与 AI 泰语老师进行即时泰语学习与练习。'
            }
        },
        contact: {
            tag: '联系我',
            title: 'lets build something amazing together',
            text: '有项目想法？正在寻找技术合作伙伴？我很乐意听取您的想法。让我们讨论如何实现您的愿景。'
        },
        footer: {
            tagline: '构建改变世界的产品。',
            about: '关于',
            skills: '技能',
            projects: '项目',
            contact: '联系',
            landing: {
                cantonese: '学习粤语',
                chinese: '学习中文',
                thai: '学习泰语',
                ukrainian: '学习乌克兰语'
            },
            copyright: '© 2026 Carlier. 版权所有。',
            crafted: '用心打造'
        },
        accessibility: {
            skipToMain: '跳至主要内容'
        }
    },
    hi: {
        nav: {
            about: 'परिचय',
            skills: 'कौशल',
            projects: 'प्रोजेक्ट्स',
            cta: 'संपर्क करें'
        },
        hero: {
            title1: 'concept से launch तक, विचारों को उत्पादों में बदलना।',
            title2: '',
            subtitle1: '',
            highlight1: 'मोबाइल ऐप्स',
            subtitle2: ', ',
            highlight2: 'SaaS समाधान',
            subtitle3: ' और ',
            highlight3: 'AI सिस्टम',
            subtitle4: ' बना रहे हैं जो स्केल करते हैं।',
            subtitle5: 'मोबाइल ऐप्स, SaaS समाधान और AI सिस्टम बना रहे हैं जो स्केल करते हैं।',
            cta: 'संपर्क करें'
        },
        about: {
            tag: 'मेरे बारे में',
            title: 'मायने रखने वाले उत्पाद बना रहे हैं',
            text1: 'मैं एक संस्थापक और सॉफ्टवेयर इंजीनियर हूं जो प्रभावशाली उत्पाद बनाने का शौकीन है। मोबाइल डेवलपमेंट, SaaS, AI सिस्टम और सिस्टम आर्किटेक्चर में विशेषज्ञता के साथ, मैं स्टार्टअप्स और व्यवसायों को अपनी दृष्टि को जीवंत करने में मदद करता हूं।',
            text2: 'चाहे वह एक नेटिव मोबाइल ऐप हो, AI सिस्टम, क्रॉस-प्लेटफॉर्म समाधान, या स्केलेबल SaaS प्लेटफॉर्म, मैं हर प्रोजेक्ट को यूजर एक्सपीरियंस, परफॉर्मेंस और बिजनेस गोल्स पर फोकस के साथ अप्रोच करता हूं।',
            value1: { title: 'एक्जीक्यूशन', desc: 'रैपिड प्रोटोटाइपिंग और इटरेटिव डेवलपमेंट ताकि आपका उत्पाद जल्दी बाजार में आ सके।' },
            value2: { title: 'एंड-टू-एंड', desc: 'डिजाइन से डिप्लॉयमेंट तक, मैं प्रोडक्ट डेवलपमेंट के हर पहलू को संभालता हूं।' },
            value3: { title: 'क्वालिटी', desc: 'हर प्रोजेक्ट में क्लीन कोड, सोची-समझी UX और स्केलेबल आर्किटेक्चर।' }
        },
        skills: {
            tag: 'विशेषज्ञता',
            title: 'टेक्नोलॉजी जिनके साथ मैं काम करता हूं',
            mobile: 'मोबाइल डेवलपमेंट',
            web: 'वेब और SaaS',
            business: 'बिज़नेस सॉफ़्टवेयर समाधान',
            design: 'डिज़ाइन और प्रोडक्ट',
            ai: 'AI सिस्टम',
            infra: 'इन्फ्रास्ट्रक्चर'
        },
        projects: {
            tag: 'विशेष कार्य',
            title: 'AI मोबाइल ऐप्स',
            view: 'ऐप प्राप्त करें',
            tags: {
                mobile: 'मोबाइल ऐप',
                aiScanner: 'AI स्कैनर',
                aiTutor: 'AI ट्यूटर'
            },
            coin: {
                title: 'Coin Identifier',
                desc: 'संग्रहकर्ताओं के लिए AI-संचालित सिक्का स्कैनर ऐप। सिक्कों की तुरंत पहचान करें, बाजार मूल्य का अनुमान लगाएं, और संग्रह का कैटलॉग बनाएं।'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: 'प्राकृतिक वॉयस चैट और कैमरा-आधारित संदर्भ के साथ लाइव AI कैंटोनीज़ शिक्षक के साथ वास्तविक समय में अभ्यास करें।'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: 'वास्तविक समय की आवाज, विजन-गाइडेड अभ्यास और त्वरित सुधारों के साथ लाइव AI मंदारिन कोच के साथ अभ्यास करें।'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: 'यूक्रेनी सीखें, वास्तविक बातचीत का अभ्यास करें, और लाइव AI यूक्रेनी शिक्षक के साथ वॉयस चैट, कैमरा-आधारित संदर्भ और त्वरित अनुवाद के साथ वास्तविक समय में अनुवाद करें।'
            },
            khru: {
                title: 'AI Agent Khru (अभी प्रकाशित नहीं हुआ)',
                desc: 'वॉयस चैट, कैमरा-आधारित शब्दावली और संरचित सुधारों के साथ लाइव AI थाई शिक्षक के साथ वास्तविक समय में सीखें और अभ्यास करें।'
            }
        },
        contact: {
            tag: 'संपर्क करें',
            title: 'आइए कुछ अद्भुत बनाएं',
            text: 'प्रोजेक्ट का विचार है? तकनीकी भागीदार की तलाश है? मैं आपके विचारों को सुनना पसंद करूंगा। आइए चर्चा करें कि हम आपके विजन को कैसे साकार कर सकते हैं।'
        },
        footer: {
            tagline: 'अंतर लाने वाले उत्पाद बना रहे हैं।',
            about: 'परिचय',
            skills: 'कौशल',
            projects: 'प्रोजेक्ट्स',
            contact: 'संपर्क',
            landing: {
                cantonese: 'कैंटोनीज़ सीखें',
                chinese: 'चीनीज़ सीखें',
                thai: 'थाई सीखें',
                ukrainian: 'यूक्रेनियन सीखें'
            },
            copyright: '© 2026 Carlier. सर्वाधिकार सुरक्षित।',
            crafted: 'जुनून के साथ बनाया गया'
        },
        accessibility: {
            skipToMain: 'मुख्य सामग्री पर जाएं'
        }
    },
    ja: {
        nav: {
            about: '概要',
            skills: 'スキル',
            projects: 'プロジェクト',
            cta: 'お問い合わせ'
        },
        hero: {
            title1: 'コンセプトからローンチまで、アイデアを製品に変換します。',
            title2: '',
            subtitle1: '',
            highlight1: 'モバイルアプリ',
            subtitle2: '、',
            highlight2: 'SaaSソリューション',
            subtitle3: '、',
            highlight3: 'AIシステム',
            subtitle4: 'を構築し、スケールさせます。',
            subtitle5: 'モバイルアプリ、SaaSソリューション、AIシステムを構築し、スケールさせます。',
            cta: 'お問い合わせ'
        },
        about: {
            tag: '私について',
            title: '意義のある製品を構築する',
            text1: '私は影響力のある製品を作ることに情熱を持つ創業者兼ソフトウェアエンジニアです。モバイル開発、SaaS、AIシステム、システムアーキテクチャにわたる専門知識を持ち、スタートアップや企業がビジョンを実現するのをお手伝いします。',
            text2: 'ネイティブモバイルアプリ、AIシステム、クロスプラットフォームソリューション、スケーラブルなSaaSプラットフォームのいずれであれ、ユーザー体験、パフォーマンス、ビジネス目標に焦点を当てて各プロジェクトに取り組みます。',
            value1: { title: '実行', desc: '迅速なプロトタイピングと反復的な開発により、製品を迅速に市場に投入します。' },
            value2: { title: 'エンドツーエンド', desc: 'デザインからデプロイメントまで、製品開発のあらゆる側面を担当します。' },
            value3: { title: '品質', desc: 'すべてのプロジェクトでクリーンなコード、熟考されたUX、スケーラブルなアーキテクチャを提供します。' }
        },
        skills: {
            tag: '専門知識',
            title: '使用している技術',
            mobile: 'モバイル開発',
            web: 'WebとSaaS',
            business: 'ビジネスソフトウェアソリューション',
            design: 'デザインとプロダクト',
            ai: 'AIシステム',
            infra: 'インフラ'
        },
        projects: {
            tag: '主な作品',
            title: 'AI モバイルアプリ',
            view: 'アプリを入手',
            tags: {
                mobile: 'モバイルアプリ',
                aiScanner: 'AIスキャナー',
                aiTutor: 'AIチューター'
            },
            coin: {
                title: 'Coin Identifier',
                desc: 'コレクター向けのAI搭載コインスキャナーアプリ。コインの即時識別、市場価値の推定、コレクションのカタログ化。'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: '自然な音声チャットとカメラの文脈を使用して、AI広東語教師とリアルタイムで広東語を練習します。'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: 'リアルタイム音声、視覚ガイド付き練習、即時修正を使用して、AI中国語コーチとリアルタイムで中国語を練習します。'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: 'ウクライナ語を学び、実際の会話を練習し、自然な音声チャット、カメラベースの文脈、即時翻訳を備えたライブ AI ウクライナ語教師とリアルタイムで翻訳しましょう。'
            },
            khru: {
                title: 'AI Agent Khru (まだ公開されていません)',
                desc: '音声チャット、カメラベースの語彙、構造化された修正を使用して、AIタイ語教師とリアルタイムでタイ語を学習・練習します。'
            }
        },
        contact: {
            tag: 'お問い合わせ',
            title: '一緒に素晴らしいものを作りましょう',
            text: 'プロジェクトのアイデアはありますか？技術パートナーをお探しですか？ぜひお聞かせください。ビジョンを実現する方法について話し合いましょう。'
        },
        footer: {
            tagline: '変化をもたらす製品を構築しています。',
            about: '概要',
            skills: 'スキル',
            projects: 'プロジェクト',
            contact: 'お問い合わせ',
            landing: {
                cantonese: '広東語を学ぶ',
                chinese: '中国語を学ぶ',
                thai: 'タイ語を学ぶ',
                ukrainian: 'ウクライナ語を学ぶ'
            },
            copyright: '© 2026 Carlier. All rights reserved.',
            crafted: '情熱を込めて作られました'
        },
        accessibility: {
            skipToMain: 'メインコンテンツにスキップ'
        }
    },
    ar: {
        nav: {
            about: 'حول',
            skills: 'المهارات',
            projects: 'المشاريع',
            cta: 'تواصل معي'
        },
        hero: {
            title1: 'من الفكرة إلى الإطلاق، نحول الأفكار إلى منتجات.',
            title2: '',
            subtitle1: 'نبني ',
            highlight1: 'تطبيقات الجوال',
            subtitle2: ' و',
            highlight2: 'حلول SaaS',
            subtitle3: ' و',
            highlight3: 'أنظمة الذكاء الاصطناعي',
            subtitle4: ' القابلة للتوسع.',
            subtitle5: 'نبني تطبيقات الجوال وحلول SaaS وأنظمة الذكاء الاصطناعي القابلة للتوسع.',
            cta: 'تواصل معي'
        },
        about: {
            tag: 'عني',
            title: 'نبني منتجات ذات أهمية',
            text1: 'أنا مؤسس ومهندس برمجيات شغوف بإنشاء منتجات مؤثرة. بفضل خبرة تمتد من تطوير الجوال وSaaS وأنظمة الذكاء الاصطناعي وهندسة الأنظمة، أساعد الشركات الناشئة والشركات على تحقيق رؤاهم.',
            text2: 'سواء كان تطبيق جوال أصلي، أو نظام ذكاء اصطناعي، أو حل متعدد المنصات، أو منصة SaaS قابلة للتوسع، أتعامل مع كل مشروع مع التركيز على تجربة المستخدم والأداء وأهداف العمل.',
            value1: { title: 'تنفيذ', desc: 'النمذجة السريعة والتطوير التكراري لإدخال منتجك إلى السوق بسرعة.' },
            value2: { title: 'من الألف إلى الياء', desc: 'من التصميم إلى النشر، أتعامل مع كل جانب من جوانب تطوير المنتج.' },
            value3: { title: 'الجودة', desc: 'كود نظيف وتجربة مستخدم مدروسة وهندسة قابلة للتوسع في كل مشروع.' }
        },
        skills: {
            tag: 'الخبرة',
            title: 'التقنيات التي أعمل بها',
            mobile: 'تطوير الجوال',
            web: 'Web وSaaS',
            business: 'حلول برامج الأعمال',
            design: 'التصميم والمنتج',
            ai: 'أنظمة الذكاء الاصطناعي',
            infra: 'البنية التحتية'
        },
        projects: {
            tag: 'أعمال مميزة',
            title: 'تطبيقات AI للجوال',
            view: 'احصل على التطبيق',
            tags: {
                mobile: 'تطبيق جوال',
                aiScanner: 'ماسح ضوئي للذكاء الاصطناعي',
                aiTutor: 'مدرس ذكاء اصطناعي'
            },
            coin: {
                title: 'Coin Identifier',
                desc: 'تطبيق ماسح عملات يعمل بالذكاء الاصطناعي لهواة الجمع. يحدد العملات على الفور، ويقدر قيم السوق، ويفهرس مجموعتك.'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: 'تعلم وتدرب على الكانتونية في الوقت الفعلي مع مدرس كانتونيز AI مباشر يتميز بدردشة صوتية طبيعية وسياق مبني على الكاميرا.'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: 'تعلم وتدرب على الماندرين في الوقت الفعلي مع مدرب ماندرين AI مباشر بصوت مباشر، ممارسة موجهة برؤية، وتصحيحات فورية.'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: 'تعلم اللغة الأوكرانية، تدرب على المحادثات الحقيقية، وترجم في الوقت الفعلي مع مدرس أوكراني AI مباشر يتميز بدردشة صوتية وسياق يعتمد على الكاميرا وترجمة فورية.'
            },
            khru: {
                title: 'AI Agent Khru (لم يتم نشره بعد)',
                desc: 'تعلم وتدرب على التايلاندية في الوقت الفعلي مع مدرس تايلاندي AI مباشر يتميز بدردشة صوتية، ومفردات تعتمد على الكاميرا، وتصحيحات منظمة.'
            }
        },
        contact: {
            tag: 'تواصل معي',
            title: 'لنبني شيئاً رائعاً معاً',
            text: 'هل لديك فكرة مشروع؟ هل تبحث عن شريك تقني؟ أود أن أسمع عنها. دعنا نناقش كيف يمكننا تحقيق رؤيتك.'
        },
        footer: {
            tagline: 'نبني منتجات تحدث فرقاً.',
            about: 'حول',
            skills: 'المهارات',
            projects: 'المشاريع',
            contact: 'تواصل',
            landing: {
                cantonese: 'تعلم الكانتونيز',
                chinese: 'تعلم الصينية',
                thai: 'تعلم الثيين',
                ukrainian: 'تعلم الأوكرانية'
            },
            copyright: '© 2026 Carlier. جميع الحقوق محفوظة.',
            crafted: 'صُنع بحب'
        },
        accessibility: {
            skipToMain: 'انتقل إلى المحتوى الرئيسي'
        }
    },
    de: {
        nav: {
            about: 'Über',
            skills: 'Fähigkeiten',
            projects: 'Projekte',
            cta: 'Lass uns sprechen'
        },
        hero: {
            title1: 'Vom Konzept zum Launch, Ideen in Produkte verwandeln.',
            title2: '',
            subtitle1: 'Ich baue ',
            highlight1: 'Mobile Apps',
            subtitle2: ', ',
            highlight2: 'SaaS-Lösungen',
            subtitle3: ' und ',
            highlight3: 'KI-Systeme',
            subtitle4: ', die skalieren.',
            subtitle5: 'Mobile Apps, SaaS-Lösungen und KI-Systeme bauen, die skalieren',
            cta: 'Kontaktieren'
        },
        about: {
            tag: 'Über mich',
            title: 'Produkte bauen, die zählen',
            text1: 'Ich bin ein Gründer und Software-Ingenieur, der leidenschaftlich daran ist, wirkungsvolle Produkte zu schaffen. Mit Expertise in mobiler Entwicklung, SaaS, KI-Systemen und Systemarchitektur helfe ich Startups und Unternehmen, ihre Visionen zu verwirklichen.',
            text2: 'Ob native Mobile-App, KI-System, plattformübergreifende Lösung oder skalierbare SaaS-Plattform – ich gehe jedes Projekt mit Fokus auf Benutzererfahrung, Leistung und Geschäftsziele an.',
            value1: { title: 'Umsetzung', desc: 'Schnelles Prototyping und iterative Entwicklung, um Ihr Produkt schnell auf den Markt zu bringen.' },
            value2: { title: 'End-to-End', desc: 'Vom Design bis zur Deployment kümmere ich mich um jeden Aspekt der Produktentwicklung.' },
            value3: { title: 'Qualität', desc: 'Sauberer Code, durchdachtes UX und skalierbare Architektur in jedem Projekt.' }
        },
        skills: {
            tag: 'Expertise',
            title: 'Technologien, mit denen ich arbeite',
            mobile: 'Mobile Entwicklung',
            web: 'Web & SaaS',
            business: 'Business-Software-Lösungen',
            design: 'Design & Produkt',
            ai: 'KI-Systeme',
            infra: 'Infrastruktur'
        },
        projects: {
            tag: 'Ausgewählte Arbeiten',
            title: 'KI Mobile Apps',
            view: 'App herunterladen',
            tags: {
                mobile: 'Mobile App',
                aiScanner: 'KI-Scanner',
                aiTutor: 'KI-Tutor'
            },
            coin: {
                title: 'Coin Identifier',
                desc: 'KI-gesteuerte Münzscanner-App für Sammler. Identifizieren Sie Münzen sofort, schätzen Sie Marktwerte und katalogisieren Sie Ihre Sammlung.'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: 'Sprechen und üben Sie Kantonesisch in Echtzeit mit einem live KI-Kantonesisch-Lehrer mit natürlichem Sprachchat und kamerabasiertem Kontext.'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: 'Üben Sie Mandarin in Echtzeit mit einem live KI-Mandarin-Coach mit Echtzeit-Stimme, visiongeführter Übung und sofortiger Korrektur.'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: 'Lernen Sie Ukrainisch, üben Sie echte Gespräche und übersetzen Sie in Echtzeit mit einem live KI-Ukrainisch-Lehrer mit Sprachchat, kamerabasiertem Kontext und sofortiger Übersetzung.'
            },
            khru: {
                title: 'AI Agent Khru (noch nicht veröffentlicht)',
                desc: 'Lernen und üben Sie Thai in Echtzeit mit einem live KI-Thai-Lehrer mit Sprachchat, kamerabasiertem Wortschatz und strukturierten Korrekturen.'
            }
        },
        contact: {
            tag: 'Kontaktieren',
            title: 'Lass uns etwas Großartiges zusammen bauen',
            text: 'Haben Sie eine Projektidee? Suchen Sie einen technischen Partner? Ich würde gerne davon hören. Lass uns besprechen, wie wir Ihre Vision verwirklichen können.'
        },
        footer: {
            tagline: 'Produkte bauen, die einen Unterschied machen.',
            about: 'Über',
            skills: 'Fähigkeiten',
            projects: 'Projekte',
            contact: 'Kontakt',
            landing: {
                cantonese: 'Kantonesisch lernen',
                chinese: 'Chinesisch lernen',
                thai: 'Thailändisch lernen',
                ukrainian: 'Ukrainisch lernen'
            },
            copyright: '© 2026 Carlier. Alle Rechte vorbehalten.',
            crafted: 'Mit Leidenschaft erstellt'
        },
        accessibility: {
            skipToMain: 'Zum Hauptinhalt springen'
        }
    },
    it: {
        nav: {
            about: 'Chi sono',
            skills: 'Competenze',
            projects: 'Progetti',
            cta: 'Parliamone'
        },
        hero: {
            title1: 'Dal concetto al lancio, Trasformare le Idee in Prodotti.',
            title2: '',
            subtitle1: 'Costruisco ',
            highlight1: 'App Mobile',
            subtitle2: ', ',
            highlight2: 'soluzioni SaaS',
            subtitle3: ' e ',
            highlight3: 'Sistemi IA',
            subtitle4: ' che scalano.',
            subtitle5: 'Costruisco App Mobile, soluzioni SaaS e Sistemi IA che scalano',
            cta: 'Contattami'
        },
        about: {
            tag: 'Chi sono',
            title: 'Costruire prodotti che contano',
            text1: 'Sono un fondatore e Ingegnere del Software appassionato di creare prodotti impattanti. Con competenze che spaziano dallo sviluppo mobile, SaaS, Sistemi IA e Architettura dei Sistemi, aiuto startup e aziende a realizzare le loro visioni.',
            text2: 'Che si tratti di un\'app mobile nativa, un sistema IA, una soluzione multipiattaforma o una piattaforma SaaS scalabile, affronto ogni progetto con focus sull\'esperienza utente, performance e obiettivi di business.',
            value1: { title: 'Esecuzione', desc: 'Prototipazione rapida e sviluppo iterativo per portare il tuo prodotto sul mercato velocemente.' },
            value2: { title: 'End-to-End', desc: 'Dal design al deployment, gestisco ogni aspetto dello sviluppo del prodotto.' },
            value3: { title: 'Qualità', desc: 'Codice pulito, UX ben pensata e architettura scalabile in ogni progetto.' }
        },
        skills: {
            tag: 'Competenze',
            title: 'Tecnologie con cui lavoro',
            mobile: 'Sviluppo Mobile',
            web: 'Web & SaaS',
            business: 'Soluzioni Software Aziendali',
            design: 'Design & Prodotto',
            ai: 'Sistemi IA',
            infra: 'Infrastruttura'
        },
        projects: {
            tag: 'Lavori in Evidenza',
            title: 'App mobili AI',
            view: 'Ottieni l\'app',
            tags: {
                mobile: 'App Mobile',
                aiScanner: 'Scanner IA',
                aiTutor: 'Tutor IA'
            },
            coin: {
                title: 'Coin Identifier',
                desc: 'App di scanner di monete alimentata dall\'IA per collezionisti. Identifica le monete istantaneamente, stima i valori di mercato e cataloga la tua collezione.'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: 'Parla e pratica il cantonese in tempo reale con un tutor IA cantonese dal vivo con chat vocale naturale e contesto basato sulla fotocamera.'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: 'Pratica il mandarino in tempo reale con un coach IA mandarino dal vivo con voce in tempo reale, pratica guidata dalla visione e correzioni istantanee.'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: 'Impara l’ucraino, pratica conversazioni reali e traduci in tempo reale con un tutor IA ucraino dal vivo con chat vocale, contesto basato sulla fotocamera e traduzione istantanea.'
            },
            khru: {
                title: 'AI Agent Khru (non ancora pubblicato)',
                desc: 'Impara e pratica il tailandese in tempo reale con un tutor IA tailandese dal vivo con chat vocale, vocabolario basato sulla fotocamera e correzioni strutturate.'
            }
        },
        contact: {
            tag: 'Contattami',
            title: 'Costruiamo qualcosa di incredibile insieme',
            text: 'Hai un\'idea di progetto? Cerchi un partner tecnico? Mi piacerebbe sentirne parlare. Discutiamo come possiamo realizzare la tua visione.'
        },
        footer: {
            tagline: 'Costruire prodotti che fanno la differenza.',
            about: 'Chi sono',
            skills: 'Competenze',
            projects: 'Progetti',
            contact: 'Contatto',
            landing: {
                cantonese: 'Impara il Cantonese',
                chinese: 'Impara il Cinese',
                thai: 'Impara il Thai',
                ukrainian: 'Impara l\'Ucraino'
            },
            copyright: '© 2026 Carlier. Tutti i diritti riservati.',
            crafted: 'Creato con passione'
        },
        accessibility: {
            skipToMain: 'Vai al contenuto principale'
        }
    },
    ko: {
        nav: {
            about: '소개',
            skills: '기술',
            projects: '프로젝트',
            cta: '연락하기'
        },
        hero: {
            title1: '컨셉에서 출시까지, 아이디어를 제품으로 변환합니다.',
            title2: '',
            subtitle1: '구축 중 ',
            highlight1: '모바일 앱',
            subtitle2: ', ',
            highlight2: 'SaaS 솔루션',
            subtitle3: ' 및 ',
            highlight3: 'AI 시스템',
            subtitle4: ' 확장 가능합니다.',
            subtitle5: '확장 가능한 모바일 앱, SaaS 솔루션 및 AI 시스템 구축',
            cta: '연락하기'
        },
        about: {
            tag: '소개',
            title: '중요한 제품 구축',
            text1: '저는 영향력 있는 제품을 만드는 데 열정적인 창업자이자 소프트웨어 엔지니어입니다. 모바일 개발, SaaS, AI 시스템 및 시스템 아키텍처에 대한 전문 지식을 통해 스타트업과 기업이 비전을 실현하도록 돕습니다.',
            text2: '네이티브 모바일 앱, AI 시스템, 크로스 플랫폼 솔루션 또는 확장 가능한 SaaS 플랫폼이든, 사용자 경험, 성능 및 비즈니스 목표에 중점을 두고 모든 프로젝트를 접근합니다.',
            value1: { title: '실행', desc: '제품을 빠르게 시장에 출시하기 위한 빠른 프로토타이핑 및 반복적 개발.' },
            value2: { title: '종단 간', desc: '디자인에서 배포까지 제품 개발의 모든 측면을 처리합니다.' },
            value3: { title: '품질', desc: '모든 프로젝트에서 깔끔한 코드, 신중한 UX 및 확장 가능한 아키텍처.' }
        },
        skills: {
            tag: '전문성',
            title: '작업하는 기술',
            mobile: '모바일 개발',
            web: '웹 및 SaaS',
            business: '비즈니스 소프트웨어 솔루션',
            design: '디자인 및 제품',
            ai: 'AI 시스템',
            infra: '인프라'
        },
        projects: {
            tag: '주요 작업',
            title: 'AI 모바일 앱',
            view: '앱 받기',
            tags: {
                mobile: '모바일 앱',
                aiScanner: 'AI 스캐너',
                aiTutor: 'AI 튜터'
            },
            coin: {
                title: 'Coin Identifier',
                desc: '수집가를 위한 AI 기반 동전 스캐너 앱. 동전을 즉시 식별하고, 시장 가치를 추정하며, 컬렉션을 카탈로그화하세요.'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: '자연스러운 음성 채팅과 카메라 기반 컨텍스트로 라이브 AI 광둥어 강사와 실시간으로 광둥어를 말하고 연습하세요.'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: '실시간 음성, 비전 기반 연습 및 즉시 수정으로 라이브 AI 만다린 코치와 실시간으로 만다린을 연습하세요.'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: '우크라이나어를 배우고, 실제 대화를 연습하며, 실시간 음성 채팅, 카메라 기반 문맥, 즉각적인 번역 기능을 갖춘 라이브 AI 우크라이나어 튜터와 함께 실시간 번역을 경험하세요.'
            },
            khru: {
                title: 'AI Agent Khru (아직 게시되지 않음)',
                desc: '음성 채팅, 카메라 기반 어휘 및 구조화된 수정으로 라이브 AI 태어 강사와 실시간으로 태어를 배우고 연습하세요.'
            }
        },
        contact: {
            tag: '연락하기',
            title: '함께 놀라운 것을 만들어 봅시다',
            text: '프로젝트 아이디어가 있으신가요? 기술 파트너를 찾고 계신가요? 듣고 싶습니다. 비전을 실현하는 방법에 대해 논의해 봅시다.'
        },
        footer: {
            tagline: '차이를 만드는 제품을 구축합니다.',
            about: '소개',
            skills: '기술',
            projects: '프로젝트',
            contact: '연락처',
            landing: {
                cantonese: '광둥어 배우기',
                chinese: '중국어 배우기',
                thai: '태국어 배우기',
                ukrainian: '우크라이나어 배우기'
            },
            copyright: '© 2026 Carlier. 모든 권리 보유.',
            crafted: '열정으로 제작'
        },
        accessibility: {
            skipToMain: '주요 콘텐츠로 건너뛰기'
        }
    },
    ru: {
        nav: {
            about: 'О себе',
            skills: 'Навыки',
            projects: 'Проекты',
            cta: 'Давайте поговорим'
        },
        hero: {
            title1: 'От концепции до запуска, Превращение идей в продукты.',
            title2: '',
            subtitle1: 'Создаю ',
            highlight1: 'мобильные приложения',
            subtitle2: ', ',
            highlight2: 'SaaS-решения',
            subtitle3: ' и ',
            highlight3: 'системы ИИ',
            subtitle4: ', которые масштабируются.',
            subtitle5: 'Создаю мобильные приложения, SaaS-решения и системы ИИ, которые масштабируются',
            cta: 'Связаться'
        },
        about: {
            tag: 'О себе',
            title: 'Создаю продукты, которые имеют значение',
            text1: 'Я основатель и инженер-программист, увлеченный созданием влиятельных продуктов. С экспертизой в мобильной разработке, SaaS, системах ИИ и системной архитектуре я помогаю стартапам и компаниям реализовать их видения.',
            text2: 'Будь то нативное мобильное приложение, система ИИ, кроссплатформенное решение или масштабируемая SaaS-платформа, я подхожу к каждому проекту с фокусом на пользовательский опыт, производительность и бизнес-цели.',
            value1: { title: 'Исполнение', desc: 'Быстрое прототипирование и итеративная разработка для быстрого вывода вашего продукта на рынок.' },
            value2: { title: 'От начала до конца', desc: 'От дизайна до деплоя я управляю каждым аспектом разработки продукта.' },
            value3: { title: 'Качество', desc: 'Чистый код, продуманный UX и масштабируемая архитектура в каждом проекте.' }
        },
        skills: {
            tag: 'Экспертиза',
            title: 'Технологии, с которыми я работаю',
            mobile: 'Мобильная разработка',
            web: 'Веб и SaaS',
            business: 'Корпоративные программные решения',
            design: 'Дизайн и продукт',
            ai: 'Системы ИИ',
            infra: 'Инфраструктура'
        },
        projects: {
            tag: 'Избранные работы',
            title: 'AI мобильные приложения',
            view: 'Скачать приложение',
            tags: {
                mobile: 'Мобильное приложение',
                aiScanner: 'ИИ-сканер',
                aiTutor: 'ИИ-репетитор'
            },
            coin: {
                title: 'Coin Identifier',
                desc: 'Приложение для сканирования монет на базе ИИ для коллекционеров. Мгновенно идентифицируйте монеты, оценивайте рыночную стоимость и каталогизируйте свою коллекцию.'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: 'Говорите и практикуйте кантонский диалект в реальном времени с живым ИИ-преподавателем кантонского с естественным голосовым чатом и контекстом на основе камеры.'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: 'Практикуйте мандаринский в реальном времени с живым ИИ-тренером мандаринского с голосом в реальном времени, практикой с визуальным руководством и мгновенными исправлениями.'
            },
            vchytel: {
                title: 'AI Agent Vchytel',
                desc: 'Изучайте украинский, практикуйте реальные разговоры и переводите в реальном времени с живым ИИ-преподавателем украинского языка с голосовым чатом, контекстом на основе камеры и мгновенным переводом.'
            },
            khru: {
                title: 'AI Agent Khru (еще не опубликовано)',
                desc: 'Учитесь и практикуйте тайский в реальном времени с живым ИИ-преподавателем тайского с голосовым чатом, словарным запасом на основе камеры и структурированными исправлениями.'
            }
        },
        contact: {
            tag: 'Связаться',
            title: 'Давайте создадим что-то удивительное вместе',
            text: 'Есть идея проекта? Ищете технического партнера? Мне бы хотелось услышать об этом. Давайте обсудим, как мы можем реализовать ваше видение.'
        },
        footer: {
            tagline: 'Создаю продукты, которые меняют мир.',
            about: 'О себе',
            skills: 'Навыки',
            projects: 'Проекты',
            contact: 'Контакт',
            landing: {
                cantonese: 'Учить кантонский',
                chinese: 'Учить китайский',
                thai: 'Учить тайский',
                ukrainian: 'Учить украинский'
            },
            copyright: '© 2026 Carlier. Все права защищены.',
            crafted: 'Создано с любовью'
        },
        accessibility: {
            skipToMain: 'Перейти к основному содержанию'
        }
    },
    pl: {
        nav: {
            about: 'O mnie',
            skills: 'Umiejętności',
            projects: 'Projekty',
            cta: 'Porozmawiajmy'
        },

        hero: {
            title1: 'Od pomysłu do wdrożenia — zamieniam idee w produkty.',
            title2: '',
            subtitle1: 'Tworząc ',
            highlight1: 'Aplikacje mobilne',
            subtitle2: ', ',
            highlight2: 'rozwiązania SaaS',
            subtitle3: ' oraz ',
            highlight3: 'systemy AI',
            subtitle4: ' które się skalują.',
            subtitle5: 'Tworząc Aplikacje mobilne, rozwiązania SaaS oraz systemy AI, które się skalują.',
            cta: 'Skontaktuj się'
        },
        about: {
            tag: 'O mnie',
            title: 'Buduję produkty, które mają znaczenie',
            text1: 'Jestem założycielem i inżynierem oprogramowania z pasją do tworzenia wpływowych produktów. Dzięki doświadczeniu od rozwoju mobilnego, przez SaaS, systemy AI i architekturę systemów, pomagam startupom i firmom wcielać ich wizje w życie.',
            text2: 'Niezależnie od tego, czy jest to natywna aplikacja mobilna, system AI, rozwiązanie cross-platform, czy skalowalna platforma SaaS — podchodzę do każdego projektu z naciskiem na doświadczenie użytkownika, wydajność i cele biznesowe.',
            value1: { title: 'Realizacja', desc: 'Szybkie prototypowanie i iteracyjny rozwój, aby szybko wprowadzić produkt na rynek.' },
            value2: { title: 'Od A do Z', desc: 'Od designu po wdrożenie — zajmuję się każdym aspektem rozwoju produktu.' },
            value3: { title: 'Jakość', desc: 'Czysty kod, dopracowane UX i skalowalna architektura w każdym projekcie.' }
        },
        skills: {
            tag: 'Ekspertyza',
            title: 'Technologie, z których korzystam',
            mobile: 'Tworzenie aplikacji mobilnych',
            web: 'Web i SaaS',
            business: 'Rozwiązania biznesowe',
            design: 'Design i produkt',
            ai: 'Systemy AI',
            infra: 'Infrastruktura'
        },
        projects: {
            tag: 'Wyróżnione prace',
            title: 'Aplikacje mobilne AI',
            view: 'Pobierz aplikację',
            tags: {
                mobile: 'Aplikacja mobilna',
                aiScanner: 'AI Scanner',
                aiTutor: 'AI Tutor'
            },
            coin: {
                title: 'Coin Identifier',
                desc: 'Aplikacja do skanowania monet napędzana przez AI dla kolekcjonerów. Natychmiast rozpoznawaj monety, szacuj wartości rynkowe, sprawdzaj rzadkość i kataloguj swoją kolekcję.'
            },
            cantonese: {
                title: 'AI Agent Lousi',
                desc: 'Ucz się kantońskiego, ćwicz prawdziwe rozmowy i tłumacz w czasie rzeczywistym z działającym nauczycielem AI kantońskiego — z naturalnym czatem głosowym, kontekstem z kamery i natychmiastowym wsparciem tłumaczenia.'
            },
            mandarin: {
                title: 'AI Agent Laoshi',
                desc: 'Ucz się chińskiego mandaryńskiego, ćwicz prawdziwe rozmowy i tłumacz w czasie rzeczywistym z działającym nauczycielem AI mandaryńskiego — z czatem głosowym, kontekstem opartym na kamerze i natychmiastowym wsparciem tłumaczeń.'
            },
            vchytel: {
                title: 'AI Agent Vchytel (jeszcze nieopublikowany)',
                desc: 'Ucz się języka ukraińskiego, ćwicz prawdziwe rozmowy i tłumacz w czasie rzeczywistym z działającym nauczycielem AI języka ukraińskiego — z czatem głosowym, kontekstem opartym na kamerze i natychmiastowym wsparciem tłumaczeń.'
            },
            khru: {
                title: 'AI Agent Khru (jeszcze nieopublikowany)',
                desc: 'Ucz się tajskiego, ćwicz prawdziwe rozmowy i tłumacz w czasie rzeczywistym z działającym nauczycielem AI tajskiego — z czatem głosowym, kontekstem opartym na kamerze i natychmiastowym wsparciem tłumaczeń.'
            }
},
        contact: {
            tag: 'Napisz do mnie',
            title: 'Zbudujmy coś niesamowitego razem',
            text: 'Masz pomysł na projekt? Szukasz technicznego partnera? Chętnie dowiem się więcej. Porozmawiajmy o tym, jak możemy przełożyć Twoją wizję na rzeczywistość.'
        },
        footer: {
            tagline: 'Tworzymy produkty, które robią różnicę.',
            about: 'O mnie',
            skills: 'Umiejętności',
            projects: 'Projekty',
            contact: 'Kontakt',
            landing: {
                cantonese: 'Naucz się kantońskiego',
                chinese: 'Naucz się chińskiego',
                thai: 'Naucz się tajskiego',
                ukrainian: 'Naucz się ukraińskiego'
            },
            copyright: '© 2026 Carlier. Wszelkie prawa zastrzeżone.',
            crafted: 'Stworzone z pasją'
        },
        accessibility: {
            skipToMain: 'Przejdź do treści głównej'
        }
    }
};

// Language labels for the switcher
const langLabels = {
    en: 'EN',
    fr: 'FR',
    pt: 'PT',
    es: 'ES',
    th: 'TH',
    hi: 'HI',
    ja: 'JA',
    ar: 'AR',
    'zh-TW': '繁中',
    'zh-CN': '简中',
    de: 'DE',
    it: 'IT',
    ko: 'KO',
    ru: 'RU',
    uk: 'UK',
    pl: 'PL'
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

function updateCanonical(lang) {
    const canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) return;
    const baseUrl = 'https://carlier.site/';
    if (lang && lang !== 'en') {
        canonical.setAttribute('href', `${baseUrl}?lang=${encodeURIComponent(lang)}`);
    } else {
        canonical.setAttribute('href', baseUrl);
    }
}

function updateContent(lang) {
    const t = translations[lang];
    if (!t) return;

    // Update footer landing links to point to the right language pages
    // (these pages use ?lang=xx on the main site and should be passed through).
    const langQuery = lang ? `?lang=${encodeURIComponent(lang)}` : '';
    document.querySelectorAll('.footer-landing-link[data-landing]').forEach(a => {
        const baseHref = a.getAttribute('href')?.split('?')[0] || a.getAttribute('href');
        if (baseHref) {
            a.setAttribute('href', `${baseHref}${langQuery}`);
        }
    });


    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update canonical to be self-referencing for non-default languages
    updateCanonical(lang);

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
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}