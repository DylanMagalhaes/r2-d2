import type { ReactNode } from "react";

type SectionHeaderProps = {
  step?: string;
  kicker: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleId?: string;
};

export function SectionHeader({
  step,
  kicker,
  title,
  subtitle,
  align = "left",
  className = "",
  titleId,
}: SectionHeaderProps) {
  const alignCls = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <header className={`max-w-3xl ${alignCls} ${className}`}>
      <div
        className={`mb-5 inline-flex items-center gap-3 rounded-full border border-gold/20 bg-gold/[0.06] px-4 py-2 font-cinzel text-[10px] uppercase tracking-[0.35em] text-gold/90 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        {step ? (
          <>
            <span className="text-gold">{step}</span>
            <span aria-hidden="true" className="h-3 w-px bg-gold/25" />
          </>
        ) : null}
        <span>{kicker}</span>
      </div>
      <h2
        id={titleId}
        className="font-cinzel text-[clamp(1.65rem,3.4vw,2.5rem)] font-light leading-snug tracking-wide text-parchment"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl text-pretty text-[15px] font-light leading-relaxed text-cream/60 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}

export function GoldAccent({ children }: { children: ReactNode }) {
  return (
    <span className="bg-linear-to-r from-gold-light to-gold bg-clip-text font-normal text-transparent">
      {children}
    </span>
  );
}
