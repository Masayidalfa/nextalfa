"use client";

import { useState } from "react";
import type { IconType } from "react-icons";
import RotatingText from "../RotatingText";

import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiLaravel,
    SiMysql,
    SiDocker,
    SiVercel,
    SiMikrotik,
    SiHuawei,
    SiCisco,
    SiKalilinux,
    SiNotion,
    SiFigma,
    SiPostman,
    SiGithub,
} from "react-icons/si";
import { FaAws, FaUserSecret, FaShieldAlt } from "react-icons/fa";

// ---------- Types ----------

type SkillCategory =
    | "Frontend"
    | "Backend"
    | "Cloud & DevOps"
    | "Networking"
    | "Cybersecurity"
    | "Tools";

type FilterCategory = "All" | SkillCategory;

interface Skill {
    name: string;
    category: SkillCategory;
    icon: IconType;
}

// ---------- Data ----------

const SKILLS: Skill[] = [
    // Frontend
    { name: "React", category: "Frontend", icon: SiReact },
    { name: "NextJS", category: "Frontend", icon: SiNextdotjs },
    { name: "Tailwind", category: "Frontend", icon: SiTailwindcss },

    // Backend
    { name: "NodeJS", category: "Backend", icon: SiNodedotjs },
    { name: "Laravel", category: "Backend", icon: SiLaravel },
    { name: "MySQL", category: "Backend", icon: SiMysql },

    // Cloud & DevOps
    { name: "Docker", category: "Cloud & DevOps", icon: SiDocker },
    { name: "Vercel", category: "Cloud & DevOps", icon: SiVercel },
    { name: "AWS", category: "Cloud & DevOps", icon: FaAws },

    // Networking
    { name: "MikroTik", category: "Networking", icon: SiMikrotik },
    { name: "Huawei", category: "Networking", icon: SiHuawei },
    { name: "Cisco", category: "Networking", icon: SiCisco },

    // Cybersecurity
    { name: "Kali Linux", category: "Cybersecurity", icon: SiKalilinux },
    { name: "Red Team", category: "Cybersecurity", icon: FaUserSecret },
    { name: "Blue Team", category: "Cybersecurity", icon: FaShieldAlt },

    // Tools
    { name: "Notion", category: "Tools", icon: SiNotion },
    { name: "Figma", category: "Tools", icon: SiFigma },
    { name: "Postman", category: "Tools", icon: SiPostman },
    { name: "GitHub", category: "Tools", icon: SiGithub },
];

const CATEGORIES: FilterCategory[] = [
    "All",
    "Frontend",
    "Backend",
    "Cloud & DevOps",
    "Networking",
    "Cybersecurity",
    "Tools",
];

// ---------- Derived values ----------

const TOTAL_SKILLS = SKILLS.length;
const TOTAL_CATEGORIES = CATEGORIES.length - 1; // -1 karena "All" bukan kategori asli

const CATEGORY_DESCRIPTIONS: Record<SkillCategory, string> = {
    Frontend:
        "Membangun antarmuka yang responsif dan interaktif menggunakan React, NextJS, dan Tailwind CSS.",
    Backend:
        "Mengembangkan logika server, API, dan pengelolaan database dengan NodeJS, Laravel, dan MySQL.",
    "Cloud & DevOps":
        "Deploy dan kelola infrastruktur aplikasi menggunakan Docker, Vercel, dan AWS.",
    Networking:
        "Konfigurasi dan manajemen jaringan menggunakan perangkat MikroTik, Huawei, dan Cisco.",
    Cybersecurity:
        "Melakukan pengujian keamanan dan pertahanan sistem melalui pendekatan Red Team dan Blue Team.",
    Tools:
        "Menggunakan berbagai tools pendukung produktivitas seperti Notion, Figma, Postman, dan GitHub.",
};

// ---------- Component ----------

export default function Skill() {
    const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");

    const filteredSkills: Skill[] =
        activeCategory === "All"
            ? SKILLS
            : SKILLS.filter((skill) => skill.category === activeCategory);

    // Group filtered skills back by category so section headers still show
    const groupedCategories: FilterCategory[] =
        activeCategory === "All" ? CATEGORIES.filter((c) => c !== "All") : [activeCategory];

    return (
        <section className="text-white px-6 sm:px-10 md:px-20">
            <div className="flex flex-col items-center">
                {/* Title Section */}
                <RotatingText
                    texts={["Technical Skill", "代表作品"]}
                    mainClassName="text-white overflow-hidden justify-start text-2xl px-1"
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

                <h1 className="text-xl">List of my skill set</h1>

                <p className="text-xs">
                    {TOTAL_SKILLS} skill across {TOTAL_CATEGORIES} categories
                </p>

                {/* Filter Category */}
                <div className="mt-6 flex w-full max-w-4xl flex-wrap justify-center gap-3 px-4 py-4 border rounded-lg">
                    {CATEGORIES.map((category) => {
                        const isActive = category === activeCategory;

                        return (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setActiveCategory(category)}
                                className={
                                    isActive
                                        ? "rounded-lg bg-[#1C77C3] px-4 py-2 text-sm text-black transition-colors duration-200 hover:bg-[#1C77C3]/80"
                                        : "rounded-lg border border-[#1C77C3] px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-[#1C77C3] hover:text-black"
                                }
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

                {/* Skill Grid */}
                {groupedCategories.map((category) => {
                    const skillsInCategory = filteredSkills.filter(
                        (skill) => skill.category === category
                    );

                    if (skillsInCategory.length === 0) return null;

                    // category di sini pasti SkillCategory (bukan "All"),
                    // karena "All" sudah difilter di groupedCategories
                    const description = CATEGORY_DESCRIPTIONS[category as SkillCategory];

                    return (
                        <div key={category} className="mt-10 w-full border px-4 py-4 rounded-lg">
                            <div className="flex flex-col items-center">
                                <h2>{category.toUpperCase()}</h2>

                                <div className="flex flex-wrap justify-center gap-6">
                                    {skillsInCategory.map((skill) => {
                                        const Icon = skill.icon;

                                        return (
                                            <div
                                                key={skill.name}
                                                className="flex items-center gap-2 border px-2 py-2 rounded-lg transition-colors duration-200 hover:border-[#1C77C3] hover:bg-[#1C77C3]/10"
                                            >
                                                <Icon className="text-2xl text-[#1C77C3]" />
                                                <p>{skill.name}</p>
                                            </div>
                                        );
                                    })}
                                </div>

                                <p className="mt-4 max-w-2xl text-center text-sm text-gray-300">
                                    {description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
