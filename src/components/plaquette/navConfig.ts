export const SECTION_IDS = [
  "accueil",
  "vision",
  "concepts",
  "art-latte",
  "machine",
  "habillage",
  "partenariat",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];
