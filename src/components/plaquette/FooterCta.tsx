import { useMemo, useState, type FormEvent } from "react";
import { GoldAccent } from "./SectionHeader";

const CONTACT_EMAIL = "contact@r2-d2-france.com";

const CONTACTS = [
  {
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    label: "Téléphone",
    value: "+33 (0)7 77 31 87 87",
    href: "tel:+330777318787",
  },
] as const;

const INTENTION_OPTS = [
  { value: "equipement", label: "Équipement & déploiement lieu" },
  { value: "habillage", label: "Habillage machine — couleurs marque" },
  { value: "lieu_evenementiel", label: "Événements & lieu public" },
  { value: "presse_partenariat", label: "Presse & partenariats" },
  { value: "autre", label: "Autre demande" },
] as const;

function buildMailtoBody(fd: FormData): { subject: string; body: string } {
  const intentionVal = String(fd.get("intention") ?? "");
  const intentionLabel =
    INTENTION_OPTS.find((o) => o.value === intentionVal)?.label ?? intentionVal;
  const name = String(fd.get("nom") ?? "").trim();
  const company = String(fd.get("entreprise") ?? "").trim();
  const email = String(fd.get("email") ?? "").trim();
  const phone = String(fd.get("telephone") ?? "").trim();
  const msg = String(fd.get("message") ?? "").trim();

  const lines = [
    `[Objet demande] ${intentionLabel}`,
    "",
    `[Nom contact] ${name || "—"}`,
    `[Structure] ${company || "—"}`,
    `[Réponse souhaitée sur] ${email}`,
    `[Téléphone] ${phone || "—"}`,
    "",
    "[Précisions]",
    msg || "—",
  ];

  return {
    subject: `R2-D2 — Lead ${intentionLabel}`,
    body: lines.join("\n"),
  };
}

