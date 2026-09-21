import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import type { Language } from "../context/LanguageContext";
import { useLanguage } from "../context/LanguageContext";
import { projectDetails } from "../data/projectDetails";
import dashboardImage from "../assets/ai-interview-trainer-dashboard.png";

type DetailLabels = {
    back: string;
    challenge: string;
    solution: string;
    architecture: string;
    features: string;
    technologies: string;
    contact: string;
    screenshotAlt: string;
};

const labels: Record<Language, DetailLabels> = {
    en: {
        back: "Back to projects",
        challenge: "The challenge",
        solution: "The solution",
        architecture: "Architecture",
        features: "Key features",
        technologies: "Technologies",
        contact: "Discuss a similar project",
        screenshotAlt: "AI Interview Trainer dashboard",
    },
    de: {
        back: "Zurück zu den Projekten",
        challenge: "Die Herausforderung",
        solution: "Die Lösung",
        architecture: "Architektur",
        features: "Hauptfunktionen",
        technologies: "Technologien",
        contact: "Ähnliches Projekt besprechen",
        screenshotAlt: "Dashboard des KI-Interview-Trainers",
    },
    uk: {
        back: "Назад до проєктів",
        challenge: "Завдання",
        solution: "Рішення",
        architecture: "Архітектура",
        features: "Основні можливості",
        technologies: "Технології",
        contact: "Обговорити схожий проєкт",
        screenshotAlt: "Панель керування AI Interview Trainer",
    },
};

function ProjectDetailsPage() {
    const { slug } = useParams<{ slug: string }>();
    const { language } = useLanguage();

    const project = projectDetails[language].find(
        (item) => item.slug === slug,
    );

    const text = labels[language];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, [slug]);

    if (!project) {
        return <Navigate to="/" replace />;
    }

    return (
        <main className="project-details-page">
            <nav
                className="project-details-navigation"
                aria-label="Project navigation"
            >
                <Link to="/#projects">
                    <span aria-hidden="true">←</span>
                    {text.back}
                </Link>

                <span>{project.number}</span>
            </nav>

            <section className="project-details-hero">
                <div>
                    <p className="section-label">{project.type}</p>
                    <span className="project-details-status">
                        {project.status}
                    </span>
                </div>

                <div>
                    <h1>{project.title}</h1>
                    <p>{project.summary}</p>
                </div>
            </section>

            {project.slug === "ai-interview-trainer" && (
                <div className="case-study-screenshot">
                    <img
                        src={dashboardImage}
                        alt={text.screenshotAlt}
                    />
                </div>
            )}

            <section className="project-details-overview">
                <article>
                    <span>{text.challenge}</span>

                    <div>
                        <h2>{text.challenge}</h2>
                        <p>{project.challenge}</p>
                    </div>
                </article>

                <article>
                    <span>{text.solution}</span>

                    <div>
                        <h2>{text.solution}</h2>
                        <p>{project.solution}</p>
                    </div>
                </article>
            </section>

            <section className="project-details-grid">
                <article className="project-details-panel">
                    <span>01</span>
                    <h2>{text.architecture}</h2>

                    <ol className="architecture-list">
                        {project.architecture.map((item, index) => (
                            <li key={item}>
                                <span>
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <p>{item}</p>
                            </li>
                        ))}
                    </ol>
                </article>

                <article className="project-details-panel">
                    <span>02</span>
                    <h2>{text.features}</h2>

                    <ul className="feature-list">
                        {project.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                        ))}
                    </ul>
                </article>
            </section>

            <section className="project-details-technology">
                <span>{text.technologies}</span>

                <div>
                    {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                    ))}
                </div>
            </section>

            <section className="project-details-outcome">
                <p className="section-label">{project.status}</p>
                <h2>{project.outcome}</h2>

                <Link to="/#contact">
                    {text.contact}
                    <span aria-hidden="true">↗</span>
                </Link>
            </section>
        </main>
    );
}

export default ProjectDetailsPage;
