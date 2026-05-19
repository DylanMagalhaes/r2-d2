const COVER_LOGO = "/plaquette/img-0.jpg";

const trustStrip = [
  { k: "100%", v: "Arabica fraîchement moulu" },
  { k: "KOZA", v: "Bras robotique" },
  { k: "24/7", v: "Service autonome" },
] as const;

export function Cover() {
  return (
    <section
      id="accueil"
      className="relative isolate flex min-h-dvh flex-col overflow-hidden px-5 pb-12 pt-24 sm:px-8 sm:pt-28 lg:pb-16 lg:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-[#10100e] via-ink to-ink" />
      <div className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-[min(520px,80vw)] w-[min(520px,80vw)] rounded-full bg-gold/[0.07] blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-[15%] -z-10 h-[min(420px,70vw)] w-[min(420px,70vw)] rounded-full bg-amber-900/[0.12] blur-[90px]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
        <div className="max-w-xl flex-1 text-center lg:max-w-none lg:flex-1 lg:text-left">
          <p className="hero-rise hero-rise-1 mb-5 inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.38em] text-gold/85">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold motion-safe:animate-[blink-dot_2.4s_ease-in-out_infinite]" />
            Maison R2-D2 · France
          </p>

          <h1 className="hero-rise hero-rise-2 font-cinzel text-[clamp(2rem,5vw,3.45rem)] font-light leading-[1.12] tracking-[0.02em] text-parchment">
            L&apos;excellence robotique au service du{" "}
            <span className="bg-linear-to-r from-gold-light via-gold to-amber-700 bg-clip-text font-normal text-transparent">
              goût
            </span>
          </h1>

          <p className="hero-rise hero-rise-2b mx-auto mt-5 max-w-lg text-[13px] font-light leading-relaxed text-cream/50 lg:mx-0">
            Pensé pour franchisés, lieux premium et événements haut de gamme qui cherchent une enseigne
            différenciante.
          </p>

          <p className="hero-rise hero-rise-3 mx-auto mt-6 max-w-lg text-[clamp(15px,1.35vw,17px)] font-light leading-relaxed text-cream/60 lg:mx-0">
            Café premium et glaces artisanales, unissent robotique de précision
            et savoir-faire culinaire — pour une expérience spectaculaire et une
            enseigne à fort potentiel.
          </p>

          <div className="hero-rise hero-rise-4 mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start">
            <a
              href="#vision"
              className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-gold via-gold to-[#9a7328] px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink shadow-lg shadow-gold/10 transition hover:brightness-110"
            >
              Découvrir
              <span
                aria-hidden="true"
                className="transition group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex rounded-full border border-white/[0.14] bg-white/[0.04] px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/90 backdrop-blur-sm transition hover:border-gold/35 hover:text-gold"
            >
              Nous contacter
            </a>
          </div>

          <ul
            aria-label="Repères de marque"
            className="hero-rise hero-rise-5 mx-auto mt-12 grid max-w-md grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.015] lg:mx-0"
          >
            {trustStrip.map(({ k, v }) => (
              <li key={v} className="bg-ink/40 px-3 py-3.5 text-left">
                <div className="bg-linear-to-r from-gold-light to-gold bg-clip-text font-cinzel text-[15px] font-medium tracking-wide text-transparent">
                  {k}
                </div>
                <div className="mt-0.5 text-[10.5px] font-light uppercase tracking-[0.16em] text-cream/55">
                  {v}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-rise hero-rise-image w-full max-w-[min(440px,100%)] flex-1 lg:max-w-[480px]">
          <div className="group relative">
            <div className="pointer-events-none absolute -inset-px rounded-[1.05rem] bg-linear-to-br from-gold/0 via-gold/0 to-amber-700/0 opacity-0 blur-[2px] transition duration-500 group-hover:from-gold/30 group-hover:to-amber-700/20 group-hover:opacity-100" />
            <img
              id="cover-logo"
              src={COVER_LOGO}
              alt="Robot barista R2-D2 préparant un café et une glace"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="relative w-full rounded-2xl border border-white/[0.08] object-cover shadow-[0_25px_80px_-20px_rgba(0,0,0,0.85)] transition duration-500 group-hover:-translate-y-1"
            />
            <div className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-ink/65 px-3 py-1.5 font-cinzel text-[10px] uppercase tracking-[0.24em] text-gold-pale backdrop-blur-md">
              Coffee × Ice Cream
            </div>
          </div>
        </div>
      </div>

      <a
        href="#vision"
        aria-label="Faire défiler vers la vision"
        className="relative z-10 mx-auto mt-12 hidden flex-col items-center gap-2 text-cream/45 transition hover:text-gold lg:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.32em]">
          Scroll
        </span>
        <span className="relative flex h-9 w-[18px] items-start justify-center overflow-hidden rounded-full border border-white/15">
          <span className="mt-1.5 h-1.5 w-px rounded-full bg-current motion-safe:animate-[scroll-cue_1.8s_ease-in-out_infinite]" />
        </span>
      </a>
    </section>
  );
}
