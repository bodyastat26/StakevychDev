import InteractiveLogo from "../InteractiveLogo/InteractiveLogo";
import { useTranslations } from "../../localization/useTranslations";

function Hero() {
    const text = useTranslations();

    return (
        <section className="hero" id="top">
            <div className="hero-content">
                <p className="hero-label">{text.hero.label}</p>

                <h1>{text.hero.title}</h1>

                <p className="hero-description">
                    {text.hero.description}
                </p>

                <div className="hero-actions">
                    <a href="#contact">{text.hero.primaryButton}</a>
                    <a href="#projects">{text.hero.secondaryButton}</a>
                </div>
            </div>

            <InteractiveLogo />
        </section>
    );
}

export default Hero;