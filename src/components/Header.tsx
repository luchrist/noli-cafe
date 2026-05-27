"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [pastHeroStart, setPastHeroStart] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = !isHome || pastHeroStart;

  useEffect(() => {
    if (!isHome) {
      return;
    }
    const onScroll = () => setPastHeroStart(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled || mobileOpen
          ? "bg-warm-white shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="relative z-[70] mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex h-18 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => {
              setMobileOpen(false);
            }}
            className="relative z-10 shrink-0"
            aria-label="Noli Café Startseite"
          >
            <span
              aria-hidden="true"
              className={`block w-32 h-12 sm:w-36 sm:h-14 lg:w-40 lg:h-16 transition-colors duration-500 bg-accent ${
                !scrolled ? "lg:bg-warm-white" : ""
              }`}
              style={{
                WebkitMaskImage: "url(/assets/logo-mark.png)",
                maskImage: "url(/assets/logo-mark.png)",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskSize: "contain",
                maskSize: "contain",
              }}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/menu"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-charcoal hover:bg-sand-light"
                  : "text-warm-white hover:bg-white/10"
              }`}
            >
              Speisekarte
            </Link>
            <Link
              href="/contact"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-charcoal hover:bg-sand-light"
                  : "text-warm-white hover:bg-white/10"
              }`}
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-10 lg:hidden p-2 rounded-full text-charcoal transition-colors"
            aria-label={mobileOpen ? "Menu schliessen" : "Menu oeffnen"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${
                  mobileOpen ? "rotate-45 translate-y-[5px]" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] bg-current transition-all duration-300 ${
                  mobileOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu — full screen overlay */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-x-0 top-18 bottom-0 z-[60] bg-warm-white transition-transform duration-500 ease-out ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 py-6 sm:px-8">
          <div className="flex flex-col gap-1">
            <Link
              href="/menu"
              onClick={() => setMobileOpen(false)}
              className="py-2.5 font-display text-2xl font-light text-charcoal"
            >
              Speisekarte
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="py-2.5 font-display text-2xl font-light text-charcoal"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
