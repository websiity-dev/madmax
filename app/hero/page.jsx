import React from 'react';

export default function HeroPage() {
  return (
    <div className="relative  text-white font-sans min-h-screen  flex flex-col">

      {/* Top Video Mask Area */}
      <div
  className="absolute inset-0 w-[90%] mx-auto" 
  style={{
    WebkitMaskImage: "url('/images/mask_image.png')",
    maskImage: "url('/images/mask_image.png')",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskSize: "cover",
    maskSize: "cover",
  }}
>
  <video
    src="/images/video.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  />
</div>

      {/* Bottom Content Area */}
      <div className="relative z-10 bg-black pt-1 px-12 pb-6 flex flex-col md:flex-row justify-between items-end gap-10 mt-auto">
       <div
  className="flex flex-col text-[#ff0033] uppercase tracking-tighter"
  style={{ fontFamily: "'Boldonse', Impact, sans-serif" }}
>
  <div className="flex items-end gap-2 md:gap-4 mt-3.5 md:mb-1 scale-y-120 origin-left leading-none">
    <span className="text-[10px] md:text-[1rem] -mb-6 md:-mb-0.5 ml-2">
      MAX
    </span>

    <span className="text-[30px] md:text-[4rem] leading-none">
      EFFORTS
    </span>
  </div>

  <div className="text-[3rem] md:text-[4rem]  origin-left">
    STUDIOS
  </div>
</div>
        
        <div className="max-w-l text-gray-400 text-xs md:text-sm font-mono uppercase tracking-[0.1em] text-right leading-relaxed flex flex-col gap-8 pb-4">
          <p>At Max Efforts Studios, the name reflects the way we work.</p>
          <p>Our mission is to provide high-quality production services that help clients tell their stories through powerful visual content. Our vision is to become a trusted creative production company known for quality, innovation, and reliable service.</p>
        </div>
      </div>
    <div className="relative z-10 bg-black border-gray-900">
      {/* Marquee Footer */}
      <div className="overflow-hidden py-4 text-white/50 font-mono text-xs tracking-[0.2em] whitespace-nowrap flex">
         <div className="animate-marquee flex gap-8">
            <span>PRODUCTION SERVICES THAT HELP CLIENTS TELL THEIR STORIES THROUGH POWERFUL VISUAL CONTENT. OUR VISION IS TO BECOME A TRUSTED CREATIVE PRODUCTION COMPANY.</span>
            <span>PRODUCTION SERVICES THAT HELP CLIENTS TELL THEIR STORIES THROUGH POWERFUL VISUAL CONTENT. OUR VISION IS TO BECOME A TRUSTED CREATIVE PRODUCTION COMPANY.</span>
            <span>PRODUCTION SERVICES THAT HELP CLIENTS TELL THEIR STORIES THROUGH POWERFUL VISUAL CONTENT. OUR VISION IS TO BECOME A TRUSTED CREATIVE PRODUCTION COMPANY.</span>
         </div>
      </div>

    </div>


    </div>
  
  )
}
