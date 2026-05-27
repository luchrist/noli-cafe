"use client";

import { useEffect, useRef } from "react";
import cafe from "@/config/cafe";

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const elements = section.querySelectorAll("[data-reveal]");
      elements.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            delay: i * 0.15,
          }
        );
      });
    };

    init();
  }, []);

  const { philosophy } = cafe;

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 lg:py-40 bg-cream"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-12 text-center">
        <div className="flex items-center justify-center gap-4 mb-10" data-reveal>
          <span className="block w-12 h-px bg-stone" />
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-accent"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"
              fill="currentColor"
              opacity="0.2"
            />
            <path
              d="M17.25 9.25C17.25 6 14.75 4 12 4S6.75 6 6.75 9.25C6.75 12 8.5 13.5 8.5 13.5V15a1 1 0 001 1h5a1 1 0 001-1v-1.5s1.75-1.5 1.75-4.25z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <path d="M9.5 18h5M10 20.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="block w-12 h-px bg-stone" />
        </div>

        <h2
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal tracking-tight mb-8"
          data-reveal
        >
          {philosophy.headline}
        </h2>

        <p
          className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl mx-auto mb-12"
          data-reveal
        >
          {philosophy.text}
        </p>

        <p
          className="font-display text-xl sm:text-2xl lg:text-3xl font-light text-accent italic"
          data-reveal
        >
          &ldquo;{philosophy.slogan}&rdquo;
        </p>
      </div>
    </section>
  );
}
