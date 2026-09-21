import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useTranslations } from "../../localization/useTranslations";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";

function Header() {
    const text = useTranslations();

    const [headerReleased, setHeaderReleased] =
        useState(false);

    useEffect(() => {
        function handleScroll() {
            setHeaderReleased(window.scrollY > 650);
        }

        handleScroll();

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true },
        );

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll,
            );
        };
    }, []);

    return (
        <header
            id="top"
            className={
                headerReleased
                    ? "header-released"
                    : undefined
            }
        >
            <Link
                className="brand"
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

            <div className="header-actions">
                <nav aria-label="Main navigation">
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

                <LanguageSwitch />
            </div>
        </header>
    );
}

export default Header;