import type { Language } from "../context/LanguageContext";

export type Translation = {
    navigation: {
        services: string;
        projects: string;
        about: string;
        process: string;
        contact: string;
    };

    hero: {
        label: string;
        title: string;
        description: string;
        primaryButton: string;
        secondaryButton: string;
    };

    logo: {
        instruction: string;
        reset: string;
    };

    services: {
        label: string;
        title: string;
        items: {
            number: string;
            title: string;
            description: string;
        }[];
    };

    projects: {
        label: string;
        title: string;
        description: string;
        view: string;
        items: {
            number: string;
            category: string;
            title: string;
            description: string;
            technologies: string[];
        }[];
    };

    about: {
        label: string;
        title: string;
        paragraphs: string[];
        statistics: {
            value: string;
            label: string;
        }[];
        advantages: {
            number: string;
            title: string;
            description: string;
        }[];
    };

    process: {
        label: string;
        title: string;
        description: string;
        steps: {
            number: string;
            title: string;
            description: string;
        }[];
    };

    contact: {
        label: string;
        title: string;
        description: string;

        name: string;
        namePlaceholder: string;

        email: string;
        emailPlaceholder: string;

        company: string;
        companyPlaceholder: string;

        message: string;
        messagePlaceholder: string;

        agreement: string;
        submit: string;
        submitting: string;
        success: string;
        error: string;
        rateLimited: string;

        validation: {
            nameRequired: string;
            nameLength: string;
            emailRequired: string;
            emailInvalid: string;
            companyLength: string;
            messageRequired: string;
            messageLength: string;
        };
    };

    footer: {
        description: string;
        navigation: string;
        contact: string;
        availability: string;
        backToTop: string;
        rights: string;
    };
};

