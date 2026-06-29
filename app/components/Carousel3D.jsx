"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";


const Star = ({ color, className }) => (
  <svg viewBox="0 0 24 24" fill={color} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);
const defaultCards = [
  { id: 1, title: "Fashion Campaign - 2026", image: "https://picsum.photos/seed/fashion1/400/600" },
  { id: 2, title: "Product Shoot - 2022", image: "https://picsum.photos/seed/product1/400/600" },
  { id: 3, title: "Music Video - 2023", image: "https://picsum.photos/seed/music1/400/600" },
  { id: 4, title: "Brand Film - 2021", image: "https://picsum.photos/seed/brand1/400/600" },
  { id: 5, title: "Creative Direction - 2024", image: "https://picsum.photos/seed/creative1/400/600" },
  { id: 6, title: "Short Film - 2022", image: "https://picsum.photos/seed/film1/400/600" },
  { id: 7, title: "Editorial - 2023", image: "https://picsum.photos/seed/editorial1/400/600" },
  { id: 8, title: "Event Coverage - 2024", image: "https://picsum.photos/seed/event1/400/600" },
  { id: 9, title: "Event Coverage - 2021", image: "https://picsum.photos/seed/event1/400/600" },
  { id: 10, title: "Event Coverage - 2022", image: "https://picsum.photos/seed/event1/400/600" },
  { id: 11, title: "Event Coverage - 2023", image: "https://picsum.photos/seed/event1/400/600" },
  { id: 12  , title: "Event Coverage - 2024", image: "https://picsum.photos/seed/event1/400/600" },
  { id: 13, title: "Event Coverage - 2021", image: "https://picsum.photos/seed/event1/400/600" },
  { id: 14, title: "Event Coverage - 2022", image: "https://picsum.photos/seed/event1/400/600" },
  
];

export default function Carousel3D({ cards = defaultCards }) {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const rotation = useMotionValue(0);
  const requestRef = useRef(null);
  const isDragging = useRef(false);
  const autoScrollSpeed = 0.2; // degrees per frame (slower for smooth reading)

  const animate = () => {
    if (!isHovered && !isDragging.current) {
      rotation.set(rotation.get() - autoScrollSpeed);
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isHovered]);

  const handlePan = (_, info) => {
    rotation.set(rotation.get() + info.delta.x * 0.5);
  };

  const handlePanStart = () => {
    isDragging.current = true;
  };

  const handlePanEnd = () => {
    isDragging.current = false;
  };

  const radius = 550; // Distance from center

  return (
    <div className="w-full flex flex-col items-center">
      {/* 3D Carousel Container */}
      <div className="relative w-full h-[500px] mb-32 mt-16 flex items-center justify-center overflow-visible [perspective:1200px]">
        <motion.div
        className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d] cursor-grab active:cursor-grabbing select-none"
        style={{ rotateY: rotation }}
        onPan={handlePan}
        onPanStart={handlePanStart}
        onPanEnd={handlePanEnd}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); setHoveredCard(null); }}
      >
        {cards.map((card, index) => {
          const angle = (360 / cards.length) * index;
          return (
            <div
              key={card.id}
              className="absolute w-[220px] h-[320px] rounded-lg overflow-hidden transition-all duration-300 ease-in-out select-none"
              style={{
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
                border: "2px solid rgba(255,255,255,0.1)",
                backfaceVisibility: "visible"
              }}
              onMouseEnter={() => setHoveredCard(card.id)}
            >
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-full object-cover pointer-events-none" 
              />
              
              {/* Tooltip on hover */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: hoveredCard === card.id ? 1 : 0, 
                  y: hoveredCard === card.id ? 0 : 10 
                }}
                transition={{ duration: 0.2 }}
                style={{fontFamily:"'Bubbler One', sans-serif"}}
                className="absolute bottom-0 left-0 w-full p-4 pt-12 bg-gradient-to-t from-black via-black/60 to-transparent text-white text-center font-bold tracking-widest uppercase font-sans text-sm pointer-events-none"
              >
                {card.title}
              </motion.div>
            </div>
          );
        })}
      </motion.div>
      </div>

      {/* Grid Content Below Carousel */}
      <div className="relative z-10 w-full max-w-[1400px] px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12 font-sans tracking-wide pb-20">
        
        {/* Top Left */}
        <div className="relative">
       
          
          <h2   style={{ fontFamily: "'Boldonse', sans-serif" }} className="text-4xl md:text-[2.75rem] font-black mb-0 uppercase leading-none drop-shadow-lg tracking-tighter">
            PRE-PRODUCTION
          </h2>
          <h3   style={{ fontFamily: "'Boldonse', sans-serif" }} className="text-xl md:text-2xl font-bold mb-4 mt-1.5 uppercase text-white drop-shadow-md tracking-widest">
            SERVICES
          </h3>
          <ul style={{fontFamily:"'Bubbler One', sans-serif"}} className="text-[14px] md:text-[24px] space-y-1 text-gray-200 font-medium">
            <li>CONCEPT DEVELOPMENT</li>
            <li>STORY WRITING</li>
            <li>SCRIPT WRITING</li>
            <li>SCREENPLAY DEVELOPMENT</li>
            <li>CREATIVE DIRECTION</li>
            <li>MOOD BOARDS</li>
            <li>STORYBOARDING</li>
            <li>SHOT LISTING</li>
            <li>LOCATION SCOUTING</li>
            <li>CASTING</li>
            <li>PRODUCTION PLANNING</li>
            <li>BUDGETING</li>
          </ul>
        </div>

        {/* Top Right */}
        <div className="relative md:text-right">
          <h2   style={{ fontFamily: "'Boldonse', sans-serif" }} className="text-4xl md:text-[2.75rem] font-black mb-0 uppercase leading-none drop-shadow-lg tracking-tighter">
            POST-PRODUCTION
          </h2>
          <h3   style={{ fontFamily: "'Boldonse', sans-serif" }} className="text-xl md:text-2xl font-bold mb-4 mt-1.5 uppercase text-white drop-shadow-md tracking-widest">
            SERVICES
          </h3>
          <ul style={{fontFamily:"'Bubbler One', sans-serif"}}  className="text-[14px] md:text-[24px] space-y-1 text-gray-200 font-medium flex flex-col md:items-end">
            <li>VIDEO EDITING</li>
            <li>TRAILER & TEASER EDITING</li>
            <li>COLOUR CORRECTION</li>
            <li>COLOUR GRADING</li>
            <li>VISUAL EFFECTS (VFX)</li>
            <li>MOTION GRAPHICS</li>
            <li>TITLE DESIGN</li>
            <li>SOUND DESIGN</li>
            <li>AUDIO MIXING</li>
            <li>MASTERING</li>
          </ul>
        </div>

       
 <div
  style={{
    fontFamily: "'inconsolata', monospace",
    fontWeight: 200,
  }}
  className="flex justify-center w-full mt-6 md:col-span-2"
>
  <h1 className="text-[14px] md:text-[24px] text-gray-200 text-center   leading-relaxed">
    Music video production, commercial advertisements, corporate videos,
    photography, graphic design, branding, video editing, colour grading,
    visual effects, and social media content creation. Every project is
    approached with creativity, professionalism, and attention to detail.
  </h1>
</div>

      </div>
    </div>
  );
}
