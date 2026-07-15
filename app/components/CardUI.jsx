import React from "react";
import { Luckiest_Guy, Courier_Prime } from "next/font/google";

const luckiestGuy = Luckiest_Guy({ weight: "400", subsets: ["latin"] });
const courier = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });

export default function CardUI() {
  const barcodeWidths = [
    3, 1.5, 4, 2, 1.5, 5, 2, 3, 1.5, 4, 2, 2, 3, 1.5, 4, 2, 5, 1.5, 3, 2, 4, 
    1.5, 2, 3, 4, 1.5, 2, 5, 1.5, 3, 2, 4, 1.5, 2, 3, 1.5, 4, 2, 3, 1.5, 3, 2, 4
  ];

  return (
      <div 
        className="relative w-[900px] h-[580px] bg-[#fdfbf6] rounded-[20px] border-[3px] border-[#2a2b2e] shadow-[0_0_0_6px_#fff,0_0_0_9px_#2a2b2e,15px_20px_35px_rgba(0,0,0,0.6)] rotate-[-1deg]"
      >
        {/* Inner thin border */}
        <div className="absolute inset-[12px] border border-[#2a2b2e] rounded-xl pointer-events-none" />

        {/* Top Stars Row */}
        <div className="absolute top-6 left-0 w-full flex justify-center gap-14 px-20">
          {[...Array(6)].map((_, i) => (
            <svg key={i} width="56" height="56" viewBox="0 0 24 24" fill="#d97ba6">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

        <div className="absolute top-[65px] left-[40px] right-[40px] bottom-[40px] flex gap-8">
          
          {/* Left Column: Photo */}
          <div className="w-[280px] relative shrink-0">
            {/* Paperclip */}
            <div className="absolute -top-16 left-6 z-20">
              <svg width="45" height="110" viewBox="0 0 40 100" fill="none" stroke="#d0d0d0" strokeWidth="3" 
                   style={{ filter: 'drop-shadow(3px 4px 3px rgba(0,0,0,0.3))' }}>
                <path d="M20,95 C8,95 4,85 4,70 L4,25 C4,12 12,4 20,4 C28,4 36,12 36,25 L36,65 C36,73 30,79 24,79 C18,79 14,73 14,65 L14,30" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            {/* Polaroid */}
            <div className="bg-[#f0ece1] p-3 pb-8 shadow-[3px_5px_15px_rgba(0,0,0,0.15)] border border-[#d5d1c5] relative rotate-[2deg] mt-6">
              <div className="relative w-full aspect-[4/5] overflow-hidden border border-[#c0bcb0]">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover sepia-[0.2] contrast-[1.1]"
                />
              </div>
              
              {/* Little gold star sticker */}
              <div className="absolute top-1 right-1">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffd700" stroke="#b8860b" strokeWidth="1">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                 </svg>
              </div>

              {/* Stickers */}
              <div className="absolute -bottom-3 right-0 bg-[#8cb6d9] text-[#1c3652] text-[10px] font-black px-3 py-1 rotate-[-4deg] shadow-sm border border-[#7aa6c9] uppercase tracking-wider">
                MOBILE CREATOR
              </div>
              <div className="absolute -bottom-7 left-2 bg-[#d67b5e] text-[#4a1c0d] text-[9px] font-black px-3 py-1.5 rotate-[4deg] shadow-sm border border-[#c96c4e] uppercase tracking-wider">
                CREATING BEYOND THE VISIBLE
              </div>
              <div className="absolute -bottom-14 left-5 bg-[#e2d5ed] text-[#4a2e5d] text-[11px] font-black px-4 py-2 rotate-[-4deg] rounded-full shadow-sm border border-[#c7afd6] flex flex-col items-center">
                <span>AUTHORIZED</span>
                <span className="text-[6px] font-bold tracking-widest mt-[1px]">FROM FATHER IN HEAVEN'S</span>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex-1 flex flex-col relative pt-2">
            
            {/* Background Watermark Stamp */}
            <div className="absolute top-[60px] left-[230px] w-[260px] h-[260px] rounded-full border-[1px] border-[#c4ccdf] flex items-center justify-center opacity-70 pointer-events-none transform -rotate-[15deg] z-0">
              <div className="w-[240px] h-[240px] rounded-full border-[1.5px] border-[#c4ccdf] border-dashed flex flex-col items-center justify-center text-[#c4ccdf]">
                 {/* <span className={`${luckiestGuy.className} text-3xl tracking-widest text-center`}>PRODUZIDO</span> */}
                 {/* Logo */}
                 <div className="w-100 h-100 flex items-center justify-center my-2">
                    <img src="/images/logo.png" alt="Logo" className="w-50 h-50 opacity-30" />
                 </div>
                 {/* <span className={`${luckiestGuy.className} text-3xl tracking-widest text-center`}>LOCALMENTE</span> */}
              </div>
            </div>

            {/* Header */}
            <div className="flex justify-between items-start z-10 relative">
              <div className="flex flex-col -space-y-3">
                <h1 className={`${luckiestGuy.className} text-[76px] text-[#2a2b2e] tracking-wide leading-none`}>
                  CREATIVE
                </h1>
                <div className="relative">
                  <h1 className={`${luckiestGuy.className} text-[56px] text-[#2a2b2e] tracking-wide leading-none`}>
                    LICENSE
                  </h1>
                  {/* Fake cut lines for LICENSE */}
                  <div className="absolute inset-0 flex flex-col justify-evenly py-4 pointer-events-none">
                     <div className="w-[105%] -ml-1 h-[2px] bg-[#fdfbf6] transform -rotate-1"></div>
                     <div className="w-[105%] -ml-1 h-[2px] bg-[#fdfbf6] transform rotate-1"></div>
                  </div>
                </div>
              </div>
              <div className="text-right pt-4 pr-4 flex flex-col items-end">
                <div className={`${courier.className} text-[#5a5b5e] text-sm tracking-[0.2em] font-bold`}>
                  # OF LICENSE
                </div>
                <div className={`${courier.className} text-[#d97ba6] text-[40px] font-bold tracking-widest leading-none mt-1`}>
                  0026
                </div>
              </div>
            </div>

            {/* Form Fields Grid */}
            <div className="mt-8 flex flex-col flex-1 relative z-10">
              
              {/* Row 1 */}
              <div className="flex border-b-[1.5px] border-[#a09c90] pb-2">
                <div className="w-[45%] pr-6 border-r-[1.5px] border-[#a09c90]">
                  <p className={`${courier.className} text-[13px] leading-snug text-[#807d73] font-bold text-justify opacity-90`}>
                    this creative license empowers you to create Without limit and unlocks the full potential of your imagination. And remember, you were created to create.
                  </p>
                </div>
                <div className="flex-1 pl-4 flex flex-col justify-end pb-1">
                  <div className={`${courier.className} text-[11px] font-bold text-[#5a5b5e] mb-1`}>Signature:</div>
                  <div className="h-6 border-b-[1.5px] border-[#a09c90] mr-6"></div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex border-b-[1.5px] border-[#a09c90]">
                <div className="w-[45%] border-r-[1.5px] border-[#a09c90] h-[55px]"></div>
                <div className="flex-1 pl-4 flex flex-col justify-center h-[55px]">
                  <div className={`${courier.className} text-[11px] font-bold text-[#5a5b5e]`}>First name:</div>
                  <div className={`${courier.className} text-[24px] font-bold text-[#2a2b2e] uppercase`}>GIOVANA</div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex border-b-[1.5px] border-[#a09c90]">
                <div className="w-[45%] border-r-[1.5px] border-[#a09c90] h-[65px] relative">
                   <div className="absolute inset-0 flex flex-col items-center justify-center">
                     <span className={`${courier.className} text-[10px] font-bold tracking-[0.2em] text-[#807d73]`}>VALID</span>
                     <span className={`${courier.className} text-[10px] font-bold tracking-[0.2em] text-[#807d73]`}>UNTIL</span>
                     <span className={`${courier.className} text-[10px] font-bold text-[#2a2b2e] mt-1 tracking-widest`}>DOES NOT EXPIRE</span>
                   </div>
                </div>
                <div className="flex-1 pl-4 flex flex-col justify-center h-[65px] relative overflow-hidden">
                  <div className={`${courier.className} text-[11px] font-bold text-[#5a5b5e]`}>Nationality:</div>
                  <div className={`${courier.className} text-[24px] font-bold text-[#2a2b2e] uppercase`}>BRAZILIAN</div>
                </div>
              </div>

            </div>
            
            {/* VISION - Overlapping the bottom rows */}
            <div className="absolute -bottom-4 right-2 z-20">
              <h1 className={`${luckiestGuy.className} text-[18px] text-[#2a2b2e] tracking-tight leading-none`}>
                VISION
              </h1>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-[30px] right-[30px] h-[75px] border-t-[3px] border-[#2a2b2e] flex items-center">
          {/* Barcode */}
          <div className="flex items-end h-[50px] w-[240px] gap-[2px]">
            {barcodeWidths.map((width, i) => (
              <div 
                key={i} 
                className="bg-[#2a2b2e] h-full"
                style={{ width: `${width}px` }}
              ></div>
            ))}
          </div>
          
          {/* Expertise */}
          <div className="ml-8 border-l-[2px] border-[#a09c90] pl-6 flex-1 h-[50px] flex flex-col justify-center">
            <div className={`${courier.className} text-[13px] font-bold text-[#5a5b5e] mb-1`}>Expertise:</div>
            <div className={`${courier.className} text-[15px] font-bold text-[#2a2b2e] tracking-widest uppercase`}>
              STORYMAKER · CREATIVE DIRETOR · SOCIAL MEDIA
            </div>
          </div>
        </div>

      </div>
  );
}
