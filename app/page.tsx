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

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#071013]">
      <Navbar/>
      <div className="container mx-auto h-full">
        <Hero/>
        <div id="projects" className="scroll-mt-24">
          <Project />
        </div>
        <div id="profile" className="scroll-mt-24">
          <Profile />
        </div>
        <Gallery />
        <Skill />
      </div>
      <Story />
      <div className="container mx-auto h-full">
        <Exp />
        <Certification />
        <div id="contact" className="scroll-mt-24">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}