"use client";
import React, { useState, useEffect } from 'react';

const reviewsData = [
  {
    id: 1,
    reviewerName: "Arun Kumar",
    reviewText: "Websiity delivered a premium website that perfectly represents our brand. The design is modern, fast, and easy to manage.",
    image: "",
    video: "https://www.pexels.com/download/video/38207314/"
  },
  {
    id: 2,
    reviewerName: "Priya Sharma",
    reviewText: "The team was professional throughout the project. They understood our requirements and delivered everything on time.",
    image: "",
    video: "https://www.pexels.com/download/video/38163590/"
  },
  {
    id: 3,
    reviewerName: "Rahul Verma",
    reviewText: "Our online presence has improved significantly after launching our new website. Highly recommended!",
    image: "https://images.unsplash.com/photo-1608311398753-6df2bde3177c?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    video: ""
  },
  {
    id: 3,
    reviewerName: "Rahul Verma",
    reviewText: "Our online presence has improved significantly after launching our new website. Highly recommended!",
    image: "/images/review.png",
    video: ""
  }
];

export default function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleManualSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  const currentReview = reviewsData[currentIndex];

  return (
<section className="w-full h-[100dvh] md:h-screen flex flex-col md:flex-row bg-black relative overflow-hidden font-sans">      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade {
          animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      
      {/* Media Background for Mobile & Right Column for Desktop */}
     {/* Media Background */}
<div className="absolute md:static inset-0 w-full md:w-1/2 h-[100dvh] md:h-screen overflow-hidden z-0 order-2 bg-black">
  {currentReview.video ? (
    <video
      key={currentReview.id + "video"}
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src={currentReview.video} type="video/mp4" />
    </video>
  ) : currentReview.image ? (
    <img
      key={currentReview.id + "img"}
      src={currentReview.image}
      alt={currentReview.reviewerName}
      className="absolute inset-0 w-full h-full object-cover"
    />
  ) : (
    <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 text-white/20 text-2xl tracking-widest uppercase">
      No Media
    </div>
  )}
</div>

      {/* Left Column / Mobile Overlay Content */}
      <div 
        className="w-full md:w-1/2 h-[100dvh] md:h-auto min-h-screen flex flex-col justify-end md:justify-center p-6 sm:p-10 md:p-12 z-10 relative order-1
                   bg-gradient-to-t from-black/95 via-black/70 to-transparent md:bg-[#1a0bdf] md:bg-[url('/images/bg_text2.png')] md:bg-cover md:bg-center md:bg-blend-color-dodge transition-colors duration-1000"
      >
        <div key={currentReview.id} className="text-white w-full max-w-xl animate-fade">
          <p  style={{ fontFamily: "'Boldonse', sans-serif" }} className="text-4xl md:text-2xl lg:text-4xl font-black uppercase mb-6 drop-shadow-lg">
            Clients Review &
          <span style={{ fontFamily: "'Boldonse', sans-serif" }} className=" pt-1.5 text-4xl md:text-2xl lg:text-4xl font-black uppercase mb-6 drop-shadow-lg">About The Work</span>
          </p>
          <p   style={{fontFamily: "var(--font-bubbler_one)",fontWeight: 400}} className=" text-xl md:text-2xl mb-8 opacity-90 leading-none border-l-4 border-white/60 pl-6 drop-shadow-md">
            {currentReview.reviewText}
          </p>
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-12 bg-white/80"></div>
            <span style={{fontFamily: "var(--font-bubbler_one)",fontWeight: 400}} className="text-xl md:text-2xl font-medium tracking-widest text-white drop-shadow">
              {currentReview.reviewerName}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-12 md:mt-16 flex flex-col gap-8 z-20">
          <div className="flex gap-4">
            <button 
              onClick={prevSlide} 
              className="w-14 h-14 flex items-center justify-center border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md group"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:-translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button 
              onClick={nextSlide} 
              className="w-14 h-14 flex items-center justify-center border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md group"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          <div className="flex gap-3 items-center pb-8 md:pb-0">
            {reviewsData.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => handleManualSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                  idx === currentIndex ? 'w-10 bg-white' : 'w-3 bg-white/30 hover:bg-white/70'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
