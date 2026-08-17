"use client";

export default function Loader() {
    return (
        <div className="loader-wrapper">
            <div className="loader">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
                <div className="orbit-container">
                    <div className="orbit-dot" />
                    <div className="orbit-dot" />
                    <div className="orbit-dot" />
                    <div className="orbit-dot" />
                </div>
            </div>

            <style jsx>{`
                .loader-wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .loader {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 12px;
                    position: relative;
                    animation: rotate-circle 3s infinite ease-in-out;
                }
                .dot {
                    width: 20px;
                    height: 20px;
                    background-color: #f00;
                    border-radius: 50%;
                    box-shadow: 0 0 10px #f00, 0 0 20px #f00;
                    animation:
                        bounce 1.4s ease-in-out infinite,
                        glow 1.4s infinite alternate,
                        color-change 3s infinite ease-in-out;
                }
                .dot:nth-child(1) {
                    animation-delay: -0.32s;
                }
                .dot:nth-child(2) {
                    animation-delay: -0.16s;
                }
                .orbit-container {
                    position: absolute;
                    width: 100px;
                    height: 100px;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                .orbit-dot {
                    position: absolute;
                    width: 8px;
                    height: 8px;
                    background-color: #ff0;
                    border-radius: 50%;
                    box-shadow: 0 0 10px #ff0;
                    animation: orbit 3s linear infinite;
                }
                .orbit-dot:nth-child(1) {
                    top: 0;
                    left: 50%;
                    animation-delay: -1s;
                }
                .orbit-dot:nth-child(2) {
                    top: 50%;
                    left: 100%;
                    animation-delay: -2s;
                }
                .orbit-dot:nth-child(3) {
                    top: 100%;
                    left: 50%;
                    animation-delay: -3s;
                }
                .orbit-dot:nth-child(4) {
                    top: 50%;
                    left: 0;
                    animation-delay: -4s;
                }

                @keyframes bounce {
                    0%,
                    80%,
                    100% {
                        transform: translateY(0);
                    }
                    40% {
                        transform: translateY(-15px);
                    }
                }
                @keyframes glow {
                    0% {
                        box-shadow: 0 0 10px #f00, 0 0 20px #f00;
                    }
                    50% {
                        box-shadow: 0 0 20px #f00, 0 0 40px #f00;
                    }
                    100% {
                        box-shadow: 0 0 10px #f00, 0 0 20px #f00;
                    }
                }
                @keyframes rotate-circle {
                    0%,
                    25% {
                        transform: rotate(0deg);
                    }
                    50% {
                        transform: rotate(360deg);
                    }
                    75%,
                    100% {
                        transform: rotate(0deg);
                    }
                }
                @keyframes color-change {
                    0%,
                    25% {
                        background-color: #f00;
                        box-shadow: 0 0 10px #f00, 0 0 20px #f00;
                    }
                    50% {
                        background-color: #ff0;
                        box-shadow: 0 0 20px #ff0, 0 0 40px #ff0;
                    }
                    75%,
                    100% {
                        background-color: #f00;
                        box-shadow: 0 0 10px #f00, 0 0 20px #f00;
                    }
                }
                @keyframes orbit {
                    0% {
                        transform: rotate(0deg) translateX(50px) rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg) translateX(50px) rotate(-360deg);
                    }
                }
            `}</style>
        </div>
    );
}