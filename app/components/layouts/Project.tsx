/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from "react"
import {
    SiPhp,
    SiMoodle,
    SiRedis,
    SiGrafana,
    SiHtml5,
    SiTailwindcss,
    SiJavascript,
    SiReact,
    SiLaravel,
    SiTypescript,
} from "react-icons/si"
import RotatingText from "../RotatingText"
import ShinyText from "../ShinyText"
import ProjectModal, { type Project } from "../ProjectModal"

const projects: Project[] = [
    {
        client: "LPPM STT TERPADU NURUL FIKRI",
        year: "2025",
        location: "Depok, Indonesia",
        position: "Software Engineer",
        title: "INTRUSION DETECTION SYSTEM BASED ON SUPERVISED MACHINE LEARNING",
        description:
            "Developed an Intrusion Detection System using supervised machine learning to detect SQL Injection and Cross-Site Scripting (XSS) attacks on the Moodle platform, including the development of a custom Moodle plugin as part of the research implementation.",
        bgImage: "/assets/image/project/bgP1.jpg",
        previewImage: "/assets/image/project/P1.png",
        responsibilities: ["Software Engineer", "Midleware Engineer", "Moodle Plugin Dev"],
        techStack: [
            { name: "PHP", icon: SiPhp },
            { name: "Moodle", icon: SiMoodle },
            { name: "Redis", icon: SiRedis },
            { name: "Grafana", icon: SiGrafana },
            { name: "Loki", icon: SiGrafana },
        ],
        // Contoh: project ini punya case study lengkap (bukan NDA)
        caseStudy: [
            {
                heading: "Background",
                paragraphs: [
                    "I was selected together with a teammate, Lambang, as research interns under MSIB, a national internship program, to support a faculty research project supervised by Pak Henry. I took on the role of software engineer, responsible for building the middleware, while my teammate focused on training the supervised machine learning model.",
                    "The initial research idea and a prototype architecture had already been outlined by Pak Henry. Our job was to turn that architecture into a working, functional system.",
                ],
                images: [
                    {
                        src:"/assets/image/project/projectModal/lppm/background.jpg",
                        alt:"Intrusion Detection Team Mate",
                        caption:"Team Research"
                    }
                ]
            },
            {
                heading: "Research",
                paragraphs: [
                    "The research process was closely guided by Pak Henry, from the literature study phase through to the final results. He directed what topics to study, what outputs were expected, and helped interpret the findings along the way. I also regularly discussed challenges with my teammate, exchanging ideas whenever we hit a roadblock.",
                ],
            },
            {
                heading: "Challenges",
                paragraphs: [
                    "One of the biggest challenges was building a Moodle plugin with no official documentation or tutorials available, especially for a plugin designed to capture user activity within the LMS environment. The captured metadata often didn't match what we needed, so it had to be adjusted to fit the input format required by the supervised ML algorithm. This led to multiple revisions of the middleware plugin's logic.",
                    "Integration was another major hurdle. We went through several rounds of trial and error with the monitoring stack — for instance, discovering that Grafana needed to be paired with Loki and queried using LogQL, since that was the only way to properly read the ML output data. On top of that, designing the right queries to build a dashboard tailored to a security analyst's needs added its own layer of complexity.",
                ],
            },
            {
                heading: "Conclusion",
                paragraphs: [
                    "The project was successfully completed, and the research findings were published in a SINTA 4-accredited journal, achieving a model accuracy of 99.94%.",
                ],
                images: [
                    {
                        src:"/assets/image/project/projectModal/lppm/jurnal.png",
                        alt:"Published Journal",
                        caption:"Published Journal"
                    }
                ]
            },
        ],
        // Contoh: ada link jurnal & source code, dua-duanya aktif
        links: [
            { type: "journal", href: "https://doi.org/10.51454/decode.v5i3.1313" },
            { type: "source", href: "https://github.com/Masayidalfa/moodle-http-logger" },
        ],
    },
    {
        client: "CV SPEED NETWORK GROUP",
        year: "2025",
        location: "Bogor, Indonesia",
        position: "WEB DEVELOPER",
        title: "WEBSITE LANDING PAGE COMPANY PROFILE SPEEDNET",
        description:
            "Developed a responsive company profile website for CV Speed Network Group using Tailwind CSS, featuring a modern interface, responsive layouts, and optimized user experience across desktop and mobile devices.",
        bgImage: "/assets/image/project/bgP2.jpg",
        previewImage: "/assets/image/project/P2.png",
        responsibilities: ["Frontend Dev", "Responsive Layout"],
        techStack: [
            { name: "HTML", icon: SiHtml5 },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "JavaScript", icon: SiJavascript },
        ],
        caseStudyUnavailableReason:
            "Detail proses pengerjaan untuk project ini belum dapat dipublikasikan atas permintaan klien.",
        links: [
            { type: "website", href: "https://speednet.co.id/", active: true },
        ],
    },
    {
        client: "NF ACADEMY",
        year: "2024-2025",
        location: "Depok, Indonesia",
        position: "FULSTACK ENGINEER",
        title: "COMPPATH — COMPETITION FINDER",
        description:
            "Developed a web-based information system for discovering and searching competitions, built collaboratively as a final project during the Studi Independen program at NF Academy.",
        bgImage: "/assets/image/project/bgP3.jpg",
        previewImage: "/assets/image/project/P3.png",
        responsibilities: ["Full-stack Dev"],
        techStack: [
            { name: "React.js", icon: SiReact },
            { name: "Laravel", icon: SiLaravel },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Tailwind CSS", icon: SiTailwindcss },
        ],
        // Contoh: website-nya sudah tidak aktif -> tombol jadi "Offline"
        links: [
            { type: "source", href: "https://github.com/Masayidalfa/comppath" },
        ],
        // caseStudy tidak diisi -> pakai fallback default (teks NDA bawaan)
    },
]

