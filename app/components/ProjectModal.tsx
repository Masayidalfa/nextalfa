/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { IoClose } from "react-icons/io5"
import { HiOutlineArrowUpRight } from "react-icons/hi2"
import type { IconType } from "react-icons"

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export interface TechStackItem {
    name: string
    icon: IconType
}

export interface CaseStudyImage {
    src: string
    alt?: string
    caption?: string
}

export interface CaseStudySection {
    heading: string          // "Background" | "Research" | "Challenges" | "Conclusion" | dst
    paragraphs: string[]     // bisa 1 atau lebih paragraf
    images?: CaseStudyImage[]
}

export type ProjectLinkType = "website" | "journal" | "source"

export interface ProjectLink {
    type: ProjectLinkType
    href: string
    active?: boolean // default true. set false -> tombol "Offline" (disabled)
}

export interface Project {
    client: string
    year: string
    location: string
    position: string
    title: string
    description: string
    bgImage: string
    previewImage: string
    responsibilities: string[]
    techStack: TechStackItem[]
    caseStudy?: CaseStudySection[]
    caseStudyUnavailableReason?: string
    links?: ProjectLink[]
}

/* ------------------------------------------------------------------ */
/* Label mapping untuk tombol link                                     */
/* ------------------------------------------------------------------ */

const LINK_LABELS: Record<ProjectLinkType, string> = {
    website: "View Website",
    journal: "View Journal",
    source: "Source Code",
}

/* ------------------------------------------------------------------ */
/* Sub-komponen: satu section case study (heading + paragraf + gambar) */
/* ------------------------------------------------------------------ */

function CaseStudyBlock({ section }: { section: CaseStudySection }) {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase">
                {section.heading}
            </h3>

            <div className="flex flex-col gap-3">
                {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-sm sm:text-base leading-relaxed text-gray-200">
                        {p}
                    </p>
                ))}
            </div>

            {section.images && section.images.length > 0 && (
                <div
                    className={`grid gap-3 ${
                        section.images.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
                    }`}
                >
                    {section.images.map((img, i) => (
                        <figure key={i} className="overflow-hidden rounded-lg border border-white/10">
                            <img src={img.src} alt={img.alt ?? ""} className="w-full object-cover" />
                            {img.caption && (
                                <figcaption className="bg-[#0b1114] px-3 py-2 text-xs text-gray-400">
                                    {img.caption}
                                </figcaption>
                            )}
                        </figure>
                    ))}
                </div>
            )}
        </div>
    )
}

/* ------------------------------------------------------------------ */
/* Sub-komponen: fallback saat case study tidak tersedia               */
/* ------------------------------------------------------------------ */

function CaseStudyUnavailable({ reason }: { reason?: string }) {
    return (
        <div className="flex flex-col items-center gap-3 py-6 text-center">
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">
                Case Study Unavailable
            </h3>
            <p className="max-w-xl text-sm sm:text-base leading-relaxed text-gray-300">
                {reason ?? (
                    <>
                        Due to the sensitive nature of this project and the{" "}
                        <span className="font-bold text-white">Non-Disclosure Agreements (NDAs)</span>{" "}
                        in place, specific details and source codes cannot be disclosed.
                    </>
                )}
            </p>
        </div>
    )
}

/* ------------------------------------------------------------------ */
/* Sub-komponen: baris tombol aksi (Close + Website/Journal/Source)    */
/* ------------------------------------------------------------------ */

function ActionButtons({
    links,
    onClose,
}: {
    links?: ProjectLink[]
    onClose: () => void
}) {
    // Kalau project sama sekali nggak punya data link, tetap tampilkan
    // placeholder "Website" dalam status offline, biar selalu ada 2 tombol.
    const resolvedLinks: ProjectLink[] =
        links && links.length > 0
            ? links
            : [{ type: "website", href: "", active: false }]

    return (
        <div className="flex flex-wrap items-center justify-center gap-4 border-t border-white/10 px-6 py-8 sm:px-10 sm:py-10">
            <button
                type="button"
                onClick={onClose}
                className="rounded-lg bg-white px-8 py-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-black transition-opacity duration-200 hover:opacity-80"
            >
                Close
            </button>

            {resolvedLinks.map((link) => {
                const isActive = link.active !== false
                
                if (!isActive) {
                    return (
                        <button
                            key={link.type}
                            type="button"
                            disabled
                            className="cursor-not-allowed rounded-lg border-2 border-white/20 px-8 py-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-white/40"
                        >
                            Offline
                        </button>
                    )
                }

                return (
                    <a
                        key={link.type}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-lg border-2 border-white px-8 py-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-white hover:text-black"
                    >
                        {LINK_LABELS[link.type]}
                        <HiOutlineArrowUpRight size={16} />
                    </a>
                )
            })}
        </div>
    )
}

