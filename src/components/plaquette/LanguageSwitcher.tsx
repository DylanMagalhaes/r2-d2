import { useLanguage } from "../../i18n/languageContext";
import type { Locale } from "../../i18n/types";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  function select(next: Locale) {
    if (next !== locale) setLocale(next);
  }

  return (
    <div
      className={`inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] p-0.5 ${className}`}
      role="group"
      aria-label={locale === "fr" ? "Langue" : "Language"}
    >
      {(["fr", "en"] as const).map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => select(code)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 font-cinzel text-[9px] uppercase tracking-[0.22em] transition ${
              active ? "bg-gold text-ink shadow-sm" : "text-cream/60 hover:text-gold"
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
