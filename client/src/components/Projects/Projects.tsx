import { Link } from "react-router-dom";

import { useLanguage } from "../../context/LanguageContext";
import { projectDetails } from "../../data/projectDetails";
import { useTranslations } from "../../localization/useTranslations";

function Projects() {
    const text = useTranslations();
    const { language } = useLanguage();
    const projects = projectDetails[language];

    return (
        <section className="projects" id="projects">
            <div className="projects-heading">
                <p className="section-label">
                    {text.projects.label}
                </p>

                <div>
                    <h2>{text.projects.title}</h2>
                    <p>{text.projects.description}</p>
                </div>
            </div>

            <div className="projects-list">
                {projects.map(project => (
                    <Link
                        className="project-card"
                        key={project.slug}
                        to={`/projects/${project.slug}`}
                    >
                        <div className="project-top">
                            <span>{project.number}</span>
                            <span>{project.type}</span>
                        </div>

                        <div className="project-content">
                            <p className="project-status">
                                {project.status}
                            </p>

                            <h3>{project.title}</h3>
                            <p>{project.summary}</p>
                        </div>

                        <div className="project-technologies">
                            {project.technologies.map(technology => (
                                <span key={technology}>
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Projects;