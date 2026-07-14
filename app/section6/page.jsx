"use client";

import { useRef, useState, useEffect } from "react";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-[#FFFCD9]">
      {/* Writing effect keyframes */}
      <style>{`
        @keyframes svgWritingReveal {
          0% {
            clip-path: inset(0 100% 0 0);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          100% {
            clip-path: inset(0 0% 0 0);
            opacity: 1;
          }
        }
      `}</style>

      {/* Paper Texture */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-multiply"
        style={{
          backgroundImage: "url('/images/Text_Image/texture.png')",
        }}
      />

      {/* Full Width Background Logo with Writing Effect */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-10">
        <img
          src="/images/Text_Image/Creativemadness_1.svg"
          alt=""
          className="
            w-screen
            min-w-full
            max-w-none
            h-auto
            object-cover
            select-none
          "
          style={{
            clipPath: isVisible ? undefined : "inset(0 100% 0 0)",
            opacity: isVisible ? 1 : 0,
            animation: isVisible
              ? "svgWritingReveal 3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards"
              : "none",
          }}
          draggable={false}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full h-full">

        {/* Top Left Signature */}
    

        {/* Centered Content */}
        <div className="max-w-1xl p-2 mx-auto px-6 md:px-8 pt-16 md:py-26">
    <img
          src="/images/Text_Image/Anomaly1.png"
          alt="Signature"
          className="  w-20 md:w-32 lg:w-40"
        />
          {/* Header */}
    <div
  style={{
    fontFamily: "var(--font-inconsolata)",
    fontWeight: "light",
  }}
  className="relative flex items-center w-full text-black text-[11px] md:text-lg uppercase my-6"
>
  {/* Left */}
  <span>MAX</span>

  {/* Center */}
  <span className="absolute left-1/2 -translate-x-1/2">
    EFFORTS
  </span>

  {/* Right */}
  <span className="ml-auto">STUDIO</span>
</div>
<div style={{fontFamily: "var(--font-inconsolata)",fontWeight:'bold'}} className="text-black">
    Maximum Efforts. Maximum Impact.
</div>

          {/* Paragraphs */}
          <div  className="space-y-5 text-[11px] md:text-sm uppercase tracking-wide leading-relaxed text-black/85 font-mono">
            <p>
            Max Efforts Studio is a creative production company founded by <span className='font-bold '> SHAJATH and Madeshver</span>. Established three years ago, the company was built on a simple principle: delivering unwavering dedication in every project and creating meaningful results for clients.
            </p>

            <p>
            Over the years, we have worked across a wide range of creative and commercial projects, gaining experience in video production, photography, graphic design, branding, and digital content creation. Our focus is on providing professional creative solutions that help businesses, brands, artists, and organizations communicate their vision effectively.
            </p>

            <p>
              We provide music videos, commercial advertisements, corporate
              films, branding, photography, social media content, and creative
              direction with an emphasis on storytelling and quality.
            </p>

            <p>
          At Max Efforts Studio, <span className='font-bold'>the name reflects the way we work.</span>  We believe that relentless commitment leads to maximum impact. This drive fuels every stage of our process, from concept development and planning to production, post-production, and final delivery.
            </p>
            <p>
Our services include music video production, commercial advertisements, corporate videos, photography, graphic design, branding, video editing, colour grading, visual effects, and social media content creation. Every project is approached with creativity, professionalism, and attention to detail.            </p>
            <p>
Our mission is to provide high-quality production services that help clients tell their stories through powerful visual content. Our vision is to become a trusted creative production company known for quality, innovation, and reliable service.
<br/> Today, Max Efforts Studio continues to grow as a creative partner for brands, businesses, and artists, delivering innovative content and professional production services with one goal in mind: Maximum Efforts. Maximum Impact.           
 </p>
          </div>

        </div>
      </div>
    </section>
  );
}