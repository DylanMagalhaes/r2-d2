import type { ReactNode } from 'react'
import { Package, TrendingUp, Trophy, type LucideIcon } from 'lucide-react'
import { FranchiseFaq } from './FranchiseFaq'
import { GoldAccent, SectionHeader } from './SectionHeader'

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-7 space-y-3.5 border-t border-white/[0.08] pt-7 text-left">
      {items.map((text) => (
        <li key={text} className="flex gap-3.5">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/65" />
          <span className="text-[14px] font-light leading-relaxed text-cream/72">{text}</span>
        </li>
      ))}
    </ul>
  )
}

function PillarCard({
  Icon,
  title,
  subtitle,
  children,
}: {
  Icon: LucideIcon
  title: string
  subtitle: string
  children: ReactNode
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
      <p className="mt-2 font-raleway text-[15px] font-normal leading-snug text-parchment/90">{subtitle}</p>
      <div className="mt-5 flex-1 font-raleway text-[15px] font-light leading-[1.75] text-cream/68">
        {children}
      </div>
    </article>
  )
}

export function FranchiseSection() {
  return (
    <section
      id="franchise"
      className="relative border-t border-white/[0.04] bg-[#0c0b09] px-4 py-16 pb-16 sm:px-6 md:px-10 md:py-24 md:pb-24"
    >
      <div className="relative z-[1] mx-auto max-w-6xl">
        <div className="grid items-end gap-8 md:grid-cols-12 md:gap-10">
          <SectionHeader
            className="md:col-span-7"
            step="05"
            kicker="Franchise"
            title={
              <>
                Rejoignez le réseau <GoldAccent>R2-D2</GoldAccent>
              </>
            }
          />
          <p className="text-[15px] font-light leading-relaxed text-cream/60 md:col-span-5 md:pb-2">
            Partenaires sélectionnés, modèle éprouvé, accompagnement complet — déployez le concept sur votre
            territoire.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:mt-16 lg:grid-cols-3 lg:gap-9">
          <PillarCard
            Icon={Trophy}
            title="Formation & excellence"
            subtitle="Opérationnel en quelques jours, pas en plusieurs mois."
          >
            <p>
              Notre programme d&apos;intégration intensif vous transmet l&apos;essentiel : pilotage des
              équipements robotiques, gestion des flux, standards de la marque et culture du service premium.
            </p>
            <BulletList
              items={[
                'Pilotage des robots',
                'Standards qualité marque',
                'Gestion opérationnelle',
                'Expérience client premium',
                'Maintenance de 1er niveau',
                'Suivi post-ouverture',
              ]}
            />
          </PillarCard>

          <PillarCard Icon={Package} title="Clé en main" subtitle="Vous ouvrez. Nous gérons le reste.">
            <p>
              R2-D2 Coffee vous livre un concept{' '}
              <em className="text-cream/85">entièrement opérationnel</em> — des machines aux réseaux sociaux,
              de la carte à l&apos;uniforme.
            </p>
            <BulletList
              items={[
                'Équipements robotiques',
                'Identité visuelle complète',
                'Carte produits & recettes',
                'Marketing & réseaux locaux',
                'Formation & onboarding',
                'Support continu 7j/7',
              ]}
            />
          </PillarCard>

          <PillarCard
            Icon={TrendingUp}
            title="Économique & ROI"
            subtitle="Zéro masse salariale de production."
          >
            <p>
              Votre robot opère{' '}
              <strong className="font-medium text-gold-pale">
                sans interruption — ni pause, ni congé, ni charge sociale
              </strong>
              . Le ticket moyen progresse grâce à l&apos;expérience premium et à la dimension{' '}
              <em>spectaculaire</em> de la robotique.
            </p>

            <ul className="mt-7 space-y-4 border-t border-white/[0.08] pt-7">
              {[
                ['−80%', 'de coûts opérationnels', 'vs. café traditionnel'],
                ['×2', 'ticket moyen', 'supérieur au marché'],
                ['1er mois', 'ROI possible', 'selon emplacement'],
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
                  <div className="mt-1 text-[13px] font-light text-cream/50">{hint}</div>
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-lg border border-white/[0.05] bg-ink/40 px-3.5 py-3 font-raleway text-[11px] font-light leading-relaxed text-cream/45">
              Indicateurs donnés à titre illustratif sous réserve d&apos;étude d&apos;emplacement et de
              modèle économique propre au franchisé. Aucun résultat n&apos;est garanti ou contractuel
              hors engagement écrit défini au dossier d&apos;information.
            </p>
          </PillarCard>
        </div>

        <FranchiseFaq />
      </div>
    </section>
  )
}
