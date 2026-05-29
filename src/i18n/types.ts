import type { en } from "./translations/en";

export type Locale = "fr" | "en";

type Stringify<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Stringify<U>[]
    : T extends object
      ? { readonly [K in keyof T]: Stringify<T[K]> }
      : T;

export type Translations = Stringify<typeof en>;

export const LOCALES: readonly Locale[] = ["fr", "en"] as const;

export const LOCALE_STORAGE_KEY = "r2d2-locale";
