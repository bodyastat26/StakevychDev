import { useEffect, useRef } from "react";

import { useTranslations } from "../../localization/useTranslations";

function ProjectCursor() {
    const text = useTranslations();
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handlePointerMove(event: PointerEvent) {
            const cursorElement = cursorRef.current;

            if (cursorElement === null) {
                return;
            }

            cursorElement.style.left = `${event.clientX}px`;
            cursorElement.style.top = `${event.clientY}px`;

            const target = event.target;

            if (!(target instanceof Element)) {
                cursorElement.classList.remove("is-visible");
                return;
            }

            const projectCard = target.closest(".project-card");
            const isOverProject = projectCard !== null;

            cursorElement.classList.toggle(
                "is-visible",
                isOverProject,
            );
        }

        function hideCursor() {
            const cursorElement = cursorRef.current;

            if (cursorElement === null) {
                return;
            }

            cursorElement.classList.remove("is-visible");
        }

        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("blur", hideCursor);
        document.addEventListener("mouseleave", hideCursor);

        return () => {
            window.removeEventListener(
                "pointermove",
                handlePointerMove,
            );

            window.removeEventListener("blur", hideCursor);
            document.removeEventListener("mouseleave", hideCursor);
        };
    }, []);

    return (
        <div
            className="project-cursor"
            ref={cursorRef}
            aria-hidden="true"
        >
            <span>{text.projects.view}</span>
            <span>↗</span>
        </div>
    );
}

export default ProjectCursor;