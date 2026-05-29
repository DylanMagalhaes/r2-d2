import { Bot, Coffee, IceCream2, type LucideIcon } from "lucide-react";
import { useLanguage } from "../../i18n/languageContext";
import { GoldAccent, SectionHeader } from "./SectionHeader";

const CARD_ICONS: readonly LucideIcon[] = [Coffee, IceCream2, Bot];

export function Offres() {
  const { t } = useLanguage();
  const o = t.offres;

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
            kicker={o.kicker}
            title={
              <>
                {o.titleBefore} <GoldAccent>{o.titleAccent}</GoldAccent>
              </>
            }
          />
          <p className="text-[15px] font-light leading-relaxed text-cream/60 md:col-span-5 md:pb-2">
            {o.intro}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-3 md:gap-6">
          {o.cards.map((card, i) => {
            const Icon = CARD_ICONS[i]!;
            return (
              <article
                key={card.title}
                className="group flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] px-8 pb-10 pt-12 transition hover:border-gold/20 hover:bg-white/[0.04] hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.6)]"
              >
                <span
                  aria-hidden="true"
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/25 bg-gold/[0.08] text-gold-pale"
                >
                  <Icon className="size-6" strokeWidth={1.5} />
                </span>
                <h3 className="mb-3 font-cinzel text-lg font-medium tracking-wide text-gold-pale">
                  {card.title}
                </h3>
                <p className="flex-1 text-[14px] font-light leading-relaxed text-cream/58">
                  {card.descBefore}{" "}
                  <strong className="font-medium text-gold-pale">
                    {card.descStrong}
                  </strong>
                  {card.descAfter}
                </p>
                <span className="mt-6 inline-flex w-fit rounded-full border border-gold/25 bg-gold/[0.06] px-4 py-2 font-cinzel text-[10px] uppercase tracking-[0.28em] text-gold/90">
                  {card.badge}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
