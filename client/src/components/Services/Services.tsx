import { useTranslations } from "../../localization/useTranslations";

function Services() {
    const text = useTranslations();

    return (
        <section className="services" id="services">
            <div className="services-heading">
                <p className="section-label">{text.services.label}</p>
                <h2>{text.services.title}</h2>
            </div>

            <div className="services-grid">
                {text.services.items.map((service) => (
                    <article className="service-card" key={service.number}>
            <span className="service-number">
              {service.number}
            </span>

                        <div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Services;