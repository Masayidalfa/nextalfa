"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, CalendarDays, Globe2, ExternalLink } from "lucide-react";

import RotatingText from "../RotatingText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

interface TimelineTag {
  /** Teks label, contoh: "Education", "Student" */
  label: string;
  /** Warna aksen tag (dot + teks), contoh: "#22c55e" */
  color: string;
  /** Emoji/icon opsional di depan label */
  icon?: string;
}

interface TimelineItemData {
  id: string;
  /** Label di sebelah titik garis waktu, contoh: "IMPACT BYTE" */
  title: string;
  logoUrl?: string;
  location: string;
  role: string;
  tags: TimelineTag[];
  dateRange: string;
  description: string;
  websiteUrl?: string;
  /** Opsional. Kalau tidak diisi / kosong, section "Key Achievements" tidak akan tampil. */
  achievements?: string[];
}

/* ------------------------------------------------------------------ */
/* Data — ganti / tambah item experience kamu di sini                  */
/* ------------------------------------------------------------------ */

const items: TimelineItemData[] = [
  {
    id: "nurul-fikri",
    title: "Sekolah Tinggi Teknologi Terpadu Nurul Fikri",
    logoUrl: "/assets/logo/nf.jpg",
    location: "Jakarta Selatan, Indonesia",
    role: "Teknik Informatika",
    tags: [
      { label: "Education", color: "#22c55e", icon: "🎓" },
      { label: "Student", color: "#f97316" },
    ],
    dateRange: "Sep 2022 - Jul 2026",
    description:
      "STT Terpadu Nurul Fikri provides a practical and industry-oriented learning environment through project-based learning, business-focused education, and up-to-date technology. The program is designed to develop digital talents with practical skills and industry-ready experience.",
    websiteUrl: "https://nurulfikri.ac.id/",
    // tidak ada achievements -> section Key Achievements otomatis tidak tampil
  },
  {
    id: "lppm-nf",
    title: "LPPM Sekolah Tinggi Teknologi Terpadu Nurul Fikri",
    logoUrl: "/assets/logo/lppmLogo.png",
    location: "Depok, Indonesia",
    role: "Assistant Research",
    tags: [
      { label: "Education", color: "#22c55e", icon: "🔎" },
      { label: "Intern", color: "#f97316" },
    ],
    dateRange: "Feb 2025 - Jul 2025",
    description:
      "LPPM STT-NF is a dedicated unit that supports research and community engagement activities within STT-NF. It serves as a center for developing and managing research initiatives and community service programs as part of the university’s Tri Dharma mission.",
    websiteUrl: "https://lppm.nurulfikri.ac.id/",
    achievements: [
      "Developed a deployable Moodle plugin that captures user activity logs and HTTP payload data without disrupting the LMS Moodle environment.",
      "Successfully integrated the plugin with Redis as a data pipeline and connected the collected data to the Grafana/Loki monitoring stack.",
      "Contributed to the integration of a supervised machine learning-based intrusion detection system capable of classifying Normal, SQL Injection, and XSS traffic with approximately 99% prediction accuracy.",
      "Co-authored and published the research findings in a SINTA 4-indexed journal.",
    ],
  },
  {
    id: "asdos-nf",
    title: "Sekolah Tinggi Teknologi Terpadu Nurul Fikri",
    logoUrl: "/assets/logo/nf.jpg",
    location: "Jakarta Selatan, Indonesia",
    role: "Assistant Lecturer - Operating Systems",
    tags: [
      { label: "Education", color: "#22c55e", icon: "📙" },
      { label: "Academic Experience", color: "#f97316" },
    ],
    dateRange: "Sep 2025 - Jan 2026",
    description:
      "LPPM STT-NF is a dedicated unit that supports research and community engagement activities within STT-NF. It serves as a center for developing and managing research initiatives and community service programs as part of the university’s Tri Dharma mission.",
    websiteUrl: "https://nurulfikri.ac.id/",
    achievements: [
      "Guided approximately 160–180 students across two classes through Linux-based practical sessions..",
      "Helped students build practical understanding of Linux environments through hands-on exercises and basic troubleshooting.",
      "Developed stronger technical communication and teaching skills by translating operating system concepts into explanations that students could easily understand.",
      "Strengthened personal understanding of Linux and operating system fundamentals through teaching and practical instruction.",
    ],
  },
  {
    id: "asdos-nf2",
    title: "Sekolah Tinggi Teknologi Terpadu Nurul Fikri",
    logoUrl: "/assets/logo/nf.jpg",
    location: "Jakarta Selatan, Indonesia",
    role: "Assistant Lecturer - Computer Networks",
    tags: [
      { label: "Education", color: "#22c55e", icon: "📘" },
      { label: "Academic Experience", color: "#f97316" },
    ],
    dateRange: "Feb 2026 - Jul 2026",
    description:
      "LPPM STT-NF is a dedicated unit that supports research and community engagement activities within STT-NF. It serves as a center for developing and managing research initiatives and community service programs as part of the university’s Tri Dharma mission.",
    websiteUrl: "https://nurulfikri.ac.id/",
    achievements: [
      "Guided approximately 80 students through fundamental networking concepts and hands-on Cisco Packet Tracer simulations.",
      "Helped students understand how devices communicate through TCP/IP and how routing, switching, and VLANs are applied in practical network scenarios.",
      "Developed practical teaching materials and exercises for introductory networking sessions based on students' learning capabilities.",
      "Strengthened communication, troubleshooting, and technical explanation skills through direct interaction with students.",
    ],

  },
  {
    id: "ne-berca",
    title: "PT Berca Hardayaperkasa",
    logoUrl: "/assets/logo/bercaLogo.png",
    location: "Jakarta Selatan, Indonesia",
    role: "Network Engineer",
    tags: [
      { label: "Work", color: "#22c55e", icon: "💼" },
      { label: "Intern", color: "#f97316" },
    ],
    dateRange: "Mar 2026 - Apr 2026",
    description:
      "Berca Hardayaperkasa (BHp) is an Indonesian technology and consulting company specializing in ICT, digital transformation, infrastructure, cloud, IoT, and emerging technologies. With over four decades of experience, BHp delivers technology solutions and services to businesses across various industries as part of the Central Cipta Murdaya (CCM) Group.",
    websiteUrl: "https://www.berca.co.id/",
    achievements: [
      "Configured and staged Huawei network devices using established enterprise configurations, including VLAN, trunk, IP addressing, DHCP, wireless, and port security.",
      "Supported the deployment of access points for Bank Mandiri branches, integrating staged AP devices with existing network infrastructure.",
      "Handled approximately 2–5 branch deployments per day during peak implementation periods as part of the client rollout team.",
      "Performed network monitoring using SolarWinds and resolved connectivity issues such as IP conflicts through structured troubleshooting and coordination with the engineering team.",
    ],
  },
  // tambah item lain di sini...
];

