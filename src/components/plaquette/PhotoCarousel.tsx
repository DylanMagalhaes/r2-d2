import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GoldAccent, SectionHeader } from "./SectionHeader";

type Slide = {
  src: string;
  alt: string;
  title: string;
  caption: string;
};

/** Visuels hébergés localement sous `public/plaquette/` (pas d’images placeholder externes). */
const SLIDES: readonly Slide[] = [
  {
    src: "/plaquette/img-0.jpg",
    alt: "Présentation du robot barista et de l’univers café & glaces R2-D2.",
    title: "Showroom café & robots",
    caption:
      "Mise en scène de l’espace convivial avec le bras robotique et l’habillage noir & or.",
  },
  {
    src: "/plaquette/img-1.jpg",
    alt: "Détail d’une boisson chaude et possibilités de personnalisation sur mousse.",
    title: "Signature visuelle Art Latte",
    caption:
      "Personnalisation en live sur cappuccinos et spécialités lactées compatibles avec la ligne R2-D2 Coffee.",
  },
];

const AUTO_INTERVAL_MS = 7000;

export function PhotoCarousel() {
  const labelId = useId();
  const slides = SLIDES;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const touchStartX = useRef<number | null>(null);
  const n = slides.length;

  const go = useCallback(
    (delta: number) => {
      if (n === 0) return;
      setIndex((i) => (i + delta + n) % n);
    },
    [n],
  );

  useEffect(() => {
    if (reduceMotion || paused || n < 2) return;
    const t = window.setInterval(() => go(1), AUTO_INTERVAL_MS);
    return () => window.clearInterval(t);
  }, [go, n, paused, reduceMotion, index]);

  const onKeyDown = (e: KeyboardEvent) => {
    if (n < 2) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    }
  };

  if (n === 0) return null;

  const active = slides[index]!;

  return (
    <section
      id="galerie"
      aria-labelledby={labelId}
      className="relative border-t border-white/[0.04] bg-[#0c0b09] px-4 py-16 pb-16 sm:px-6 md:px-10 md:py-24 md:pb-24"
    >
      <div className="relative z-[1] mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-8">
          <SectionHeader
            className="md:col-span-7"
            titleId={labelId}
            kicker="Galerie"
            title={
              <>
                L&apos;univers <GoldAccent>en images</GoldAccent>
              </>
            }
          />
        </div>

        <div
          role="region"
          aria-roledescription={n >= 2 ? "carrousel" : undefined}
          aria-label="Galerie photos R2-D2 Coffee & Ice Cream"
          className="mt-14 md:mt-16"
          tabIndex={n >= 2 ? 0 : undefined}
          onKeyDown={onKeyDown}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => n >= 2 && setPaused(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
          }}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current == null || n < 2) return;
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            touchStartX.current = null;
            if (dx > 56) go(-1);
            else if (dx < -56) go(1);
          }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-ink shadow-[0_28px_80px_-40px_rgba(0,0,0,0.9)]">
            <figure className="relative aspect-[21/10] sm:aspect-[21/9] md:aspect-[2.2/1]">
              <img
                key={`${active.src}-${index}`}
                src={active.src}
                alt={active.alt}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                sizes="(min-width: 1152px) 72rem, 100vw"
                className="size-full object-cover"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-ink via-ink/88 to-transparent px-5 pb-5 pt-24 sm:px-8 sm:pb-6 sm:pt-28">
                <p className="font-cinzel text-[11px] uppercase tracking-[0.28em] text-gold/85">
                  {active.title}
                </p>
                <p className="mt-1 max-w-xl text-[14px] font-light leading-relaxed text-cream/75">
                  {active.caption}
                </p>
              </figcaption>
            </figure>

            {n >= 2 && (
              <>
                <button
                  type="button"
                  className="absolute left-3 top-1/2 z-[2] -translate-y-1/2 rounded-full border border-white/15 bg-ink/70 p-2.5 text-cream/90 backdrop-blur-md transition hover:border-gold/40 hover:text-gold sm:left-5"
                  onClick={() => go(-1)}
                  aria-label="Photo précédente"
                >
                  <ChevronLeft
                    className="size-5"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </button>
                <button
                  type="button"
                  className="absolute right-3 top-1/2 z-[2] -translate-y-1/2 rounded-full border border-white/15 bg-ink/70 p-2.5 text-cream/90 backdrop-blur-md transition hover:border-gold/40 hover:text-gold sm:right-5"
                  onClick={() => go(1)}
                  aria-label="Photo suivante"
                >
                  <ChevronRight
                    className="size-5"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </button>
              </>
            )}
          </div>

          {n >= 2 && (
            <div
              className="mt-5 flex flex-wrap items-center justify-center gap-2"
              role="tablist"
              aria-label="Choisir une photo"
            >
              {slides.map((slide, i) => (
                <button
                  key={`${slide.src}-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Afficher : ${slide.title}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-gold"
                      : "w-2 bg-white/20 hover:bg-white/35"
                  }`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          )}

          <p className="sr-only" aria-live="polite">
            {active.title}. {active.caption}
          </p>
        </div>
      </div>
    </section>
  );
}
