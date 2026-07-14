"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [active, setActive] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollTimeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      // Desktop only
      if (window.innerWidth >= 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          setShowNavbar(false);
        }

        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
          setShowNavbar(true);
        }, 200);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const menuItems = [
    "Home",
    "Services",
    "Project Gallery",
    "Digital Platform",
  ];

  return (
    <>
      {/* Loader */}
      <motion.div
        initial={{ top: 0 }}
        animate={{ top: "120vh" }}
        transition={{
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1],
          delay: 0.1,
        }}
        className="fixed left-0 right-0 h-[120vh] bg-[#050024] z-[9999] pointer-events-none"
      />

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -40 }}
        animate={{
          opacity: showNavbar || window.innerWidth < 768 ? 1 : 0,
          y: showNavbar || window.innerWidth < 768 ? 0 : -120,
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-6 md:px-12 transition-all duration-500 ${
          scrolled
            ? "pt-2 pb-2 backdrop-blur-md bg-black/10"
            : "pt-2 pb-2 md:py-8 bg-transparent"
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
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          animate={{
            scale: scrolled ? 0.92 : 1,
          }}
          transition={{ duration: 0.4 }}
          className="hidden md:flex items-center gap-6 lg:gap-12 mt-4"
        >
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className="relative flex items-center justify-center text-white uppercase"
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

              <span className="relative z-10 whitespace-nowrap text-white font-[100] uppercase tracking-[0.2em] text-xs">
                {item}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Reach Out */}
          <motion.div
            animate={{
              scale: scrolled ? 0.9 : 1,
            }}
            transition={{ duration: 0.4 }}
            className="group cursor-pointer"
          >
            <div className="flex flex-col items-end text-[#1a00ff] font-black uppercase leading-none">
              <span className="text-base md:text-lg tracking-tight -mb-2.5">
                Reach
              </span>

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

                <span className="text-base md:text-lg tracking-tight">
                  Out
                </span>
              </div>
            </div>
          </motion.div>

          {/* Mobile Menu Icon */}
          <div
            className="flex md:hidden cursor-pointer text-[#ff0033]"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              duration: 0.5,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-[#ff0033]"
            >
              ✕
            </button>

            <div className="flex flex-col items-center gap-10">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActive(item);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-2xl md:text-4xl uppercase tracking-[0.2em] ${
                    active === item
                      ? "text-[#ff0033]"
                      : "text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}