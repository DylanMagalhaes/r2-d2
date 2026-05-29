import { ChevronDown } from "lucide-react";
import { useLanguage } from "../../i18n/languageContext";

export function PartnershipFaq() {
  const { t } = useLanguage();
  const f = t.faq;

  return (
    <div className="mt-16 border-t border-white/[0.07] pt-14 md:mt-20 md:pt-16">
      <h3 className="font-cinzel text-[clamp(1.05rem,2.2vw,1.35rem)] font-light leading-snug tracking-wide text-parchment">
        {f.title}
      </h3>
      <p className="mt-3 max-w-2xl text-[14px] font-light leading-relaxed text-cream/55">
        {f.intro}
      </p>

      <div className="mt-9 space-y-2">
        {f.items.map(({ q, a }) => (
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
              <p className="pt-3 text-[14px] font-light leading-[1.75] text-cream/62">
                {a}
              </p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
