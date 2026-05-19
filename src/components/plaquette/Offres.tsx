import type { ReactNode } from "react";
import { Bot, Coffee, IceCream2, type LucideIcon } from "lucide-react";
import { GoldAccent, SectionHeader } from "./SectionHeader";

type Card = {
  Icon: LucideIcon;
  title: string;
  badge: string;
  desc: ReactNode;
};

const cards: readonly Card[] = [
  {
    Icon: Coffee,
    title: "R2-D2 Coffee",
    badge: "Café d'excellence",
    desc: (
      <>
        Espressos, lattés d&apos;art, cold brews et créations signatures —
        chaque boisson est préparée par notre robot-barista avec une précision
        millimétrée.{" "}
        <strong className="font-medium text-gold-pale">
          Un répertoire infini de recettes chaudes et glacées
        </strong>
        , pour satisfaire toutes les envies en toute saison.
      </>
    ),
  },
  {
    Icon: IceCream2,
    title: "R2-D2 Ice Cream",
    badge: "Glaces artisanales",
    desc: (
      <>
        Glaces artisanales, sundaes gourmets et créations glacées — chaque
        dessert est dressé en temps réel par notre bras robotisé.{" "}
        <strong className="font-medium text-gold-pale">
          Possibilités de recettes infinies
        </strong>
        , pour renouveler la carte au gré des saisons et de votre créativité.
      </>
    ),
  },
  {
    Icon: Bot,
    title: "Technologie R2-D2",
    badge: "Innovation brevetée",
    desc: (
      <>
        Notre système robotique breveté assure une constance absolue de la
        qualité et génère un effet « wow » qui transforme chaque client en
        ambassadeur. Machines{" "}
        <strong className="font-medium text-gold-pale">
          personnalisables aux couleurs de votre marque
        </strong>{" "}
        — habillage, interface, écrans.
      </>
    ),
  },
] as const;

export function Offres() {
  return (
    <section
      id="concepts"
      className="relative border-t border-white/[0.04] bg-ink px-4 py-16 pb-16 sm:px-6 md:px-10 md:py-24 md:pb-24"
    >
      <div className="relative z-[1] mx-auto max-w-6xl">
        <div className="grid items-end gap-8 md:grid-cols-12 md:gap-10">
          <SectionHeader
            className="md:col-span-7"
            step="02"
            kicker="Deux enseignes"
            title={
              <>
                Un univers, <GoldAccent>deux expériences</GoldAccent>
              </>
            }
          />
          <p className="text-[15px] font-light leading-relaxed text-cream/60 md:col-span-5 md:pb-2">
            Deux concepts premium, un même écosystème robotique. Déployez-les
            seuls ou ensemble selon votre emplacement — chaque enseigne reste
            autonome, leur addition fait la différence.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-3 md:gap-6">
          {cards.map((c) => (
            <article
              key={c.title}
              className="group flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] px-8 pb-10 pt-12 transition hover:border-gold/20 hover:bg-white/[0.04] hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.6)]"
            >
              <span
                aria-hidden="true"
                className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/25 bg-gold/[0.08] text-gold-pale"
              >
                <c.Icon className="size-6" strokeWidth={1.5} />
              </span>
              <h3 className="mb-3 font-cinzel text-lg font-medium tracking-wide text-gold-pale">
                {c.title}
              </h3>
              <p className="flex-1 text-[14px] font-light leading-relaxed text-cream/58">
                {c.desc}
              </p>
              <span className="mt-6 inline-flex w-fit rounded-full border border-gold/25 bg-gold/[0.06] px-4 py-2 font-cinzel text-[10px] uppercase tracking-[0.28em] text-gold/90">
                {c.badge}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
