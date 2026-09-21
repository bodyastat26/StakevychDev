import { useLocation } from "react-router-dom";

import logo from "../../assets/logo.png";

function PageTransition() {
    const location = useLocation();

    return (
        <div
            key={location.key}
            className="page-transition"
            aria-hidden="true"
        >
            <div className="page-transition-brand">
                <img
                    src={logo}
                    alt=""
                    draggable={false}
                />

                <div>
                    <strong>Statkevych</strong>
                    <span>Development</span>
                </div>
            </div>
        </div>
    );
}

export default PageTransition;