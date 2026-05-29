import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { en } from "./translations/en";
import { fr } from "./translations/fr";
import { LanguageContext } from "./languageContext";
import type { Locale, Translations } from "./types";
import { LOCALE_STORAGE_KEY } from "./types";

const dictionaries: Record<Locale, Translations> = { fr, en };

function detectLocale(): Locale {
  if (typeof window === "undefined") return "fr";

  const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (stored === "fr" || stored === "en") return stored;

  return navigator.language.toLowerCase().startsWith("en") ? "en" : "fr";
}

function applyDocumentMeta(locale: Locale, t: Translations) {
  document.documentElement.lang = locale;
  document.title = t.meta.title;

  document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", t.meta.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", t.meta.description);
  document.querySelector('meta[property="og:locale"]')?.setAttribute("content", locale === "fr" ? "fr_FR" : "en_US");
  document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", t.meta.title);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", t.meta.description);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => detectLocale());

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(LOCALE_STORAGE_KEY, next);
  }, []);

  const t = dictionaries[locale];

  useEffect(() => {
    applyDocumentMeta(locale, t);
  }, [locale, t]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
