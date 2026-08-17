/* eslint-disable @next/next/no-img-element */
"use client";

import RotatingText from "../RotatingText";
import BorderGlow from "../BorderGlow";

interface CertificationItem {
    id: number;
    title: string;
    issuer: string;
    year: string;
    image: string;
    alt: string;
}

const certifications: CertificationItem[] = [
    {
        id: 1,
        title: "Network Engineer Internship",
        issuer: "PT Berca Hardayaperkasa",
        year: "2026",
        image: "/certif/berca.jpeg",
        alt: "NE Berca",
    },
    {
        id: 2,
        title: "Junio Web Developer",
        issuer: "Badan Nasional Sertifikasi Profesi",
        year: "2025",
        image: "/certif/bnsp.jpg",
        alt: "BNSP JWEBDEV",
    },
    {
        id: 3,
        title: "Fullstack Web Developer",
        issuer: "NF Academy",
        year: "2025",
        image: "/certif/sib.jpg",
        alt: "SIB NFA Certificate",
    },
    {
        id: 4,
        title: "Network Fundamental",
        issuer: "Aguna Course",
        year: "2026",
        image: "/certif/neFuAguna.jpg",
        alt: "Network Fundamental Certificate",
    },
    {
        id: 5,
        title: "Computer Networking",
        issuer: "STT Terpadu Nurul Fikri",
        year: "2026",
        image: "/certif/jk.jpg",
        alt: "Computer Networking Certificate",
    },
    {
        id: 6,
        title: "Operating System",
        issuer: "STT Terpadu Nurul Fikri",
        year: "2025",
        image: "/certif/so.png",
        alt: "Operating System Certificate",
    },
    {
        id: 7,
        title: "Research Assistant Internship",
        issuer: "LPPM STT Terpadu Nurul Fikri",
        year: "2025",
        image: "/certif/lppm.jpg",
        alt: "Research Assistant Certificate",
    },
    {
        id: 8,
        title: "Student NF Academy",
        issuer: "Nurul Fikri Academy",
        year: "2025",
        image: "/certif/ikutSIB.jpg",
        alt: "SIB Certificate",
    },

];

// Radius sertifikat, dikontrol di satu tempat — dipakai untuk BorderGlow & image
// agar keduanya selalu menyatu (0 = tanpa radius tambahan, sesuai default).
const CERT_RADIUS = 0;

export default function Certification() {
    return (
        <section className="px-6 pt-5 text-white sm:px-10 md:px-20">

            {/* =========================
                SECTION HEADER
            ========================== */}
            <div className="mb-10 flex flex-col items-center text-center">

                <RotatingText
                    texts={["CERTIFICATION", "資格"]}
                    mainClassName="justify-start overflow-hidden px-1 text-3xl text-white"
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

                <h1 className="mt-2 text-lg uppercase text-neutral-300">
                    List of my Certifications
                </h1>

            </div>


            {/* =========================
                CERTIFICATION GRID
            ========================== */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">

                {certifications.map((certification) => (
                    <article
                        key={certification.id}
                        className="group"
                    >
                        <BorderGlow
                            edgeSensitivity={30}
                            glowColor="40 80 80"
                            backgroundColor="#120F17"
                            borderRadius={CERT_RADIUS}
                            glowRadius={40}
                            glowIntensity={1}
                            coneSpread={25}
                            animated={false}
                            colors={["#c084fc", "#f472b6", "#38bdf8"]}
                        >
                            {/* IMAGE — langsung jadi content utama, tanpa div/frame pembungkus */}
                            <img
                                src={certification.image}
                                alt={certification.alt}
                                style={{ borderRadius: `${CERT_RADIUS}px` }}
                                className="
                                    block
                                    w-full
                                    h-auto
                                    object-contain
                                    transition-transform
                                    duration-500
                                    group-hover:scale-[1.02]
                                "
                            />
                        </BorderGlow>


                        {/* CERTIFICATION INFO */}
                        <div className="mt-4 px-1">

                            <div className="flex items-start justify-between gap-4">

                                <div>
                                    <h2 className="text-base font-semibold text-white">
                                        {certification.title}
                                    </h2>

                                    <p className="mt-1 text-sm text-neutral-400">
                                        {certification.issuer}
                                    </p>
                                </div>

                                <span className="shrink-0 text-sm text-neutral-500">
                                    {certification.year}
                                </span>

                            </div>

                        </div>

                    </article>
                ))}

            </div>

        </section>
    );
}