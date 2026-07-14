"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function ReviewCarousel() {
  const slides = [
    "/images/group1.png",
    "/images/grop2.png",
    "/images/group3.png",
    "/images/group4.png",
    "/images/group1.png",
  ];

  const autoplay = Autoplay({
    delay: 2500,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [autoplay]
  );

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
  <section className="relative w-full overflow-hidden py-0">
  <div className="overflow-hidden" ref={emblaRef}>
    <div className="flex items-center">
      {slides.map((image, index) => (
        <div
          key={index}
          className="flex-[0_0_auto] px-0"
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="h-screen w-auto object-contain"
            draggable={false}
          />
        </div>
      ))}
    </div>
  </div>

  {/* <button
    onClick={prev}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 text-white"
  >
    ❮
  </button>

  <button
    onClick={next}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 text-white"
  >
    ❯
  </button> */}
</section>
  );
}