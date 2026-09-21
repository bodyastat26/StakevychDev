import type { Language } from "../../context/LanguageContext";
import { useLanguage } from "../../context/LanguageContext";

type FAQItem = {
    question: string;
    answer: string;
};

type FAQContent = {
    label: string;
    title: string;
    subtitle: string;
    items: FAQItem[];
};

const content: Record<Language, FAQContent> = {
    en: {
        label: "FAQ",
        title: "Before we start.",
        subtitle:
            "A few common questions about projects, pricing and the development process.",
        items: [
            {
                question: "How long does a project take?",
                answer:
                    "It depends on the scope and complexity. A smaller website can usually be completed faster, while custom web applications and automation systems require more development time. A realistic timeline is agreed before development begins.",
            },
            {
                question: "How does payment work?",
                answer:
                    "The payment structure is agreed before the project begins and depends on the project size. Larger projects can be divided into milestones, so payments are connected to clearly defined stages of development.",
            },
            {
                question: "Are the package prices fixed?",
                answer:
                    "The listed prices are starting points. The final price depends on the required functionality, integrations and overall scope. You will receive a clear project price before development begins.",
            },
            {
                question: "Can you work with an existing website or application?",
                answer:
                    "Yes. Existing systems can be improved, extended with new functionality or connected to additional services and APIs.",
            },
            {
                question: "Can I add new features later?",
                answer:
                    "Yes. Projects can be extended after launch. New functionality, integrations and improvements can be developed as your business requirements change.",
            },
            {
                question: "Are hosting and domain costs included?",
                answer:
                    "Third-party costs such as domains, hosting and external services are not included in the project price unless explicitly agreed. I can help configure the required infrastructure and deployment.",
            },
            {
                question: "Do you provide support after launch?",
                answer:
                    "Yes. Maintenance, technical support, improvements and additional development can be provided as separate services after the initial project is completed.",
            },
        ],
    },

    de: {
        label: "FAQ",
        title: "Bevor wir starten.",
        subtitle:
            "Häufige Fragen zu Projekten, Preisen und dem Entwicklungsprozess.",
        items: [
            {
                question: "Wie lange dauert ein Projekt?",
                answer:
                    "Das hängt vom Umfang und von der Komplexität ab. Eine kleinere Website kann in der Regel schneller umgesetzt werden, während individuelle Webanwendungen und Automatisierungssysteme mehr Entwicklungszeit benötigen. Vor Projektbeginn wird ein realistischer Zeitrahmen vereinbart.",
            },
            {
                question: "Wie funktioniert die Bezahlung?",
                answer:
                    "Die Zahlungsstruktur wird vor Projektbeginn vereinbart und richtet sich nach der Größe des Projekts. Größere Projekte können in Meilensteine aufgeteilt werden, sodass Zahlungen an klar definierte Entwicklungsphasen gekoppelt sind.",
            },
            {
                question: "Sind die Paketpreise Festpreise?",
                answer:
                    "Die angegebenen Preise sind Einstiegspreise. Der endgültige Preis hängt von den benötigten Funktionen, Integrationen und dem Gesamtumfang ab. Vor Entwicklungsbeginn erhalten Sie einen klar definierten Projektpreis.",
            },
            {
                question: "Können Sie an einer bestehenden Website oder Anwendung arbeiten?",
                answer:
                    "Ja. Bestehende Systeme können verbessert, um neue Funktionen erweitert oder mit zusätzlichen Diensten und APIs verbunden werden.",
            },
            {
                question: "Kann ich später weitere Funktionen hinzufügen?",
                answer:
                    "Ja. Projekte können auch nach dem Launch erweitert werden. Neue Funktionen, Integrationen und Verbesserungen können entsprechend den neuen Anforderungen Ihres Unternehmens entwickelt werden.",
            },
            {
                question: "Sind Hosting- und Domainkosten enthalten?",
                answer:
                    "Kosten für Drittanbieter wie Domains, Hosting oder externe Dienste sind nicht im Projektpreis enthalten, sofern nichts anderes vereinbart wurde. Bei der Einrichtung der benötigten Infrastruktur und beim Deployment kann ich Sie unterstützen.",
            },
            {
                question: "Bieten Sie Support nach dem Launch an?",
                answer:
                    "Ja. Wartung, technischer Support, Verbesserungen und zusätzliche Entwicklung können nach Abschluss des ursprünglichen Projekts als separate Leistungen angeboten werden.",
            },
        ],
    },

    uk: {
        label: "FAQ",
        title: "Перед початком.",
        subtitle:
            "Відповіді на поширені питання про проєкти, ціни та процес розробки.",
        items: [
            {
                question: "Скільки часу займає проєкт?",
                answer:
                    "Це залежить від обсягу та складності. Невеликий сайт зазвичай можна реалізувати швидше, тоді як індивідуальні вебзастосунки та системи автоматизації потребують більше часу. Реалістичні терміни узгоджуються до початку розробки.",
            },
            {
                question: "Як відбувається оплата?",
                answer:
                    "Структура оплати узгоджується до початку проєкту та залежить від його масштабу. Великі проєкти можуть бути розділені на етапи, а оплата прив'язана до чітко визначених стадій розробки.",
            },
            {
                question: "Ціни пакетів фіксовані?",
                answer:
                    "Вказані ціни є стартовими. Фінальна вартість залежить від необхідного функціоналу, інтеграцій та загального обсягу робіт. Остаточна ціна узгоджується до початку розробки.",
            },
            {
                question: "Чи можете ви працювати з існуючим сайтом або застосунком?",
                answer:
                    "Так. Існуючі системи можна покращувати, доповнювати новими функціями або підключати до додаткових сервісів та API.",
            },
            {
                question: "Чи можна додавати нові функції після запуску?",
                answer:
                    "Так. Проєкт можна розширювати після запуску. Нові функції, інтеграції та покращення можуть розроблятися відповідно до нових потреб бізнесу.",
            },
            {
                question: "Чи входять хостинг і домен у вартість?",
                answer:
                    "Витрати на сторонні сервіси, такі як домен, хостинг або зовнішні платформи, не входять у вартість проєкту, якщо інше не було погоджено. Я можу допомогти з налаштуванням необхідної інфраструктури та deployment.",
            },
            {
                question: "Чи надаєте ви підтримку після запуску?",
                answer:
                    "Так. Обслуговування, технічна підтримка, покращення та додаткова розробка можуть надаватися як окремі послуги після завершення основного проєкту.",
            },
        ],
    },
};

function FAQ() {
    const { language } = useLanguage();
    const text = content[language];

    return (
        <section className="faq-section" id="faq">
            <div className="faq-header">
                <p className="section-label">{text.label}</p>

                <div>
                    <h2>{text.title}</h2>
                    <p>{text.subtitle}</p>
                </div>
            </div>

            <div className="faq-list">
                {text.items.map((item, index) => (
                    <details className="faq-item" key={item.question}>
                        <summary>
                            <span className="faq-number">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="faq-question">
                                {item.question}
                            </span>

                            <span
                                className="faq-icon"
                                aria-hidden="true"
                            >
                                +
                            </span>
                        </summary>

                        <div className="faq-answer">
                            <p>{item.answer}</p>
                        </div>
                    </details>
                ))}
            </div>
        </section>
    );
}

export default FAQ;