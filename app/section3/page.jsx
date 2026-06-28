"use client";

import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAre() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    let typeSplit = new SplitType('[animate]', {
      types: 'lines, words, chars',
      tagName: 'span'
    });

    gsap.from('[animate] .line', {
      scrollTrigger: {
        trigger: '.max-w-xl',
        start: 'top 60%',
        toggleActions: 'play none none reverse',
      },
      y: '100%',
      opacity: 0,
      duration: 0.9,
      ease: 'power1.out',
      stagger: 0.1,
    });

    return () => {
      typeSplit.revert();
    };
  }, []);

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  return (
    <section className="w-full py-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        {/* LEFT */}
        <div className="flex flex-col justify-center p-10 lg:p-16">

          {/* Heading */}
        <div className="relative inline-block w-fit">
 <div
  className="uppercase text-[#2F00FF]"
  style={{ fontFamily: "'Boldonse', sans-serif" }}
>
  {/* WHO */}
  <h1
    className="
      leading-[1.4]
      tracking-[-0.06em]
      text-[80px]
      md:text-[120px]
      lg:text-[170px]
      whitespace-nowrap
    "
  >
    WH

    <span className="relative inline-flex">
      <span>O</span>

      <motion.img
        src="/images/star.svg"
        alt="star"
        style={{ rotate }}
        className="
          absolute
          w-16
          ml-2
          
          md:w-24
          lg:w-48
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
        "
      />
    </span>
  </h1>

  {/* WE ARE */}
  <h1
    className="
      mt-2
      md:mt-3
      lg:mt-4
      leading-[0.9]
      tracking-[-0.06em]
      text-[80px]
      md:text-[120px]
      lg:text-[170px]
      whitespace-nowrap
    "
  >
    WE ARE,
  </h1>
</div>


</div>

          {/* Description */}
     <div
  className="mt-16 max-w-[560px] space-y-14"
  style={{ fontFamily: "'Inconsolata', monospace" }}
>
  <p
    className="
      text-[#CFCFCF]
      uppercase
      text-[18px]
      md:text-[18px]
      font-extralight
      tracking-[0.14em]
      leading-[1.15]
      text-justify

    "
  >
    MAX EFFORTS STUDIOS IS A FULL-SERVICE CREATIVE PRODUCTION HOUSE
    SPECIALIZING IN VISUAL STORYTELLING, MUSIC VIDEOS, COMMERCIAL
    CONTENT, PHOTOGRAPHY, POST-PRODUCTION, AND ARTIST BRANDING.
    WE TRANSFORM IDEAS INTO COMPELLING VISUAL EXPERIENCES FROM
    CONCEPT TO FINAL DELIVERY.
  </p>

  <p
    className="
      text-[#CFCFCF]
      uppercase
      text-[18px]
      md:text-[18px]
      font-light
      tracking-[0.14em]
      text-justify
      leading-[1.15]
    "
  >
    AT MAX EFFORTS STUDIOS, THE NAME REFLECTS THE WAY WE WORK.
  </p>

  <p
    className="
      text-[#CFCFCF]
      uppercase
      text-[18px]
      md:text-[18px]
      font-light
      tracking-[0.14em]
      leading-[1.15]
    "
  >
    WE BELIEVE THAT MAXIMUM EFFORT LEADS TO MAXIMUM IMPACT. THIS
    COMMITMENT DRIVES EVERY STAGE OF OUR PROCESS, FROM CONCEPT
    DEVELOPMENT AND PLANNING TO PRODUCTION AND POST-PRODUCTION.
  </p>
</div>
        </div>

        {/* RIGHT */}
        <div className="relative flex items-center justify-center p-10">

          <div className="relative w-[520px] h-[650px]">

            {/* Back Image */}
            <img
              src="/images/group1.png"
              alt=""
              className="absolute inset-0 w-full object-contain rotate-[-5deg]"
            />

            {/* Middle Image */}
            <img
              src="/images/group3.png"
              alt=""
              className="absolute inset-0 w-full object-contain rotate-[4deg]"
            />

            {/* Front Image */}
            <motion.img
              src="/images/grop2.png"
              alt=""
              whileHover={{
                scale: 1.03,
                rotate: 0,
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 w-full object-contain shadow-2xl"
            />

          </div>

          {/* Bottom Tagline */}
          <div className="absolute bottom-10 right-10">
            <p className="uppercase tracking-[0.25em] text-xs text-gray-400">
              YOUR VISION. OUR MAXIMUM EFFORTS.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}