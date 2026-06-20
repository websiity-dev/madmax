"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "Home",
    "Services",
    "Project Gallery",
    "Digital Platform",
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-12 transition-all duration-500 ${
        scrolled
          ? "py-4 backdrop-blur-md bg-black/10"
          : "py-8 bg-transparent"
      }`}
    >
      {/* Logo */}
      <motion.div
        animate={{
          scale: scrolled ? 0.85 : 1,
        }}
        transition={{ duration: 0.4 }}
        className="w-40"
      >
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-20 h-20 object-contain"
        />
      </motion.div>

      {/* Navigation */}
      <motion.div
        animate={{
          scale: scrolled ? 0.92 : 1,
        }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-12 mt-4"
      >
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className="relative flex items-center justify-center text-white font-thin uppercase tracking-[0.15em] text-sm"
          >
            {active === item && (
              <motion.svg
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 15,
                }}
                viewBox="0 0 100 100"
                className="absolute w-[130px] h-[90px] -z-10"
              >
                <path
                  fill="#ff0033"
                  d="M50 0L58 25L80 5L75 30L100 20L82 42L100 50L82 58L100 80L75 70L80 95L58 75L50 100L42 75L20 95L25 70L0 80L18 58L0 50L18 42L0 20L25 30L20 5L42 25Z"
                />
              </motion.svg>
            )}

         <span className="relative z-10 whitespace-nowrap text-white font-[100] cursor-pointer uppercase tracking-[0.2em] text-xs">
  {item}
</span>
          </button>
        ))}
      </motion.div>

      {/* Reach Out */}
      <motion.div
        animate={{
          scale: scrolled ? 0.9 : 1,
        }}
        transition={{ duration: 0.4 }}
        className="group cursor-pointer"
      >
        <div className="flex flex-col items-end text-[#1a00ff] font-black uppercase leading-none">
          <span className="text-lg tracking-tight">Reach</span>

          <div className="flex items-center gap-1">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7H17V17" />
            </svg>

            <span className="text-lg tracking-tight">Out</span>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}