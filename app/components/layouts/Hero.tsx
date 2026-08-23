'use client'

import Lanyard from "../Lanyard";
import RotatingText from "../RotatingText";
import ShinyText from "../ShinyText";
// import GradientText from "../GradientText";

export default function Hero() {
  return (
    <section className="min-h-full flex items-center px-6 sm:px-10 md:px-20 pt-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-0 md:grid-cols-12 text-white">
        {/* Text */}
        <div className="order-2 space-y-6 text-center md:order-1 md:col-span-6 md:text-left">

          <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-6xl">            
            <ShinyText
              text="Hello, I'm Muhamad Masayid Alfarizqi"
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

          <div className="flex justify-center font-semibold text-base sm:text-lg md:text-2xl md:justify-start">

              <RotatingText
              className="font-paragraph px-2 sm:px-2 md:px-3 bg-[#1C77C3] overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg"
                texts={[
                  "Development × Network × Security",
                  "開発 × ネットワーク × セキュリティ",
                ]}
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 400,
                }}
                rotationInterval={6000}
                splitBy="characters"
                auto
                loop
              />
          </div>
            <p className="mx-auto max-w-xl text-sm leading-7 text-gray-300 sm:text-base md:mx-0 md:text-lg">
              Building reliable software, resilient networks, and secure
              systems through continuous learning and practical experience.
            </p>

        </div>

        {/* Lanyard */}
        <div className="order-1 flex justify-center md:order-2 md:col-span-6">

          <div className="h-[320px] w-full sm:h-[420px] md:h-[520px] lg:h-screen">
            <Lanyard
              position={[0, 0, 12]}
              gravity={[0, -40, 0]}
            />
          </div>

        </div>

      </div>
    </section>
  );
}