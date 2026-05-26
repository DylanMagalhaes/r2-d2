import type { ReactNode } from "react";
import {
  Check,
  Coffee,
  Cookie,
  Milk,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { GoldAccent, SectionHeader } from "./SectionHeader";

const LATTE_IMG = "/art-latte-preview.svg";

type Drink = { Icon: LucideIcon; name: string };

const drinks: readonly Drink[] = [
  { Icon: Coffee, name: "Cappuccino" },
  { Icon: Milk, name: "Latté" },
  { Icon: Cookie, name: "Chocolat chaud" },
  { Icon: Sparkles, name: "Café gourmand" },
] as const;

const creations = [
  "Logos d'entreprise",
  "Selfies instantanés",
  "Messages personnalisés",
  "Visuels événementiels",
  "Branding marketing",
  "Habillage sur-mesure de la machine",
] as const;

const usecases = [
  "Événements corporate",
  "Mariages",
  "Marketing & branding",
  "Centres commerciaux",
  "Salons professionnels",
  "Restaurants & cafés",
] as const;

const highlightTags = [
  "Technologie innovante",
  "Effet wow garanti",
  "Animation virale",
  "Image de marque",
  "Expérience premium",
  "Buzz réseaux sociaux",
] as const;

const channels = [
  "Instagram",
  "TikTok",
  "Snapchat",
  "X",
  "Bouche-à-oreille",
] as const;

const roiCards = [
  { k: "0 €", label: "Coût d'acquisition", hint: "par contenu généré" },
  { k: "×3", label: "Engagement", hint: "vs. café classique" },
  { k: "+45%", label: "Ticket moyen", hint: "porté par l'effet wow" },
] as const;

/** Titre de sous-bloc inchangé sur toute la section */
function FieldLabel({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-cinzel text-[10px] uppercase tracking-[0.32em] text-gold/80">
      {children}
    </h3>
  );
}

/** Carte neutre réutilisable (contenu métier à l'intérieur) */
function Surface({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/[0.08] bg-white/[0.025] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}

function ArtLatteRoi() {
  return (
    <Surface className="mx-auto mt-14 px-6 py-10 md:mt-16 md:px-10 md:py-12">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="mb-2 font-cinzel text-[11px] uppercase tracking-[0.35em] text-gold/80">
            ROI marketing
          </p>
          <h3 className="font-cinzel text-[clamp(1.35rem,2.8vw,1.85rem)] font-light leading-snug text-parchment">
            Une publicité qui <GoldAccent>rapporte</GoldAccent>, au lieu de
            coûter.
          </h3>
        </div>
        <p className="text-[15px] font-light leading-[1.8] text-cream/62 lg:col-span-5 lg:border-l lg:border-white/[0.08] lg:pl-8">
          Chaque tasse personnalisée devient un contenu{" "}
          <strong className="font-medium text-gold-pale">
            spontanément partagé
          </strong>{" "}
          par vos clients. Le buzz transforme l&apos;Art Latte en visibilité
          virale, gratuite et continue.
        </p>
      </div>

      <div className="mt-9 flex flex-wrap gap-2 border-t border-white/[0.06] pt-9">
        {channels.map((ch) => (
          <span
            key={ch}
            className="rounded-full border border-gold/25 bg-gold/[0.06] px-3.5 py-1.5 font-cinzel text-[10px] uppercase tracking-[0.2em] text-gold-pale"
          >
            {ch}
          </span>
        ))}
      </div>

      <ul className="mt-9 grid gap-3 sm:grid-cols-3 sm:gap-4">
        {roiCards.map(({ k, label, hint }) => (
          <li
            key={label}
            className="rounded-xl border border-white/[0.07] bg-ink/30 px-5 py-4"
          >
            <div className="bg-linear-to-r from-gold-light to-gold bg-clip-text font-cinzel text-xl font-medium tracking-wide text-transparent sm:text-2xl">
              {k}
            </div>
            <div className="mt-2 font-cinzel text-[10px] uppercase tracking-[0.2em] text-gold/75">
              {label}
            </div>
            <div className="mt-1 text-[12px] font-light leading-snug text-cream/50">
              {hint}
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-6 rounded-lg border border-white/[0.05] bg-ink/30 px-3.5 py-3 font-raleway text-[11px] font-light leading-relaxed text-cream/42">
        Métriques marketing présentées à titre indicatif, issues
        d&apos;observations qualitatives et de comparaisons internes&nbsp;;
        elles peuvent varier selon votre zone, vos tarifs et votre activité,
        sans valeur contractuelle.
      </p>
    </Surface>
  );
}

export function ArtLatteSection() {
  return (
    <section
      id="art-latte"
      className="relative border-t border-white/[0.04] bg-[#0c0b09] px-4 py-16 pb-16 sm:px-6 md:px-10 md:py-24 md:pb-24"
    >
      <div className="relative z-[1] mx-auto max-w-6xl">
        {/* En-tête de section */}
        <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-8">
          <SectionHeader
            className="md:col-span-7"
            step="03"
            kicker="Art latte"
            title={
              <>
                Impression sur mousse, <GoldAccent>personnalisée</GoldAccent>
              </>
            }
          />
          <p className="border-l-0 text-[15px] font-light leading-relaxed text-cream/58 md:col-span-5 md:border-l md:border-white/[0.06] md:pb-1 md:pl-8">
            Innovation brevetée : logo, photo ou message sur vos boissons
            chaudes — en moins de 90 secondes.
          </p>
        </div>

        {/* Corps : une seule surface, grille lisible */}
        <Surface className="mt-12 p-6 sm:p-8 md:mt-14 md:p-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
            {/* Colonne mise en scène + visuel */}
            <div className="flex flex-col lg:col-span-5">
              <div className="mb-6 inline-flex w-fit items-center gap-2.5 rounded-full border border-gold/30 bg-gold/[0.06] px-3.5 py-1.5">
                <span className="size-1.5 rounded-full bg-gold motion-safe:animate-[blink-dot_1.5s_ease-in-out_infinite]" />
                <span className="font-cinzel text-[10px] uppercase tracking-[0.26em] text-gold">
                  50 à 90 secondes
                </span>
              </div>
              <p className="text-[15px] font-light leading-[1.85] text-cream/66">
                Grâce à la technologie{" "}
                <strong className="font-medium text-gold-pale">
                  Art Latte
                </strong>{" "}
                de la machine R2-D2 Coffee, vous imprimez en temps réel
                n&apos;importe quelle photo, selfie, logo ou visuel directement
                sur vos boissons chaudes.
              </p>

              <figure className="group relative mt-8">
                <div className="pointer-events-none absolute -inset-px rounded-full bg-linear-to-br from-gold/25 via-transparent to-amber-800/15 opacity-0 blur-[2px] transition duration-500 group-hover:opacity-100" />
                <img
                  src={LATTE_IMG}
                  alt="Portrait personnalisé imprimé sur la mousse d'un cappuccino"
                  loading="lazy"
                  decoding="async"
                  className="relative w-full rounded-full border border-white/[0.09] object-cover shadow-[0_24px_64px_-20px_rgba(0,0,0,0.88)] transition duration-500 group-hover:-translate-y-0.5"
                />
                <figcaption className="mt-4">
                  <p className="font-cinzel text-[11px] uppercase tracking-[0.28em] text-gold">
                    Résultat réel — impression sur mousse
                  </p>
                  <p className="mt-1 text-[12.5px] font-light text-cream/48">
                    Portrait imprimé en temps réel par la machine R2-D2.
                  </p>
                </figcaption>
              </figure>
            </div>

            {/* Colonne fiche produit */}
            <div className="flex flex-col divide-y divide-white/[0.06] lg:col-span-7">
              {/* Boissons */}
              <div className="pb-10 lg:pb-11">
                <FieldLabel>Boissons compatibles</FieldLabel>
                <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
                  {drinks.map(({ Icon, name }) => (
                    <div
                      key={name}
                      className="group flex min-h-[5.75rem] min-w-0 flex-col items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-ink/20 px-2.5 py-3 text-center transition hover:border-gold/30 hover:bg-white/[0.04] sm:px-3 sm:py-3.5"
                    >
                      <span
                        aria-hidden="true"
                        className="flex size-9 items-center justify-center rounded-lg border border-gold/20 bg-gold/[0.06] text-gold-pale transition group-hover:border-gold/40 group-hover:text-gold-light"
                      >
                        <Icon className="size-[1.05rem]" strokeWidth={1.6} />
                      </span>
                      <span className="max-w-[10rem] px-1 font-cinzel text-[9.5px] uppercase leading-snug tracking-[0.08em] text-gold-pale break-words sm:text-[10.5px] sm:tracking-[0.11em]">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Atouts */}
              <div className="py-10 lg:py-11">
                <FieldLabel>Atouts clés</FieldLabel>
                <ul
                  className="mt-5 grid gap-2 sm:grid-cols-2"
                  aria-label="Atouts Art Latte"
                >
                  {highlightTags.map((label) => (
                    <li key={label}>
                      <span className="flex h-full min-h-[2.85rem] items-center gap-2.5 rounded-lg border border-gold/30 bg-gold/[0.04] px-3 py-2.5 sm:px-3.5">
                        <Check
                          className="size-3.5 shrink-0 text-gold"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                        <span className="font-cinzel text-[10px] font-medium uppercase leading-snug tracking-[0.16em] text-gold-pale sm:text-[10.5px] sm:tracking-[0.2em]">
                          {label}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Créations */}
              <div className="py-10 lg:py-11">
                <FieldLabel>Possibilités de création</FieldLabel>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {creations.map((label) => (
                    <li
                      key={label}
                      className="flex items-start gap-3 rounded-lg border border-white/[0.08] bg-ink/20 px-4 py-3"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-gold/60"
                      />
                      <span className="text-[13px] font-light leading-snug text-cream/72">
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Usage */}
              <div className="pt-10 lg:pt-11">
                <FieldLabel>Idéal pour</FieldLabel>
                <div className="mt-5 flex flex-wrap gap-2">
                  {usecases.map((label) => (
                    <span
                      key={label}
                      className="rounded-lg border border-white/[0.1] bg-ink/30 px-3 py-2 font-cinzel text-[9.5px] uppercase tracking-[0.18em] text-cream/65 transition hover:border-gold/25 hover:text-gold-light sm:text-[10px]"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Surface>

        <ArtLatteRoi />
      </div>
    </section>
  );
}
