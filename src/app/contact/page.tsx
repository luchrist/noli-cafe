import cafe from "@/config/cafe";

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-cream">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <p className="text-xs uppercase tracking-[0.25em] text-muted mb-3">
            {cafe.name}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal tracking-tight">
            Kontakt & Anfahrt
          </h1>
          <p className="mt-6 text-base text-muted max-w-2xl leading-relaxed">
            Reservierungen sind nicht nötig: einfach vorbeikommen, an der Klingel
            ziehen und der Wagen öffnet. Für Fragen, Catering-Anfragen oder ein
            kurzes Hallo erreicht ihr uns am besten direkt vor Ort oder über
            Social Media.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-muted mb-4">
                Standort
              </h2>
              <a
                href="https://maps.google.com/?cid=6608758776759404685"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-base text-charcoal hover:text-accent transition-colors mb-8"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent shrink-0 mt-1"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="leading-relaxed">
                  Ebertstraße 38
                  <br />
                  70806 Kornwestheim
                  <br />
                  <span className="text-xs text-muted">Wenige Gehminuten vom Bahnhof</span>
                </span>
              </a>

              <h2 className="text-xs uppercase tracking-[0.2em] text-muted mb-4">
                Social
              </h2>
              <div className="space-y-4">
                <a
                  href={`https://instagram.com/${cafe.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base text-charcoal hover:text-accent transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-accent shrink-0"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                  {cafe.instagram}
                </a>
                <a
                  href="https://www.facebook.com/p/NOLI-cafe-bar-100063675095458"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base text-charcoal hover:text-accent transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-accent shrink-0"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                  Noli Café auf Facebook
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-muted mb-4">
                Öffnungszeiten
              </h2>
              <div className="space-y-3 max-w-sm">
                {cafe.openingHours.map((hours) => (
                  <div
                    key={hours.label}
                    className="flex items-center justify-between gap-6"
                  >
                    <span className="text-sm text-muted">{hours.label}</span>
                    <span className="text-sm font-medium text-charcoal tabular-nums">
                      {hours.times}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm text-muted leading-relaxed max-w-sm">
                Bei Regen oder kurzfristigen Änderungen schauen wir vorher auf
                Instagram vorbei. Dort gibt es die zuverlässigsten Updates.
              </p>
            </div>
          </div>

          <div className="mt-16 lg:mt-20 rounded-2xl overflow-hidden border border-sand-light">
            <iframe
              title="Karte Noli Café Kornwestheim"
              src="https://www.google.com/maps?q=Ebertstra%C3%9Fe+38,+70806+Kornwestheim&output=embed"
              width="100%"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
