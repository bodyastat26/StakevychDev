import { Link } from "react-router-dom";
import type { Language } from "../../context/LanguageContext";
import { useLanguage } from "../../context/LanguageContext";

type Plan = {
    name: string;
    description: string;
    price: string;
    popular?: string;
    features: string[];
    button: string;
};

type PlansContent = {
    label: string;
    title: string;
    subtitle: string;
    plans: Plan[];
    note: string;
};

const content: Record<Language, PlansContent> = {
    en: {
        label: "Plans",
        title: "Choose the right solution.",
        subtitle:
            "Clear starting prices for businesses that need more than just a website.",
        plans: [
            {
                name: "Starter",
                description: "Professional digital presence",
                price: "$800",
                features: [
                    "Custom UI/UX",
                    "Responsive website",
                    "Contact & lead forms",
                    "Basic SEO",
                    "Deployment",
                ],
                button: "Get started",
            },
            {
                name: "Business",
                description: "Website + business system",
                price: "$1,500",
                popular: "Most popular",
                features: [
                    "Everything in Starter",
                    "Custom web application",
                    "Backend & database",
                    "Admin functionality",
                    "Third-party integrations",
                    "Business logic & workflows"
                ],
                button: "Start a project",
            },
            {
                name: "Advanced",
                description: "Automation & custom software",
                price: "$2,500",
                features: [
                    "Everything in Business",
                    "Business process automation",
                    "Advanced API integrations",
                    "Authentication & user roles",
                    "Custom dashboards",
                    "Complex business workflows",
                ],
                button: "Let's talk",
            },
        ],
        note:
            "Every business is different. These packages provide a starting point — the final scope and price are agreed before development begins.",
    },

    de: {
        label: "Pakete",
        title: "Die passende Lösung für Ihr Unternehmen.",
        subtitle:
            "Klare Einstiegspreise für Unternehmen, die mehr als nur eine Website benötigen.",
        plans: [
            {
                name: "Starter",
                description: "Professioneller digitaler Auftritt",
                price: "$800",
                features: [
                    "Individuelles UI/UX",
                    "Responsive Website",
                    "Kontakt- und Anfrageformulare",
                    "Basis-SEO",
                    "Deployment", 
                ],
                button: "Projekt starten",
            },
            {
                name: "Business",
                description: "Website + Business-System",
                price: "$1,500",
                popular: "Am beliebtesten",
                features: [
                    "Alles aus Starter",
                    "Individuelle Webanwendung",
                    "Backend & Datenbank",
                    "Admin-Funktionen",
                    "Drittanbieter-Integrationen",
                    "Geschäftslogik & Workflows",
                ],
                button: "Projekt starten",
            },
            {
                name: "Advanced",
                description: "Automatisierung & individuelle Software",
                price: "$2,500",
                features: [
                    "Alles aus Business",
                    "Automatisierung von Geschäftsprozessen",
                    "Erweiterte API-Integrationen",
                    "Authentifizierung & Benutzerrollen",
                    "Individuelle Dashboards",
                    "Komplexe Workflows",
                ],
                button: "Kontakt aufnehmen",
            },
        ],
        note:
            "Jedes Unternehmen ist anders. Diese Pakete dienen als Ausgangspunkt — Umfang und Endpreis werden vor Entwicklungsbeginn vereinbart.",
    },

    uk: {
        label: "Пакети",
        title: "Оберіть правильне рішення.",
        subtitle:
            "Зрозумілі стартові ціни для бізнесу, якому потрібно більше, ніж просто сайт.",
        plans: [
            {
                name: "Starter",
                description: "Професійна онлайн-присутність",
                price: "$800",
                features: [
                    "Індивідуальний UI/UX",
                    "Адаптивний сайт",
                    "Контактні форми",
                    "Базове SEO",
                    "Розгортання",
                ],
                button: "Розпочати",
            },
            {
                name: "Business",
                description: "Сайт + бізнес-система",
                price: "$1,500",
                popular: "Найпопулярніший",
                features: [
                    "Усе зі Starter",
                    "Індивідуальний вебзастосунок",
                    "Backend та база даних",
                    "Адмін-функціонал",
                    "Сторонні інтеграції",
                    "Бізнес-логіка та процеси",
                ],
                button: "Розпочати проєкт",
            },
            {
                name: "Advanced",
                description: "Автоматизація та custom software",
                price: "$2,500",
                features: [
                    "Усе з Business",
                    "Автоматизація бізнес-процесів",
                    "Розширені API-інтеграції",
                    "Авторизація та ролі",
                    "Індивідуальні dashboard-и",
                    "Складні бізнес-процеси",
                ],
                button: "Обговорити проєкт",
            },
        ],
        note:
            "Кожен бізнес унікальний. Ці пакети є стартовою точкою — фінальний обсяг робіт і ціна узгоджуються до початку розробки.",
    },
};

function Plans() {
    const { language } = useLanguage();
    const text = content[language];

    return (
        <section className="plans-section" id="plans">
            <div className="plans-header">
                <p className="section-label">{text.label}</p>

                <div>
                    <h2>{text.title}</h2>
                    <p>{text.subtitle}</p>
                </div>
            </div>

            <div className="plans-grid">
                {text.plans.map((plan) => (
                    <article
                        className={`plan-card ${
                            plan.popular ? "plan-card-featured" : ""
                        }`}
                        key={plan.name}
                    >
                        <div className="plan-card-top">
                            <div>
                                <span className="plan-name">
                                    {plan.name}
                                </span>

                                {plan.popular && (
                                    <span className="plan-popular">
                                        {plan.popular}
                                    </span>
                                )}
                            </div>

                            <p>{plan.description}</p>
                        </div>

                        <div className="plan-price">
                            <span>from</span>
                            <strong>{plan.price}</strong>
                        </div>

                        <ul className="plan-features">
                            {plan.features.map((feature) => (
                                <li key={feature}>
                                    <span aria-hidden="true">✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Link
                            className="plan-button"
                            to="/#contact"
                        >
                            {plan.button}
                            <span aria-hidden="true">↗</span>
                        </Link>
                    </article>
                ))}
            </div>

            <p className="plans-note">{text.note}</p>
        </section>
    );
}

export default Plans;