import Link from "next/link";
import cafe from "@/config/cafe";

export default function Footer() {
  const loc = cafe;

  return (
    <footer className="bg-charcoal text-stone-light">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Top section */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <span
              aria-label="Noli Café Logo"
              role="img"
              className="block w-32 h-12 mb-5 bg-warm-white"
              style={{
                WebkitMaskImage: "url(/assets/logo-mark.png)",
                maskImage: "url(/assets/logo-mark.png)",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "left center",
                maskPosition: "left center",
                WebkitMaskSize: "contain",
                maskSize: "contain",
              }}
            />
            <p className="text-sm text-stone leading-relaxed max-w-xs">
              {loc.philosophy.slogan}
            </p>
            <p className="text-sm text-stone leading-relaxed max-w-xs mt-3">
              Ebertstraße 38, 70806 Kornwestheim
            </p>
            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href={`https://instagram.com/${loc.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone hover:text-warm-white transition-colors"
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-stone mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-stone-light hover:text-warm-white transition-colors"
                >
                  Startseite
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-sm text-stone-light hover:text-warm-white transition-colors"
                >
                  Speisekarte
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-stone-light hover:text-warm-white transition-colors"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-stone-light hover:text-warm-white transition-colors"
                >
                  Öffnungszeiten
                </Link>
              </li>
            </ul>
          </div>

          {/* Folgen */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-stone mb-5">
              Folgen
            </h4>
            <ul className="space-y-3 text-sm text-stone-light">
              <li>
                <a
                  href={`https://instagram.com/${loc.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-warm-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/p/NOLI-cafe-bar-100063675095458"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-warm-white transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?cid=6608758776759404685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-warm-white transition-colors"
                >
                  Google Maps
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-stone mb-5">
              Rechtliches
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/impressum"
                  className="text-sm text-stone-light hover:text-warm-white transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-sm text-stone-light hover:text-warm-white transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone">
          <p>&copy; {new Date().getFullYear()} {loc.name}. Alle Rechte vorbehalten.</p>
          <p>
            Website erstellt von{" "}
            <a
              href="mailto:luca@creatare.de"
              className="text-stone-light hover:text-warm-white transition-colors underline underline-offset-2"
            >
              Luca Christ
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
