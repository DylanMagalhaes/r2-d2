import { useLanguage } from "../../i18n/languageContext";
import { GoldAccent, SectionHeader } from "./SectionHeader";

export function Concept() {
  const { t } = useLanguage();
  const c = t.concept;

  return (
    <section
      id="vision"
      className="relative border-t border-white/[0.04] bg-[#0c0b09] px-4 py-16 pb-16 sm:px-6 md:px-10 md:py-24 md:pb-24"
    >
      <div className="relative z-[2] mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-12 md:gap-12 lg:gap-16">
        <div className="md:col-span-7">
          <SectionHeader
            step="01"
            kicker={c.kicker}
            title={
              <>
                {c.titleBefore} <GoldAccent>{c.titleAccent}</GoldAccent>{" "}
                {c.titleAfter}
              </>
            }
          />
          <div className="mt-8 max-w-prose space-y-5 text-[15px] font-light leading-[1.85] text-cream/70">
            <p>{c.p1}</p>
            <p>{c.p2}</p>
            <p>
              {c.p3Before}{" "}
              <strong className="font-normal text-cream/90">R2-D2 Coffee</strong>{" "}
              {c.p3And}{" "}
              <strong className="font-normal text-cream/90">R2-D2 Ice Cream</strong>
              {c.p3After}
            </p>
          </div>
        </div>

        <ul className="flex flex-col gap-4 md:col-span-5 md:mt-2">
          {c.stats.map(({ k, v }) => (
            <li
              key={v}
              className="group rounded-xl border border-white/[0.07] bg-white/[0.02] px-6 py-5 transition hover:border-gold/25 hover:bg-white/[0.03]"
            >
              <div className="bg-linear-to-r from-gold-light to-gold bg-clip-text font-cinzel text-2xl font-semibold tracking-wide text-transparent md:text-[1.65rem]">
                {k}
              </div>
              <div className="mt-1 text-[13px] font-normal leading-snug text-cream/55">
                {v}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
