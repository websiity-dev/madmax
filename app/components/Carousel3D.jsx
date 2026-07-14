"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import Review from "../section_5/pagr";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


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
  { id: 5, title: "Creative Direction - 2024", image: "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, title: "Short Film - 2022", image: "https://picsum.photos/seed/film1/400/600" },
  { id: 7, title: "Editorial - 2023", image: "https://picsum.photos/seed/editorial1/400/600" },
  { id: 8, title: "Event Coverage - 2024", image: "https://images.unsplash.com/photo-1549277513-f1b32fe1f8f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 9, title: "Event Coverage - 2021", image: "https://images.unsplash.com/photo-1548811579-017cf2a4268b?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 10, title: "Event Coverage - 2022", image: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 11, title: "Event Coverage - 2021", image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 12, title: "Event Coverage - 2021", image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 13, title: "Event Coverage - 2021", image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 14, title: "Event Coverage - 2021", image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 15, title: "Event Coverage - 2021", image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  
];

export default function Carousel3D({ cards = defaultCards }) {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const [radius, setRadius] = useState(550);
  const [cardSize, setCardSize] = useState({ w: 220, h: 320 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setRadius(200);
        setCardSize({ w: 120, h: 180 });
      } else {
        setRadius(550);
        setCardSize({ w: 220, h: 320 });
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  useEffect(() => {
    let typeSplitList = new SplitType('.animate-carousel-list li', {
      types: 'lines',
      tagName: 'span'
    });

    let typeSplitText = new SplitType('.animate-carousel-text', {
      types: 'lines',
      tagName: 'span'
    });

    const wrapLines = (selector) => {
      document.querySelectorAll(selector).forEach(line => {
        const wrapper = document.createElement('div');
        wrapper.className = 'line-wrapper';
        wrapper.style.overflow = 'hidden';
        line.parentNode.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });
    };

    wrapLines('.animate-carousel-list li .line');
    wrapLines('.animate-carousel-text .line');

    gsap.from('.animate-carousel-list li .line', {
      scrollTrigger: {
        trigger: '.carousel-content-grid',
        start: 'top 70%',
      },
      y: '100%',
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.05,
    });

    gsap.from('.animate-carousel-text .line', {
      scrollTrigger: {
        trigger: '.animate-carousel-text',
        start: 'top 85%',
      },
      y: '100%',
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.1,
    });

    return () => {
      typeSplitList.revert();
      typeSplitText.revert();
    };
  }, []);

   gsap.utils.toArray('.animate-bg-blur').forEach((el) => {
        gsap.fromTo(el, 
          { filter: 'blur(24px)' }, 
          {
            filter: 'blur(0px)',
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%', // Trigger slightly before the element fully enters
              toggleActions: 'play none none reverse',
            }
          }
        );
      });
  const handlePan = (_, info) => {
    rotation.set(rotation.get() + info.delta.x * 0.5);
  };

  const handlePanStart = () => {
    isDragging.current = true;
  };

  const handlePanEnd = () => {
    isDragging.current = false;
  };

  return ( 
    <div className="relative w-full flex flex-col items-center bg-black -mt-24 overflow-x-hidden overflow-y-hidden">
      {/* Big Star Background Image */}
      <div className="absolute top-[20%] md:top-[15%] left-1/2 -translate-x-1/2 w-full max-w-[1600px] z-0 pointer-events-none flex justify-center">
        <motion.img 
          initial={{ opacity: 0, scale: 0.2, rotate: -20 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          src="/images/Star_blue.png" 
          alt="Star Background" 
          className="w-[150%] md:w-[110%] h-auto object-contain"
        />
      </div>

      {/* 3D Carousel Container */}
      <div className="relative z-10 w-full h-[350px] md:h-[500px] mb-16 md:mb-32 mt-8 md:mt-16 flex items-center justify-center overflow-visible [perspective:1200px] md:[perspective:1200px] [perspective:800px]">
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
              className="absolute rounded-lg overflow-hidden transition-all duration-300 ease-in-out select-none"
              style={{
                width: cardSize.w,
                height: cardSize.h,
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                // boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
                // border: "2px solid rgba(255,255,255,0.1)",
                backfaceVisibility: "visible"
              }}
              onMouseEnter={() => setHoveredCard(card.id)}
            >
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-full object-contain pointer-events-none" 
              />
              
              {/* Tooltip on hover */}
              {/* <motion.div
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
              </motion.div> */}
            </div>
          );
        })}
      </motion.div>
      </div>

      {/* Grid Content Below Carousel */}
      <div className="carousel-content-grid relative z-10 w-full max-w-[1400px] px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12 font-sans tracking-wide pb-20">
        
        {/* Top Left */}
        <div className="relative">
       
          
          <h2  style={{ fontFamily: "'Boldonse', sans-serif" }} className="animate-bg-blur text-4xl md:text-[2.75rem] font-black mb-0 uppercase leading-none drop-shadow-lg tracking-tighter text-white">
            PRE-PRODUCTION
          </h2>
          <h3   style={{ fontFamily: "'Boldonse', sans-serif" }} className="animate-bg-blur text-xl md:text-2xl font-bold mb-4 mt-1.5 uppercase text-white drop-shadow-md tracking-widest">
            SERVICES
          </h3>
          <ul style={{fontFamily:"'Bubbler One', sans-serif"}} className="animate-carousel-list text-[14px] md:text-[24px] space-y-1 text-gray-200 font-medium">
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
          <h2   style={{ fontFamily: "'Boldonse', sans-serif" }} className="animate-bg-blur text-4xl md:text-[2.75rem] font-black mb-0 uppercase text-white leading-none drop-shadow-lg tracking-tighter">
            POST-PRODUCTION
          </h2>
          <h3  style={{ fontFamily: "'Boldonse', sans-serif" }} className=" animate-bg-blur text-xl md:text-2xl font-bold mb-4 mt-1.5 uppercase text-white drop-shadow-md tracking-widest">
            SERVICES
          </h3> 
          <ul style={{fontFamily:"'Bubbler One', sans-serif"}}  className="animate-carousel-list text-[14px] md:text-[24px] space-y-1 text-gray-200 font-medium flex flex-col md:items-end">
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
  <h1 className="animate-carousel-text text-[14px] md:text-[24px] text-gray-200 text-center   leading-relaxed">
    Music video production, commercial advertisements, corporate videos,
    photography, graphic design, branding, video editing, colour grading,
    visual effects, and social media content creation. Every project is
    approached with creativity, professionalism, and attention to detail.
  </h1>
</div>

      </div>
        <Review/>
    </div>
  );
}
