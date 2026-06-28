"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "react-fast-marquee";
import WhoWeAre from "../section3/page";

export default function Section2() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const images = [
    "/images/group1.png",
    "/images/grop2.png",
    "/images/group3.png",
    "/images/group4.png",
    "/images/grop2.png",
    "/images/group3.png",
  ];

  const cardConfigs = [
    { xEnd: "-35vw", rotate: -6 },
    { xEnd: "-21vw", rotate: 3 },
    { xEnd: "-7vw", rotate: -4 },
    { xEnd: "7vw", rotate: 2 },
    { xEnd: "21vw", rotate: -3 },
    { xEnd: "35vw", rotate: 5 },
  ];

  return (
    <>
      {/* Mobile View */}
      <section className="md:hidden relative bg-black w-full overflow-hidden py-10 z-20">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none opacity-30">
          <img src="/images/Bg_text.png" alt="" className="w-full h-auto object-contain" />
        </div>
        
    <div className="relative z-10 w-full"> 
      <Marquee autoFill speed={40} gradient={false}> 
        {
      images.map((src, idx) => ( 
      <div key={`mobile-${idx}`} className="w-100 flex-none flex justify-center">
         <img src={src} alt={`mobile-card-${idx}`} className="h-auto object-cover" style={{ aspectRatio: "1/1" }} /> 
         </div> 
         )
         )
         } 
        </Marquee>
     </div>
      </section>

      {/* Desktop View */}
  <section
  ref={sectionRef}
  className="hidden md:block relative min-h-[250vh] bg-black overflow-hidden"
>
  {/* Background */}
  <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
    <img
      src="/images/Bg_text.png"
      alt=""
      className="w-full h-auto object-contain"
    />
    <img
      src="/images/Bg_text.png"
      alt=""
      className="flex absolute  justify-center  items-center"
    />
  </div>

  {/* Sticky Cards */}
  <div className="sticky top-0 h-screen flex items-center justify-center z-10">
    {images.map((src, idx) => (
      <ScrollCard
        key={idx}
        src={src}
        idx={idx}
        scrollYProgress={scrollYProgress}
        config={cardConfigs[idx]}
      />
    ))}
  </div>

  {/* Content Below */}
<div className="relative z-20 w-full">
  <WhoWeAre />
</div>
</section>
    </>
  );
}

function ScrollCard({ src, idx, scrollYProgress, config }) {
  const x = useTransform(scrollYProgress, [0.0, 0.4], ["0vw", config.xEnd]);
  const rotate = useTransform(scrollYProgress, [0.0, 0.4], [0, config.rotate]);
  const scale = useTransform(scrollYProgress, [0.0, 0.3], [0.6, 1]);
  const opacity = useTransform(scrollYProgress, [0.0, 0.2], [0, 1]);

  return (
    <motion.div
      className="absolute h-[700px] aspect-[3/4] rounded-[30px] overflow-hidden"
      style={{
        x,
        rotate,
        scale,
        opacity,
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
        zIndex: idx,
      }}
    >
      <img
        className="w-full h-full object-cover"
        src={src}
        alt={`card-${idx}`}
      />
    </motion.div>
  );
}