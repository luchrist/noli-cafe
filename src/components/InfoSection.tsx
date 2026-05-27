"use client";

import { useEffect, useRef } from "react";
import cafe from "@/config/cafe";

export default function InfoSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const cols = section.querySelectorAll("[data-info-col]");
      cols.forEach((col, i) => {
        gsap.fromTo(
          col,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: col,
              start: "top 85%",
            },
            delay: i * 0.15,
          }
        );
      });
    };

    init();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-muted mb-3">
            Besuche uns
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal tracking-tight">
            Öffnungszeiten & Kontakt
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Opening hours */}
          <div
            data-info-col
            className="bg-cream rounded-2xl p-7 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-sand-light flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-charcoal">
                Öffnungszeiten
              </h3>
            </div>
            <div className="space-y-4">
              {cafe.openingHours.map((hours) => (
                <div
                  key={hours.label}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm text-muted">{hours.label}</span>
                  <span className="text-sm font-medium text-charcoal tabular-nums">
                    {hours.times}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Address & Social */}
          <div
            data-info-col
            className="bg-cream rounded-2xl p-7 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-sand-light flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-charcoal">So findest du uns</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted mb-1">
                  Standort
                </p>
                <a
                  href="https://maps.google.com/?cid=6608758776759404685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-charcoal hover:text-accent transition-colors block leading-relaxed"
                >
                  Ebertstraße 38
                  <br />
                  70806 Kornwestheim
                </a>
                <p className="text-xs text-muted mt-2 leading-relaxed">
                  Kleiner orangefarbener Kaffeewagen unter dem Magnolienbaum, wenige Gehminuten vom Bahnhof.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted mb-1">
                  Instagram
                </p>
                <a
                  href={`https://instagram.com/${cafe.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-charcoal hover:text-accent transition-colors"
                >
                  {cafe.instagram}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted mb-1">
                  Bestellen
                </p>
                <p className="text-sm text-charcoal leading-relaxed">
                  An der Klingel ziehen, der Wagen öffnet zu den Öffnungszeiten direkt vor dem Haus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