function ProjectCard({
    project,
    onOpen,
}: {
    project: Project
    onOpen: (p: Project) => void
}) {
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
                    </div>
                </div>

                {/* LAYER 20 — TEXT */}
                <div className="absolute inset-0 z-30 flex items-center">
                    <div className="absolute inset-0 z-20 w-3/5">
                        <div className="h-full flex flex-col justify-between px-3 py-3 sm:px-5 sm:py-5 md:px-10 md:py-10">

                            {/* ZONA ATAS */}
                            <div>
                                <p className="text-xs sm:text-sm md:text-base font-semibold leading-tight line-clamp-1">
                                    {project.client}
                                </p>
                                <p className="mt-0.5 text-[11px] sm:text-xs md:text-base text-gray-300 font-sans">
                                    {project.year} | {project.location}
                                </p>
                            </div>

                            {/* ZONA TENGAH */}
                            <div>
                                <p className="text-[11px] sm:text-xs md:text-base font-medium uppercase tracking-widest text-gray-300 font-sans line-clamp-1">
                                    {project.position}
                                </p>
                                <h2 className="mt-1 mb-1 sm:mt-4 sm:mb-4 md:mt-7 md:mb-7 text-xs sm:text-base md:text-xl font-bold leading-tight line-clamp-2">
                                    {project.title}
                                </h2>
                                <p className="text-[11px] sm:text-xs md:text-sm leading-4 sm:leading-5 md:leading-6 text-gray-200 max-w-md line-clamp-2">
                                    {project.description}
                                </p>
                            </div>

                            {/* ZONA BAWAH */}
                            <div>
                                <button
                                    type="button"
                                    onClick={() => onOpen(project)}
                                    className="text-[11px] sm:text-xs px-2.5 py-1.5 sm:px-3 sm:py-2 border-2 transition-colors duration-200 hover:bg-white hover:text-black flex items-center gap-2 my-2 sm:my-4 uppercase font-semibold"
                                >
                                    View Detail
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default function project(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

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
                    <ProjectCard key={idx} project={project} onOpen={setSelectedProject} />
                ))}
            </div>

            {/* Modal detail project */}
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

        </section>
    )
}
