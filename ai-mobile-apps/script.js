// ============================================================
// AI Mobile Apps — Self-contained i18n + UI script
// Mirrors the language system from carlier.site/script.js
// ============================================================

const translations = {
    en: {
        skipToMain: 'Skip to main content',
        nav: { home: 'Home', about: 'About', skills: 'Skills', aiApps: 'AI Apps', cta: "Let's Talk" },
        hero: {
            eyebrow: 'Mobile Apps',
            title: 'AI\u2011Powered Mobile Experiences',
            subtitle: 'A growing suite of intelligent apps built with Flutter \u2014 from language tutors to smart scanners, each powered by cutting\u2011edge AI.',
            stat1Label: 'Apps Live',
            stat2Label: 'Languages',
            stat3Label: 'AI\u2011Native'
        },
        grid: {
            tag: 'All Apps',
            title: 'Browse the Collection'
        },
        apps: {
            getOnPlay: 'Get on Google Play',
            tagMobile: 'Mobile App',
            tagAiTutor: 'AI Tutor',
            tagAiScanner: 'AI Scanner',
            tagFeatured: 'Featured',
            vchytel: {
                title: 'AI Agent Vchytel',
                tag: 'Ukrainian',
                desc: 'Learn Ukrainian, practice real conversations, and translate in real time with a live AI Ukrainian teacher. Features voice chat, camera-based context understanding, and instant translation support.',
                chip1: 'Voice Chat', chip2: 'Camera Context', chip3: 'Instant Translation', chip4: 'Flutter'
            },
            lousi: {
                title: 'AI Agent Lousi',
                tag: 'Cantonese',
                desc: 'Learn Chinese Cantonese, practice real conversations, and translate in real time with a live AI Cantonese teacher. Features voice chat, camera-based context understanding, and instant translation support.',
                chip1: 'Voice Chat', chip2: 'Camera Context', chip3: 'Cantonese', chip4: 'Flutter'
            },
            laoshi: {
                title: 'AI Agent Laoshi',
                tag: 'Mandarin',
                desc: 'Learn Chinese Mandarin, practice real conversations, and translate in real time with a live AI Mandarin teacher. Features voice chat, camera-based context understanding, and instant translation support.',
                chip1: 'Voice Chat', chip2: 'Camera Context', chip3: 'Mandarin', chip4: 'Flutter'
            },
            khru: {
                title: 'AI Agent Khru',
                tag: 'Thai',
                desc: 'Learn Thai, practice real conversations, and translate in real time with a live AI Thai teacher. Features voice chat, camera-based context understanding, and instant translation support.',
                chip1: 'Voice Chat', chip2: 'Camera Context', chip3: 'Thai', chip4: 'Flutter'
            },
            coin: {
                title: 'Coin Identifier',
                tag: 'AI Scanner',
                desc: 'AI-powered coin scanner app for collectors. Instantly identify coins from around the world, estimate market values, check rarity, and build a digital catalog of your collection \u2014 all from your phone\'s camera.',
                chip1: 'AI Vision', chip2: 'Coin Valuation', chip3: 'Rarity Check', chip4: 'Collection Catalog', chip5: 'Flutter'
            }
        },
        cta: {
            title: 'Have an app idea?',
            text: 'I build AI-native mobile apps from concept to the App Store & Google Play. Let\'s turn your vision into a product people love.',
            btnPrimary: 'Get in Touch',
            btnSecondary: 'Back to Home'
        },
        footer: {
            tagline: 'Building products that make a difference.',
            home: 'Home', about: 'About', skills: 'Skills', aiApps: 'AI Apps', contact: 'Contact',
            chinese: 'Learn Chinese', cantonese: 'Learn Cantonese', ukrainian: 'Learn Ukrainian', coin: 'Coin Identifier',
            copyright: '\u00a9 2026 Carlier. All rights reserved.',
            crafted: 'Crafted with passion'
        }
    },
    fr: {
        skipToMain: 'Aller au contenu principal',
        nav: { home: 'Accueil', about: '\u00c0 Propos', skills: 'Comp\u00e9tences', aiApps: 'Apps IA', cta: 'Discutons' },
        hero: {
            eyebrow: 'Apps Mobiles',
            title: 'Exp\u00e9riences Mobiles Propuls\u00e9es par l\u2019IA',
            subtitle: 'Une suite grandissante d\u2019apps intelligentes con\u00e7ues avec Flutter \u2014 tuteurs en langues, scanners intelligents et plus encore.',
            stat1Label: 'Apps en ligne', stat2Label: 'Langues', stat3Label: '100\u00a0% IA'
        },
        grid: { tag: 'Toutes les Apps', title: 'Parcourir la Collection' },
        apps: {
            getOnPlay: 'Obtenir sur Google Play',
            tagMobile: 'App Mobile', tagAiTutor: 'Tuteur IA', tagAiScanner: 'Scanner IA', tagFeatured: 'En vedette',
            vchytel: { title: 'AI Agent Vchytel', tag: 'Ukrainien', desc: 'Apprenez l\u2019ukrainien, pratiquez de vraies conversations et traduisez en temps r\u00e9el avec un tuteur IA ukrainien en direct. Chat vocal, contexte cam\u00e9ra et traduction instantan\u00e9e.', chip1: 'Chat Vocal', chip2: 'Contexte Cam\u00e9ra', chip3: 'Traduction', chip4: 'Flutter' },
            lousi: { title: 'AI Agent Lousi', tag: 'Cantonais', desc: 'Apprenez le cantonais, pratiquez de vraies conversations et traduisez en temps r\u00e9el avec un tuteur IA cantonais en direct. Chat vocal et contexte cam\u00e9ra.', chip1: 'Chat Vocal', chip2: 'Contexte Cam\u00e9ra', chip3: 'Cantonais', chip4: 'Flutter' },
            laoshi: { title: 'AI Agent Laoshi', tag: 'Mandarin', desc: 'Apprenez le mandarin, pratiquez de vraies conversations et traduisez en temps r\u00e9el avec un tuteur IA mandarin en direct. Chat vocal et contexte cam\u00e9ra.', chip1: 'Chat Vocal', chip2: 'Contexte Cam\u00e9ra', chip3: 'Mandarin', chip4: 'Flutter' },
            khru: { title: 'AI Agent Khru', tag: 'Tha\u00ef', desc: 'Apprenez le tha\u00ef, pratiquez de vraies conversations et traduisez en temps r\u00e9el avec un tuteur IA tha\u00ef en direct. Chat vocal et contexte cam\u00e9ra.', chip1: 'Chat Vocal', chip2: 'Contexte Cam\u00e9ra', chip3: 'Tha\u00ef', chip4: 'Flutter' },
            coin: { title: 'Coin Identifier', tag: 'Scanner IA', desc: 'App de scanner de pi\u00e8ces aliment\u00e9e par l\u2019IA pour collectionneurs. Identifiez les pi\u00e8ces instantan\u00e9ment, estimez leur valeur et constituez un catalogue num\u00e9rique.', chip1: 'Vision IA', chip2: 'Valorisation', chip3: 'Raret\u00e9', chip4: 'Catalogue', chip5: 'Flutter' }
        },
        cta: { title: 'Une id\u00e9e d\u2019app\u00a0?', text: 'Je construis des apps mobiles IA du concept au store. Transformons votre vision en produit.', btnPrimary: 'Me Contacter', btnSecondary: 'Retour \u00e0 l\u2019accueil' },
        footer: { tagline: 'Construire des produits qui font la diff\u00e9rence.', home: 'Accueil', about: '\u00c0 Propos', skills: 'Comp\u00e9tences', aiApps: 'Apps IA', contact: 'Contact', chinese: 'Apprendre le Chinois', cantonese: 'Apprendre le Cantonais', ukrainian: 'Apprendre l\u2019Ukrainien', coin: 'Coin Identifier', copyright: '\u00a9 2026 Carlier. Tous droits r\u00e9serv\u00e9s.', crafted: 'Con\u00e7u avec passion' }
    },
    de: {
        skipToMain: 'Zum Hauptinhalt springen',
        nav: { home: 'Startseite', about: '\u00dcber', skills: 'F\u00e4higkeiten', aiApps: 'KI Apps', cta: 'Lass uns sprechen' },
        hero: { eyebrow: 'Mobile Apps', title: 'KI-gest\u00fctzte Mobile Erlebnisse', subtitle: 'Eine wachsende Suite intelligenter Flutter-Apps \u2014 Sprach-Tutoren, Coin-Scanner und mehr.', stat1Label: 'Apps Live', stat2Label: 'Sprachen', stat3Label: '100\u00a0% KI' },
        grid: { tag: 'Alle Apps', title: 'Die Kollektion entdecken' },
        apps: {
            getOnPlay: 'Bei Google Play herunterladen', tagMobile: 'Mobile App', tagAiTutor: 'KI-Tutor', tagAiScanner: 'KI-Scanner', tagFeatured: 'Empfohlen',
            vchytel: { title: 'AI Agent Vchytel', tag: 'Ukrainisch', desc: 'Lernen Sie Ukrainisch, \u00fcben Sie echte Gespr\u00e4che und \u00fcbersetzen Sie in Echtzeit mit einem live KI-Lehrer. Sprachchat, kamerabasierter Kontext und Sofort\u00fcbersetzung.', chip1: 'Sprachchat', chip2: 'Kamerakont.', chip3: '\u00dcbersetzung', chip4: 'Flutter' },
            lousi: { title: 'AI Agent Lousi', tag: 'Kantonesisch', desc: 'Lernen Sie Kantonesisch mit einem live KI-Lehrer. Sprachchat und kamerabasierter Kontext inklusive.', chip1: 'Sprachchat', chip2: 'Kamerakont.', chip3: 'Kantonesisch', chip4: 'Flutter' },
            laoshi: { title: 'AI Agent Laoshi', tag: 'Mandarin', desc: 'Lernen Sie Mandarin mit einem live KI-Lehrer. Sprachchat und kamerabasierter Kontext inklusive.', chip1: 'Sprachchat', chip2: 'Kamerakont.', chip3: 'Mandarin', chip4: 'Flutter' },
            khru: { title: 'AI Agent Khru', tag: 'Thai', desc: 'Lernen Sie Thai mit einem live KI-Lehrer. Sprachchat und kamerabasierter Kontext inklusive.', chip1: 'Sprachchat', chip2: 'Kamerakont.', chip3: 'Thai', chip4: 'Flutter' },
            coin: { title: 'Coin Identifier', tag: 'KI-Scanner', desc: 'KI-gest\u00fctzte M\u00fcnzscanner-App f\u00fcr Sammler. M\u00fcnzen sofort identifizieren, Marktwerte sch\u00e4tzen und Ihre Sammlung katalogisieren.', chip1: 'KI-Vision', chip2: 'Bewertung', chip3: 'Seltenheit', chip4: 'Katalog', chip5: 'Flutter' }
        },
        cta: { title: 'App-Idee?', text: 'Ich baue KI-native Mobile Apps vom Konzept bis in den Store. Lassen Sie uns Ihre Vision umsetzen.', btnPrimary: 'Kontaktieren', btnSecondary: 'Zur\u00fcck zur Startseite' },
        footer: { tagline: 'Produkte bauen, die einen Unterschied machen.', home: 'Startseite', about: '\u00dcber', skills: 'F\u00e4higkeiten', aiApps: 'KI Apps', contact: 'Kontakt', chinese: 'Chinesisch lernen', cantonese: 'Kantonesisch lernen', ukrainian: 'Ukrainisch lernen', coin: 'Coin Identifier', copyright: '\u00a9 2026 Carlier. Alle Rechte vorbehalten.', crafted: 'Mit Leidenschaft erstellt' }
    },
    es: {
        skipToMain: 'Saltar al contenido principal',
        nav: { home: 'Inicio', about: 'Sobre', skills: 'Habilidades', aiApps: 'Apps IA', cta: 'Hablemos' },
        hero: { eyebrow: 'Apps M\u00f3viles', title: 'Experiencias M\u00f3viles con IA', subtitle: 'Una suite creciente de apps inteligentes en Flutter \u2014 tutores de idiomas, esc\u00e1neres de monedas y m\u00e1s.', stat1Label: 'Apps en vivo', stat2Label: 'Idiomas', stat3Label: '100\u00a0% IA' },
        grid: { tag: 'Todas las Apps', title: 'Explorar la Colecci\u00f3n' },
        apps: {
            getOnPlay: 'Obtener en Google Play', tagMobile: 'App M\u00f3vil', tagAiTutor: 'Tutor IA', tagAiScanner: 'Esc\u00e1ner IA', tagFeatured: 'Destacada',
            vchytel: { title: 'AI Agent Vchytel', tag: 'Ucraniano', desc: 'Aprende ucraniano, practica conversaciones reales y traduce en tiempo real con un tutor IA ucraniano en vivo. Chat de voz, contexto de c\u00e1mara y traducci\u00f3n instant\u00e1nea.', chip1: 'Chat de voz', chip2: 'Contexto c\u00e1m.', chip3: 'Traducci\u00f3n', chip4: 'Flutter' },
            lousi: { title: 'AI Agent Lousi', tag: 'Canton\u00e9s', desc: 'Aprende canton\u00e9s con un tutor IA en vivo. Chat de voz y contexto de c\u00e1mara incluidos.', chip1: 'Chat de voz', chip2: 'Contexto c\u00e1m.', chip3: 'Canton\u00e9s', chip4: 'Flutter' },
            laoshi: { title: 'AI Agent Laoshi', tag: 'Mandarin', desc: 'Aprende mandarin con un tutor IA en vivo. Chat de voz y contexto de c\u00e1mara incluidos.', chip1: 'Chat de voz', chip2: 'Contexto c\u00e1m.', chip3: 'Mandarin', chip4: 'Flutter' },
            khru: { title: 'AI Agent Khru', tag: 'Tailand\u00e9s', desc: 'Aprende tailand\u00e9s con un tutor IA en vivo. Chat de voz y contexto de c\u00e1mara incluidos.', chip1: 'Chat de voz', chip2: 'Contexto c\u00e1m.', chip3: 'Tailand\u00e9s', chip4: 'Flutter' },
            coin: { title: 'Coin Identifier', tag: 'Esc\u00e1ner IA', desc: 'App de esc\u00e1ner de monedas con IA para coleccionistas. Identifica monedas al instante, estima valores y cataloga tu colecci\u00f3n.', chip1: 'Visi\u00f3n IA', chip2: 'Valoraci\u00f3n', chip3: 'Rareza', chip4: 'Cat\u00e1logo', chip5: 'Flutter' }
        },
        cta: { title: '\u00bfTienes idea de app?', text: 'Construyo apps m\u00f3viles nativas de IA del concepto al store. Transformemos tu visi\u00f3n en producto.', btnPrimary: 'Cont\u00e1ctame', btnSecondary: 'Volver al inicio' },
        footer: { tagline: 'Construyendo productos que marcan la diferencia.', home: 'Inicio', about: 'Sobre', skills: 'Habilidades', aiApps: 'Apps IA', contact: 'Contacto', chinese: 'Aprender Chino', cantonese: 'Aprender Canton\u00e9s', ukrainian: 'Aprender Ucraniano', coin: 'Coin Identifier', copyright: '\u00a9 2026 Carlier. Todos los derechos reservados.', crafted: 'Creado con pasi\u00f3n' }
    },
    pt: {
        skipToMain: 'Saltar para o conte\u00fado principal',
        nav: { home: 'In\u00edcio', about: 'Sobre', skills: 'Compet\u00eancias', aiApps: 'Apps IA', cta: 'Fale Comigo' },
        hero: { eyebrow: 'Apps M\u00f3veis', title: 'Experi\u00eancias M\u00f3veis com IA', subtitle: 'Uma suite crescente de apps inteligentes em Flutter \u2014 tutores de idiomas, scanners de moedas e mais.', stat1Label: 'Apps a correr', stat2Label: 'Idiomas', stat3Label: '100\u00a0% IA' },
        grid: { tag: 'Todas as Apps', title: 'Explorar a Cole\u00e7\u00e3o' },
        apps: {
            getOnPlay: 'Obter no Google Play', tagMobile: 'App M\u00f3vel', tagAiTutor: 'Tutor IA', tagAiScanner: 'Scanner IA', tagFeatured: 'Destaque',
            vchytel: { title: 'AI Agent Vchytel', tag: 'Ucraniano', desc: 'Aprenda ucraniano, pratique conversas reais e traduza em tempo real com um tutor IA ucraniano. Chat de voz, contexto de c\u00e2mara e tradu\u00e7\u00e3o instant\u00e2nea.', chip1: 'Chat de voz', chip2: 'Contexto c\u00e2m.', chip3: 'Tradu\u00e7\u00e3o', chip4: 'Flutter' },
            lousi: { title: 'AI Agent Lousi', tag: 'Cantons', desc: 'Aprenda cantons com um tutor IA. Chat de voz e contexto de c\u00e2mara inclu\u00eddos.', chip1: 'Chat de voz', chip2: 'Contexto c\u00e2m.', chip3: 'Cantons', chip4: 'Flutter' },
            laoshi: { title: 'AI Agent Laoshi', tag: 'Mandarim', desc: 'Aprenda mandarim com um tutor IA. Chat de voz e contexto de c\u00e2mara inclu\u00eddos.', chip1: 'Chat de voz', chip2: 'Contexto c\u00e2m.', chip3: 'Mandarim', chip4: 'Flutter' },
            khru: { title: 'AI Agent Khru', tag: 'Tailand\u00eas', desc: 'Aprenda tailand\u00eas com um tutor IA. Chat de voz e contexto de c\u00e2mara inclu\u00eddos.', chip1: 'Chat de voz', chip2: 'Contexto c\u00e2m.', chip3: 'Tailand\u00eas', chip4: 'Flutter' },
            coin: { title: 'Coin Identifier', tag: 'Scanner IA', desc: 'App de scanner de moedas com IA para colecionadores. Identifique moedas instantaneamente, estime valores e cataloge a sua cole\u00e7\u00e3o.', chip1: 'Vis\u00e3o IA', chip2: 'Valoriza\u00e7\u00e3o', chip3: 'Raridade', chip4: 'Cat\u00e1logo', chip5: 'Flutter' }
        },
        cta: { title: 'Tem ideia de app?', text: 'Construo apps m\u00f3veis IA do conceito at\u00e9 ao store. Vamos transformar a sua vis\u00e3o em produto.', btnPrimary: 'Contacte-me', btnSecondary: 'Voltar ao in\u00edcio' },
        footer: { tagline: 'A construir produtos que fazem a diferen\u00e7a.', home: 'In\u00edcio', about: 'Sobre', skills: 'Compet\u00eancias', aiApps: 'Apps IA', contact: 'Contacto', chinese: 'Aprender Chin\u00eas', cantonese: 'Aprender Cantons', ukrainian: 'Aprender Ucraniano', coin: 'Coin Identifier', copyright: '\u00a9 2026 Carlier. Todos os direitos reservados.', crafted: 'Criado com paix\u00e3o' }
    },
    it: {
        skipToMain: 'Vai al contenuto principale',
        nav: { home: 'Home', about: 'Chi sono', skills: 'Competenze', aiApps: 'App IA', cta: 'Parliamone' },
        hero: { eyebrow: 'App Mobile', title: 'Esperienze Mobile con l\u2019IA', subtitle: 'Una suite crescente di app intelligenti in Flutter \u2014 tutor linguistici, scanner di monete e altro.', stat1Label: 'App Live', stat2Label: 'Lingue', stat3Label: '100\u00a0% IA' },
        grid: { tag: 'Tutte le App', title: 'Sfoglia la Collezione' },
        apps: {
            getOnPlay: 'Scarica su Google Play', tagMobile: 'App Mobile', tagAiTutor: 'Tutor IA', tagAiScanner: 'Scanner IA', tagFeatured: 'In evidenza',
            vchytel: { title: 'AI Agent Vchytel', tag: 'Ucraino', desc: 'Impara l\u2019ucraino, pratica conversazioni reali e traduci in tempo reale con un tutor IA ucraino in diretta. Chat vocale, contesto fotocamera e traduzione istantanea.', chip1: 'Chat Vocale', chip2: 'Contesto Cam.', chip3: 'Traduzione', chip4: 'Flutter' },
            lousi: { title: 'AI Agent Lousi', tag: 'Cantonese', desc: 'Impara il cantonese con un tutor IA in diretta. Chat vocale e contesto fotocamera inclusi.', chip1: 'Chat Vocale', chip2: 'Contesto Cam.', chip3: 'Cantonese', chip4: 'Flutter' },
            laoshi: { title: 'AI Agent Laoshi', tag: 'Mandarino', desc: 'Impara il mandarino con un tutor IA in diretta. Chat vocale e contesto fotocamera inclusi.', chip1: 'Chat Vocale', chip2: 'Contesto Cam.', chip3: 'Mandarino', chip4: 'Flutter' },
            khru: { title: 'AI Agent Khru', tag: 'Tailandese', desc: 'Impara il tailandese con un tutor IA in diretta. Chat vocale e contesto fotocamera inclusi.', chip1: 'Chat Vocale', chip2: 'Contesto Cam.', chip3: 'Tailandese', chip4: 'Flutter' },
            coin: { title: 'Coin Identifier', tag: 'Scanner IA', desc: 'App scanner di monete con IA per collezionisti. Identifica monete istantaneamente, stima valori e cataloga la tua collezione.', chip1: 'Visione IA', chip2: 'Valutazione', chip3: 'Rarit\u00e0', chip4: 'Catalogo', chip5: 'Flutter' }
        },
        cta: { title: 'Hai un\u2019idea di app?', text: 'Costruisco app mobile IA dal concetto allo store. Trasformiamo la tua visione in un prodotto.', btnPrimary: 'Contattami', btnSecondary: 'Torna alla Home' },
        footer: { tagline: 'Costruire prodotti che fanno la differenza.', home: 'Home', about: 'Chi sono', skills: 'Competenze', aiApps: 'App IA', contact: 'Contatto', chinese: 'Impara il Cinese', cantonese: 'Impara il Cantonese', ukrainian: 'Impara l\u2019Ucraino', coin: 'Coin Identifier', copyright: '\u00a9 2026 Carlier. Tutti i diritti riservati.', crafted: 'Creato con passione' }
    },
    uk: {
        skipToMain: '\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043e \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0433\u043e \u0432\u043c\u0456\u0441\u0442\u0443',
        nav: { home: '\u0413\u043e\u043b\u043e\u0432\u043d\u0430', about: '\u041f\u0440\u043e \u043c\u0435\u043d\u0435', skills: '\u041d\u0430\u0432\u0438\u0447\u043a\u0438', aiApps: '\u0428\u0406 \u0414\u043e\u0434\u0430\u0442\u043a\u0438', cta: '\u0417\u0432\u2019\u044f\u0437\u0430\u0442\u0438\u0441\u044f' },
        hero: { eyebrow: '\u041c\u043e\u0431\u0456\u043b\u044c\u043d\u0456 \u0414\u043e\u0434\u0430\u0442\u043a\u0438', title: '\u041c\u043e\u0431\u0456\u043b\u044c\u043d\u0456 \u0414\u043e\u0434\u0430\u0442\u043a\u0438 \u043d\u0430 \u041e\u0441\u043d\u043e\u0432\u0456 \u0428\u0406', subtitle: '\u041a\u043e\u043b\u0435\u043a\u0446\u0456\u044f \u0456\u043d\u0442\u0435\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0438\u0445 \u0434\u043e\u0434\u0430\u0442\u043a\u0456\u0432 \u043d\u0430 Flutter \u2014 \u0440\u0435\u043f\u0435\u0442\u0438\u0442\u043e\u0440\u0438, \u0441\u043a\u0430\u043d\u0435\u0440\u0438 \u0442\u0430 \u0456\u043d\u0448\u0435.', stat1Label: '\u0414\u043e\u0434\u0430\u0442\u043a\u0456\u0432', stat2Label: '\u041c\u043e\u0432', stat3Label: '100\u00a0% \u0428\u0406' },
        grid: { tag: '\u0423\u0441\u0456 \u0414\u043e\u0434\u0430\u0442\u043a\u0438', title: '\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u041a\u043e\u043b\u0435\u043a\u0446\u0456\u044e' },
        apps: {
            getOnPlay: '\u041e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0432 Google Play', tagMobile: '\u041c\u043e\u0431\u0456\u043b\u044c\u043d\u0438\u0439 \u0434\u043e\u0434\u0430\u0442\u043e\u043a', tagAiTutor: '\u0428\u0406 \u0440\u0435\u043f\u0435\u0442\u0438\u0442\u043e\u0440', tagAiScanner: '\u0428\u0406 \u0441\u043a\u0430\u043d\u0435\u0440', tagFeatured: '\u041e\u0441\u043e\u0431\u043b\u0438\u0432\u0438\u0439',
            vchytel: { title: 'AI Agent Vchytel', tag: '\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430', desc: '\u0412\u0447\u0456\u0442\u044c \u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0443, \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u0439\u0442\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u0456 \u0440\u043e\u0437\u043c\u043e\u0432\u0438 \u0442\u0430 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0430\u0439\u0442\u0435 \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u0447\u0430\u0441\u0456 \u0437 \u0436\u0438\u0432\u0438\u043c \u0428\u0406-\u0432\u0447\u0438\u0442\u0435\u043b\u0435\u043c. \u0413\u043e\u043b\u043e\u0441\u043e\u0432\u0438\u0439 \u0447\u0430\u0442, \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u043a\u0430\u043c\u0435\u0440\u0438 \u0442\u0430 \u043c\u0438\u0442\u0442\u0454\u0432\u0438\u0439 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434.', chip1: '\u0413\u043e\u043b\u043e\u0441. \u0447\u0430\u0442', chip2: '\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442', chip3: '\u041f\u0435\u0440\u0435\u043a\u043b\u0430\u0434', chip4: 'Flutter' },
            lousi: { title: 'AI Agent Lousi', tag: '\u041a\u0430\u043d\u0442\u043e\u043d\u0441\u044c\u043a\u0430', desc: '\u0412\u0447\u0456\u0442\u044c \u043a\u0430\u043d\u0442\u043e\u043d\u0441\u044c\u043a\u0443 \u0437 \u0436\u0438\u0432\u0438\u043c \u0428\u0406-\u0432\u0447\u0438\u0442\u0435\u043b\u0435\u043c.', chip1: '\u0413\u043e\u043b\u043e\u0441. \u0447\u0430\u0442', chip2: '\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442', chip3: '\u041a\u0430\u043d\u0442\u043e\u043d\u0441\u044c\u043a\u0430', chip4: 'Flutter' },
            laoshi: { title: 'AI Agent Laoshi', tag: '\u041c\u0430\u043d\u0434\u0430\u0440\u0438\u043d', desc: '\u0412\u0447\u0456\u0442\u044c \u043c\u0430\u043d\u0434\u0430\u0440\u0438\u043d \u0437 \u0436\u0438\u0432\u0438\u043c \u0428\u0406-\u0432\u0447\u0438\u0442\u0435\u043b\u0435\u043c.', chip1: '\u0413\u043e\u043b\u043e\u0441. \u0447\u0430\u0442', chip2: '\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442', chip3: '\u041c\u0430\u043d\u0434\u0430\u0440\u0438\u043d', chip4: 'Flutter' },
            khru: { title: 'AI Agent Khru', tag: '\u0422\u0430\u0439\u0441\u044c\u043a\u0430', desc: '\u0412\u0447\u0456\u0442\u044c \u0442\u0430\u0439\u0441\u044c\u043a\u0443 \u0437 \u0436\u0438\u0432\u0438\u043c \u0428\u0406-\u0432\u0447\u0438\u0442\u0435\u043b\u0435\u043c.', chip1: '\u0413\u043e\u043b\u043e\u0441. \u0447\u0430\u0442', chip2: '\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442', chip3: '\u0422\u0430\u0439\u0441\u044c\u043a\u0430', chip4: 'Flutter' },
            coin: { title: 'Coin Identifier', tag: '\u0428\u0406 \u0441\u043a\u0430\u043d\u0435\u0440', desc: '\u0414\u043e\u0434\u0430\u0442\u043e\u043a-\u0441\u043a\u0430\u043d\u0435\u0440 \u043c\u043e\u043d\u0435\u0442 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 \u0428\u0406 \u0434\u043b\u044f \u043a\u043e\u043b\u0435\u043a\u0446\u0456\u043e\u043d\u0435\u0440\u0456\u0432. \u041c\u0438\u0442\u0442\u0454\u0432\u0430 \u0456\u0434\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0446\u0456\u044f, \u043e\u0446\u0456\u043d\u043a\u0430 \u0432\u0430\u0440\u0442\u043e\u0441\u0442\u0456 \u0442\u0430 \u043a\u0430\u0442\u0430\u043b\u043e\u0433.', chip1: '\u0428\u0406 \u0437\u0456\u0440', chip2: '\u041e\u0446\u0456\u043d\u043a\u0430', chip3: '\u0420\u0456\u0434\u043a\u0456\u0441\u0442\u044c', chip4: '\u041a\u0430\u0442\u0430\u043b\u043e\u0433', chip5: 'Flutter' }
        },
        cta: { title: '\u0454 \u0456\u0434\u0435\u044f \u0434\u043e\u0434\u0430\u0442\u043a\u0430?', text: '\u042f \u0441\u0442\u0432\u043e\u0440\u044e\u044e \u0448\u0406-\u043d\u0430\u0442\u0438\u0432\u043d\u0456 \u043c\u043e\u0431\u0456\u043b\u044c\u043d\u0456 \u0434\u043e\u0434\u0430\u0442\u043a\u0438 \u0432\u0456\u0434 \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0456\u0457 \u0434\u043e \u0441\u0442\u043e\u0440\u0443. \u041f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u0438\u043c\u043e \u0432\u0430\u0448\u0443 \u0432\u0456\u0437\u0456\u044e \u043d\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0442.', btnPrimary: '\u0417\u0432\u2019\u044f\u0437\u0430\u0442\u0438\u0441\u044f', btnSecondary: '\u041d\u0430 \u0413\u043e\u043b\u043e\u0432\u043d\u0443' },
        footer: { tagline: '\u0421\u0442\u0432\u043e\u0440\u044e\u044e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0438, \u044f\u043a\u0456 \u0437\u043c\u0456\u043d\u044e\u044e\u0442\u044c \u0441\u0432\u0456\u0442.', home: '\u0413\u043e\u043b\u043e\u0432\u043d\u0430', about: '\u041f\u0440\u043e \u043c\u0435\u043d\u0435', skills: '\u041d\u0430\u0432\u0438\u0447\u043a\u0438', aiApps: '\u0428\u0406 \u0414\u043e\u0434\u0430\u0442\u043a\u0438', contact: '\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438', chinese: '\u0412\u0447\u0438\u0442\u0438\u0441\u044c \u043a\u0438\u0442\u0430\u0439\u0441\u044c\u043a\u043e\u044e', cantonese: '\u0412\u0447\u0438\u0442\u0438\u0441\u044c \u043a\u0430\u043d\u0442\u043e\u043d\u0441\u044c\u043a\u043e\u044e', ukrainian: '\u0412\u0447\u0438\u0442\u0438\u0441\u044c \u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u043e\u044e', coin: 'Coin Identifier', copyright: '\u00a9 2026 Carlier. \u0423\u0441\u0456 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043d\u0456.', crafted: '\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043e \u0437 \u043f\u0440\u0438\u0441\u0442\u0440\u0430\u0441\u0442\u044e' }
    },
    ru: {
        skipToMain: '\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c\u0443 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c\u0443',
        nav: { home: '\u0413\u043b\u0430\u0432\u043d\u0430\u044f', about: '\u041e \u0441\u0435\u0431\u0435', skills: '\u041d\u0430\u0432\u044b\u043a\u0438', aiApps: '\u0418\u0418 \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f', cta: '\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043f\u043e\u0433\u043e\u0432\u043e\u0440\u0438\u043c' },
        hero: { eyebrow: '\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0435 \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f', title: '\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0435 \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043d\u0430 \u041e\u0441\u043d\u043e\u0432\u0435 \u0418\u0418', subtitle: '\u041d\u0430\u0431\u043e\u0440 \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0445 Flutter-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u2014 \u044f\u0437\u044b\u043a\u043e\u0432\u044b\u0435 \u0440\u0435\u043f\u0435\u0442\u0438\u0442\u043e\u0440\u044b, \u0441\u043a\u0430\u043d\u0435\u0440\u044b \u043c\u043e\u043d\u0435\u0442 \u0438 \u0434\u0440\u0443\u0433\u043e\u0435.', stat1Label: '\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439', stat2Label: '\u042f\u0437\u044b\u043a\u043e\u0432', stat3Label: '100\u00a0% \u0418\u0418' },
        grid: { tag: '\u0412\u0441\u0435 \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f', title: '\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044e' },
        apps: {
            getOnPlay: '\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0432 Google Play', tagMobile: '\u041c\u043e\u0431. \u043f\u0440\u0438\u043b.', tagAiTutor: '\u0418\u0418-\u0440\u0435\u043f\u0435\u0442\u0438\u0442\u043e\u0440', tagAiScanner: '\u0418\u0418-\u0441\u043a\u0430\u043d\u0435\u0440', tagFeatured: '\u041e\u0441\u043e\u0431\u043e\u0435',
            vchytel: { title: 'AI Agent Vchytel', tag: '\u0423\u043a\u0440\u0430\u0438\u043d\u0441\u043a\u0438\u0439', desc: '\u0423\u0447\u0438\u0442\u0435 \u0443\u043a\u0440\u0430\u0438\u043d\u0441\u043a\u0438\u0439, \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u0439\u0442\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0435 \u0440\u0430\u0437\u0433\u043e\u0432\u043e\u0440\u044b \u0438 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u0442\u0435 \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0441 \u0436\u0438\u0432\u044b\u043c \u0418\u0418-\u0443\u0447\u0438\u0442\u0435\u043b\u0435\u043c.', chip1: '\u0413\u043e\u043b\u043e\u0441. \u0447\u0430\u0442', chip2: '\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442', chip3: '\u041f\u0435\u0440\u0435\u0432\u043e\u0434', chip4: 'Flutter' },
            lousi: { title: 'AI Agent Lousi', tag: '\u041a\u0430\u043d\u0442\u043e\u043d\u0441\u043a\u0438\u0439', desc: '\u0423\u0447\u0438\u0442\u0435 \u043a\u0430\u043d\u0442\u043e\u043d\u0441\u043a\u0438\u0439 \u0441 \u0436\u0438\u0432\u044b\u043c \u0418\u0418-\u0443\u0447\u0438\u0442\u0435\u043b\u0435\u043c.', chip1: '\u0413\u043e\u043b\u043e\u0441. \u0447\u0430\u0442', chip2: '\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442', chip3: '\u041a\u0430\u043d\u0442\u043e\u043d\u0441\u043a\u0438\u0439', chip4: 'Flutter' },
            laoshi: { title: 'AI Agent Laoshi', tag: '\u041c\u0430\u043d\u0434\u0430\u0440\u0438\u043d', desc: '\u0423\u0447\u0438\u0442\u0435 \u043c\u0430\u043d\u0434\u0430\u0440\u0438\u043d \u0441 \u0436\u0438\u0432\u044b\u043c \u0418\u0418-\u0443\u0447\u0438\u0442\u0435\u043b\u0435\u043c.', chip1: '\u0413\u043e\u043b\u043e\u0441. \u0447\u0430\u0442', chip2: '\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442', chip3: '\u041c\u0430\u043d\u0434\u0430\u0440\u0438\u043d', chip4: 'Flutter' },
            khru: { title: 'AI Agent Khru', tag: '\u0422\u0430\u0439\u0441\u043a\u0438\u0439', desc: '\u0423\u0447\u0438\u0442\u0435 \u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u0441 \u0436\u0438\u0432\u044b\u043c \u0418\u0418-\u0443\u0447\u0438\u0442\u0435\u043b\u0435\u043c.', chip1: '\u0413\u043e\u043b\u043e\u0441. \u0447\u0430\u0442', chip2: '\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442', chip3: '\u0422\u0430\u0439\u0441\u043a\u0438\u0439', chip4: 'Flutter' },
            coin: { title: 'Coin Identifier', tag: '\u0418\u0418-\u0441\u043a\u0430\u043d\u0435\u0440', desc: '\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043c\u043e\u043d\u0435\u0442 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0418\u0418 \u0434\u043b\u044f \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u043e\u043d\u0435\u0440\u043e\u0432.', chip1: '\u0418\u0418-\u0437\u0440\u0435\u043d\u0438\u0435', chip2: '\u041e\u0446\u0435\u043d\u043a\u0430', chip3: '\u0420\u0435\u0434\u043a\u043e\u0441\u0442\u044c', chip4: '\u041a\u0430\u0442\u0430\u043b\u043e\u0433', chip5: 'Flutter' }
        },
        cta: { title: '\u0415\u0441\u0442\u044c \u0438\u0434\u0435\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f?', text: '\u042f \u0441\u043e\u0437\u0434\u0430\u044e \u0418\u0418-\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0435 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043e\u0442 \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0438 \u0434\u043e \u0441\u0442\u043e\u0440\u0430. \u041f\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u043c \u0432\u0430\u0448\u0443 \u0438\u0434\u0435\u044e \u0432 \u043f\u0440\u043e\u0434\u0443\u043a\u0442.', btnPrimary: '\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f', btnSecondary: '\u041d\u0430 \u0413\u043b\u0430\u0432\u043d\u0443\u044e' },
        footer: { tagline: '\u0421\u043e\u0437\u0434\u0430\u044e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u0435\u043d\u044f\u044e\u0442 \u043c\u0438\u0440.', home: '\u0413\u043b\u0430\u0432\u043d\u0430\u044f', about: '\u041e \u0441\u0435\u0431\u0435', skills: '\u041d\u0430\u0432\u044b\u043a\u0438', aiApps: '\u0418\u0418 \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f', contact: '\u041a\u043e\u043d\u0442\u0430\u043a\u0442', chinese: '\u0423\u0447\u0438\u0442\u044c \u043a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439', cantonese: '\u0423\u0447\u0438\u0442\u044c \u043a\u0430\u043d\u0442\u043e\u043d\u0441\u043a\u0438\u0439', ukrainian: '\u0423\u0447\u0438\u0442\u044c \u0443\u043a\u0440\u0430\u0438\u043d\u0441\u043a\u0438\u0439', coin: 'Coin Identifier', copyright: '\u00a9 2026 Carlier. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b.', crafted: '\u0421\u043e\u0437\u0434\u0430\u043d\u043e \u0441 \u043b\u044e\u0431\u043e\u0432\u044c\u044e' }
    },
    th: {
        skipToMain: '\u0e02\u0e49\u0e32\u0e21\u0e44\u0e1b\u0e22\u0e31\u0e07\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32\u0e2b\u0e25\u0e31\u0e01',
        nav: { home: '\u0e2b\u0e19\u0e49\u0e32\u0e41\u0e23\u0e01', about: '\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a', skills: '\u0e17\u0e31\u0e01\u0e29\u0e30', aiApps: '\u0e41\u0e2d\u0e1b AI', cta: '\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e40\u0e23\u0e32' },
        hero: { eyebrow: '\u0e41\u0e2d\u0e1b\u0e21\u0e37\u0e2d\u0e16\u0e37\u0e2d', title: '\u0e1b\u0e23\u0e30\u0e2a\u0e1a\u0e01\u0e32\u0e23\u0e13\u0e4c\u0e21\u0e37\u0e2d\u0e16\u0e37\u0e2d\u0e14\u0e49\u0e27\u0e22 AI', subtitle: '\u0e41\u0e2d\u0e1b Flutter \u0e2d\u0e31\u0e08\u0e09\u0e23\u0e34\u0e22\u0e30 \u2014 \u0e15\u0e34\u0e27\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e40\u0e23\u0e35\u0e22\u0e19\u0e20\u0e32\u0e29\u0e32 \u0e2a\u0e41\u0e01\u0e19\u0e40\u0e2b\u0e23\u0e35\u0e22\u0e0d \u0e41\u0e25\u0e30\u0e2d\u0e37\u0e48\u0e19\u0e46', stat1Label: '\u0e41\u0e2d\u0e1b\u0e17\u0e35\u0e48\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19', stat2Label: '\u0e20\u0e32\u0e29\u0e32', stat3Label: '100\u00a0% AI' },
        grid: { tag: '\u0e41\u0e2d\u0e1b\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14', title: '\u0e40\u0e23\u0e35\u0e22\u0e01\u0e14\u0e39\u0e04\u0e2d\u0e25\u0e40\u0e25\u0e01\u0e0a\u0e31\u0e19' },
        apps: {
            getOnPlay: '\u0e14\u0e32\u0e27\u0e19\u0e4c\u0e42\u0e2b\u0e25\u0e14 Google Play', tagMobile: '\u0e41\u0e2d\u0e1b\u0e21\u0e37\u0e2d\u0e16\u0e37\u0e2d', tagAiTutor: 'AI \u0e15\u0e34\u0e27\u0e40\u0e15\u0e2d\u0e23\u0e4c', tagAiScanner: 'AI \u0e2a\u0e41\u0e01\u0e19\u0e40\u0e19\u0e2d\u0e23\u0e4c', tagFeatured: '\u0e40\u0e14\u0e48\u0e19',
            vchytel: { title: 'AI Agent Vchytel', tag: '\u0e22\u0e39\u0e40\u0e04\u0e23\u0e19', desc: '\u0e40\u0e23\u0e35\u0e22\u0e19\u0e20\u0e32\u0e29\u0e32\u0e22\u0e39\u0e40\u0e04\u0e23\u0e19, \u0e1d\u0e36\u0e01\u0e2a\u0e19\u0e17\u0e19\u0e32\u0e08\u0e23\u0e34\u0e07 \u0e41\u0e25\u0e30\u0e41\u0e1b\u0e25\u0e41\u0e1a\u0e1a\u0e40\u0e23\u0e35\u0e22\u0e25\u0e44\u0e17\u0e21\u0e4c\u0e01\u0e31\u0e1a\u0e04\u0e23\u0e39 AI.', chip1: '\u0e41\u0e0a\u0e17\u0e40\u0e2a\u0e35\u0e22\u0e07', chip2: '\u0e1a\u0e23\u0e34\u0e1a\u0e17', chip3: '\u0e41\u0e1b\u0e25\u0e20\u0e32\u0e29\u0e32', chip4: 'Flutter' },
            lousi: { title: 'AI Agent Lousi', tag: '\u0e01\u0e27\u0e32\u0e07\u0e15\u0e38\u0e49\u0e07', desc: '\u0e40\u0e23\u0e35\u0e22\u0e19\u0e20\u0e32\u0e29\u0e32\u0e01\u0e27\u0e32\u0e07\u0e15\u0e38\u0e49\u0e07\u0e01\u0e31\u0e1a\u0e04\u0e23\u0e39 AI \u0e2a\u0e14.', chip1: '\u0e41\u0e0a\u0e17\u0e40\u0e2a\u0e35\u0e22\u0e07', chip2: '\u0e1a\u0e23\u0e34\u0e1a\u0e17', chip3: '\u0e01\u0e27\u0e32\u0e07\u0e15\u0e38\u0e49\u0e07', chip4: 'Flutter' },
            laoshi: { title: 'AI Agent Laoshi', tag: '\u0e20\u0e32\u0e29\u0e32\u0e08\u0e35\u0e19\u0e01\u0e25\u0e32\u0e07', desc: '\u0e40\u0e23\u0e35\u0e22\u0e19\u0e20\u0e32\u0e29\u0e32\u0e08\u0e35\u0e19\u0e01\u0e25\u0e32\u0e07\u0e01\u0e31\u0e1a\u0e04\u0e23\u0e39 AI \u0e2a\u0e14.', chip1: '\u0e41\u0e0a\u0e17\u0e40\u0e2a\u0e35\u0e22\u0e07', chip2: '\u0e1a\u0e23\u0e34\u0e1a\u0e17', chip3: '\u0e20\u0e32\u0e29\u0e32\u0e08\u0e35\u0e19', chip4: 'Flutter' },
            khru: { title: 'AI Agent Khru', tag: '\u0e44\u0e17\u0e22', desc: '\u0e40\u0e23\u0e35\u0e22\u0e19\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22\u0e01\u0e31\u0e1a\u0e04\u0e23\u0e39 AI \u0e2a\u0e14.', chip1: '\u0e41\u0e0a\u0e17\u0e40\u0e2a\u0e35\u0e22\u0e07', chip2: '\u0e1a\u0e23\u0e34\u0e1a\u0e17', chip3: '\u0e44\u0e17\u0e22', chip4: 'Flutter' },
            coin: { title: 'Coin Identifier', tag: 'AI \u0e2a\u0e41\u0e01\u0e19\u0e40\u0e19\u0e2d\u0e23\u0e4c', desc: '\u0e41\u0e2d\u0e1b\u0e2a\u0e41\u0e01\u0e19\u0e40\u0e2b\u0e23\u0e35\u0e22\u0e0d AI \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e19\u0e31\u0e01\u0e2a\u0e30\u0e2a\u0e21. \u0e23\u0e30\u0e1a\u0e38\u0e40\u0e2b\u0e23\u0e35\u0e22\u0e0d, \u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19\u0e21\u0e39\u0e25\u0e04\u0e48\u0e32 \u0e41\u0e25\u0e30\u0e08\u0e31\u0e14\u0e2b\u0e21\u0e27\u0e14\u0e2b\u0e21\u0e39\u0e48\u0e04\u0e2d\u0e25\u0e40\u0e25\u0e01\u0e0a\u0e31\u0e19.', chip1: 'AI Vision', chip2: '\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19\u0e21\u0e39\u0e25\u0e04\u0e48\u0e32', chip3: '\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e32\u0e22\u0e32\u0e01', chip4: '\u0e04\u0e30\u0e41\u0e19\u0e19', chip5: 'Flutter' }
        },
        cta: { title: '\u0e21\u0e35\u0e44\u0e2d\u0e40\u0e14\u0e35\u0e22\u0e41\u0e2d\u0e1b?', text: '\u0e1c\u0e21\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e41\u0e2d\u0e1b\u0e21\u0e37\u0e2d\u0e16\u0e37\u0e2d AI \u0e08\u0e32\u0e01\u0e41\u0e19\u0e27\u0e04\u0e34\u0e14\u0e16\u0e36\u0e07\u0e2a\u0e15\u0e2d\u0e23\u0e4c. \u0e21\u0e32\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e27\u0e34\u0e2a\u0e31\u0e22\u0e17\u0e31\u0e28\u0e19\u0e4c\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e40\u0e1b\u0e47\u0e19\u0e1c\u0e25\u0e34\u0e15\u0e20\u0e31\u0e13\u0e11\u0e4c\u0e01\u0e31\u0e19.', btnPrimary: '\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d', btnSecondary: '\u0e01\u0e25\u0e31\u0e1a\u0e2b\u0e19\u0e49\u0e32\u0e41\u0e23\u0e01' },
        footer: { tagline: '\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e1c\u0e25\u0e34\u0e15\u0e20\u0e31\u0e13\u0e11\u0e4c\u0e17\u0e35\u0e48\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e04\u0e27\u0e32\u0e21\u0e41\u0e15\u0e01\u0e15\u0e48\u0e32\u0e07.', home: '\u0e2b\u0e19\u0e49\u0e32\u0e41\u0e23\u0e01', about: '\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a', skills: '\u0e17\u0e31\u0e01\u0e29\u0e30', aiApps: '\u0e41\u0e2d\u0e1b AI', contact: '\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d', chinese: '\u0e40\u0e23\u0e35\u0e22\u0e19\u0e20\u0e32\u0e29\u0e32\u0e08\u0e35\u0e19', cantonese: '\u0e40\u0e23\u0e35\u0e22\u0e19\u0e01\u0e27\u0e32\u0e07\u0e15\u0e38\u0e49\u0e07', ukrainian: '\u0e40\u0e23\u0e35\u0e22\u0e19\u0e22\u0e39\u0e40\u0e04\u0e23\u0e19', coin: 'Coin Identifier', copyright: '\u00a9 2026 Carlier. \u0e2a\u0e07\u0e27\u0e19\u0e25\u0e34\u0e02\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c.', crafted: '\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e14\u0e49\u0e27\u0e22\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e25\u0e07\u0e43\u0e2b\u0e25' }
    },
    'zh-TW': {
        skipToMain: '\u8df3\u81f3\u4e3b\u8981\u5167\u5bb9',
        nav: { home: '\u9996\u9801', about: '\u95dc\u65bc', skills: '\u6280\u80fd', aiApps: 'AI \u61c9\u7528', cta: '\u806f\u7e6b\u6211' },
        hero: { eyebrow: '\u884c\u52d5\u61c9\u7528', title: 'AI \u9a45\u52d5\u7684\u884c\u52d5\u9ad4\u9a57', subtitle: '\u4e00\u5c55\u6301\u7e8c\u6210\u9577\u7684 Flutter \u667a\u80fd\u61c9\u7528\u5957\u4ef6\u2014\u8a9e\u8a00\u5bb6\u6559\u3001\u786c\u5e63\u6383\u63cf\u5668\u7b49\u3002', stat1Label: '\u61c9\u7528\u4e0a\u7dda', stat2Label: '\u8a9e\u8a00', stat3Label: '100\u00a0% AI' },
        grid: { tag: '\u6240\u6709\u61c9\u7528', title: '\u700f\u89bd\u5168\u90e8\u61c9\u7528' },
        apps: {
            getOnPlay: '\u5728 Google Play \u4e0b\u8f09', tagMobile: '\u884c\u52d5\u61c9\u7528', tagAiTutor: 'AI \u5c0e\u5e2b', tagAiScanner: 'AI \u6383\u63cf\u5668', tagFeatured: '\u7cbe\u9078',
            vchytel: { title: 'AI Agent Vchytel', tag: '\u70cf\u514b\u862d\u8a9e', desc: '\u5b78\u7fd2\u70cf\u514b\u862d\u8a9e\uff0c\u7df4\u7fd2\u771f\u5be6\u5c0d\u8a71\uff0c\u4e26\u8207\u5373\u6642 AI \u70cf\u514b\u862d\u8a9e\u8001\u5e2b\u9032\u884c\u5373\u6642\u7ffb\u8b6f\u3002\u8a9e\u97f3\u8064\u5929\u3001\u76f8\u6a5f\u4e0a\u4e0b\u6587\u53ca\u5373\u6642\u7ffb\u8b6f\u652f\u6301\u3002', chip1: '\u8a9e\u97f3\u804a\u5929', chip2: '\u76f8\u6a5f\u4e0a\u4e0b\u6587', chip3: '\u5373\u6642\u7ffb\u8b6f', chip4: 'Flutter' },
            lousi: { title: 'AI Agent Lousi', tag: '\u7cb5\u8a9e', desc: '\u5b78\u7fd2\u7cb5\u8a9e\uff0c\u8207 AI \u7cb5\u8a9e\u8001\u5e2b\u5373\u6642\u5c0d\u8a71\u3002', chip1: '\u8a9e\u97f3\u804a\u5929', chip2: '\u76f8\u6a5f\u4e0a\u4e0b\u6587', chip3: '\u7cb5\u8a9e', chip4: 'Flutter' },
            laoshi: { title: 'AI Agent Laoshi', tag: '\u666e\u901a\u8a71', desc: '\u5b78\u7fd2\u666e\u901a\u8a71\uff0c\u8207 AI \u666e\u901a\u8a71\u8001\u5e2b\u5373\u6642\u5c0d\u8a71\u3002', chip1: '\u8a9e\u97f3\u804a\u5929', chip2: '\u76f8\u6a5f\u4e0a\u4e0b\u6587', chip3: '\u666e\u901a\u8a71', chip4: 'Flutter' },
            khru: { title: 'AI Agent Khru', tag: '\u6cf0\u8a9e', desc: '\u5b78\u7fd2\u6cf0\u8a9e\uff0c\u8207 AI \u6cf0\u8a9e\u8001\u5e2b\u5373\u6642\u5c0d\u8a71\u3002', chip1: '\u8a9e\u97f3\u804a\u5929', chip2: '\u76f8\u6a5f\u4e0a\u4e0b\u6587', chip3: '\u6cf0\u8a9e', chip4: 'Flutter' },
            coin: { title: 'Coin Identifier', tag: 'AI \u6383\u63cf\u5668', desc: '\u6536\u85cf\u5bb6\u5c08\u7528 AI \u786c\u5e63\u6383\u63cf\u61c9\u7528\u3002\u5373\u6642\u8b58\u5225\u786c\u5e63\u3001\u4f30\u7b97\u5e02\u5834\u50f9\u503c\u4e26\u5efa\u7acb\u6578\u4f4d\u6536\u85cf\u76ee\u9304\u3002', chip1: 'AI \u8996\u89ba', chip2: '\u5e63\u5024\u4f30\u7b97', chip3: '\u7a00\u6709\u5ea6', chip4: '\u76ee\u9304', chip5: 'Flutter' }
        },
        cta: { title: '\u6709\u61c9\u7528\u60f3\u6cd5\uff1f', text: '\u6211\u5f9e\u6982\u5ff5\u5230\u5546\u5e97\u6253\u9020 AI \u539f\u751f\u884c\u52d5\u61c9\u7528\u3002\u8b93\u6211\u5011\u5c07\u60a8\u7684\u9858\u666f\u8b8a\u6210\u7522\u54c1\u3002', btnPrimary: '\u806f\u7e6b\u6211', btnSecondary: '\u8fd4\u56de\u9996\u9801' },
        footer: { tagline: '\u6253\u9020\u6539\u8b8a\u4e16\u754c\u7684\u7522\u54c1\u3002', home: '\u9996\u9801', about: '\u95dc\u65bc', skills: '\u6280\u80fd', aiApps: 'AI \u61c9\u7528', contact: '\u806f\u7e6b', chinese: '\u5b78\u7fd2\u4e2d\u6587', cantonese: '\u5b78\u7fd2\u7cb5\u8a9e', ukrainian: '\u5b78\u7fd2\u70cf\u514b\u862d\u8a9e', coin: 'Coin Identifier', copyright: '\u00a9 2026 Carlier. \u7248\u6b0a\u6240\u6709\u3002', crafted: '\u7528\u5fc3\u6253\u9020' }
    },
    'zh-CN': {
        skipToMain: '\u8df3\u81f3\u4e3b\u8981\u5185\u5bb9',
        nav: { home: '\u9996\u9875', about: '\u5173\u4e8e', skills: '\u6280\u80fd', aiApps: 'AI \u5e94\u7528', cta: '\u8054\u7cfb\u6211' },
        hero: { eyebrow: '\u79fb\u52a8\u5e94\u7528', title: 'AI \u9a71\u52a8\u7684\u79fb\u52a8\u4f53\u9a8c', subtitle: '\u4e00\u7cfb\u5217\u6301\u7eed\u6210\u957f\u7684 Flutter \u667a\u80fd\u5e94\u7528\u2014\u8bed\u8a00\u6559\u5e08\u3001\u786c\u5e01\u626b\u63cf\u5668\u7b49\u3002', stat1Label: '\u5e94\u7528\u4e0a\u7ebf', stat2Label: '\u8bed\u8a00', stat3Label: '100\u00a0% AI' },
        grid: { tag: '\u6240\u6709\u5e94\u7528', title: '\u6d4f\u89c8\u5168\u90e8\u5e94\u7528' },
        apps: {
            getOnPlay: '\u5728 Google Play \u4e0b\u8f7d', tagMobile: '\u79fb\u52a8\u5e94\u7528', tagAiTutor: 'AI \u5bfc\u5e08', tagAiScanner: 'AI \u626b\u63cf\u5668', tagFeatured: '\u7cbe\u9009',
            vchytel: { title: 'AI Agent Vchytel', tag: '\u4e4c\u514b\u5170\u8bed', desc: '\u5b66\u4e4c\u514b\u5170\u8bed\uff0c\u7ec3\u4e60\u771f\u5b9e\u5bf9\u8bdd\uff0c\u5e76\u4e0e\u5b9e\u65f6 AI \u4e4c\u514b\u5170\u8bed\u8001\u5e08\u5373\u65f6\u7ffb\u8bd1\u3002\u8bed\u97f3\u804a\u5929\u3001\u76f8\u673a\u4e0a\u4e0b\u6587\u548c\u5373\u65f6\u7ffb\u8bd1\u652f\u6301\u3002', chip1: '\u8bed\u97f3\u804a\u5929', chip2: '\u76f8\u673a\u4e0a\u4e0b\u6587', chip3: '\u5373\u65f6\u7ffb\u8bd1', chip4: 'Flutter' },
            lousi: { title: 'AI Agent Lousi', tag: '\u7ca4\u8bed', desc: '\u5b66\u4e60\u7ca4\u8bed\uff0c\u4e0e AI \u7ca4\u8bed\u8001\u5e2b\u5373\u65f6\u5bf9\u8bdd\u3002', chip1: '\u8bed\u97f3\u804a\u5929', chip2: '\u76f8\u673a\u4e0a\u4e0b\u6587', chip3: '\u7ca4\u8bed', chip4: 'Flutter' },
            laoshi: { title: 'AI Agent Laoshi', tag: '\u666e\u901a\u8bdd', desc: '\u5b66\u4e60\u666e\u901a\u8bdd\uff0c\u4e0e AI \u666e\u901a\u8bdd\u8001\u5e2b\u5373\u65f6\u5bf9\u8bdd\u3002', chip1: '\u8bed\u97f3\u804a\u5929', chip2: '\u76f8\u673a\u4e0a\u4e0b\u6587', chip3: '\u666e\u901a\u8bdd', chip4: 'Flutter' },
            khru: { title: 'AI Agent Khru', tag: '\u6cf0\u8bed', desc: '\u5b66\u4e60\u6cf0\u8bed\uff0c\u4e0e AI \u6cf0\u8bed\u8001\u5e2b\u5373\u65f6\u5bf9\u8bdd\u3002', chip1: '\u8bed\u97f3\u804a\u5929', chip2: '\u76f8\u673a\u4e0a\u4e0b\u6587', chip3: '\u6cf0\u8bed', chip4: 'Flutter' },
            coin: { title: 'Coin Identifier', tag: 'AI \u626b\u63cf\u5668', desc: '\u6536\u85cf\u5bb6\u4e13\u7528 AI \u786c\u5e01\u626b\u63cf\u5e94\u7528\u3002\u5373\u65f6\u8bc6\u522b\u786c\u5e01\u3001\u4f30\u7b97\u5e02\u573a\u4ef7\u503c\u5e76\u5efa\u7acb\u6570\u5b57\u6536\u85cf\u76ee\u5f55\u3002', chip1: 'AI \u89c6\u89c9', chip2: '\u5e01\u503c\u4f30\u7b97', chip3: '\u7a00\u6709\u5ea6', chip4: '\u76ee\u5f55', chip5: 'Flutter' }
        },
        cta: { title: '\u6709\u5e94\u7528\u60f3\u6cd5\uff1f', text: '\u6211\u4ece\u6982\u5ff5\u5230\u5e94\u7528\u5546\u5e97\u6253\u9020 AI \u539f\u751f\u79fb\u52a8\u5e94\u7528\u3002\u8ba9\u6211\u4eec\u5c06\u60a8\u7684\u613f\u666f\u53d8\u4e3a\u4ea7\u54c1\u3002', btnPrimary: '\u8054\u7cfb\u6211', btnSecondary: '\u8fd4\u56de\u9996\u9875' },
        footer: { tagline: '\u6253\u9020\u6539\u53d8\u4e16\u754c\u7684\u4ea7\u54c1\u3002', home: '\u9996\u9875', about: '\u5173\u4e8e', skills: '\u6280\u80fd', aiApps: 'AI \u5e94\u7528', contact: '\u8054\u7cfb', chinese: '\u5b66\u4e60\u4e2d\u6587', cantonese: '\u5b66\u4e60\u7ca4\u8bed', ukrainian: '\u5b66\u4e60\u4e4c\u514b\u5170\u8bed', coin: 'Coin Identifier', copyright: '\u00a9 2026 Carlier. \u7248\u6743\u6240\u6709\u3002', crafted: '\u7528\u5fc3\u6253\u9020' }
    },
    hi: {
        skipToMain: '\u092e\u0941\u0916\u094d\u092f \u0938\u093e\u092e\u0917\u094d\u0930\u0940 \u092a\u0930 \u091c\u093e\u090f\u0902',
        nav: { home: '\u0939\u094b\u092e', about: '\u092a\u0930\u093f\u091a\u092f', skills: '\u0915\u094c\u0936\u0932', aiApps: 'AI \u090f\u092a\u094d\u0938', cta: '\u0938\u0902\u092a\u0930\u094d\u0915 \u0915\u0930\u0947\u0902' },
        hero: { eyebrow: '\u092e\u094b\u092c\u093e\u0907\u0932 \u090f\u092a\u094d\u0938', title: 'AI-\u0938\u0902\u091a\u093e\u0932\u093f\u0924 \u092e\u094b\u092c\u093e\u0907\u0932 \u0905\u0928\u0941\u092d\u0935', subtitle: 'Flutter \u092a\u0930 \u092c\u0928\u0947 \u0938\u094d\u092e\u093e\u0930\u094d\u091f \u090f\u092a\u094d\u0938 \u0915\u093e \u092c\u0922\u093c\u0924\u093e \u0938\u0902\u0917\u094d\u0930\u0939 \u2014 \u092d\u093e\u0937\u093e \u0936\u093f\u0915\u094d\u0937\u0915, \u0938\u093f\u0915\u094d\u0915\u093e \u0938\u094d\u0915\u0948\u0928\u0930 \u0914\u0930 \u0905\u0927\u093f\u0915\u0964', stat1Label: '\u090f\u092a\u094d\u0938 \u0932\u093e\u0907\u0935', stat2Label: '\u092d\u093e\u0937\u093e\u090f\u0902', stat3Label: '100\u00a0% AI' },
        grid: { tag: '\u0938\u092d\u0940 \u090f\u092a\u094d\u0938', title: '\u0938\u0902\u0917\u094d\u0930\u0939 \u0926\u0947\u0916\u0947\u0902' },
        apps: {
            getOnPlay: 'Google Play \u092a\u0930 \u092a\u093e\u090f\u0902', tagMobile: '\u092e\u094b\u092c\u093e\u0907\u0932 \u090f\u092a', tagAiTutor: 'AI \u091f\u094d\u092f\u0942\u091f\u0930', tagAiScanner: 'AI \u0938\u094d\u0915\u0948\u0928\u0930', tagFeatured: '\u0935\u093f\u0936\u0947\u0937',
            vchytel: { title: 'AI Agent Vchytel', tag: '\u092f\u0942\u0915\u094d\u0930\u0947\u0928\u0940', desc: '\u092f\u0942\u0915\u094d\u0930\u0947\u0928\u0940 \u0938\u0940\u0916\u0947\u0902, \u0935\u093e\u0938\u094d\u0924\u0935\u093f\u0915 \u092c\u093e\u0924\u091a\u0940\u0924 \u0915\u0930\u0947\u0902 \u0914\u0930 AI \u0936\u093f\u0915\u094d\u0937\u0915 \u0915\u0947 \u0938\u093e\u0925 \u0930\u093f\u092f\u0932-\u091f\u093e\u0907\u092e \u092e\u0947\u0902 \u0905\u0928\u0941\u0935\u093e\u0926 \u0915\u0930\u0947\u0902\u0964', chip1: '\u0935\u0949\u092f\u0938 \u091a\u0948\u091f', chip2: '\u0915\u0948\u092e\u0930\u093e', chip3: '\u0905\u0928\u0941\u0935\u093e\u0926', chip4: 'Flutter' },
            lousi: { title: 'AI Agent Lousi', tag: '\u0915\u0948\u0928\u094d\u091f\u094b\u0928\u0940\u091c\u093c', desc: '\u0915\u0948\u0928\u094d\u091f\u094b\u0928\u0940\u091c\u093c AI \u0936\u093f\u0915\u094d\u0937\u0915 \u0938\u0947 \u0938\u0940\u0916\u0947\u0902\u0964', chip1: '\u0935\u0949\u092f\u0938 \u091a\u0948\u091f', chip2: '\u0915\u0948\u092e\u0930\u093e', chip3: '\u0915\u0948\u0928\u094d\u091f\u094b\u0928\u0940\u091c\u093c', chip4: 'Flutter' },
            laoshi: { title: 'AI Agent Laoshi', tag: '\u092e\u0902\u0926\u093e\u0930\u093f\u0928', desc: '\u092e\u0902\u0926\u093e\u0930\u093f\u0928 AI \u0936\u093f\u0915\u094d\u0937\u0915 \u0938\u0947 \u0938\u0940\u0916\u0947\u0902\u0964', chip1: '\u0935\u0949\u092f\u0938 \u091a\u0948\u091f', chip2: '\u0915\u0948\u092e\u0930\u093e', chip3: '\u092e\u0902\u0926\u093e\u0930\u093f\u0928', chip4: 'Flutter' },
            khru: { title: 'AI Agent Khru', tag: '\u0925\u093e\u0908', desc: '\u0925\u093e\u0908 AI \u0936\u093f\u0915\u094d\u0937\u0915 \u0938\u0947 \u0938\u0940\u0916\u0947\u0902\u0964', chip1: '\u0935\u0949\u092f\u0938 \u091a\u0948\u091f', chip2: '\u0915\u0948\u092e\u0930\u093e', chip3: '\u0925\u093e\u0908', chip4: 'Flutter' },
            coin: { title: 'Coin Identifier', tag: 'AI \u0938\u094d\u0915\u0948\u0928\u0930', desc: '\u0938\u0902\u0917\u094d\u0930\u0939\u0915\u0930\u094d\u0924\u093e\u0913\u0902 \u0915\u0947 \u0932\u093f\u090f AI \u0938\u093f\u0915\u094d\u0915\u093e \u0938\u094d\u0915\u0948\u0928\u0930\u0964 \u0924\u0941\u0930\u0902\u0924 \u092a\u0939\u091a\u093e\u0928\u0947\u0902, \u092e\u0942\u0932\u094d\u092f \u0905\u0928\u0941\u092e\u093e\u0928 \u0915\u0930\u0947\u0902 \u0914\u0930 \u0938\u0902\u0917\u094d\u0930\u0939 \u0915\u0948\u091f\u0932\u0949\u0917 \u092c\u0928\u093e\u090f\u0902\u0964', chip1: 'AI \u0926\u0943\u0937\u094d\u091f\u093f', chip2: '\u092e\u0942\u0932\u094d\u092f\u0928', chip3: '\u0926\u0941\u0930\u094d\u0932\u092d\u0924\u093e', chip4: '\u0915\u0948\u091f\u0932\u0949\u0917', chip5: 'Flutter' }
        },
        cta: { title: '\u090f\u092a \u0906\u0907\u0921\u093f\u092f\u093e \u0939\u0948?', text: '\u092e\u0948\u0902 \u0915\u0949\u0928\u094d\u0938\u0947\u092a\u094d\u091f \u0938\u0947 \u0938\u094d\u091f\u094b\u0930 \u0924\u0915 AI-\u0928\u0947\u091f\u093f\u0935 \u092e\u094b\u092c\u093e\u0907\u0932 \u090f\u092a\u094d\u0938 \u092c\u0928\u093e\u0924\u093e \u0939\u0942\u0902\u0964 \u0906\u092a\u0915\u0940 \u0926\u0943\u0937\u094d\u091f\u093f \u0915\u094b \u0909\u0924\u094d\u092a\u093e\u0926 \u092c\u0928\u093e\u090f\u0902\u0964', btnPrimary: '\u0938\u0902\u092a\u0930\u094d\u0915 \u0915\u0930\u0947\u0902', btnSecondary: '\u0939\u094b\u092e \u0935\u093e\u092a\u0938' },
        footer: { tagline: '\u092b\u0930\u094d\u0915 \u0915\u0930\u0928\u0947 \u0935\u093e\u0932\u0947 \u0909\u0924\u094d\u092a\u093e\u0926 \u092c\u0928\u093e\u0928\u093e\u0964', home: '\u0939\u094b\u092e', about: '\u092a\u0930\u093f\u091a\u092f', skills: '\u0915\u094c\u0936\u0932', aiApps: 'AI \u090f\u092a\u094d\u0938', contact: '\u0938\u0902\u092a\u0930\u094d\u0915', chinese: '\u091a\u0940\u0928\u0940 \u0938\u0940\u0916\u0947\u0902', cantonese: '\u0915\u0948\u0902\u091f\u094b\u0928\u0940\u091c\u093c \u0938\u0940\u0916\u0947\u0902', ukrainian: '\u092f\u0942\u0915\u094d\u0930\u0947\u0928\u0940 \u0938\u0940\u0916\u0947\u0902', coin: 'Coin Identifier', copyright: '\u00a9 2026 Carlier. \u0938\u0930\u094d\u0935\u093e\u0927\u093f\u0915\u093e\u0930 \u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924\u0964', crafted: '\u091c\u0941\u0928\u0942\u0928 \u0938\u0947 \u092c\u0928\u093e\u092f\u093e' }
    },
    ja: {
        skipToMain: '\u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u30b9\u30ad\u30c3\u30d7',
        nav: { home: '\u30db\u30fc\u30e0', about: '\u6982\u8981', skills: '\u30b9\u30ad\u30eb', aiApps: 'AI \u30a2\u30d7\u30ea', cta: '\u304a\u554f\u3044\u5408\u308f\u305b' },
        hero: { eyebrow: '\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea', title: 'AI\u30a6\u30fc\u30d7\u30ed\u30e2\u30d0\u30a4\u30eb\u4f53\u9a13', subtitle: 'Flutter\u3067\u4f5c\u3089\u308c\u305f\u30a4\u30f3\u30c6\u30ea\u30b8\u30a7\u30f3\u30c8\u306a\u30a2\u30d7\u30ea\u306e\u30b9\u30a4\u30fc\u30c8\u2014\u8a00\u8a9e\u30c1\u30e5\u30fc\u30bf\u30fc\u3001\u30b3\u30a4\u30f3\u30b9\u30ad\u30e3\u30ca\u30fc\u306a\u3069\u3002', stat1Label: '\u30a2\u30d7\u30ea\u516c\u958b\u4e2d', stat2Label: '\u8a00\u8a9e', stat3Label: '100\u00a0% AI' },
        grid: { tag: '\u5168\u30a2\u30d7\u30ea', title: '\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3092\u898b\u308b' },
        apps: {
            getOnPlay: 'Google Play\u3067\u5165\u624b', tagMobile: '\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea', tagAiTutor: 'AI\u30c1\u30e5\u30fc\u30bf\u30fc', tagAiScanner: 'AI\u30b9\u30ad\u30e3\u30ca\u30fc', tagFeatured: '\u6ce8\u76ee',
            vchytel: { title: 'AI Agent Vchytel', tag: '\u30a6\u30af\u30e9\u30a4\u30ca\u8a9e', desc: '\u30a6\u30af\u30e9\u30a4\u30ca\u8a9e\u3092\u5b66\u3073\u3001\u30ea\u30a2\u30eb\u306a\u4f1a\u8a71\u3092\u7df4\u7fd2\u3057\u3001AI\u6559\u5e2b\u3068\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u306b\u7ffb\u8a33\u3057\u307e\u3057\u3087\u3046\u3002', chip1: '\u97f3\u58f0\u30c1\u30e3\u30c3\u30c8', chip2: '\u30ab\u30e1\u30e9', chip3: '\u7ffb\u8a33', chip4: 'Flutter' },
            lousi: { title: 'AI Agent Lousi', tag: '\u5e83\u6771\u8a9e', desc: '\u5e83\u6771\u8a9e\u3092AI\u6559\u5e2b\u3068\u5b66\u3073\u307e\u3057\u3087\u3046\u3002', chip1: '\u97f3\u58f0\u30c1\u30e3\u30c3\u30c8', chip2: '\u30ab\u30e1\u30e9', chip3: '\u5e83\u6771\u8a9e', chip4: 'Flutter' },
            laoshi: { title: 'AI Agent Laoshi', tag: '\u5317\u4eac\u8a9e', desc: '\u5317\u4eac\u8a9e\u3092AI\u6559\u5e2b\u3068\u5b66\u3073\u307e\u3057\u3087\u3046\u3002', chip1: '\u97f3\u58f0\u30c1\u30e3\u30c3\u30c8', chip2: '\u30ab\u30e1\u30e9', chip3: '\u5317\u4eac\u8a9e', chip4: 'Flutter' },
            khru: { title: 'AI Agent Khru', tag: '\u30bf\u30a4\u8a9e', desc: '\u30bf\u30a4\u8a9e\u3092AI\u6559\u5e2b\u3068\u5b66\u3073\u307e\u3057\u3087\u3046\u3002', chip1: '\u97f3\u58f0\u30c1\u30e3\u30c3\u30c8', chip2: '\u30ab\u30e1\u30e9', chip3: '\u30bf\u30a4\u8a9e', chip4: 'Flutter' },
            coin: { title: 'Coin Identifier', tag: 'AI\u30b9\u30ad\u30e3\u30ca\u30fc', desc: '\u30b3\u30ec\u30af\u30bf\u30fc\u5411\u3051AI\u30b3\u30a4\u30f3\u30b9\u30ad\u30e3\u30ca\u30fc\u30a2\u30d7\u30ea\u3002\u30b3\u30a4\u30f3\u3092\u5373\u5ea7\u306b\u8b58\u5225\u3057\u3001\u5e02\u5834\u4fa1\u5024\u3092\u63a8\u5b9a\u3057\u3001\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3092\u30ab\u30bf\u30ed\u30b0\u5316\u3002', chip1: 'AI\u8996\u899a', chip2: '\u8a55\u4fa1', chip3: '\u30ec\u30a2\u30ea\u30c6\u30a3', chip4: '\u30ab\u30bf\u30ed\u30b0', chip5: 'Flutter' }
        },
        cta: { title: 'App\u306e\u30a2\u30a4\u30c7\u30a2\u306f\uff1f', text: '\u30b3\u30f3\u30bb\u30d7\u30c8\u304b\u3089\u30b9\u30c8\u30a2\u307e\u3067AI\u30cd\u30a4\u30c6\u30a3\u30d6\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3092\u4f5c\u308a\u307e\u3059\u3002\u3042\u306a\u305f\u306e\u30d3\u30b8\u30e7\u30f3\u3092\u88fd\u54c1\u306b\u5909\u3048\u307e\u3057\u3087\u3046\u3002', btnPrimary: '\u304a\u554f\u3044\u5408\u308f\u305b', btnSecondary: '\u30db\u30fc\u30e0\u306b\u623b\u308b' },
        footer: { tagline: '\u5909\u5316\u3092\u751f\u307f\u51fa\u3059\u88fd\u54c1\u3092\u4f5c\u308a\u307e\u3059\u3002', home: '\u30db\u30fc\u30e0', about: '\u6982\u8981', skills: '\u30b9\u30ad\u30eb', aiApps: 'AI \u30a2\u30d7\u30ea', contact: '\u304a\u554f\u3044\u5408\u308f\u305b', chinese: '\u4e2d\u8a9e\u3092\u5b66\u3076', cantonese: '\u5e83\u6771\u8a9e\u3092\u5b66\u3076', ukrainian: '\u30a6\u30af\u30e9\u30a4\u30ca\u8a9e\u3092\u5b66\u3076', coin: 'Coin Identifier', copyright: '\u00a9 2026 Carlier. All rights reserved.', crafted: '\u60c5\u71b1\u3092\u8fbc\u3081\u3066\u4f5c\u6210' }
    },
    ko: {
        skipToMain: '\uc8fc\uc694 \ucf58\ud150\uce20\ub85c \uac74\ub108\ub6f0\uae30',
        nav: { home: '\ud648', about: '\uc18c\uac1c', skills: '\uae30\uc220', aiApps: 'AI \uc571', cta: '\uc5f0\ub77d\ud558\uae30' },
        hero: { eyebrow: '\ubaa8\ubc14\uc77c \uc571', title: 'AI \uc9c0\uc6d0 \ubaa8\ubc14\uc77c \uacbd\ud5d8', subtitle: 'Flutter\ub85c \ub9cc\ub4e4\uc5b4\uc9c4 \uc9c0\ub2a5\ud615 \uc571 \ucf2c\ub809\uc158 \u2014 \uc5b8\uc5b4 \uad50\uc0ac, \ucf54\uc778 \uc2a4\uce90\ub108 \ub4f1.', stat1Label: '\uc571 \ub77c\uc774\ube0c', stat2Label: '\uc5b8\uc5b4', stat3Label: '100\u00a0% AI' },
        grid: { tag: '\ubaa8\ub4e0 \uc571', title: '\ucf2c\ub809\uc158 \uac80\uc0c9' },
        apps: {
            getOnPlay: 'Google Play\uc5d0\uc11c \ub2e4\uc6b4\ub85c\ub4dc', tagMobile: '\ubaa8\ubc14\uc77c \uc571', tagAiTutor: 'AI \ud29c\ud130', tagAiScanner: 'AI \uc2a4\uce90\ub108', tagFeatured: '\uc8fc\ubaa9',
            vchytel: { title: 'AI Agent Vchytel', tag: '\uc6b0\ud06c\ub77c\uc774\ub098\uc5b4', desc: '\uc6b0\ud06c\ub77c\uc774\ub098\uc5b4\ub97c \ubc30\uc6b0\uace0 AI \uc120\uc0dd\ub2d8\uacfc \uc2e4\uc2dc\uac04 \ub300\ud654\ub97c \uc5f0\uc2b5\ud558\uc138\uc694.', chip1: '\uc74c\uc131 \ucc44\ud305', chip2: '\uce74\uba54\ub77c', chip3: '\ubc88\uc5ed', chip4: 'Flutter' },
            lousi: { title: 'AI Agent Lousi', tag: '\uad11\ub3d9\uc5b4', desc: 'AI \uc120\uc0dd\ub2d8\uacfc \uad11\ub3d9\uc5b4\ub97c \ubc30\uc6b0\uc138\uc694.', chip1: '\uc74c\uc131 \ucc44\ud305', chip2: '\uce74\uba54\ub77c', chip3: '\uad11\ub3d9\uc5b4', chip4: 'Flutter' },
            laoshi: { title: 'AI Agent Laoshi', tag: '\ub9cc\ub2e4\ub9b0\uc5b4', desc: 'AI \uc120\uc0dd\ub2d8\uacfc \ub9cc\ub2e4\ub9b0\uc5b4\ub97c \ubc30\uc6b0\uc138\uc694.', chip1: '\uc74c\uc131 \ucc44\ud305', chip2: '\uce74\uba54\ub77c', chip3: '\ub9cc\ub2e4\ub9b0\uc5b4', chip4: 'Flutter' },
            khru: { title: 'AI Agent Khru', tag: '\ud0dc\uad6d\uc5b4', desc: 'AI \uc120\uc0dd\ub2d8\uacfc \ud0dc\uad6d\uc5b4\ub97c \ubc30\uc6b0\uc138\uc694.', chip1: '\uc74c\uc131 \ucc44\ud305', chip2: '\uce74\uba54\ub77c', chip3: '\ud0dc\uad6d\uc5b4', chip4: 'Flutter' },
            coin: { title: 'Coin Identifier', tag: 'AI \uc2a4\uce90\ub108', desc: '\uc218\uc9d1\uac00\ub97c \uc704\ud55c AI \ub3d9\uc804 \uc2a4\uce90\ub108 \uc571. \ub3d9\uc804\uc744 \uc989\uc2dc \uc2dd\ubcc4\ud558\uace0, \uc2dc\uc7a5 \uac00\uce58\ub97c \ucd94\uc815\ud558\uba70 \ucf5c\ub809\uc158\uc744 \uce74\ud0c8\ub85c\uadf8\ud654\ud558\uc138\uc694.', chip1: 'AI \ube44\uc804', chip2: '\uac00\uce58 \ud3c9\uac00', chip3: '\ud76c\uc18c\uc131', chip4: '\uce74\ud0c8\ub85c\uadf8', chip5: 'Flutter' }
        },
        cta: { title: '\uc571 \uc544\uc774\ub514\uc5b4\uac00 \uc788\ub098\uc694?', text: '\uac1c\ub150\ubd80\ud130 \uc2a4\ud1a0\uc5b4\uae4c\uc9c0 AI \ub124\uc774\ud2f0\ube0c \ubaa8\ubc14\uc77c \uc571\uc744 \ub9cc\ub4ed\ub2c8\ub2e4. \ub2f9\uc2e0\uc758 \ube44\uc804\uc744 \uc81c\ud488\uc73c\ub85c \ub9cc\ub4e4\uc5b4 \ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4.', btnPrimary: '\uc5f0\ub77d\ud558\uae30', btnSecondary: '\ud648\uc73c\ub85c \ub3cc\uc544\uac00\uae30' },
        footer: { tagline: '\ucc28\uc774\ub97c \ub9cc\ub4dc\ub294 \uc81c\ud488\uc744 \uad6c\ucd95\ud569\ub2c8\ub2e4.', home: '\ud648', about: '\uc18c\uac1c', skills: '\uae30\uc220', aiApps: 'AI \uc571', contact: '\uc5f0\ub77d\ucc98', chinese: '\uc911\uad6d\uc5b4 \ubc30\uc6b0\uae30', cantonese: '\uad11\ub3d9\uc5b4 \ubc30\uc6b0\uae30', ukrainian: '\uc6b0\ud06c\ub77c\uc774\ub098\uc5b4 \ubc30\uc6b0\uae30', coin: 'Coin Identifier', copyright: '\u00a9 2026 Carlier. \ubaa8\ub4e0 \uad8c\ub9ac \ubcf4\uc720.', crafted: '\uc5f4\uc815\uc73c\ub85c \uc81c\uc791' }
    },
    ar: {
        skipToMain: '\u0627\u0646\u062a\u0642\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0631\u0626\u064a\u0633\u064a',
        nav: { home: '\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629', about: '\u062d\u0648\u0644', skills: '\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a', aiApps: '\u062a\u0637\u0628\u064a\u0642\u0627\u062a AI', cta: '\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a' },
        hero: { eyebrow: '\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062c\u0648\u0627\u0644', title: '\u062a\u062c\u0627\u0631\u0628 \u062c\u0648\u0627\u0644 \u0645\u062f\u0639\u0648\u0645\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a', subtitle: '\u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u062a\u0646\u0627\u0645\u064a\u0629 \u0645\u0646 \u062a\u0637\u0628\u064a\u0642\u0627\u062a Flutter \u0627\u0644\u0630\u0643\u064a\u0629 \u2014 \u0645\u062f\u0631\u0633\u0648\u0646 \u0644\u063a\u0648\u064a\u0648\u0646 \u0648\u0645\u0627\u0633\u062d\u0648 \u0639\u0645\u0644\u0627\u062a.', stat1Label: '\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u062d\u064a\u0629', stat2Label: '\u0644\u063a\u0627\u062a', stat3Label: '100\u00a0% \u0630\u0643\u0627\u0621' },
        grid: { tag: '\u062c\u0645\u064a\u0639 \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a', title: '\u0627\u0633\u062a\u0639\u0631\u0636 \u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0629' },
        apps: {
            getOnPlay: '\u0627\u062d\u0635\u0644 \u0639\u0644\u0649 Google Play', tagMobile: '\u062a\u0637\u0628\u064a\u0642 \u062c\u0648\u0627\u0644', tagAiTutor: '\u0645\u062f\u0631\u0633 AI', tagAiScanner: '\u0645\u0627\u0633\u062d AI', tagFeatured: '\u0645\u0645\u064a\u0632',
            vchytel: { title: 'AI Agent Vchytel', tag: '\u0627\u0644\u0623\u0648\u0643\u0631\u0627\u0646\u064a\u0629', desc: '\u062a\u0639\u0644\u0645 \u0627\u0644\u0623\u0648\u0643\u0631\u0627\u0646\u064a\u0629 \u0648\u062a\u062f\u0631\u0628 \u0639\u0644\u0649 \u0645\u062d\u0627\u062f\u062b\u0627\u062a \u062d\u0642\u064a\u0642\u064a\u0629 \u0645\u0639 \u0645\u062f\u0631\u0633 AI \u0645\u0628\u0627\u0634\u0631.', chip1: '\u062f\u0631\u062f\u0634\u0629 \u0635\u0648\u062a\u064a\u0629', chip2: '\u0633\u064a\u0627\u0642 \u0643\u0627\u0645\u064a\u0631\u0627', chip3: '\u062a\u0631\u062c\u0645\u0629', chip4: 'Flutter' },
            lousi: { title: 'AI Agent Lousi', tag: '\u0627\u0644\u0643\u0627\u0646\u062a\u0648\u0646\u064a\u0629', desc: '\u062a\u0639\u0644\u0645 \u0627\u0644\u0643\u0627\u0646\u062a\u0648\u0646\u064a\u0629 \u0645\u0639 \u0645\u062f\u0631\u0633 AI \u0645\u0628\u0627\u0634\u0631.', chip1: '\u062f\u0631\u062f\u0634\u0629 \u0635\u0648\u062a\u064a\u0629', chip2: '\u0633\u064a\u0627\u0642 \u0643\u0627\u0645\u064a\u0631\u0627', chip3: '\u0643\u0627\u0646\u062a\u0648\u0646\u064a\u0629', chip4: 'Flutter' },
            laoshi: { title: 'AI Agent Laoshi', tag: '\u0627\u0644\u0645\u0627\u0646\u062f\u0631\u064a\u0646', desc: '\u062a\u0639\u0644\u0645 \u0627\u0644\u0645\u0627\u0646\u062f\u0631\u064a\u0646 \u0645\u0639 \u0645\u062f\u0631\u0633 AI \u0645\u0628\u0627\u0634\u0631.', chip1: '\u062f\u0631\u062f\u0634\u0629 \u0635\u0648\u062a\u064a\u0629', chip2: '\u0633\u064a\u0627\u0642 \u0643\u0627\u0645\u064a\u0631\u0627', chip3: '\u0645\u0627\u0646\u062f\u0631\u064a\u0646', chip4: 'Flutter' },
            khru: { title: 'AI Agent Khru', tag: '\u0627\u0644\u062a\u0627\u064a\u0644\u0627\u0646\u062f\u064a\u0629', desc: '\u062a\u0639\u0644\u0645 \u0627\u0644\u062a\u0627\u064a\u0644\u0627\u0646\u062f\u064a\u0629 \u0645\u0639 \u0645\u062f\u0631\u0633 AI \u0645\u0628\u0627\u0634\u0631.', chip1: '\u062f\u0631\u062f\u0634\u0629 \u0635\u0648\u062a\u064a\u0629', chip2: '\u0633\u064a\u0627\u0642 \u0643\u0627\u0645\u064a\u0631\u0627', chip3: '\u062a\u0627\u064a\u0644\u0627\u0646\u062f\u064a\u0629', chip4: 'Flutter' },
            coin: { title: 'Coin Identifier', tag: '\u0645\u0627\u0633\u062d AI', desc: '\u062a\u0637\u0628\u064a\u0642 \u0645\u0627\u0633\u062d \u0639\u0645\u0644\u0627\u062a \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0644\u0647\u0648\u0627\u0629 \u0627\u0644\u062c\u0645\u0639. \u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0639\u0645\u0644\u0627\u062a \u0641\u0648\u0631\u0627\u060c \u0648\u0642\u062f\u0651\u0631 \u0627\u0644\u0642\u064a\u0645 \u0648\u0627\u062d\u062a\u0641\u0638 \u0628\u0645\u062c\u0645\u0648\u0639\u062a\u0643.', chip1: '\u0631\u0624\u064a\u0629 AI', chip2: '\u062a\u0642\u064a\u064a\u0645', chip3: '\u0646\u062f\u0631\u0629', chip4: '\u0641\u0647\u0631\u0633', chip5: 'Flutter' }
        },
        cta: { title: '\u0644\u062f\u064a\u0643 \u0641\u0643\u0631\u0629 \u062a\u0637\u0628\u064a\u0642\u061f', text: '\u0623\u0628\u0646\u064a \u062a\u0637\u0628\u064a\u0642\u0627\u062a \u062c\u0648\u0627\u0644 AI \u0645\u0646 \u0627\u0644\u0641\u0643\u0631\u0629 \u062d\u062a\u0649 \u0627\u0644\u0645\u062a\u062c\u0631. \u062d\u0648\u0644 \u0631\u0624\u064a\u062a\u0643 \u0625\u0644\u0649 \u0645\u0646\u062a\u062c.', btnPrimary: '\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a', btnSecondary: '\u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u0644\u0631\u0626\u064a\u0633\u064a\u0629' },
        footer: { tagline: '\u0646\u0628\u0646\u064a \u0645\u0646\u062a\u062c\u0627\u062a \u062a\u062d\u062f\u062b \u0641\u0631\u0642\u0627\u064b.', home: '\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629', about: '\u062d\u0648\u0644', skills: '\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a', aiApps: '\u062a\u0637\u0628\u064a\u0642\u0627\u062a AI', contact: '\u062a\u0648\u0627\u0635\u0644', chinese: '\u062a\u0639\u0644\u0645 \u0627\u0644\u0635\u064a\u0646\u064a\u0629', cantonese: '\u062a\u0639\u0644\u0645 \u0627\u0644\u0643\u0627\u0646\u062a\u0648\u0646\u064a\u0629', ukrainian: '\u062a\u0639\u0644\u0645 \u0627\u0644\u0623\u0648\u0643\u0631\u0627\u0646\u064a\u0629', coin: 'Coin Identifier', copyright: '\u00a9 2026 Carlier. \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629.', crafted: '\u0635\u064f\u0646\u0639 \u0628\u062d\u0628' }
    },
    pl: {
        skipToMain: 'Przejd\u017a do tre\u015bci g\u0142\u00f3wnej',
        nav: { home: 'Strona g\u0142\u00f3wna', about: 'O mnie', skills: 'Umiej\u0119tno\u015bci', aiApps: 'Aplikacje AI', cta: 'Porozmawiajmy' },
        hero: { eyebrow: 'Aplikacje Mobilne', title: 'Mobilne Do\u015bwiadczenia z AI', subtitle: 'Rosn\u0105ca kolekcja inteligentnych aplikacji Flutter \u2014 tutorzy j\u0119zykowi, skanery monet i wi\u0119cej.', stat1Label: 'Aplikacji', stat2Label: 'J\u0119zyk\u00f3w', stat3Label: '100\u00a0% AI' },
        grid: { tag: 'Wszystkie Aplikacje', title: 'Przegl\u0105daj Kolekcj\u0119' },
        apps: {
            getOnPlay: 'Pobierz na Google Play', tagMobile: 'Aplikacja mobilna', tagAiTutor: 'Tutor AI', tagAiScanner: 'Skaner AI', tagFeatured: 'Wyr\u00f3\u017cniona',
            vchytel: { title: 'AI Agent Vchytel', tag: 'Ukrai\u0144ski', desc: 'Ucz si\u0119 ukrai\u0144skiego, \u0107wicz prawdziwe rozmowy i t\u0142umacz w czasie rzeczywistym z \u017cywym nauczycielem AI.', chip1: 'Czat g\u0142osowy', chip2: 'Kontekst kamery', chip3: 'T\u0142umaczenie', chip4: 'Flutter' },
            lousi: { title: 'AI Agent Lousi', tag: 'Kanto\u0144ski', desc: 'Ucz si\u0119 kanto\u0144skiego z \u017cywym nauczycielem AI.', chip1: 'Czat g\u0142osowy', chip2: 'Kontekst kamery', chip3: 'Kanto\u0144ski', chip4: 'Flutter' },
            laoshi: { title: 'AI Agent Laoshi', tag: 'Mandary\u0144ski', desc: 'Ucz si\u0119 mandary\u0144skiego z \u017cywym nauczycielem AI.', chip1: 'Czat g\u0142osowy', chip2: 'Kontekst kamery', chip3: 'Mandary\u0144ski', chip4: 'Flutter' },
            khru: { title: 'AI Agent Khru', tag: 'Tajski', desc: 'Ucz si\u0119 tajskiego z \u017cywym nauczycielem AI.', chip1: 'Czat g\u0142osowy', chip2: 'Kontekst kamery', chip3: 'Tajski', chip4: 'Flutter' },
            coin: { title: 'Coin Identifier', tag: 'Skaner AI', desc: 'Aplikacja do skanowania monet AI dla kolekcjoner\u00f3w. Natychmiast rozpoznawaj monety, szacuj warto\u015bci i kataloguj kolekcj\u0119.', chip1: 'Wizja AI', chip2: 'Wycena', chip3: 'Rzadko\u015b\u0107', chip4: 'Katalog', chip5: 'Flutter' }
        },
        cta: { title: 'Masz pomys\u0142 na aplikacj\u0119?', text: 'Tworz\u0119 natywne aplikacje mobilne AI od koncepcji do sklepu. Zamie\u0144my Twoj\u0105 wizj\u0119 w produkt.', btnPrimary: 'Napisz do mnie', btnSecondary: 'Powr\u00f3t do strony g\u0142\u00f3wnej' },
        footer: { tagline: 'Tworzymy produkty, kt\u00f3re robi\u0105 r\u00f3\u017cnic\u0119.', home: 'Strona g\u0142\u00f3wna', about: 'O mnie', skills: 'Umiej\u0119tno\u015bci', aiApps: 'Aplikacje AI', contact: 'Kontakt', chinese: 'Naucz si\u0119 chi\u0144skiego', cantonese: 'Naucz si\u0119 kanto\u0144skiego', ukrainian: 'Naucz si\u0119 ukrai\u0144skiego', coin: 'Coin Identifier', copyright: '\u00a9 2026 Carlier. Wszelkie prawa zastrze\u017cone.', crafted: 'Stworzone z pasj\u0105' }
    }
};

