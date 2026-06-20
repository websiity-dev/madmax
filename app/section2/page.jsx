"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
    <section
      ref={sectionRef}
      className="relative min-h-[150vh] bg-black overflow-hidden px-0 py-20 z-20 flex items-center justify-center"
    >
      {/* Background Text Image */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none opacity-30">
        <img src="/images/Bg_text.png" alt="" className="w-full h-auto object-contain" />
      </div>

      <div className="sticky top-0 h-screen w-full flex items-center justify-center z-10">
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
    </section>
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