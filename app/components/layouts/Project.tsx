/* eslint-disable @next/next/no-img-element */
'use client'

import RotatingText from "../RotatingText"
import ShinyText from "../ShinyText"

const projects = [
    {
        client: "LPPM STT TERPADU NURUL FIKRI",
        year: "2025",
        location: "Depok, Indonesia",
        position: "Software Engineer",
        title: "INTRUSION DETECTION SYSTEM BASED ON SUPERVISED MACHINE LEARNING",
        description:
            "Developed an Intrusion Detection System using supervised machine learning to detect SQL Injection and Cross-Site Scripting (XSS) attacks on the Moodle platform, including the development of a custom Moodle plugin as part of the research implementation.",
        bgImage: "/assets/image/project/bgP1.jpg",   // layer 0 — background card
        previewImage: "/assets/image/project/P1.png", // layer 10 — mini browser screenshot
    },
    {
        client: "CV SPEED NETWORK GROUP",
        year: "2025",
        location: "Bogor, Indonesia",
        position: "WEB DEVELOPER",
        title: "WEBSITE LANDING PAGE COMPANY PROFILE SPEEDNET",
        description:
            "Developed a responsive company profile website for CV Speed Network Group using Tailwind CSS, featuring a modern interface, responsive layouts, and optimized user experience across desktop and mobile devices.",
        bgImage: "/assets/image/project/bgP2.jpg",   // layer 0 — background card
        previewImage: "/assets/image/project/P2.png", // layer 10 — mini browser screenshot
    },
    {
        client: "NF ACADEMY",
        year: "2024-2025",
        location: "Depok, Indonesia",
        position: "FULSTACK ENGINEER",
        title: "COMPPATH — COMPETITION FINDER",
        description:
            "Developed a web-based information system for discovering and searching competitions, built collaboratively as a final project during the Studi Independen program at NF Academy.",
        bgImage: "/assets/image/project/bgP3.jpg",   // layer 0 — background card
        previewImage: "/assets/image/project/P3.png", // layer 10 — mini browser screenshot
    },
    // project berikutnya: tambah object baru, bgImage boleh sama/beda per project
]

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">

                {/* LAYER 0 — BACKGROUND */}
                <img
                    src={project.bgImage}
                    alt=""
                    className="absolute inset-0 z-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 z-20 bg-[#071013]/25" />

                {/* LAYER 10 — SCREENSHOT / MINI BROWSER */}
                <div className="absolute inset-y-0 right-0 z-10 flex w-3/5 items-center justify-center px-8">
                    <div className="w-full rounded-lg overflow-hidden shadow-2xl border border-white/10">
                        {/* fake browser topbar */}
                        <div className="flex items-center gap-1.5 bg-[#10171a] px-3 py-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                            <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                        </div>
                        <img
                            src={project.previewImage}
                            alt={project.title}
                            className="w-full object-cover bg-[#071013]/60"
                        />
                        {/* dark overlay */}
                    </div>
                </div>


                {/* LAYER 20 — TEXT */}
                <div className="absolute inset-0 z-30 flex items-center">
                       {/* LAYER 20 — TEXT, dipecah 3 zona */}
                        <div className="absolute inset-0 z-20 w-3/5">
                            <div className="h-full flex flex-col justify-between px-10 py-10">

                                {/* ZONA ATAS */}
                                <div>
                                    <p className="text-sm md:text-xl font-bold font-sans">{project.client}</p>
                                    <p className="mt-1 text-xs md:text-base text-gray-300 font-sans">
                                        {project.year} | {project.location}
                                    </p>
                                </div>

                                {/* ZONA TENGAH */}
                                <div>
                                    <p className="text-xs md:text-base font-medium uppercase tracking-widest text-gray-300 font-sans">
                                        {project.position}
                                    </p>
                                    <h2 className="mt-7 mb-7 text-xl md:text-4xl font-bold">
                                        {project.title}
                                    </h2>
                                    <p className="text-sm leading-6 text-gray-200 max-w-md">
                                        {project.description}
                                    </p>
                                </div>

                                {/* ZONA BAWAH */}
                                <div>
                                    <span className="bg-cyan-700 p-3 border-collapse rounded">anjay mabar</span>
                                </div>

                            </div>
                        </div>
                </div>

            </div>
        </div>
    )
}

export default function project(){
    return (
        <section className="min-h-full flex flex-col items-center px-6 sm:px-10 md:px-20 pt-7 pb-20 text-white">

            {/* titlle section */}
            <div className="flex flex-col self-start">

                <RotatingText
                    texts={['Featured Work', '代表作品']}
                    mainClassName="text-white overflow-hidden justify-start text-2xl px-1"
                    staggerFrom="last"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={4500}
                    splitBy="characters"
                    auto
                    loop
                />

                <h1 className="text-4xl font-bold sm:text-5xl md:text-8xl">
                    <ShinyText
                        text="PROJECTS"
                        speed={2}
                        delay={0}
                        color="#b5b5b5"
                        shineColor="#ffffff"
                        spread={120}
                        direction="left"
                        yoyo={false}
                        pauseOnHover={false}
                        disabled={false}
                    />
                </h1>
            </div>

            <div className="flex flex-col items-center">
                <RotatingText
                    texts={['OVERVIEW', '概要']}
                    mainClassName="text-white overflow-hidden justify-center text-4xl pt-4"
                    staggerFrom="last"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={4500}
                    splitBy="characters"
                    auto
                    loop
                />
                <h1 className="text-lg">List of work</h1>
            </div>

            {/* list card project */}
            <div className="w-full mt-12 flex flex-col gap-8">
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} project={project} />
                ))}
            </div>

        </section>
    )
}