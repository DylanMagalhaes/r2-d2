import { GoldAccent, SectionHeader } from "./SectionHeader";

const stats = [
  { k: "2 en 1", v: "Concepts sous une même enseigne" },
  { k: "100%", v: "Recettes premium par nos chefs" },
  { k: "24/7", v: "Automatisation robotique" },
  { k: "∞", v: "Carte chaude & glacée, évolutive" },
] as const;

export function Concept() {
  return (
    <section
      id="vision"
      className="relative border-t border-white/[0.04] bg-[#0c0b09] px-4 py-16 pb-16 sm:px-6 md:px-10 md:py-24 md:pb-24"
    >
      <div className="relative z-[2] mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-12 md:gap-12 lg:gap-16">
        <div className="md:col-span-7">
          <SectionHeader
            step="01"
            kicker="Notre vision"
            title={
              <>
                Un concept <GoldAccent>unique</GoldAccent> au monde
              </>
            }
          />
          <div className="mt-8 max-w-prose space-y-5 text-[15px] font-light leading-[1.85] text-cream/70">
            <p>
              R2-D2 Coffee & Ice Cream réinvente la restauration rapide premium
              : une robotique de pointe au service de recettes d&apos;exception,
              signées par nos artisans du goût.
            </p>
            <p>
              Chaque point de vente devient un lieu de vie spectaculaire, où la
              technologie prolonge l&apos;art culinaire. Un modèle pensé pour
              une clientèle exigeante et connectée.
            </p>
            <p>
              Nos deux enseignes,{" "}
              <strong className="font-normal text-cream/90">
                R2-D2 Coffee
              </strong>{" "}
              et{" "}
              <strong className="font-normal text-cream/90">
                R2-D2 Ice Cream
              </strong>
              , se déploient seules ou en duo selon votre marché.
            </p>
          </div>
        </div>

        <ul className="flex flex-col gap-4 md:col-span-5 md:mt-2">
          {stats.map(({ k, v }) => (
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
