import { Layers, Monitor, Palette, type LucideIcon } from "lucide-react";
import { GoldAccent, SectionHeader } from "./SectionHeader";

type Point = { Icon: LucideIcon; title: string; text: string };

const points: readonly Point[] = [
  {
    Icon: Palette,
    title: "Charte & couleurs",
    text: "Habillage des panneaux, cadres et zones visibles selon votre palette graphique pour une cohérence immédiate avec votre identité.",
  },
  {
    Icon: Monitor,
    title: "Écrans & contenus",
    text: "Personnalisation des écrans de commande avec vos logos et visuels d’accueil, dans le respect de votre charte graphique.",
  },
  {
    Icon: Layers,
    title: "Scénographie lieu",
    text: "Même ligne directrice pour votre stand, corner ou espace événementiel : la machine s’intègre comme pièce forte d’un dispositif co-brandé R2-D2 × votre univers.",
  },
] as const;

export function MachineBrandingSection() {
  return (
    <section
      id="habillage"
      className="relative border-t border-white/[0.04] bg-[#0c0b09] px-4 py-16 pb-16 sm:px-6 md:px-10 md:py-24 md:pb-24"
    >
      <div className="relative z-[1] mx-auto max-w-6xl">
        <div className="grid items-end gap-8 md:grid-cols-12 md:gap-10">
          <SectionHeader
            className="md:col-span-7"
            step="05"
            kicker="Habillage marque"
            title={
              <>
                Vos couleurs, <GoldAccent>votre signature</GoldAccent>
              </>
            }
          />
          <p className="text-[15px] font-light leading-relaxed text-cream/60 md:col-span-5 md:pb-2">
            Les automates R2-D2 peuvent être{" "}
            <strong className="font-medium text-gold-pale">
              habillés aux couleurs de votre marque
            </strong>{" "}
            : finitions, signalétique et parcours visuel s’alignent sur votre
            charte — idéal pour retail, corporate ou activation événementielle.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {points.map(({ Icon, title, text }) => (
            <li
              key={title}
              className="flex flex-col rounded-2xl border border-white/[0.09] bg-white/[0.03] p-8 shadow-[0_24px_56px_-40px_rgba(0,0,0,0.85)] transition duration-300 hover:border-gold/25 hover:bg-white/[0.05] sm:p-9"
            >
              <div
                aria-hidden="true"
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/25 bg-gold/[0.06] text-gold-pale"
              >
                <Icon className="size-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-cinzel text-[13px] font-medium uppercase leading-snug tracking-[0.18em] text-gold/88">
                {title}
              </h3>
              <p className="mt-3 font-raleway text-[15px] font-light leading-[1.75] text-cream/68">
                {text}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-3xl rounded-xl border border-white/[0.06] bg-ink/40 px-5 py-4 text-[13px] font-light leading-relaxed text-cream/52">
          Les possibilités d’habillage et les contraintes techniques dépendent
          du modèle et du site de déploiement — nous détaillons un cahier des
          charges sur la base de votre marque et de votre lieu.
        </p>
      </div>
    </section>
  );
}
