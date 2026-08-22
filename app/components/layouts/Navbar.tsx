"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6"
import type { IconType } from "react-icons"
import ShinyText from "../ShinyText"
import RotatingText from "../RotatingText"

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

interface NavItem {
  name: string
  href: string
}

interface SocialLink {
  name: string
  href: string
  icon: IconType
}

/* ------------------------------------------------------------------ */
/* Static data — dipisah dari komponen supaya gampang diubah/reuse     */
/* ------------------------------------------------------------------ */

const NAVIGATION: NavItem[] = [
  { name: "Projects", href: "#projects" },
  { name: "Profile", href: "#profile" },
  { name: "Contact", href: "#contact" },
]

const SOCIAL_LINKS: SocialLink[] = [
  { name: "Instagram", href: "https://www.instagram.com/masayidalfa/", icon: FaInstagram },
  { name: "Github", href: "https://github.com/Masayidalfa", icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/muhamad-masayid-alfarizqi-428747252/", icon: FaLinkedin },
]

// Berapa kali garis hamburger berputar penuh sebelum jadi silang
const HAMBURGER_EXTRA_SPINS = 2
const TOP_BAR_ROTATE = -(360 * HAMBURGER_EXTRA_SPINS + 45)
const BOTTOM_BAR_ROTATE = 360 * HAMBURGER_EXTRA_SPINS + 45

/* ------------------------------------------------------------------ */
/* Sub-komponen: link nav desktop dengan underline saat hover          */
/* ------------------------------------------------------------------ */

function NavLink({ name, href }: NavItem) {
  return (
    <a
      href={href}
      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 border-b-2 border-transparent transition-colors duration-200 hover:text-white hover:border-white"
    >
      {name}
    </a>
  )
}

/* ------------------------------------------------------------------ */
/* Sub-komponen: daftar icon sosmed dengan scale saat hover            */
/* (dipakai di desktop & mobile)                                       */
/* ------------------------------------------------------------------ */

function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          aria-label={name}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex size-9 items-center justify-center rounded-md text-white transition-all duration-200 hover:scale-110 hover:bg-white hover:text-black hover:border-white"
        >
          <Icon className="size-5" />
        </a>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Sub-komponen: tombol hamburger animasi                              */
/* ------------------------------------------------------------------ */

function HamburgerButton({
  isOpen,
  onToggle,
}: {
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="relative z-50 flex flex-col items-center justify-center gap-1.5 p-2 md:hidden"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <motion.span
        className="block h-[3px] w-7 rounded-full bg-white"
        animate={{ rotate: isOpen ? TOP_BAR_ROTATE : 0, y: isOpen ? 8 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      <motion.span
        className="block h-[3px] w-7 rounded-full bg-white"
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="block h-[3px] w-7 rounded-full bg-white"
        animate={{ rotate: isOpen ? BOTTOM_BAR_ROTATE : 0, y: isOpen ? -8 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </button>
  )
}

/* ------------------------------------------------------------------ */
/* Sub-komponen: panel menu mobile                                     */
/* ------------------------------------------------------------------ */

function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 md:hidden"
          />

          {/* Panel dari kanan */}
          <motion.div
            key="panel"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 z-40 flex h-full w-3/4 max-w-sm flex-col justify-between bg-[#071013] px-6 py-24 shadow-xl sm:w-96 md:hidden"
          >
            {/* Menu navigasi */}
            <div className="flex flex-col gap-2">
              {NAVIGATION.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="rounded-md px-3 py-3 text-lg font-medium text-gray-200 transition hover:bg-white/5 hover:text-white"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Social media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <SocialIcons className="flex justify-center gap-4 border-t border-white/10 pt-6" />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

/* ------------------------------------------------------------------ */
/* Komponen utama                                                       */
/* ------------------------------------------------------------------ */

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      {/* Navbar utama */}
      <div className="mx-auto w-full max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-sm md:text-xl font-bold text-white w-48">
            <ShinyText
              text="Masayidalfa"
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
            <RotatingText
              texts={["Jack of All Trades", "多芸多才"]}
              mainClassName="text-white overflow-hidden rounded-lg"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={4000}
              splitBy="characters"
              auto
              loop
            />
          </div>

          {/* Nav desktop — tampil mulai md */}
          <div className="hidden md:flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-2 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
            {NAVIGATION.map((item) => (
              <NavLink key={item.name} {...item} />
            ))}
          </div>

          <SocialIcons className="hidden md:flex gap-6" />

          <HamburgerButton isOpen={isOpen} onToggle={() => setIsOpen((prev) => !prev)} />
        </div>
      </div>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  )
}