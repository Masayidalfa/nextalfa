'use client'

import RotatingText from "../RotatingText"
import ShinyText from "../ShinyText"

export default function Profile() {
    return(
        <section className="px-3 sm:px-6 md:px-14 pt-3 min-h-[560px] md:min-h-[700px]">
            {/* titlle section */}
            <div className="flex flex-col self-start pb-5 md:pb-8">

                <RotatingText
                    texts={['About Me', '自己紹介']}
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
                        text="PROFILE"
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

            {/* content section */}
            <div className="mx-auto grid grid-cols-1 md:grid-cols-12 text-white">
                {/* Foto */}
                <div className="col-span-5 aspect-square overflow-hidden mx-auto rounded-lg">
                    <img src="/assets/image/profile/Prof2.jpeg" alt="Profile 1" className="h-full w-full object-cover max-w-60 md:max-w-80 max-h-72 md:max-h-100"/>
                </div>

                {/* Text */}
                <div className="col-span-7 my-auto">
                    <div className="flex flex-col text-justify sm:text-left">
                        <p className="text-xl md:text-3xl pt-3 md:pt-8 pb-3 md:pb-8">Hi there, </p>
                        <p className="text-xs md:text-sm pb-3 md:pb-6">Im Masayid — a Network & Security Engineer with a growing interest in cybersecurity and software engineering.</p>
                        <p className="text-base md:text-3xl pb-3 md:pb-6 text-[#]">I work with network infrastructure, web development, and security, combining my networking background with software engineering skills to build, troubleshoot, and secure technical solutions.</p>
                        <p className="text-xs md:text-sm">I approach problems from both infrastructure and application perspectives. Im highly curious, adaptable, and committed to continuous learning — especially in networking, cybersecurity, and software engineering.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}