/* ------------------------------------------------------------------ */
/* Sub-komponen: satu kartu experience                                 */
/* ------------------------------------------------------------------ */

function TimelineCard({ item }: { item: TimelineItemData }) {
  const hasAchievements = item.achievements && item.achievements.length > 0;

  return (
    <div className="card timeline-card">
      <div className="cardTop">
        <div className="logoBox">
          {item.logoUrl && (
            <img src={item.logoUrl} alt={`${item.title} logo`} />
          )}
        </div>

        <div className="meta">
          <span className="location">
            <MapPin size={14} />
            {item.location}
          </span>

          <h3 className="role">{item.role}</h3>

          <div className="tags">
            {item.tags.map((tag) => (
              <span
                key={tag.label}
                className="tag"
                style={{ ["--tag-color" as string]: tag.color }}
              >
                <span className="tagDot" />
                {tag.icon && <span>{tag.icon}</span>}
                {tag.label}
              </span>
            ))}
          </div>

          <span className="date">
            <CalendarDays size={14} />
            {item.dateRange}
          </span>
        </div>
      </div>

      <p className="description">{item.description}</p>

      {hasAchievements && (
        <div className="achievements">
          <h4 className="achievementsTitle">
            <span>🏆</span> Key Achievements
          </h4>
          <ul className="achievementsList">
            {item.achievements!.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {item.websiteUrl && (
        <div className="cardFooter">
        <a
            href={item.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="websiteBtn"
          >
            <Globe2 size={16} />
            Visit Website
            <ExternalLink size={14} />
          </a>
        </div>
      )}

      {/* style ikut kartu supaya class "card", "tag", dst tidak bentrok
          dengan komponen lain — styled-jsx otomatis scoped per komponen.
          Semua class yang dirender DI SINI (termasuk .achievements)
          style-nya WAJIB ada di sini juga, bukan di komponen Exp. */}
      <style jsx>{`
        .card {
          background: #071013;
          padding: 1.5rem;
          opacity: 0;
          transform: translateY(28px);
        }
        .cardTop {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          flex-wrap: wrap;
        }
        .logoBox {
          width: 88px;
          height: 88px;
          border-radius: 12px;
          background: #ffffff;
          flex-shrink: 0;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logoBox img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .meta {
          flex: 1;
          min-width: 200px;
          display: grid;
          gap: 0.4rem;
        }
        .location {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #f472b6;
        }
        .role {
          font-size: clamp(1.05rem, 4vw, 1.35rem);
          font-weight: 800;
          margin: 0.1rem 0 0.2rem;
        }
        .tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin: 0.15rem 0;
        }
        .tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.3rem 0.7rem;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 600;
          background: color-mix(in srgb, var(--tag-color, #888) 16%, transparent);
        }
        .tagDot {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: var(--tag-color, #888);
        }
        .date {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.55);
          margin-top: 0.15rem;
        }
        .description {
          margin-top: 1.25rem;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 12px;
          padding: 1rem 1.1rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          font-size: 0.95rem;
        }
        .achievements {
          margin-top: 1.25rem;
        }
        .achievementsTitle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1rem;
          font-weight: 700;
          color: #38bdf8;
          margin: 0 0 0.6rem;
        }
        .achievementsList {
          margin: 0;
          padding-left: 1.1rem;
          display: grid;
          gap: 0.45rem;
          list-style: disc;
          list-style-position: outside;
        }
        .achievementsList li {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          line-height: 1.5;
        }
        .achievementsList li::marker {
          color: #8b5cf6;
        }
        .cardFooter {
          display: flex;
          justify-content: flex-end;
          margin-top: 1rem;
        }
        .websiteBtn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #1d4ed8;
          color: #fff;
          border: none;
          border-radius: 999px;
          padding: 0.55rem 1.1rem;
          font-size: 0.85rem;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .websiteBtn:hover {
          background: #1e40af;
        }

        /* ---------------------------------------------------------- */
        /* Responsive: tablet kecil / HP besar                        */
        /* ---------------------------------------------------------- */
        @media (max-width: 640px) {
          .card {
            padding: 1.1rem;
            border-radius: 14px;
          }
          .cardTop {
            gap: 0.9rem;
          }
          .logoBox {
            width: 56px;
            height: 56px;
            border-radius: 10px;
          }
          .location {
            font-size: 0.68rem;
          }
          .tags {
            gap: 0.35rem;
          }
          .tag {
            font-size: 0.72rem;
            padding: 0.25rem 0.55rem;
          }
          .date {
            font-size: 0.78rem;
          }
          .description {
            padding: 0.8rem 0.9rem;
            font-size: 0.88rem;
            margin-top: 1rem;
          }
          .achievements {
            margin-top: 1rem;
          }
          .achievementsTitle {
            font-size: 0.92rem;
          }
          .achievementsList {
            padding-left: 1rem;
          }
          .achievementsList li {
            font-size: 0.85rem;
          }
          .cardFooter {
            justify-content: stretch;
          }
          .websiteBtn {
            width: 100%;
            justify-content: center;
          }
        }

        /* HP kecil (< 400px) */
        @media (max-width: 400px) {
          .card {
            padding: 0.9rem;
          }
          .logoBox {
            width: 44px;
            height: 44px;
          }
          .description {
            padding: 0.7rem 0.8rem;
            font-size: 0.84rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .card {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Komponen utama                                                       */
/* ------------------------------------------------------------------ */

export default function Exp() {
  const listOuterRef = useRef<HTMLDivElement | null>(null);
  const progressLineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const outer = listOuterRef.current;
    const progressLine = progressLineRef.current;
    if (!outer) return;

    // gsap.context() otomatis revert semua tween & ScrollTrigger yang
    // dibuat di dalamnya saat komponen unmount — wajib di Next.js karena
    // komponen bisa mount/unmount saat pindah halaman.
    const ctx = gsap.context(() => {
      gsap.matchMedia().add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          // 1) Fade-up tiap kartu saat masuk viewport
          const cards = gsap.utils.toArray<HTMLElement>(
            outer.querySelectorAll(".timeline-card")
          );

          cards.forEach((card) => {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            });
          });

          // 2) Garis progress tumbuh mengikuti scroll
          if (progressLine) {
            gsap.to(progressLine, {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: outer,
                start: "top 60%",
                end: "bottom 80%",
                scrub: 0.5,
              },
            });
          }
        }
      );
    }, outer);

    return () => ctx.revert();
  }, []);

  return (
    <section className="wrapper">
      <div className="heading">
        <div className="flex flex-col items-center justify-center">
          <RotatingText
            texts={["EXPERIENCE", "仕事と教育の経験"]}
            mainClassName="text-white overflow-hidden justify-start text-3xl px-1"
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
          <h1 className="text-base md:text-lg text-center">MY CAREER & EDUCATION JOURNEY</h1>
          <p className="text-center">My Journey of Experience and Achievements.</p>

        </div>
      </div>

      <div className="listOuter" ref={listOuterRef}>
        <div className="trackLine" />
        <div className="progressLine" ref={progressLineRef} />

        <ul className="list">
          {items.map((item) => (
            <li key={item.id} className="item">
              <div className="markerCol">
                <span className="dot" />
                <span className="itemTitle">{item.title}</span>
              </div>

              <TimelineCard item={item} />
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .wrapper {
          color: #ffffff;
          padding: 1rem 1.5rem;
        }
        .heading {
          max-width: 60rem;
          margin: 0 auto 3rem;
        }
        .heading h2 {
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          margin: 0 0 0.75rem;
        }
        .heading p {
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.6;
          margin: 0;
        }
        .listOuter {
          position: relative;
          max-width: 72rem;
          margin-inline: auto;
        }
        .trackLine {
          position: absolute;
          top: 0.6rem;
          bottom: 0.6rem;
          left: 5px;
          width: 2px;
          background: #8b5cf6;
          opacity: 0.18;
        }
        .progressLine {
          position: absolute;
          top: 0.6rem;
          bottom: 0.6rem;
          left: 5px;
          width: 2px;
          background: #8b5cf6;
          transform-origin: top center;
          transform: scaleY(0);
        }
        .list {
          list-style: none;
          margin: 0;
          padding: 0;
          position: relative;
        }

        .item {
          display: grid;
          grid-template-columns: 220px minmax(0, 1fr);
          gap: 2rem;
          padding-bottom: 3rem;
        }

        .markerCol {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          min-width: 0;
        }

        .itemTitle {
          font-weight: 800;
          font-size: clamp(1rem, 3.5vw, 1.4rem);
          letter-spacing: -0.01em;
          text-transform: uppercase;

          /* Jangan sampai melewati kolom */
          min-width: 0;
          overflow-wrap: break-word;
          word-break: break-word;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          background: #1a1a1e;
          border: 2px solid #8b5cf6;
          margin-top: 6px;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 720px) {
          .wrapper {
            padding: 2.5rem 1rem;
          }
          .item {
            grid-template-columns: 40px 1fr;
            gap: 1rem;
            padding-bottom: 2rem;
          }
          .itemTitle {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}