export const translations: Record<Language, Translation> = {
    en: {
        navigation: {
            services: "Services",
            projects: "Projects",
            about: "About us",
            process: "Process",
            contact: "Contact",
        },

        hero: {
            label: "Fullstack development studio",
            title: "We build reliable software for ambitious businesses.",
            description:
                "We help European companies build, modernize and maintain web applications using ASP.NET Core, React and TypeScript.",
            primaryButton: "Discuss your project",
            secondaryButton: "View our work",
        },

        logo: {
            instruction:
                "Drag to rotate · Scroll to zoom · Double-click to reset",
            reset: "Reset view",
        },

        services: {
            label: "What we do",
            title:
                "Engineering services focused on practical business results.",

            items: [
                {
                    number: "01",
                    title: ".NET Development",
                    description:
                        "Reliable backend systems and REST APIs built with ASP.NET Core and C#.",
                },
                {
                    number: "02",
                    title: "React Development",
                    description:
                        "Fast, responsive and accessible interfaces built with React and TypeScript.",
                },
                {
                    number: "03",
                    title: "Full-Stack Applications",
                    description:
                        "Complete business applications covering frontend, backend and database development.",
                },
                {
                    number: "04",
                    title: "Software Modernization",
                    description:
                        "Improving existing applications through refactoring, new features and performance work.",
                },
            ],
        },

        projects: {
            label: "Selected work",
            title: "Products designed and developed with purpose.",
            description:
                "A selection of applications demonstrating our approach to architecture, user experience and reliable software delivery.",
            view: "View",

            items: [
                {
                    number: "01",
                    category: "Full-stack web application",
                    title: "AI Interview Trainer",
                    description:
                        "A platform for technical interview practice with generated questions, structured sessions and candidate evaluation.",
                    technologies: [
                        "ASP.NET Core",
                        "React",
                        "TypeScript",
                        "PostgreSQL",
                        "AI API",
                    ],
                },
                {
                    number: "02",
                    category: "Backend application",
                    title: "URL Shortener",
                    description:
                        "A secure URL-management service with authentication, short-link generation, redirection and automated tests.",
                    technologies: [
                        "ASP.NET Core",
                        "REST API",
                        "Authentication",
                        "Entity Framework",
                        "Unit Tests",
                    ],
                },
            ],
        },

        about: {
            label: "About us",
            title:
                "A small engineering team with a practical approach to software.",

            paragraphs: [
                "Statkevych Development is a Ukrainian software development studio specializing in ASP.NET Core, React and TypeScript.",
                "We help businesses develop new products, improve existing systems and extend their engineering capacity.",
            ],

            statistics: [
                {
                    value: "1–3",
                    label: "Developers available",
                },
                {
                    value: ".NET",
                    label: "Backend specialization",
                },
                {
                    value: "React",
                    label: "Frontend specialization",
                },
            ],

            advantages: [
                {
                    number: "01",
                    title: "Direct communication",
                    description:
                        "You communicate directly with the developers responsible for building your product.",
                },
                {
                    number: "02",
                    title: "Focused team",
                    description:
                        "A small team means fewer management layers, faster decisions and clear responsibility.",
                },
                {
                    number: "03",
                    title: "European collaboration",
                    description:
                        "Based in Ukraine, we work remotely with European companies in a convenient time zone.",
                },
            ],
        },

        process: {
            label: "Our process",
            title:
                "A clear process from first conversation to delivery.",
            description:
                "Every stage is transparent, collaborative and focused on moving the product forward.",

            steps: [
                {
                    number: "01",
                    title: "Discover",
                    description:
                        "We learn about your product, users, technical requirements and business objectives.",
                },
                {
                    number: "02",
                    title: "Plan",
                    description:
                        "We define the architecture, priorities, delivery stages and technical roadmap.",
                },
                {
                    number: "03",
                    title: "Develop",
                    description:
                        "We build iteratively with regular communication, reviews and demonstrations.",
                },
                {
                    number: "04",
                    title: "Deliver",
                    description:
                        "We test, deploy and document the solution for future development.",
                },
            ],
        },

        contact: {
            label: "Contact",
            title: "Let’s discuss what we can build together.",
            description:
                "Tell us about your project, existing application or development requirements.",

            name: "Name",
            namePlaceholder: "Your name",

            email: "Email",
            emailPlaceholder: "you@company.com",

            company: "Company",
            companyPlaceholder: "Company name (optional)",

            message: "How can we help?",
            messagePlaceholder:
                "Tell us briefly about your project...",

            agreement:
                "By submitting this form, you agree that we may contact you about your request.",

            submit: "Send request",
            submitting: "Sending...",
            success:
                "Thank you. Your request has been submitted.",
            error:
                "Something went wrong. Please try again.",
            rateLimited:
                "Too many requests. Please try again in 10 minutes.",

            validation: {
                nameRequired: "Please enter your name.",
                nameLength:
                    "Name must contain between 2 and 100 characters.",
                emailRequired: "Please enter your email.",
                emailInvalid:
                    "Please enter a valid email address.",
                companyLength:
                    "Company cannot exceed 150 characters.",
                messageRequired: "Please enter a message.",
                messageLength:
                    "Message must contain between 10 and 4000 characters.",
            },
        },

        footer: {
            description:
                "A small Ukrainian engineering team building reliable web applications for European businesses.",
            navigation: "Navigation",
            contact: "Contact",
            availability:
                "Available for remote European projects.",
            backToTop: "Back to top",
            rights: "All rights reserved.",
        },
    },

    de: {
        navigation: {
            services: "Leistungen",
            projects: "Projekte",
            about: "Über uns",
            process: "Ablauf",
            contact: "Kontakt",
        },

        hero: {
            label: "Fullstack-Entwicklungsstudio",
            title:
                "Wir entwickeln zuverlässige Software für ambitionierte Unternehmen.",
            description:
                "Wir unterstützen europäische Unternehmen bei der Entwicklung, Modernisierung und Wartung von Webanwendungen.",
            primaryButton: "Projekt besprechen",
            secondaryButton: "Unsere Projekte",
        },

        logo: {
            instruction:
                "Ziehen zum Drehen · Scrollen zum Zoomen · Doppelklick zum Zurücksetzen",
            reset: "Ansicht zurücksetzen",
        },

        services: {
            label: "Unsere Leistungen",
            title:
                "Softwareentwicklung mit Fokus auf konkrete Geschäftsergebnisse.",

            items: [
                {
                    number: "01",
                    title: ".NET-Entwicklung",
                    description:
                        "Zuverlässige Backend-Systeme und REST-APIs mit ASP.NET Core und C#.",
                },
                {
                    number: "02",
                    title: "React-Entwicklung",
                    description:
                        "Schnelle, responsive und zugängliche Benutzeroberflächen mit React und TypeScript.",
                },
                {
                    number: "03",
                    title: "Full-Stack-Anwendungen",
                    description:
                        "Komplette Geschäftsanwendungen mit Frontend, Backend und Datenbank.",
                },
                {
                    number: "04",
                    title: "Softwaremodernisierung",
                    description:
                        "Modernisierung bestehender Anwendungen durch Refactoring, neue Funktionen und Optimierung.",
                },
            ],
        },

        projects: {
            label: "Ausgewählte Projekte",
            title:
                "Produkte, die mit einem klaren Ziel entwickelt wurden.",
            description:
                "Eine Auswahl von Anwendungen, die unseren Ansatz bei Architektur, Nutzererlebnis und Softwarequalität zeigt.",
            view: "Öffnen",

            items: [
                {
                    number: "01",
                    category: "Full-Stack-Webanwendung",
                    title: "KI-Interview-Trainer",
                    description:
                        "Eine Plattform zur Vorbereitung auf technische Interviews mit generierten Fragen, strukturierten Sitzungen und Kandidatenbewertungen.",
                    technologies: [
                        "ASP.NET Core",
                        "React",
                        "TypeScript",
                        "PostgreSQL",
                        "KI-API",
                    ],
                },
                {
                    number: "02",
                    category: "Backend-Anwendung",
                    title: "URL-Verkürzer",
                    description:
                        "Ein sicherer Dienst zur Verwaltung kurzer URLs mit Authentifizierung, Weiterleitung und automatisierten Tests.",
                    technologies: [
                        "ASP.NET Core",
                        "REST API",
                        "Authentifizierung",
                        "Entity Framework",
                        "Unit Tests",
                    ],
                },
            ],
        },

        about: {
            label: "Über uns",
            title:
                "Ein kleines Engineering-Team mit einem praktischen Ansatz.",

            paragraphs: [
                "Statkevych Development ist ein ukrainisches Softwarestudio mit Spezialisierung auf ASP.NET Core, React und TypeScript.",
                "Wir entwickeln neue Produkte, verbessern bestehende Systeme und erweitern Entwicklungsteams.",
            ],

            statistics: [
                {
                    value: "1–3",
                    label: "Verfügbare Entwickler",
                },
                {
                    value: ".NET",
                    label: "Backend-Spezialisierung",
                },
                {
                    value: "React",
                    label: "Frontend-Spezialisierung",
                },
            ],

            advantages: [
                {
                    number: "01",
                    title: "Direkte Kommunikation",
                    description:
                        "Sie kommunizieren direkt mit den Entwicklern, die Ihr Produkt umsetzen.",
                },
                {
                    number: "02",
                    title: "Fokussiertes Team",
                    description:
                        "Weniger Verwaltungsebenen ermöglichen schnellere Entscheidungen und klare Verantwortung.",
                },
                {
                    number: "03",
                    title: "Europäische Zusammenarbeit",
                    description:
                        "Unser Team arbeitet aus der Ukraine in einer für Europa passenden Zeitzone.",
                },
            ],
        },

        process: {
            label: "Unser Ablauf",
            title:
                "Ein klarer Prozess vom ersten Gespräch bis zur Auslieferung.",
            description:
                "Jede Phase ist transparent, kooperativ und auf den Fortschritt des Produkts ausgerichtet.",

            steps: [
                {
                    number: "01",
                    title: "Analyse",
                    description:
                        "Wir analysieren Ihr Produkt, Ihre Nutzer und Ihre geschäftlichen Ziele.",
                },
                {
                    number: "02",
                    title: "Planung",
                    description:
                        "Wir definieren Architektur, Prioritäten, Lieferphasen und technische Roadmap.",
                },
                {
                    number: "03",
                    title: "Entwicklung",
                    description:
                        "Wir entwickeln iterativ mit regelmäßiger Kommunikation und Demonstrationen.",
                },
                {
                    number: "04",
                    title: "Auslieferung",
                    description:
                        "Wir testen, veröffentlichen und dokumentieren die Lösung.",
                },
            ],
        },

        contact: {
            label: "Kontakt",
            title: "Lassen Sie uns Ihr Projekt besprechen.",
            description:
                "Erzählen Sie uns von Ihrem Projekt, Ihrer Anwendung oder Ihrem Entwicklungsbedarf.",

            name: "Name",
            namePlaceholder: "Ihr Name",

            email: "E-Mail",
            emailPlaceholder: "sie@unternehmen.de",

            company: "Unternehmen",
            companyPlaceholder:
                "Unternehmensname (optional)",

            message: "Wie können wir helfen?",
            messagePlaceholder:
                "Beschreiben Sie kurz Ihr Projekt...",

            agreement:
                "Mit dem Absenden stimmen Sie zu, dass wir Sie bezüglich Ihrer Anfrage kontaktieren dürfen.",

            submit: "Anfrage senden",
            submitting: "Wird gesendet...",
            success:
                "Vielen Dank. Ihre Anfrage wurde gesendet.",
            error:
                "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
            rateLimited:
                "Zu viele Anfragen. Bitte versuchen Sie es in 10 Minuten erneut.",

            validation: {
                nameRequired:
                    "Bitte geben Sie Ihren Namen ein.",
                nameLength:
                    "Der Name muss zwischen 2 und 100 Zeichen enthalten.",
                emailRequired:
                    "Bitte geben Sie Ihre E-Mail-Adresse ein.",
                emailInvalid:
                    "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
                companyLength:
                    "Der Firmenname darf maximal 150 Zeichen enthalten.",
                messageRequired:
                    "Bitte geben Sie eine Nachricht ein.",
                messageLength:
                    "Die Nachricht muss zwischen 10 und 4000 Zeichen enthalten.",
            },
        },

        footer: {
            description:
                "Ein kleines ukrainisches Engineering-Team, das zuverlässige Webanwendungen für europäische Unternehmen entwickelt.",
            navigation: "Navigation",
            contact: "Kontakt",
            availability:
                "Verfügbar für europäische Remote-Projekte.",
            backToTop: "Nach oben",
            rights: "Alle Rechte vorbehalten.",
        },
    },

    uk: {
        navigation: {
            services: "Послуги",
            projects: "Проєкти",
            about: "Про нас",
            process: "Процес",
            contact: "Контакти",
        },

        hero: {
            label: "Студія розробки",
            title:
                "Ми створюємо надійне програмне забезпечення для амбітного бізнесу.",
            description:
                "Допомагаємо європейським компаніям створювати, модернізувати та підтримувати вебзастосунки.",
            primaryButton: "Обговорити проєкт",
            secondaryButton: "Наші роботи",
        },

        logo: {
            instruction:
                "Перетягуйте для обертання · Колесо для масштабу · Подвійний клік для скидання",
            reset: "Скинути вигляд",
        },

        services: {
            label: "Що ми робимо",
            title:
                "Інженерні послуги, орієнтовані на практичний результат.",

            items: [
                {
                    number: "01",
                    title: ".NET-розробка",
                    description:
                        "Надійні серверні системи та REST API на ASP.NET Core і C#.",
                },
                {
                    number: "02",
                    title: "React-розробка",
                    description:
                        "Швидкі, адаптивні й доступні інтерфейси на React і TypeScript.",
                },
                {
                    number: "03",
                    title: "Full-stack застосунки",
                    description:
                        "Комплексні бізнес-застосунки, що охоплюють frontend, backend і базу даних.",
                },
                {
                    number: "04",
                    title: "Модернізація ПЗ",
                    description:
                        "Покращення наявних систем через рефакторинг, нові функції та оптимізацію.",
                },
            ],
        },

        projects: {
            label: "Вибрані роботи",
            title:
                "Продукти, спроєктовані та створені з конкретною метою.",
            description:
                "Добірка застосунків, яка демонструє наш підхід до архітектури, інтерфейсів і надійної розробки.",
            view: "Огляд",

            items: [
                {
                    number: "01",
                    category: "Full-stack вебзастосунок",
                    title: "AI Interview Trainer",
                    description:
                        "Платформа для підготовки до технічних співбесід із питаннями, структурованими сесіями та оцінюванням.",
                    technologies: [
                        "ASP.NET Core",
                        "React",
                        "TypeScript",
                        "PostgreSQL",
                        "AI API",
                    ],
                },
                {
                    number: "02",
                    category: "Backend-застосунок",
                    title: "URL Shortener",
                    description:
                        "Безпечний сервіс коротких посилань з автентифікацією, перенаправленням і автоматичними тестами.",
                    technologies: [
                        "ASP.NET Core",
                        "REST API",
                        "Автентифікація",
                        "Entity Framework",
                        "Unit Tests",
                    ],
                },
            ],
        },

        about: {
            label: "Про нас",
            title:
                "Невелика інженерна команда з практичним підходом до розробки.",

            paragraphs: [
                "Statkevych Development — українська студія розробки, що спеціалізується на ASP.NET Core, React і TypeScript.",
                "Ми створюємо нові продукти, вдосконалюємо наявні системи та підсилюємо команди клієнтів.",
            ],

            statistics: [
                {
                    value: "1–3",
                    label: "Доступні розробники",
                },
                {
                    value: ".NET",
                    label: "Backend-спеціалізація",
                },
                {
                    value: "React",
                    label: "Frontend-спеціалізація",
                },
            ],

            advantages: [
                {
                    number: "01",
                    title: "Пряма комунікація",
                    description:
                        "Ви спілкуєтесь безпосередньо з розробниками, відповідальними за продукт.",
                },
                {
                    number: "02",
                    title: "Сфокусована команда",
                    description:
                        "Менше рівнів управління означає швидші рішення та зрозумілу відповідальність.",
                },
                {
                    number: "03",
                    title: "Співпраця з Європою",
                    description:
                        "Ми працюємо з України у зручному для європейських компаній часовому поясі.",
                },
            ],
        },

        process: {
            label: "Наш процес",
            title:
                "Зрозумілий процес від першої розмови до запуску.",
            description:
                "Кожен етап прозорий, спільний і спрямований на розвиток продукту.",

            steps: [
                {
                    number: "01",
                    title: "Дослідження",
                    description:
                        "Вивчаємо продукт, користувачів, технічні вимоги та бізнес-цілі.",
                },
                {
                    number: "02",
                    title: "Планування",
                    description:
                        "Визначаємо архітектуру, пріоритети, етапи та технічний план.",
                },
                {
                    number: "03",
                    title: "Розробка",
                    description:
                        "Розробляємо ітеративно з регулярною комунікацією та демонстраціями.",
                },
                {
                    number: "04",
                    title: "Запуск",
                    description:
                        "Тестуємо, розгортаємо та документуємо готове рішення.",
                },
            ],
        },

        contact: {
            label: "Контакти",
            title:
                "Обговорімо, що ми можемо створити разом.",
            description:
                "Розкажіть про ваш проєкт, наявний застосунок або потребу в розробниках.",

            name: "Ім’я",
            namePlaceholder: "Ваше ім’я",

            email: "Електронна пошта",
            emailPlaceholder: "you@company.com",

            company: "Компанія",
            companyPlaceholder:
                "Назва компанії (необов’язково)",

            message: "Як ми можемо допомогти?",
            messagePlaceholder:
                "Коротко опишіть ваш проєкт...",

            agreement:
                "Надсилаючи форму, ви погоджуєтесь, що ми можемо зв’язатися з вами щодо запиту.",

            submit: "Надіслати запит",
            submitting: "Надсилання...",
            success:
                "Дякуємо. Ваш запит успішно надіслано.",
            error:
                "Не вдалося надіслати запит. Спробуйте ще раз.",
            rateLimited:
                "Забагато запитів. Спробуйте знову через 10 хвилин.",

            validation: {
                nameRequired: "Введіть ваше ім’я.",
                nameLength:
                    "Ім’я має містити від 2 до 100 символів.",
                emailRequired:
                    "Введіть вашу електронну адресу.",
                emailInvalid:
                    "Введіть коректну електронну адресу.",
                companyLength:
                    "Назва компанії не може перевищувати 150 символів.",
                messageRequired:
                    "Введіть повідомлення.",
                messageLength:
                    "Повідомлення має містити від 10 до 4000 символів.",
            },
        },

        footer: {
            description:
                "Невелика українська інженерна команда, що створює надійні вебзастосунки для європейського бізнесу.",
            navigation: "Навігація",
            contact: "Контакти",
            availability:
                "Відкриті до віддалених європейських проєктів.",
            backToTop: "На початок",
            rights: "Усі права захищені.",
        },
    },
};
