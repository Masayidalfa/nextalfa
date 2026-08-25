"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import RotatingText from "../RotatingText";
import TextShuffle from "../TextShuffle";

export default function Story() {
    const [isExpanded, setIsExpanded] = useState(false);

    const shortText =
        "Muhamad Masayid Alfarizqi, better known as Masayid, is an IT enthusiast with interests in Software Development, Networking, and Cybersecurity.....";

    const highlight = "text-[rgb(33,150,243)] font-semibold";

    const fullText = (
        <>
            <strong className={highlight}>Muhamad Masayid Alfarizqi</strong>,
            better known as Masayid, is an IT enthusiast with interests in{" "}
            <strong className={highlight}>Software Development</strong>,{" "}
            <strong className={highlight}>Networking</strong>, and{" "}
            <strong className={highlight}>Cybersecurity</strong>. His
            journey in technology began during his studies in Informatics
            Engineering at{" "}
            <strong className={highlight}>
                STT Terpadu Nurul Fikri
            </strong>
            , where his curiosity gradually led him to explore different
            areas of IT.
            <br />
            <br />
            During his studies, he started developing web applications
            using <strong className={highlight}>PHP</strong>,{" "}
            <strong className={highlight}>Laravel</strong>,{" "}
            <strong className={highlight}>MySQL</strong>,{" "}
            <strong className={highlight}>React</strong>, and{" "}
            <strong className={highlight}>Tailwind CSS</strong>, while
            working on various academic and personal projects. His interest
            in technology eventually expanded beyond software development
            into computer networking and cybersecurity.
            <br />
            <br />
            He explored <strong className={highlight}>Linux</strong>,{" "}
            <strong className={highlight}>MikroTik</strong>,{" "}
            <strong className={highlight}>PNETLab</strong>, and network
            security, gaining hands-on experience through labs,
            communities, and academic projects. These experiences shaped
            his interest in understanding not only how applications are
            built, but also how the systems and networks behind them work.
            <br />
            <br />
            In 2026, he gained professional experience at{" "}
            <strong className={highlight}>
                PT Berca Hardayaperkasa
            </strong>{" "}
            as part of the{" "}
            <strong className={highlight}>
                TSS Network &amp; Solution (L2)
            </strong>{" "}
            team, where he experienced working in a professional IT
            environment and further developed his knowledge of networking
            and infrastructure.
            <br />
            <br />
            For his final project, he researched{" "}
            <strong className={highlight}>
                DDoS mitigation using MikroTik RouterOS
            </strong>
            , combining networking and cybersecurity through a virtual
            network simulation using PNETLab.
            <br />
            <br />
            Today, as a fresh graduate, he continues to explore the
            intersection of{" "}
            <strong className={highlight}>
                Development × Network × Security
            </strong>
            , constantly learning, experimenting, and looking for new
            challenges to grow as an IT professional.
        </>
    );

    const handleToggle = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <section className="relative w-full my-5">
            <div className="relative h-[300px] w-full">
                <Image
                    src="/assets/image/gallery/3.jpeg"
                    alt="Story Enzy"
                    fill
                    className="object-cover object-[center_25%] scale-105 blur-sm"
                />
                <div className="absolute inset-0 bg-gray-500/40 scale-110"></div>
                <div className="relative z-10 flex h-full flex-col items-center justify-center text-white">
                    <h1 className="text-xl md:text-3xl font-bold">
                        THE STORY OF
                    </h1>

                    <h1 className="text-5xl md:text-8xl font-extrabold">
                        MasayidAlfa
                    </h1>
                </div>
            </div>

            <div className="container mx-auto flex flex-col items-center text-white pt-8 px-5">
                <RotatingText
                    texts={["SHORT BIOGRAPHY", "ショート・バイオグラフィー"]}
                    mainClassName="text-white overflow-hidden justify-start text-lg md:text-3xl px-1"
                    staggerFrom="last"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 400,
                    }}
                    rotationInterval={4500}
                    splitBy="characters"
                    auto
                    loop
                />

                <h1 className="text-base md:text-lg">STORY OF MY LIFE</h1>

                <p
                    className={`text-justify text-xs md:text-sm transition-all duration-300 ease-in-out mt-3 px-5 ${
                        isExpanded ? "max-w-2xl" : "max-w-xl"
                    }`}
                >
                    {isExpanded ? fullText : shortText}
                </p>

                <button
                    onClick={handleToggle}
                    className="px-3 py-3 border transition-colors duration-200 hover:bg-white hover:text-black flex items-center gap-2 my-4"
                >
                    {isExpanded ? "Hide Article" : "Read More"}{" "}
                    <FaChevronDown
                        className={`transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : "rotate-0"
                        }`}
                    />
                </button>

                <p>WHAT PEOPLE SAY ABOUT ME</p>
                <TextShuffle
                    texts={["Reliable", "Funny", "Humble", "Team Player", "Resilient."]}
                    interval={200}
                    className="text-4xl font-extrabold uppercase"
                />

            </div>

        </section>
    );
}