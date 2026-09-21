import type { Language } from "../context/LanguageContext";

export type ProjectDetails = {
    slug: string;
    number: string;
    type: string;
    title: string;
    summary: string;
    status: string;
    challenge: string;
    solution: string;
    architecture: string[];
    features: string[];
    technologies: string[];
    outcome: string;
};

export const projectDetails: Record<Language, ProjectDetails[]> = {
    en: [
        {
            slug: "ai-interview-trainer",
            number: "01",
            type: "Independent full-stack product",
            title: "AI Interview Trainer",
            summary:
                "A structured platform for practising technical interviews and receiving AI-assisted feedback.",
            status: "Independent project",
            challenge:
                "Candidates often prepare with disconnected question lists and receive no structured evaluation of their answers.",
            solution:
                "A full-stack platform that manages interview sessions, generates questions and produces structured results.",
            architecture: [
                "React and TypeScript client",
                "ASP.NET Core REST API",
                "CQRS with MediatR",
                "PostgreSQL persistence",
                "External AI integration",
            ],
            features: [
                "Authentication and authorization",
                "Topic and interview configuration",
                "Generated interview questions",
                "Structured interview sessions",
                "Answer evaluation",
                "Results and feedback dashboard",
            ],
            technologies: [
                "ASP.NET Core",
                "React",
                "TypeScript",
                "PostgreSQL",
                "MediatR",
                "AI API",
            ],
            outcome:
                "Demonstrates full-stack architecture, API design, relational persistence and responsible AI integration.",
        },
        {
            slug: "statkevych-platform",
            number: "04",
            type: "Production-oriented web platform",
            title: "Statkevych Development Platform",
            summary:
                "A multilingual company platform with an interactive interface and complete contact-request workflow.",
            status: "Internal product",
            challenge:
                "A development studio needs more than a static landing page—it needs a reliable method of receiving and processing client requests.",
            solution:
                "A multilingual React interface connected to a validated ASP.NET Core API, PostgreSQL and an email notification system.",
            architecture: [
                "Localized React application",
                "ASP.NET Core Web API",
                "Entity Framework Core",
                "PostgreSQL database",
                "SMTP notification service",
            ],
            features: [
                "English, German and Ukrainian localization",
                "Interactive draggable logo",
                "Accessible contact form",
                "Server-side validation",
                "Per-IP rate limiting",
                "Database persistence",
                "Admin and client email notifications",
            ],
            technologies: [
                "React",
                "TypeScript",
                "ASP.NET Core",
                "PostgreSQL",
                "MailKit",
            ],
            outcome:
                "Demonstrates an end-to-end production workflow from interface design to persistence and notifications.",
        },
    ],

    de: [
        {
            slug: "ai-interview-trainer",
            number: "01",
            type: "Unabhängiges Full-Stack-Produkt",
            title: "KI-Interview-Trainer",
            summary:
                "Eine strukturierte Plattform zur Vorbereitung auf technische Interviews mit KI-gestütztem Feedback.",
            status: "Eigenständiges Projekt",
            challenge:
                "Kandidaten bereiten sich häufig mit unverbundenen Fragenlisten vor und erhalten keine strukturierte Bewertung.",
            solution:
                "Eine Full-Stack-Plattform, die Interviewsitzungen verwaltet, Fragen generiert und strukturierte Ergebnisse erstellt.",
            architecture: [
                "React- und TypeScript-Client",
                "ASP.NET Core REST API",
                "CQRS mit MediatR",
                "PostgreSQL-Datenbank",
                "Externe KI-Integration",
            ],
            features: [
                "Authentifizierung und Autorisierung",
                "Themen- und Interviewkonfiguration",
                "Generierte Interviewfragen",
                "Strukturierte Interviewsitzungen",
                "Bewertung der Antworten",
                "Ergebnis- und Feedbackübersicht",
            ],
            technologies: [
                "ASP.NET Core",
                "React",
                "TypeScript",
                "PostgreSQL",
                "MediatR",
                "KI-API",
            ],
            outcome:
                "Das Projekt demonstriert Full-Stack-Architektur, API-Design, relationale Datenhaltung und KI-Integration.",
        },
        {
            slug: "statkevych-platform",
            number: "04",
            type: "Produktionsorientierte Webplattform",
            title: "Statkevych Development Platform",
            summary:
                "Eine mehrsprachige Unternehmensplattform mit interaktiver Oberfläche und vollständigem Kontaktprozess.",
            status: "Internes Produkt",
            challenge:
                "Ein Entwicklungsstudio benötigt neben einer Landingpage auch einen zuverlässigen Prozess zur Bearbeitung von Kundenanfragen.",
            solution:
                "Eine mehrsprachige React-Oberfläche mit ASP.NET-Core-API, PostgreSQL und E-Mail-Benachrichtigungen.",
            architecture: [
                "Lokalisierte React-Anwendung",
                "ASP.NET Core Web API",
                "Entity Framework Core",
                "PostgreSQL-Datenbank",
                "SMTP-Benachrichtigungsdienst",
            ],
            features: [
                "Englische, deutsche und ukrainische Lokalisierung",
                "Interaktives, bewegliches Logo",
                "Barrierearmes Kontaktformular",
                "Serverseitige Validierung",
                "IP-basierte Ratenbegrenzung",
                "Datenbankpersistenz",
                "E-Mail-Benachrichtigungen",
            ],
            technologies: [
                "React",
                "TypeScript",
                "ASP.NET Core",
                "PostgreSQL",
                "MailKit",
            ],
            outcome:
                "Das Projekt demonstriert einen vollständigen Ablauf von der Benutzeroberfläche bis zur Speicherung und Benachrichtigung.",
        },
    ],

    uk: [
        {
            slug: "ai-interview-trainer",
            number: "01",
            type: "Самостійний full-stack продукт",
            title: "AI Interview Trainer",
            summary:
                "Структурована платформа для підготовки до технічних співбесід із підтримкою ШІ.",
            status: "Самостійний проєкт",
            challenge:
                "Кандидати часто готуються за розрізненими списками питань і не отримують структурованого оцінювання відповідей.",
            solution:
                "Full-stack платформа, яка керує сесіями співбесід, генерує питання та формує структуровані результати.",
            architecture: [
                "Клієнт на React і TypeScript",
                "REST API на ASP.NET Core",
                "CQRS із MediatR",
                "Збереження у PostgreSQL",
                "Інтеграція із зовнішнім ШІ",
            ],
            features: [
                "Автентифікація та авторизація",
                "Налаштування тем і співбесід",
                "Генерація питань",
                "Структуровані сесії",
                "Оцінювання відповідей",
                "Сторінка результатів і рекомендацій",
            ],
            technologies: [
                "ASP.NET Core",
                "React",
                "TypeScript",
                "PostgreSQL",
                "MediatR",
                "AI API",
            ],
            outcome:
                "Демонструє full-stack архітектуру, проєктування API, реляційне збереження даних та інтеграцію ШІ.",
        },
        {
            slug: "statkevych-platform",
            number: "04",
            type: "Вебплатформа, орієнтована на production",
            title: "Statkevych Development Platform",
            summary:
                "Багатомовна платформа студії з інтерактивним інтерфейсом і повним процесом обробки звернень.",
            status: "Внутрішній продукт",
            challenge:
                "Студії розробки потрібен не лише лендинг, а й надійний процес отримання та обробки клієнтських звернень.",
            solution:
                "Багатомовний React-інтерфейс, поєднаний з ASP.NET Core API, PostgreSQL і системою email-сповіщень.",
            architecture: [
                "Локалізований React-застосунок",
                "ASP.NET Core Web API",
                "Entity Framework Core",
                "База даних PostgreSQL",
                "SMTP-сервіс сповіщень",
            ],
            features: [
                "Англійська, німецька та українська локалізація",
                "Інтерактивний логотип",
                "Доступна контактна форма",
                "Серверна валідація",
                "Обмеження запитів за IP",
                "Збереження у базі даних",
                "Email-сповіщення",
            ],
            technologies: [
                "React",
                "TypeScript",
                "ASP.NET Core",
                "PostgreSQL",
                "MailKit",
            ],
            outcome:
                "Демонструє повний production-процес від створення інтерфейсу до збереження даних і сповіщень.",
        },
    ],
};