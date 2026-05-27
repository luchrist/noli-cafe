"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.pause();
    // Force load so at least the first frame renders on mobile
    video.load();
    video.currentTime = 0;

    let scrollTriggerInstance: typeof import("gsap/ScrollTrigger").ScrollTrigger | null = null;

    const init = async () => {
      const gsapModule = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      scrollTriggerInstance = ScrollTrigger;
      gsapModule.gsap.registerPlugin(ScrollTrigger);

      const setupScrub = () => {
        ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          onUpdate: (self) => {
            if (video.duration) {
              video.currentTime = self.progress * video.duration;
            }
          },
        });
      };

      if (video.readyState >= 2) {
        setupScrub();
      } else {
        video.addEventListener("loadeddata", setupScrub, { once: true });
      }
    };

    init();

    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.getAll().forEach((t) => t.kill());
      }
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div
        ref={stickyRef}
        className="sticky top-0 min-h-[100dvh] w-full overflow-hidden"
      >
        {/* Video — poster shows first frame while video loads */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="metadata"
          poster="/video/hero-poster.jpg"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/60" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-end min-h-[100dvh] px-6 pb-16 sm:pb-20 text-center">
          <p className="hidden sm:block text-warm-white/80 text-sm uppercase tracking-[0.3em] font-light mb-4">
            Fresh Coffee to Go · Kornwestheim
          </p>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-warm-white tracking-tight mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
            Kaffee bei den
            <br className="hidden sm:block" />
            <span className="hidden sm:inline italic font-light">Nachbarn.</span>
          </h1>
          <p className="text-warm-white/80 text-sm sm:text-base max-w-md mb-12 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
            Der kleine orange Kaffeewagen unter dem Magnolienbaum in der Ebertstraße. Klingeln, bestellen, Tag verschönern.
          </p>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-2 animate-pulse">
            <span className="text-warm-white/40 text-[10px] uppercase tracking-[0.3em]">
              Scroll
            </span>
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              className="text-warm-white/40"
            >
              <rect
                x="1"
                y="1"
                width="14"
                height="22"
                rx="7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="8" cy="8" r="2" fill="currentColor">
                <animate
                  attributeName="cy"
                  from="8"
                  to="16"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="1"
                  to="0.3"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