// ========================================
// Language labels & RTL languages
// ========================================
const langLabels = {
    en: 'EN', fr: 'FR', de: 'DE', es: 'ES', pt: 'PT', it: 'IT',
    uk: 'UK', ru: 'RU', th: 'TH', 'zh-TW': '\u7e41\u4e2d', 'zh-CN': '\u7b80\u4e2d',
    hi: 'HI', ja: 'JA', ko: 'KO', ar: 'AR', pl: 'PL'
};
const rtlLangs = new Set(['ar']);

// ========================================
// localStorage helpers
// ========================================
function getStoredLanguage() {
    // Honour ?lang= query param first, then localStorage, then default 'en'
    const params = new URLSearchParams(location.search);
    const qLang = params.get('lang');
    if (qLang && translations[qLang]) return qLang;
    const stored = localStorage.getItem('preferred-language');
    return (stored && translations[stored]) ? stored : 'en';
}
function setStoredLanguage(lang) {
    localStorage.setItem('preferred-language', lang);
}

// ========================================
// Apply translations to the DOM
// ========================================
function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    // RTL support
    document.documentElement.dir = rtlLangs.has(lang) ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // Helper: safely set textContent by selector
    function setText(sel, value) {
        const el = document.querySelector(sel);
        if (el && value !== undefined) el.textContent = value;
    }
    function setAll(sel, value) {
        document.querySelectorAll(sel).forEach(el => { if (value !== undefined) el.textContent = value; });
    }

    // Skip link
    setText('.skip-link', t.skipToMain);

    // Nav
    setText('[data-i18n="nav.home"]',   t.nav.home);
    setText('[data-i18n="nav.about"]',  t.nav.about);
    setText('[data-i18n="nav.skills"]', t.nav.skills);
    setText('[data-i18n="nav.aiApps"]', t.nav.aiApps);
    setText('[data-i18n="nav.cta"]',    t.nav.cta);

    // Hero
    setText('[data-i18n="hero.eyebrow"]',  t.hero.eyebrow);
    setText('[data-i18n="hero.title"]',    t.hero.title);
    setText('[data-i18n="hero.subtitle"]', t.hero.subtitle);
    setText('[data-i18n="hero.stat1Label"]', t.hero.stat1Label);
    setText('[data-i18n="hero.stat2Label"]', t.hero.stat2Label);
    setText('[data-i18n="hero.stat3Label"]', t.hero.stat3Label);

    // Grid header
    setText('[data-i18n="grid.tag"]',   t.grid.tag);
    setText('[data-i18n="grid.title"]', t.grid.title);

    // App store buttons (all share the same label)
    setAll('[data-i18n="apps.getOnPlay"]', t.apps.getOnPlay);

    // Per-app translations
    const appKeys = ['vchytel', 'lousi', 'laoshi', 'khru', 'coin'];
    appKeys.forEach(key => {
        const a = t.apps[key];
        if (!a) return;
        setText(`[data-i18n="apps.${key}.title"]`, a.title);
        setText(`[data-i18n="apps.${key}.tag"]`,   a.tag);
        setText(`[data-i18n="apps.${key}.desc"]`,  a.desc);
        ['chip1','chip2','chip3','chip4','chip5'].forEach(chip => {
            if (a[chip] !== undefined) setText(`[data-i18n="apps.${key}.${chip}"]`, a[chip]);
        });
    });

    // Shared tags
    setAll('[data-i18n="apps.tagMobile"]',    t.apps.tagMobile);
    setAll('[data-i18n="apps.tagAiTutor"]',   t.apps.tagAiTutor);
    setAll('[data-i18n="apps.tagAiScanner"]', t.apps.tagAiScanner);
    setAll('[data-i18n="apps.tagFeatured"]',  t.apps.tagFeatured);

    // CTA section
    setText('[data-i18n="cta.title"]',       t.cta.title);
    setText('[data-i18n="cta.text"]',        t.cta.text);
    setText('[data-i18n="cta.btnPrimary"]',  t.cta.btnPrimary);
    setText('[data-i18n="cta.btnSecondary"]', t.cta.btnSecondary);

    // Footer
    setText('[data-i18n="footer.tagline"]',   t.footer.tagline);
    setText('[data-i18n="footer.home"]',      t.footer.home);
    setText('[data-i18n="footer.about"]',     t.footer.about);
    setText('[data-i18n="footer.skills"]',    t.footer.skills);
    setText('[data-i18n="footer.aiApps"]',    t.footer.aiApps);
    setText('[data-i18n="footer.contact"]',   t.footer.contact);
    setText('[data-i18n="footer.chinese"]',   t.footer.chinese);
    setText('[data-i18n="footer.cantonese"]', t.footer.cantonese);
    setText('[data-i18n="footer.ukrainian"]', t.footer.ukrainian);
    setText('[data-i18n="footer.coin"]',      t.footer.coin);
    setText('[data-i18n="footer.copyright"]', t.footer.copyright);
    setText('[data-i18n="footer.crafted"]',   t.footer.crafted);

    // Language switcher UI
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    const currentLangEl = document.querySelector('.current-lang');
    if (currentLangEl) currentLangEl.textContent = langLabels[lang] || lang.toUpperCase();
}