export function FooterCta() {
  const [sentHint, setSentHint] = useState(false);

  const emailPattern = useMemo(() => String.raw`[^\s@]+@[^\s@]+\.[^\s@]+`, []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const { subject, body } = buildMailtoBody(fd);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSentHint(true);
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.04] bg-ink px-4 py-16 pb-20 sm:px-6 md:px-10 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,168,76,0.08),transparent_70%)]"
      />

      <div className="relative z-[1] mx-auto max-w-6xl">
        <div className="grid items-start gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-gold/20 bg-gold/[0.06] px-4 py-2 font-cinzel text-[10px] uppercase tracking-[0.35em] text-gold/90">
              <span className="text-gold">07</span>
              <span aria-hidden="true" className="h-3 w-px bg-gold/25" />
              <span>Contact</span>
            </div>
            <h2 className="font-cinzel text-[clamp(1.75rem,3.8vw,2.75rem)] font-light leading-snug tracking-wide text-parchment">
              Parlons de votre <GoldAccent>projet</GoldAccent>
            </h2>
            <p className="mt-5 max-w-xl text-[15px] font-light leading-relaxed text-cream/60">
              Déploiement, habillage marque ou étude lieu : précisez en deux
              minutes votre contexte&nbsp;; nous revenons vers vous sous{" "}
              <span className="text-cream/75">48&nbsp;h ouvrées</span> après
              lecture du message.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-gold to-[#9a7328] px-8 py-3.5 font-cinzel text-[11px] font-semibold uppercase tracking-[0.24em] text-ink shadow-lg shadow-gold/15 transition hover:brightness-110"
            >
              Écrire directement
              <span aria-hidden="true" className="text-ink/80">
                →
              </span>
            </a>
          </div>

          <div className="md:col-span-7">
            <form
              id="formulaire-contact"
              className="rounded-2xl border border-white/[0.09] bg-white/[0.02] p-6 sm:p-8"
              onSubmit={onSubmit}
              autoComplete="on"
              noValidate
            >
              <p className="font-cinzel text-[11px] uppercase tracking-[0.35em] text-gold/80">
                Formulaire qualification
              </p>
              <p className="mt-3 text-[13.5px] font-light leading-relaxed text-cream/52">
                L&apos;envoi ouvre votre client mail avec le message prérempli —
                aucune donnée n&apos;est stockée sur ce site sans votre action
                sur la messagerie.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="intent"
                    className="block font-cinzel text-[10px] uppercase tracking-[0.28em] text-gold/70"
                  >
                    Vous contactez nous pour
                  </label>
                  <select
                    id="intent"
                    name="intention"
                    required
                    defaultValue="equipement"
                    className="mt-2 w-full rounded-xl border border-white/[0.12] bg-ink/50 px-4 py-3 text-[14px] font-light text-cream/88 outline-none transition focus:border-gold/40 focus:ring-1 focus:ring-gold/30"
                  >
                    {INTENTION_OPTS.map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="nom"
                    className="block font-cinzel text-[10px] uppercase tracking-[0.28em] text-gold/70"
                  >
                    Nom et prénom
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    autoComplete="name"
                    className="mt-2 w-full rounded-xl border border-white/[0.12] bg-ink/50 px-4 py-3 text-[14px] font-light text-cream/88 outline-none transition placeholder:text-cream/30 focus:border-gold/40 focus:ring-1 focus:ring-gold/30"
                    placeholder="Sophie Laurent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="entreprise"
                    className="block font-cinzel text-[10px] uppercase tracking-[0.28em] text-gold/70"
                  >
                    Structure (optionnel)
                  </label>
                  <input
                    id="entreprise"
                    name="entreprise"
                    type="text"
                    autoComplete="organization"
                    className="mt-2 w-full rounded-xl border border-white/[0.12] bg-ink/50 px-4 py-3 text-[14px] font-light text-cream/88 outline-none transition placeholder:text-cream/30 focus:border-gold/40 focus:ring-1 focus:ring-gold/30"
                    placeholder="SAS exemple"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="email-contact"
                    className="block font-cinzel text-[10px] uppercase tracking-[0.28em] text-gold/70"
                  >
                    E-mail<span className="text-gold/90">*</span>
                  </label>
                  <input
                    id="email-contact"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    required
                    pattern={emailPattern}
                    className="mt-2 w-full rounded-xl border border-white/[0.12] bg-ink/50 px-4 py-3 text-[14px] font-light text-cream/88 outline-none transition placeholder:text-cream/30 focus:border-gold/40 focus:ring-1 focus:ring-gold/30"
                    placeholder={`vous@${"exemple.fr"}`}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="tel-contact"
                    className="block font-cinzel text-[10px] uppercase tracking-[0.28em] text-gold/70"
                  >
                    Téléphone (optionnel)
                  </label>
                  <input
                    id="tel-contact"
                    name="telephone"
                    type="tel"
                    autoComplete="tel"
                    className="mt-2 w-full rounded-xl border border-white/[0.12] bg-ink/50 px-4 py-3 text-[14px] font-light text-cream/88 outline-none transition placeholder:text-cream/30 focus:border-gold/40 focus:ring-1 focus:ring-gold/30"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message-contact"
                    className="block font-cinzel text-[10px] uppercase tracking-[0.28em] text-gold/70"
                  >
                    Contexte projet
                  </label>
                  <textarea
                    id="message-contact"
                    name="message"
                    rows={4}
                    className="mt-2 w-full resize-y rounded-xl border border-white/[0.12] bg-ink/50 px-4 py-3 text-[14px] font-light leading-relaxed text-cream/88 outline-none transition placeholder:text-cream/30 focus:border-gold/40 focus:ring-1 focus:ring-gold/30"
                    placeholder="Zone visée, type de lieu, jalons envisagés…"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 w-full rounded-full bg-linear-to-r from-gold to-[#9a7328] px-8 py-3.5 font-cinzel text-[11px] font-semibold uppercase tracking-[0.24em] text-ink shadow-lg shadow-gold/12 transition hover:brightness-110 sm:w-auto"
              >
                Composer l&apos;e-mail
              </button>

              {sentHint ? (
                <p
                  className="mt-4 text-[13px] font-light text-gold-light/95"
                  role="status"
                >
                  Si votre messagerie ne s&apos;ouvre pas automatiquement,
                  utilisez nos coordonnées ci‑dessous.
                </p>
              ) : null}
            </form>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2">
              {CONTACTS.map(({ label, value, href }) => (
                <li
                  key={label}
                  className="group rounded-xl border border-white/[0.07] bg-white/[0.02] px-5 py-4 transition hover:border-gold/25 hover:bg-white/[0.03]"
                >
                  <span className="block text-[10px] font-medium uppercase tracking-[0.28em] text-gold/70">
                    {label}
                  </span>
                  <a
                    href={href}
                    className="mt-1 block text-sm font-light text-cream/85 transition group-hover:text-gold"
                  >
                    {value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-16 border-t border-white/[0.06] pt-8 font-cinzel text-[10px] uppercase tracking-[0.32em] text-cream/30">
          Maison R2-D2 · Coffee × Ice Cream · France
        </p>
      </div>
    </section>
  );
}
