"use client";

import React, { useState, useEffect } from "react";
import { Luckiest_Guy, Courier_Prime, Inter } from "next/font/google";
import CardUI from "./CardUI";

const inter = Inter({ subsets: ["latin"] });

export default function CardModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show modal after 10 seconds
    const timer = setTimeout(() => {
      setShow(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className={`fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 ${inter.className}`}>
      {/* Close button */}
      <button 
        onClick={() => setShow(false)}
        className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-gray-300 z-50 transition-colors cursor-pointer"
      >
        &times;
      </button>

      {/* Scale down slightly on smaller screens */}
      <div className="transform scale-[0.6] sm:scale-[0.8] lg:scale-100 flex items-center justify-center">
        <CardUI />
      </div>
    </div>
  );
}