/* ------------------------------------------------------------------ */
/* Komponen utama                                                       */
/* ------------------------------------------------------------------ */

export default function ProjectModal({
    project,
    onClose,
}: {
    project: Project | null
    onClose: () => void
}) {
    // Portal butuh document, yang cuma ada di client — pastikan komponen
    // sudah mounted dulu sebelum createPortal dipanggil, biar aman di SSR
    // (Next.js render pertama kali di server, document belum ada di situ).
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Scroll lock: kunci scroll body pas modal kebuka,
    // restore ke nilai semula pas modal ditutup / komponen unmount.
    useEffect(() => {
        if (project) {
            const originalOverflow = document.body.style.overflow
            document.body.style.overflow = "hidden"
            return () => {
                document.body.style.overflow = originalOverflow
            }
        }
    }, [project])

    if (!mounted) return null

    const modalContent = (
        <AnimatePresence>
            {project && (
                <>
                    {/* Overlay */}
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/70"
                    />

                    {/* Modal container */}
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
                    >
                        <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-hide rounded-xl bg-[#0b1114] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

                            {/* Tombol close (X) */}
                            <button
                                onClick={onClose}
                                aria-label="Close"
                                className="absolute top-4 right-4 z-30 flex items-center justify-center w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                            >
                                <IoClose size={20} />
                            </button>

                            {/* ---- Bagian atas: sama persis kayak card project ---- */}
                            <div className="relative w-full aspect-[3/4] sm:aspect-video overflow-hidden rounded-t-xl">

                                <img
                                    src={project.bgImage}
                                    alt=""
                                    className="absolute inset-0 z-0 h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 z-10 bg-[#071013]/25" />

                                {/* Preview browser mockup */}
                                <div className="absolute inset-y-0 right-0 z-10 hidden sm:flex w-3/5 items-center justify-center px-8">
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

                                {/* Teks client + tahun, rata bawah kiri */}
                                <div className="absolute inset-0 z-20 flex flex-col justify-end px-6 py-6 sm:px-10 sm:py-10 w-full sm:w-3/5">
                                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight text-white">
                                        {project.client}
                                    </h2>
                                    <p className="mt-2 text-xs sm:text-sm md:text-base tracking-widest text-gray-300 font-sans">
                                        {project.year} | {project.location.toUpperCase()}
                                    </p>
                                </div>
                            </div>

                            {/* ---- Bagian bawah: Responsibilities & Tech Stack ---- */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 py-8 sm:px-10 sm:py-10 text-white">

                                {/* Responsibilities */}
                                <div>
                                    <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-3">
                                        Responsibilities
                                    </h3>
                                    <ul className="flex flex-col gap-1.5">
                                        {project.responsibilities.map((item) => (
                                            <li key={item} className="text-sm sm:text-base text-gray-200">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech stack */}
                                <div>
                                    <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-3">
                                        Tech Stack
                                    </h3>
                                    <ul className="flex flex-col gap-2.5">
                                        {project.techStack.map(({ name, icon: Icon }) => (
                                            <li key={name} className="flex items-center gap-2 text-sm sm:text-base text-gray-200">
                                                <Icon size={18} />
                                                {name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* ---- Case Study (isi lengkap ATAU fallback "unavailable") ---- */}
                            <div className="border-t border-white/10 px-6 py-8 sm:px-10 sm:py-10 text-white">
                                {project.caseStudy && project.caseStudy.length > 0 ? (
                                    <div className="flex flex-col gap-10">
                                        {project.caseStudy.map((section) => (
                                            <CaseStudyBlock key={section.heading} section={section} />
                                        ))}
                                    </div>
                                ) : (
                                    <CaseStudyUnavailable reason={project.caseStudyUnavailableReason} />
                                )}
                            </div>

                            {/* ---- Tombol Close + Website/Journal/Source ---- */}
                            <ActionButtons links={project.links} onClose={onClose} />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )

    return createPortal(modalContent, document.body)
}