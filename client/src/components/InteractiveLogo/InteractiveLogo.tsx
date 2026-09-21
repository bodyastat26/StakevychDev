import {
    useEffect,
    useRef,
    useState,
    type PointerEvent,
    type WheelEvent,
} from "react";

import logo from "../../assets/logo.png";
import { useTranslations } from "../../localization/useTranslations";

type Rotation = {
    x: number;
    y: number;
};

type PointerPosition = {
    x: number;
    y: number;
};

type Velocity = {
    x: number;
    y: number;
};

const initialRotation: Rotation = {
    x: -8,
    y: -18,
};

function InteractiveLogo() {
    const text = useTranslations();

    const [rotation, setRotation] =
        useState<Rotation>(initialRotation);

    const [scale, setScale] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    const previousPointer = useRef<PointerPosition>({
        x: 0,
        y: 0,
    });

    const velocity = useRef<Velocity>({
        x: 0,
        y: 0,
    });

    const animationFrame = useRef<number | null>(null);

    function stopAnimation() {
        if (animationFrame.current !== null) {
            cancelAnimationFrame(animationFrame.current);
            animationFrame.current = null;
        }
    }

    function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
        stopAnimation();

        event.currentTarget.setPointerCapture(event.pointerId);

        previousPointer.current = {
            x: event.clientX,
            y: event.clientY,
        };

        velocity.current = {
            x: 0,
            y: 0,
        };

        setIsDragging(true);
        setHasInteracted(true);
    }

    function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
        if (!isDragging) {
            return;
        }

        const movementX = event.clientX - previousPointer.current.x;
        const movementY = event.clientY - previousPointer.current.y;

        const rotationSpeed = 0.55;

        const rotationChangeX = -movementY * rotationSpeed;
        const rotationChangeY = movementX * rotationSpeed;

        velocity.current = {
            x: rotationChangeX,
            y: rotationChangeY,
        };

        setRotation((currentRotation) => ({
            x: currentRotation.x + rotationChangeX,
            y: currentRotation.y + rotationChangeY,
        }));

        previousPointer.current = {
            x: event.clientX,
            y: event.clientY,
        };
    }

    function startInertia() {
        const friction = 0.94;
        const minimumVelocity = 0.01;

        function animate() {
            velocity.current.x *= friction;
            velocity.current.y *= friction;

            setRotation((currentRotation) => ({
                x: currentRotation.x + velocity.current.x,
                y: currentRotation.y + velocity.current.y,
            }));

            const isMoving =
                Math.abs(velocity.current.x) > minimumVelocity ||
                Math.abs(velocity.current.y) > minimumVelocity;

            if (isMoving) {
                animationFrame.current = requestAnimationFrame(animate);
            } else {
                animationFrame.current = null;
            }
        }

        animationFrame.current = requestAnimationFrame(animate);
    }

    function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
        }

        setIsDragging(false);
        startInertia();
    }

    function handlePointerCancel() {
        setIsDragging(false);
        startInertia();
    }

    function handleWheel(event: WheelEvent<HTMLDivElement>) {
        event.preventDefault();
        setHasInteracted(true);

        setScale((currentScale) => {
            const nextScale = currentScale - event.deltaY * 0.001;

            return Math.min(Math.max(nextScale, 0.7), 1.35);
        });
    }

    function resetLogo() {
        stopAnimation();

        velocity.current = {
            x: 0,
            y: 0,
        };

        setRotation(initialRotation);
        setScale(1);
    }

    useEffect(() => {
        return () => {
            stopAnimation();
        };
    }, []);

    return (
        <div className="interactive-logo-area">
            <div
                className={`interactive-logo ${
                    isDragging ? "is-dragging" : ""
                }`}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerCancel}
                onWheel={handleWheel}
                onDoubleClick={resetLogo}
                style={{
                    transform: `
            perspective(900px)
            rotateX(${rotation.x}deg)
            rotateY(${rotation.y}deg)
            scale(${scale})
          `,
                }}
            >
                <div className="logo-face logo-front">
                    <img src={logo} alt="Statkevych Development logo" />
                </div>

                <div className="logo-face logo-back">
                    <img src={logo} alt="" />
                </div>
            </div>

            <div className="logo-shadow" />

            {!hasInteracted && (
                <p className="logo-instruction">
                    {text.logo.instruction}
                </p>
            )}

            {hasInteracted && (
                <button
                    className="logo-reset"
                    type="button"
                    onClick={resetLogo}
                >
                    {text.logo.reset}
                </button>
            )}
        </div>
    );
}

export default InteractiveLogo;