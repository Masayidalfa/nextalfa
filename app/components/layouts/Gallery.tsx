/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Gallery() {
    const galleryRef = useRef<HTMLElement | null>(null);

    const card1Ref = useRef<HTMLDivElement | null>(null);
    const card2Ref = useRef<HTMLDivElement | null>(null);
    const card4Ref = useRef<HTMLDivElement | null>(null);
    const card5Ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const cards = [
            card1Ref.current,
            card2Ref.current,
            card4Ref.current,
            card5Ref.current,
        ];

        // Floating animation
        cards.forEach((card, index) => {
            if (!card) return;

            gsap.to(card, {
                y: index % 2 === 0 ? -15 : 15,
                duration: 2.5 + index * 0.3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        });

        // Mouse interaction
        const handleMouseMove = (event: MouseEvent) => {
            if (!galleryRef.current) return;

            const rect = galleryRef.current.getBoundingClientRect();

            const mouseX =
                (event.clientX - rect.left) / rect.width - 0.5;

            const mouseY =
                (event.clientY - rect.top) / rect.height - 0.5;

            gsap.to(card1Ref.current, {
                x: mouseX * 20,
                y: mouseY * 20,
                duration: 0.8,
                ease: "power2.out",
            });

            gsap.to(card2Ref.current, {
                x: mouseX * -30,
                y: mouseY * -30,
                duration: 1,
                ease: "power2.out",
            });

            gsap.to(card4Ref.current, {
                x: mouseX * 25,
                y: mouseY * 25,
                duration: 0.9,
                ease: "power2.out",
            });

            gsap.to(card5Ref.current, {
                x: mouseX * -20,
                y: mouseY * -20,
                duration: 1.1,
                ease: "power2.out",
            });
        };

        const gallery = galleryRef.current;

        gallery?.addEventListener("mousemove", handleMouseMove);

        return () => {
            gallery?.removeEventListener("mousemove", handleMouseMove);
            gsap.killTweensOf(cards);
        };
    }, []);

    return (
        <section
            ref={galleryRef}
            className="
                relative
                min-h-[400px]
                sm:min-h-[600px]
                md:min-h-[650px]
                lg:min-h-[700px]
                w-full
                overflow-hidden
                px-6 sm:px-10 md:px-20
            "
        >
            {/* LOGO */}
            <div
                className="
                    pointer-events-none
                    absolute inset-0
                    z-20
                    flex items-center justify-center
                "
            >
                <img
                    src="/assets/logoLucu/IamProgrammerEnglish.webp"
                    alt="I am Programmer"
                    className="
                        w-40
                        sm:w-48
                        md:w-56
                        lg:w-64
                        xl:w-72
                    "
                />
            </div>

            {/* FOTO 1 */}
            <div
                ref={card1Ref}
                className="
                    absolute
                    left-[3%]
                    top-[5%]
                    z-10

                    h-28
                    w-36

                    sm:left-[5%]
                    sm:top-[5%]
                    sm:h-40
                    sm:w-52

                    md:left-[7%]
                    md:top-[5%]
                    md:h-56
                    md:w-64

                    lg:left-[8%]
                    lg:top-[5%]
                    lg:h-64
                    lg:w-72

                    xl:left-[10%]
                    xl:top-[5%]
                    xl:h-72
                    xl:w-80

                    overflow-hidden
                "
            >
                <img
                    src="/assets/image/gallery/1.jpeg"
                    alt="Foto Kelas TI05"
                    className="h-full w-full object-cover"
                />
            </div>

            {/* FOTO 2 */}
            <div
                ref={card2Ref}
                className="
                    absolute
                    left-[18%]
                    top-[48%]
                    z-0

                    aspect-[4/5]
                    w-28

                    sm:left-[20%]
                    sm:top-[47%]
                    sm:w-40

                    md:left-[22%]
                    md:top-[45%]
                    md:w-48

                    lg:left-[24%]
                    lg:top-[45%]
                    lg:w-56

                    xl:left-[25%]
                    xl:top-[45%]
                    xl:w-60

                    overflow-hidden
                "
            >
                <img
                    src="/assets/image/gallery/2.jpg"
                    alt="Foto Kelas TI05"
                    className="h-full w-full object-cover"
                />
            </div>

            {/* FOTO 4 = */}
            <div
                ref={card4Ref}
                className="
                    absolute
                    right-[15%]
                    top-[5%]
                    z-10

                    aspect-[4/5]
                    w-28

                    sm:right-[16%]
                    sm:top-[6%]
                    sm:w-40

                    md:right-[17%]
                    md:top-[7%]
                    md:w-48

                    lg:right-[18%]
                    lg:top-[8%]
                    lg:w-56

                    xl:right-[20%]
                    xl:top-[8%]
                    xl:w-60

                    overflow-hidden
                "
            >
                <img
                    src="/assets/image/gallery/4.jpeg"
                    alt="Foto Kelas TI05"
                    className="
                        h-full
                        w-full
                        scale-110
                        object-cover
                    "
                />
            </div>

            {/* FOTO 5*/}
            <div
                ref={card5Ref}
                className="
                    absolute
                    right-[12%]
                    top-[50%]
                    z-0

                    aspect-[4/5]
                    w-28

                    sm:right-[14%]
                    sm:top-[49%]
                    sm:w-40

                    md:right-[17%]
                    md:top-[48%]
                    md:w-48

                    lg:right-[20%]
                    lg:top-[48%]
                    lg:w-56

                    xl:right-[25%]
                    xl:top-[48%]
                    xl:w-60

                    overflow-hidden
                "
            >
                <img
                    src="/assets/image/gallery/5.jpeg"
                    alt="Foto Kelas TI05"
                    className="
                        h-full
                        w-full
                        scale-110
                        object-cover
                    "
                />
            </div>
        </section>
    );
}