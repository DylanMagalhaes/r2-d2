import type { ReactNode } from "react";
import { Package, TrendingUp, Trophy, type LucideIcon } from "lucide-react";
import { PartnershipFaq } from "./PartnershipFaq";
import { GoldAccent, SectionHeader } from "./SectionHeader";

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-7 space-y-3.5 border-t border-white/[0.08] pt-7 text-left">
      {items.map((text) => (
        <li key={text} className="flex gap-3.5">
          <span
            aria-hidden="true"
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/65"
          />
          <span className="text-[14px] font-light leading-relaxed text-cream/72">
            {text}
          </span>
        </li>
      ))}
    </ul>
  );
}

function PillarCard({
  Icon,
  title,
  subtitle,
  children,
}: {
  Icon: LucideIcon;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-white/[0.09] bg-white/[0.03] p-8 shadow-[0_24px_56px_-40px_rgba(0,0,0,0.85)] transition duration-300 hover:-translate-y-1 hover:border-gold/25 hover:bg-white/[0.05] sm:p-10">
      <div
        aria-hidden="true"
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/25 bg-gold/[0.06] text-gold-pale"
      >
        <Icon className="size-5" strokeWidth={1.5} />
      </div>
      <h3 className="font-cinzel text-[13px] font-medium uppercase leading-snug tracking-[0.18em] text-gold/88">
        {title}
      </h3>
      <p className="mt-2 font-raleway text-[15px] font-normal leading-snug text-parchment/90">
        {subtitle}
      </p>
      <div className="mt-5 flex-1 font-raleway text-[15px] font-light leading-[1.75] text-cream/68">
        {children}
      </div>
    </article>
  );
}

export function PartnershipSection() {
  return (
    <section
      id="partenariat"
      className="relative border-t border-white/[0.04] bg-[#0c0b09] px-4 py-16 pb-16 sm:px-6 md:px-10 md:py-24 md:pb-24"
    >
      <div className="relative z-[1] mx-auto max-w-6xl">
        <div className="grid items-end gap-8 md:grid-cols-12 md:gap-10">
          <SectionHeader
            className="md:col-span-7"
            step="06"
            kicker="Partenariat"
            title={
              <>
                Déployez R2-D2 <GoldAccent>avec nous</GoldAccent>
              </>
            }
          />
          <p className="text-[15px] font-light leading-relaxed text-cream/60 md:col-span-5 md:pb-2">
            Nous accompagnons opérateurs, lieux premium et équipes
            événementielles&nbsp;: mise en œuvre terrain, transfert de
            compétences et suivi après installation — sans modèle franchise.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:mt-16 lg:grid-cols-3 lg:gap-9">
          <PillarCard
            Icon={Trophy}
            title="Formation & montée en compétences"
            subtitle="Une équipe autonome en quelques séances concrètes."
          >
            <p>
              Notre programme vous transmet l&apos;essentiel&nbsp;: pilotage des
              équipements robotiques, gestion des flux, standards qualité du
              concept et posture service premium dans votre contexte.
            </p>
            <BulletList
              items={[
                "Pilotage des robots",
                "Standards qualité & hygiène",
                "Gestion du flux clients",
                "Expérience d&apos;accueil premium",
                "Maintenance de premier niveau",
                "Suivi après mise en service",
              ]}
            />
          </PillarCard>

          <PillarCard
            Icon={Package}
            title="Livré prêt à l’emploi"
            subtitle="Équipement, média et carte : nous structurons le départ."
          >
            <p>
              R2-D2 Coffee peut être déployé{" "}
              <em className="text-cream/85">avec un socle déjà défini</em> —
              automatisation, identité packs, carte et recettes, et repères
              digitaux lorsque c’est prévu avec vous.
            </p>
            <BulletList
              items={[
                "Équipements robotiques",
                "Supports d’habillage marque possible",
                "Carte produits & recettes",
                "Marketing & médias locaux (selon dossier)",
                "Formation à l’ouverture",
                "Support continu 7j/7",
              ]}
            />
          </PillarCard>

          <PillarCard
            Icon={TrendingUp}
            title="Économique & performance"
            subtitle="Une production automatisée, au service du ticket et de la marge."
          >
            <p>
              Votre robot opère{" "}
              <strong className="font-medium text-gold-pale">
                sans interruption des cycles prévus — ni pause ni charge sociale
                de production équivalente
              </strong>
              . Le ticket moyen peut progresser lorsque le lieu capitalise sur
              l&apos;expérience spectacle et la qualité perçue.
            </p>

            <ul className="mt-7 space-y-4 border-t border-white/[0.08] pt-7">
              {[
                [
                  "−80%",
                  "de coûts opérationnels",
                  "vs. café traditionnel (ordre)",
                ],
                ["×2", "ticket moyen", "situations comparables rapportées"],
                ["1er mois", "retour envisageable", "selon contexte lieu"],
              ].map(([k, label, hint]) => (
                <li
                  key={label}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-4 text-left"
                >
                  <div className="bg-linear-to-r from-gold-light to-gold bg-clip-text font-cinzel text-xl font-medium tracking-wide text-transparent">
                    {k}
                  </div>
                  <div className="mt-1 font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold/75">
                    {label}
                  </div>
                  <div className="mt-1 text-[13px] font-light text-cream/50">
                    {hint}
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-lg border border-white/[0.05] bg-ink/40 px-3.5 py-3 font-raleway text-[11px] font-light leading-relaxed text-cream/45">
              Indicateurs donnés à titre illustratif sous réserve d&apos;étude
              d&apos;emplacement et du modèle économique de votre projet. Aucun
              résultat n&apos;est garanti ou contractuel hors proposition écrite
              après analyse.
            </p>
          </PillarCard>
        </div>

        <PartnershipFaq />
      </div>
    </section>
  );
}
