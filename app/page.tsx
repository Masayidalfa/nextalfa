'use client'

import Navbar from "./components/layouts/Navbar"
import Hero from "./components/layouts/Hero"
import Project from "./components/layouts/Project"
import Profile from "./components/layouts/Profile"
import Gallery from "./components/layouts/Gallery"
import Skill from "./components/layouts/Skill"
import Story from "./components/layouts/Story"
import Exp from "./components/layouts/Exp"
import Certification from "./components/layouts/Certification"
import Contact from "./components/layouts/Contact"
import Footer from "./components/layouts/Footer"
import ShapeGrid from "./components/ShapeGrid"
import AnimatedContent from "./components/AnimatedContent"

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#071013]">
      <Navbar />

      <section className="relative isolate">
        <div className="absolute inset-0 z-0">
          <ShapeGrid
            speed={0.5}
            squareSize={40}
            direction="diagonal"
            borderColor="#1C77C3"
            hoverFillColor="#1C77C3"
          />
        </div>

        {/* Hero tampil langsung tanpa animasi scroll — ini yang pertama dilihat user */}
        <div className="relative z-10 pointer-events-none">
          <Hero />
        </div>
      </section>

      <div className="container mx-auto h-full">
        {/* Section di area atas — threshold masih aman pakai default-ish */}
        <div id="projects" className="scroll-mt-24">
          <AnimatedContent direction="vertical" distance={60} duration={0.8} threshold={0.15}>
            <Project />
          </AnimatedContent>
        </div>

        <div id="profile" className="scroll-mt-24">
          <AnimatedContent direction="vertical" distance={60} duration={0.8} threshold={0.15} delay={0.1}>
            <Profile />
          </AnimatedContent>
        </div>

        <AnimatedContent direction="vertical" distance={50} duration={0.8} threshold={0.1}>
          <Gallery />
        </AnimatedContent>

        <AnimatedContent direction="vertical" distance={50} scale={0.95} duration={0.7} threshold={0.1}>
          <Skill />
        </AnimatedContent>
      </div>

      <AnimatedContent direction="vertical" distance={50} duration={0.8} threshold={0.1}>
        <Story />
      </AnimatedContent>

      <div className="container mx-auto h-full">
        {/* Mulai dari sini makin ke bawah, threshold makin kecil
            supaya titik trigger makin longgar (gampang ke-reach) */}
        <AnimatedContent direction="vertical" distance={40} duration={0.7} threshold={0.05}>
          <Exp />
        </AnimatedContent>

        <AnimatedContent direction="vertical" distance={40} scale={0.96} duration={0.7} threshold={0.05}>
          <Certification />
        </AnimatedContent>

        <div id="contact" className="scroll-mt-24">
          <AnimatedContent direction="vertical" distance={30} duration={0.6} threshold={0}>
            <Contact />
          </AnimatedContent>
        </div>
      </div>

      <Footer />
    </div>
  );
}