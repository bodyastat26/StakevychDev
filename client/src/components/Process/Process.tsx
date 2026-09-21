import {
    useEffect,
    useRef,
    useState,
    type CSSProperties,
} from "react";

import { useTranslations } from "../../localization/useTranslations";

function Process() {
    const text = useTranslations();

    const [activeStep, setActiveStep] = useState(0);
    const stepElements = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    const step = Number(
                        (entry.target as HTMLElement).dataset.step,
                    );

                    setActiveStep(step);
                });
            },
            {
                threshold: 0.55,
            },
        );

        stepElements.current.forEach((element) => {
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const progress =
        text.process.steps.length === 1
            ? 100
            : (activeStep / (text.process.steps.length - 1)) * 100;

    const timelineStyle = {
        "--process-progress": `${progress}%`,
    } as CSSProperties;

    return (
        <section className="process" id="process">
            <div className="process-heading">
                <p className="section-label">{text.process.label}</p>

                <div>
                    <h2>{text.process.title}</h2>
                    <p>{text.process.description}</p>
                </div>
            </div>

            <div className="process-timeline" style={timelineStyle}>
                <div className="process-line" aria-hidden="true">
                    <div className="process-line-progress" />
                </div>

                <div className="process-steps">
                    {text.process.steps.map((step, index) => (
                        <article
                            className={`process-step ${
                                index <= activeStep ? "is-active" : ""
                            }`}
                            data-step={index}
                            key={step.number}
                            ref={(element) => {
                                stepElements.current[index] = element;
                            }}
                        >
                            <div className="process-marker">
                                <span>{step.number}</span>
                            </div>

                            <div className="process-step-content">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Process;