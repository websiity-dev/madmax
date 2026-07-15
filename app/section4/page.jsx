"use client";
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Carousel3D from '../components/Carousel3D';
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Star = ({ color, className }) => (
  <svg viewBox="0 0 24 24" fill={color} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

export default function Section4() {
  useEffect(() => {
    let typeSplit = new SplitType('.animate-list-item li', {
      types: 'lines',
      tagName: 'span'
    });

    // Wrap lines for masked effect
    document.querySelectorAll('.animate-list-item li .line').forEach(line => {
      const wrapper = document.createElement('div');
      wrapper.className = 'line-wrapper';
      wrapper.style.overflow = 'hidden';
      line.parentNode.insertBefore(wrapper, line);
      wrapper.appendChild(line);
    });

    gsap.from('.animate-list-item li .line', {
      scrollTrigger: {
        trigger: '.animate-section-4',
        start: 'top 70%',
      },
      y: '100%',
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.05,
    });

    // Background blur reveal animation for each element
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

    return () => {
      typeSplit.revert();
    };
  }, []);

  return (
    <section id="services" className="animate-section-4 relative w-full z-[99999]  bg-black text-white flex justify-center items-center ">
      {/* Background Text Image */}
      <div className="absolute overflow-hidden inset-0 z-0 flex justify-center items-center opacity-30 pointer-events-none">
        <Image 
          src="/images/bg_text2.png" 
          alt="Background Text" 
          
          fill
          className="animate-bg-blur object-cover scale-[1.3] md:scale-[1.5]"
        />
      </div>

      {/* Shutter Effect over the entire section */}
      {/* <Shutter /> */}

      {/* Content Container */}
      <div className="relative z-10 w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12 font-sans tracking-wide">
        
        {/* Top Left */}
        <div className="relative">
          {/* Red Star */}
          <Star color="#E60012" className="absolute -top-24 -left-16 w-78 h-78 z-[-1] -rotate-12 opacity-100 overflow-visible" />
          
          <h2   style={{ fontFamily: "var(--font-boldonse)" }} className="animate-bg-blur  text-4xl md:text-[2.75rem] font-black mb-0 uppercase leading-none drop-shadow-lg tracking-tighter">
            PRE-PRODUCTION
          </h2>
          <h3   style={{ fontFamily: "var(--font-boldonse)" }} className="animate-bg-blur  text-xl md:text-2xl font-bold mb-4 mt-1.5 uppercase text-white drop-shadow-md tracking-widest">
            SERVICES
          </h3>
          <ul style={{fontFamily:"'Bubbler One', sans-serif"}} className="animate-list-item text-[14px] md:text-[24px] space-y-1 text-gray-200 font-medium">
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
          <h2   style={{ fontFamily: "'Boldonse', sans-serif" }} className="animate-bg-blur  text-4xl md:text-[2.75rem] font-black mb-0 uppercase leading-none drop-shadow-lg tracking-tighter">
            POST-PRODUCTION
          </h2>
          <h3   style={{ fontFamily: "'Boldonse', sans-serif" }} className="animate-bg-blur  text-xl md:text-2xl font-bold mb-4 mt-1.5 uppercase text-white drop-shadow-md tracking-widest">
            SERVICES
          </h3>
          <ul style={{fontFamily:"'Bubbler One', sans-serif"}}  className="animate-list-item text-[14px] md:text-[24px] space-y-1 text-gray-200 font-medium flex flex-col md:items-end">
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

        {/* Bottom Left */}
        <div className="relative">
          <h2   style={{ fontFamily: "'Boldonse', sans-serif" }} className="animate-bg-blur  text-4xl md:text-[2.75rem] font-black mb-0 uppercase  drop-shadow-lg tracking-tighter">
            POST-PRODUCTION
          </h2>
          <h3  style={{ fontFamily: "'Boldonse', sans-serif" }} className="animate-bg-blur  text-xl md:text-2xl mt-1 font-bold mb-4 uppercase text-white drop-shadow-md tracking-widest">
            SERVICES
          </h3>
          <ul style={{fontFamily:"'Bubbler One', sans-serif"}}  className="animate-list-item text-sm md:text-[24px] space-y-1 text-gray-200 font-medium">
            <li>MUSIC VIDEOS</li>
            <li>COMMERCIAL ADVERTISEMENTS</li>
            <li>BRAND FILMS</li>
            <li>CORPORATE VIDEOS</li>
            <li>SHORT FILMS</li>
            <li>DOCUMENTARIES</li>
            <li>EVENT COVERAGE</li>
            <li>FASHION SHOOTS</li>
            <li>PRODUCT SHOOTS</li>
            <li>DRONE CINEMATOGRAPHY</li>
            <li>MULTI-CAMERA PRODUCTIONS</li>
          </ul>
        </div>

        {/* Bottom Right */}
        <div className="relative md:text-right flex flex-col md:items-end">
          <div className="relative inline-block text-left md:text-right mb-4">
            {/* Blue Star */}
            <Star color="#1D00FF" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-78 h-78 z-[-1] rotate-[15deg] opacity-100" />
            
            <h2   style={{ fontFamily: "'Boldonse', sans-serif" }} className="animate-bg-blur  text-4xl md:text-[2.75rem] font-black mb-0 uppercase  drop-shadow-lg tracking-tighter">
              DESIGN &
            </h2>
            <h2   style={{ fontFamily: "'Boldonse', sans-serif" }} className="animate-bg-blur  text-4xl mt-2 md:text-[2.75rem] font-black mb-0 uppercase  drop-shadow-lg tracking-tighter">
              BRANDING
            </h2>
          </div>
          <ul style={{fontFamily:"'Bubbler One', sans-serif"}} className="animate-list-item text-sm md:text-[24px] space-y-1 text-gray-200 font-medium flex flex-col md:items-end">
            <li>POSTER DESIGN</li>
            <li>ALBUM ARTWORK</li>
            <li>COVER ART DESIGN</li>
            <li>LOGO DESIGN</li>
            <li>BRAND IDENTITY DEVELOPMENT</li>
            <li>SOCIAL MEDIA CREATIVES</li>
            <li>PROMOTIONAL MATERIALS</li>
          </ul>
        </div>
        
<div className=" animate-bg-blur  flex items-center justify-center w-full h-full md:col-span-2 -mt-12">
  <img
    src="/images/front_text_1.png"
    alt="text image"
    className="max-w-full h-auto"
  />
</div>

      </div>
    </section>
  );
}

function Shutter() {
  return (
    <motion.div 
      className="absolute inset-0 z-50 flex flex-col pointer-events-none"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Top Shutter */}
      <motion.div 
        className="w-full h-1/2 bg-black origin-top"
        variants={{
          hidden: { scaleY: 1 },
          visible: { scaleY: 0, transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }
        }}
      />
      {/* Bottom Shutter */}
      <motion.div 
        className="w-full h-1/2 bg-black origin-bottom"
        variants={{
          hidden: { scaleY: 1 },
          visible: { scaleY: 0, transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }
        }}
      />
    </motion.div>
  );
}
