import { ChevronDown } from "lucide-react";

type FaqEntry = Readonly<{ q: string; a: string }>;

const FAQS = [
  {
    q: "Pour quels types de lieux peut-on installer R2-D2 ?",
    a: "Centres commerciaux, bureaux & corporate, salons, hospitality, événements temporaires ou permanents… Chaque dossier précise circulation, dimensions, raccords et exposition souhaitée.",
  },
  {
    q: "L’automate peut-il reprendre intégralement notre charte graphique ?",
    a: "Oui — habillage mécanique, couleurs, habillages façade et adaptations d’interfaces sont étudiées selon vos codes (voir aussi la section « Habillage marque »). Un cahier des charges et validations techniques précèdent toute fabrication spécifique.",
  },
  {
    q: "Quels sont les délais usuels jusqu’à la mise en service ?",
    a: "Ils dépendent du niveau de personnalisation, des délais de fabrication et du chantier sur site. Une fourchette indicative vous est donnée après expression de besoin.",
  },
  {
    q: "Comment fonctionne le modèle commercial ?",
    a: "Achat, location ou autres modalités peuvent être proposées selon votre projet ; rien de standardisé façon franchise. Les conditions sont précisées en devis après qualification du besoin.",
  },
  {
    q: "Quel accompagnement après l’installation ?",
    a: "Hotline technique, mise à jour des contenus médias lorsque c’est prévu, et repères pour l’animation du point de vente. Le périmètre exact figure au contrat de déploiement.",
  },
] as const satisfies readonly FaqEntry[];

export function PartnershipFaq() {
  return (
    <div className="mt-16 border-t border-white/[0.07] pt-14 md:mt-20 md:pt-16">
      <h3 className="font-cinzel text-[clamp(1.05rem,2.2vw,1.35rem)] font-light leading-snug tracking-wide text-parchment">
        Questions fréquentes
      </h3>
      <p className="mt-3 max-w-2xl text-[14px] font-light leading-relaxed text-cream/55">
        Réponses d’orientation ; tout engagement précis résulte d’un échange métier puis d’un contrat ou
        d’un devis signé.
      </p>

      <div className="mt-9 space-y-2">
        {FAQS.map(({ q, a }) => (
          <details
            key={q}
            className="group rounded-xl border border-white/[0.08] bg-white/[0.02] [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 text-left marker:content-none sm:px-6 sm:py-5">
              <span className="font-raleway text-[15px] font-normal leading-snug text-parchment/92">
                {q}
              </span>
              <ChevronDown
                className="mt-0.5 size-[1.125rem] shrink-0 text-gold/70 transition group-open:rotate-180"
                strokeWidth={1.75}
                aria-hidden
              />
            </summary>
            <div className="border-t border-white/[0.06] px-5 pb-4 pt-0 sm:px-6 sm:pb-5">
              <p className="pt-3 text-[14px] font-light leading-[1.75] text-cream/62">{a}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
