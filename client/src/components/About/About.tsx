import { useTranslations } from "../../localization/useTranslations";

function About() {
    const text = useTranslations();

    return (
        <section className="about" id="about">
            <div className="about-introduction">
                <p className="section-label">{text.about.label}</p>

                <div className="about-copy">
                    <h2>{text.about.title}</h2>

                    {text.about.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
            </div>

            <div className="about-highlights">
                {text.about.statistics.map((statistic) => (
                    <div className="about-stat" key={statistic.label}>
                        <strong>{statistic.value}</strong>
                        <span>{statistic.label}</span>
                    </div>
                ))}
            </div>

            <div className="advantages-list">
                {text.about.advantages.map((advantage) => (
                    <article className="advantage" key={advantage.number}>
                        <span>{advantage.number}</span>

                        <div>
                            <h3>{advantage.title}</h3>
                            <p>{advantage.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default About;