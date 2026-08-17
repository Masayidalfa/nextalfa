"use client";

import { ArrowUpRight } from "lucide-react";
import type { IconType } from "react-icons";
import {
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaTiktok,
    FaYoutube,
    FaDiscord,
    FaThreads,
    FaEnvelope,
} from "react-icons/fa6";

interface SocialItem {
    id: number;
    name: string;
    href: string;
    description: string;
    icon: IconType;
    color: string; // warna title & icon (tailwind text color class)
}

const socials: SocialItem[] = [
    {
        id: 1,
        name: "Email",
        href: "mailto:masayidalfarizqi@gmail.com",
        description: "I always check up on my email daily, this is my primary contact method",
        icon: FaEnvelope,
        color: "text-pink-400",
    },
    {
        id: 2,
        name: "Instagram",
        href: "https://instagram.com/Masayidalfa",
        description: "Follow my daily moments and behind-the-scenes updates",
        icon: FaInstagram,
        color: "text-fuchsia-400",
    },
    {
        id: 3,
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/muhamad-masayid-alfarizqi-428747252/",
        description: "Connect with me for professional opportunities and networking",
        icon: FaLinkedin,
        color: "text-sky-400",
    },
    {
        id: 4,
        name: "GitHub",
        href: "https://github.com/Masayidalfa",
        description: "Check out my projects and open source contributions",
        icon: FaGithub,
        color: "text-neutral-300",
    },
    {
        id: 5,
        name: "TikTok",
        href: "https://www.tiktok.com/@masamob?_r=1&_t=ZS-98x3qgLKLBQ",
        description: "Short-form content about what I'm building and learning",
        icon: FaTiktok,
        color: "text-teal-300",
    },
    {
        id: 6,
        name: "YouTube",
        href: "https://www.youtube.com/@MasayidAlfarizqi",
        description: "Longer videos, tutorials, and project walkthroughs",
        icon: FaYoutube,
        color: "text-red-400",
    },
    {
        id: 7,
        name: "Discord",
        href: "https://discord.gg/_wowlord_63120",
        description: "Join the server if you want to chat directly with me",
        icon: FaDiscord,
        color: "text-indigo-400",
    },
    {
        id: 8,
        name: "Threads",
        href: "https://www.threads.com/@masayidalfa",
        description: "Random thoughts and quick updates, whenever I feel like posting",
        icon: FaThreads,
        color: "text-neutral-200",
    },
];

function SocialCard({ item }: { item: SocialItem }) {
    const Icon = item.icon;

    return (
        <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-[#141118] p-4 transition-colors hover:border-white/20 hover:bg-[#1a1620]"
        >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-lg">
                <Icon className={item.color} />
            </span>

            <div className="flex flex-col">
                <span className={`flex items-center gap-1 text-sm font-medium ${item.color}`}>
                    {item.name}
                    <ArrowUpRight
                        size={14}
                        className="text-neutral-500 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-300"
                    />
                </span>
                <p className="mt-1 text-sm leading-snug text-neutral-400">
                    {item.description}
                </p>
            </div>
        </a>
    );
}

export default function SocialLinks() {
    return (
        <div className="mx-auto mt-10 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {socials.map((item) => (
                <SocialCard key={item.id} item={item} />
            ))}
        </div>
    );
}