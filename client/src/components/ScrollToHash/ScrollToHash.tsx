import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) {
            window.scrollTo({
                top: 0,
                behavior: "auto",
            });

            return;
        }

        const elementId = location.hash.substring(1);

        const timeout = window.setTimeout(() => {
            const element = document.getElementById(elementId);

            element?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 150);

        return () => {
            window.clearTimeout(timeout);
        };
    }, [location.pathname, location.hash]);

    return null;
}

export default ScrollToHash;