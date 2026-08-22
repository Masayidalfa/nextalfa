import RotatingText from "../RotatingText"
import ShinyText from "../ShinyText"
import Loader from "../Loader"
import SocialLinks from "../SocialLinks"

export default function Contact(){
    return(
        <section className="px-6 pt-10 sm:px-10 md:px-20 text-white">
            <div className="flex flex-col self-start">

                <RotatingText
                    texts={['Contact Information', '連絡情報']}
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
                        text="CONTACT"
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

            {/* isi section */}
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl mb-10">Stay In Touch</h1>
                <div className="scale-[0.4]">
                    <Loader />
                </div>
                <p className="mt-10 text-xl">Always open to new projects, collaborations, or just a good conversation. Pick one of the options below and let`s get in touch.</p>
            
                <SocialLinks />
            </div>

        </section>
    )
}