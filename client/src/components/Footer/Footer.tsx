import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import { useTranslations } from "../../localization/useTranslations";

function Footer() {
    const text = useTranslations();
    const currentYear = new Date().getFullYear();

    function scrollToTop() {
        window.history.replaceState(
            null,
            "",
            `${window.location.pathname}${window.location.search}`,
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <footer className="site-footer">
            <div className="footer-main">
                <div className="footer-brand-column">
                    <Link
                        className="footer-brand"
                        to="/"
                        aria-label="Statkevych Development"
                    >
                        <img
                            src={logo}
                            alt=""
                            draggable={false}
                        />

                        <span>
                            Statkevych
                            <strong>Development</strong>
                        </span>
                    </Link>

                    <p>{text.footer.description}</p>
                </div>

                <div className="footer-column">
                    <p className="footer-column-title">
                        {text.footer.navigation}
                    </p>

                    <nav aria-label={text.footer.navigation}>
                        <Link to="/#services">
                            {text.navigation.services}
                        </Link>

                        <Link to="/#projects">
                            {text.navigation.projects}
                        </Link>

                        <Link to="/#about">
                            {text.navigation.about}
                        </Link>

                        <Link to="/#process">
                            {text.navigation.process}
                        </Link>

                        <Link to="/#contact">
                            {text.navigation.contact}
                        </Link>
                    </nav>
                </div>

                <div className="footer-column footer-contact-column">
                    <p className="footer-column-title">
                        {text.footer.contact}
                    </p>

                    <a href="mailto:hello@statkevych.dev">
                        hello@statkevych.dev
                    </a>

                    <a
                        href="https://github.com/bodyastat26"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                        <span aria-hidden="true">↗</span>
                    </a>

                    <p className="footer-availability">
                        <span aria-hidden="true" />
                        {text.footer.availability}
                    </p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    © {currentYear} Statkevych Development.{" "}
                    {text.footer.rights}
                </p>

                <button
                    className="back-to-top"
                    type="button"
                    onClick={scrollToTop}
                >
                    {text.footer.backToTop}
                    <span aria-hidden="true">↑</span>
                </button>
            </div>
        </footer>
    );
}

export default Footer;