// ========================================
// Language switcher init
// ========================================
function initLanguageSwitcher() {
    const switcher = document.querySelector('.language-switcher');
    const toggle   = document.querySelector('.lang-toggle');
    if (!switcher || !toggle) return;

    toggle.addEventListener('click', e => {
        e.stopPropagation();
        switcher.classList.toggle('active');
    });

    document.addEventListener('click', () => switcher.classList.remove('active'));

    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setStoredLanguage(lang);
            applyTranslations(lang);
            switcher.classList.remove('active');
        });
    });
}

// ========================================
// DOMContentLoaded — boot everything
// ========================================
document.addEventListener('DOMContentLoaded', () => {

    // i18n
    const lang = getStoredLanguage();
    applyTranslations(lang);
    initLanguageSwitcher();

    // Nav scroll
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });

    // Hamburger
    const navToggleBtn = document.getElementById('nav-toggle-btn');
    const navMenu      = document.getElementById('nav-menu');
    if (navToggleBtn && navMenu) {
        navToggleBtn.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('active');
            navToggleBtn.classList.toggle('active', isOpen);
            navToggleBtn.setAttribute('aria-expanded', String(isOpen));
        });
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggleBtn.classList.remove('active');
                navToggleBtn.setAttribute('aria-expanded', 'false');
            });
        });
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggleBtn.classList.remove('active');
                navToggleBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Scroll reveal
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));

    // Counter animation for hero stats
    document.querySelectorAll('.stat-number').forEach(el => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const text = el.textContent;
                const num  = parseInt(text.replace(/\D/g, ''));
                const sfx  = text.replace(/[0-9]/g, '');
                if (isNaN(num)) return;
                const start = performance.now();
                const dur   = 1800;
                function step(now) {
                    const p = Math.min((now - start) / dur, 1);
                    const ease = 1 - Math.pow(1 - p, 4);
                    el.textContent = Math.floor(ease * num) + sfx;
                    if (p < 1) requestAnimationFrame(step);
                    else el.textContent = text;
                }
                requestAnimationFrame(step);
                observer.unobserve(el);
            });
        }, { threshold: 0.6 });
        observer.observe(el);
    });

    // Reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.gradient-orb').forEach(o => o.style.animation = 'none');
    }
});
