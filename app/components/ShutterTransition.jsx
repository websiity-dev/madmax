"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ShutterTransition() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Trigger starts when the boundary enters the bottom of the screen (0.0)
    // and ends when the boundary leaves the top of the screen (1.0).
    // This perfectly spans the transition between the two sections.
    offset: ["start end", "end start"],
  });

  const [gridConfig, setGridConfig] = useState({ columns: 0, rows: 0, size: 50 });

  useEffect(() => {
    const updateGrid = () => {
      const isMobile = window.innerWidth < 768;
      const size = isMobile ? 40 : 80; 
      const columns = Math.ceil(window.innerWidth / size);
      const rows = Math.ceil(window.innerHeight / size);
      setGridConfig({ columns, rows, size });
    };
    
    updateGrid();
    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, []);

  const totalPixels = gridConfig.columns * gridConfig.rows;

  return (
    <div ref={containerRef} className="h-0 w-full relative z-50 pointer-events-none">
      <div className="fixed inset-0 w-full h-[100dvh] overflow-hidden flex flex-wrap pointer-events-none" style={{ alignContent: 'flex-start' }}>
        {totalPixels > 0 && Array.from({ length: totalPixels }).map((_, i) => (
          <Pixel 
            key={i} 
            index={i} 
            columns={gridConfig.columns}
            rows={gridConfig.rows}
            size={gridConfig.size}
            scrollYProgress={scrollYProgress} 
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <motion.h2 
              className="text-white text-4xl md:text-6xl font-mono tracking-widest uppercase text-center font-bold drop-shadow-lg"
              style={{
                 opacity: useTransform(scrollYProgress, [0.35, 0.5, 0.65], [0, 1, 0]),
                 scale: useTransform(scrollYProgress, [0.35, 0.5, 0.65], [0.8, 1, 1.2])
              }}
            >
              MAX EFFORTS
            </motion.h2>
        </div>
      </div>
    </div>
  );
}

function Pixel({ index, columns, rows, size, scrollYProgress }) {
  // We calculate a staggered delay based on position for a wave effect,
  // or use random for a digital glitchy effect. Let's use a mix!
  const col = index % columns;
  const row = Math.floor(index / columns);
  
  // Normalized coordinates (0 to 1)
  const normX = col / columns;
  const normY = row / rows;
  
  // Calculate delay based on distance from top-left (wave effect)
  // or random. A random digital shutter is often very cool.
  const randomDelay = (Math.random() * 0.25);
  
  // Phase 1: 0.0 to 0.4 -> Shutter closes (pixels scale up to 1)
  const startIn = randomDelay;
  const endIn = startIn + 0.15;
  
  // Phase 2: 0.6 to 1.0 -> Shutter opens (pixels scale down to 0)
  const startOut = 0.6 + randomDelay;
  const endOut = startOut + 0.15;

  const scale = useTransform(
    scrollYProgress,
    [startIn, endIn, startOut, endOut],
    [0, 1.05, 1.05, 0] // 1.05 to prevent subpixel gaps
  );
  
  const opacity = useTransform(
    scrollYProgress,
    [startIn, endIn, startOut, endOut],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        scale,
        opacity,
        transformOrigin: "center",
      }}
      className="bg-[#ff0033]"
    />
  );
}
