import { Bot, Coffee, ShieldCheck, Smartphone, type LucideIcon } from 'lucide-react'
import { GoldAccent, SectionHeader } from './SectionHeader'

type Feature = { Icon: LucideIcon; title: string; desc: string }

const features: readonly Feature[] = [
  {
    Icon: Coffee,
    title: '100% Arabica fraîchement moulu',
    desc: 'Grains Arabica premium, lait frais de qualité, mouture à la demande pour chaque tasse.',
  },
  {
    Icon: Bot,
    title: 'Bras robotique haute précision',
    desc: 'Préparation automatisée millimétrée, constance absolue, zéro intervention humaine.',
  },
  {
    Icon: ShieldCheck,
    title: 'Hygiène & maintenance auto',
    desc: 'Cycles de nettoyage automatiques, enceinte hermétique pour une hygiène irréprochable.',
  },
  {
    Icon: Smartphone,
    title: 'Interface tactile & paiement',
    desc: 'Écran HD, commande à distance via app dédiée, Apple Pay, Google Pay et carte bancaire.',
  },
] as const

const tagsPlain = [
  'Opération 24h/24 · 7j/7',
  'Fabriqué par KOZA Robotic',
  'Recettes artisanales',
] as const

export function KukuMachineSection() {
  return (
    <section
      id="machine"
      className="relative border-t border-white/[0.04] bg-ink px-4 py-16 pb-16 sm:px-6 md:px-10 md:py-24 md:pb-24"
    >
      <div className="relative z-[1] mx-auto max-w-6xl">
        <div className="grid items-end gap-8 md:grid-cols-12 md:gap-10">
          <SectionHeader
            className="md:col-span-7"
            step="04"
            kicker="Automate signature"
            title={
              <>
                R2-D2 Coffee, <GoldAccent>café autonome</GoldAccent>
              </>
            }
          />
          <p className="text-[15px] font-light leading-relaxed text-cream/60 md:col-span-5 md:pb-2">
            Bras robotique <strong className="font-medium text-gold-pale">KOZA Robotic</strong>, vitrine
            transparente — spectacle et précision, 24h/24.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-10 md:mt-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <p className="text-[15px] font-light leading-[1.9] text-cream/68">
              Au cœur du concept, la machine{' '}
              <strong className="font-normal text-gold-pale">R2-D2 Coffee</strong> incarne la robotique au
              service de l&apos;art du café : autonomie, constance et mise en scène pour chaque client.
            </p>

            <ul className="mt-7 flex flex-wrap gap-2">
              {tagsPlain.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-2 font-cinzel text-[10px] uppercase tracking-[0.22em] text-cream/65 transition hover:border-gold/30 hover:text-gold"
                >
                  {tag}
                </li>
              ))}
              <li>
                <a
                  href="#habillage"
                  className="inline-flex rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-2 font-cinzel text-[10px] uppercase tracking-[0.22em] text-cream/65 transition hover:border-gold/30 hover:text-gold"
                >
                  Habillage aux couleurs marque
                </a>
              </li>
            </ul>
          </div>

          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] md:col-span-7 sm:grid-cols-2">
            {features.map(({ Icon, title, desc }) => (
              <li
                key={title}
                className="flex items-start gap-4 bg-ink/40 px-6 py-6 transition hover:bg-white/[0.02]"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-gold/20 bg-gold/[0.06] text-gold-pale"
                >
                  <Icon className="size-4" strokeWidth={1.6} />
                </span>
                <div>
                  <div className="mb-1.5 font-cinzel text-[12px] font-medium uppercase tracking-[0.18em] text-gold/85">
                    {title}
                  </div>
                  <p className="text-[14px] font-light leading-relaxed text-cream/55">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
