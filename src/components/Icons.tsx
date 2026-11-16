import type { BenefitIcon } from "@/content/site";

type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

/** Eleven pillars, the centre one taller and gold: the line-up as one system. */
export function ElevenIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 44 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" aria-hidden="true" focusable="false" className={className}>
      {[2, 6, 10, 14, 18, 26, 30, 34, 38, 42].map((x) => (
        <path key={x} d={`M${x} 8.5v12`} />
      ))}
      <path d="M22 3.5v17" stroke="#B08D57" />
    </svg>
  );
}

export function BenefitGlyph({ name, className }: { name: BenefitIcon; className?: string }) {
  switch (name) {
    case "eleven":
      return <ElevenIcon className={className} />;
    case "pen":
      return (
        <svg {...base} className={className}>
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.6 7.6" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );
    case "contact":
      return (
        <svg {...base} className={className}>
          <circle cx="8.5" cy="12" r="5.5" />
          <circle cx="15.5" cy="12" r="5.5" />
        </svg>
      );
    case "clock":
      return (
        <svg {...base} className={className}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.5 2" />
        </svg>
      );
    case "faders":
      return (
        <svg {...base} className={className}>
          <path d="M6 3v18M12 3v18M18 3v18" />
          <rect x="4" y="13" width="4" height="3" className="fill-ivory" />
          <rect x="10" y="6" width="4" height="3" className="fill-ivory" />
          <rect x="16" y="10" width="4" height="3" className="fill-ivory" />
        </svg>
      );
    case "quote":
      return (
        <svg {...base} className={className}>
          <path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8z" />
          <path d="M14 3v5h5M9 13h6M9 17h4" />
        </svg>
      );
    case "contract":
      return (
        <svg {...base} className={className}>
          <path d="M12 3l7.5 3v6c0 4.4-3.1 7.6-7.5 9-4.4-1.4-7.5-4.6-7.5-9V6z" />
          <path d="M9 12l2.2 2.2L15.5 10" />
        </svg>
      );
    case "scenario":
      return (
        <svg {...base} className={className}>
          <path d="M10 6h10M10 12h10M10 18h10" />
          <circle cx="5" cy="6" r="1.5" />
          <circle cx="5" cy="12" r="1.5" />
          <circle cx="5" cy="18" r="1.5" />
        </svg>
      );
    case "production":
      return (
        <svg {...base} className={className}>
          <path d="M12 3l9 4.8-9 4.8-9-4.8z" />
          <path d="M3 12.2l9 4.8 9-4.8" />
          <path d="M3 16.6l9 4.8 9-4.8" />
        </svg>
      );
  }
}

export function PlayGlyph({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path d="M7 4.5v15l12-7.5z" fill="currentColor" />
    </svg>
  );
}

export function CheckGlyph({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 12.5l4.5 4.5L19.5 6.5" />
    </svg>
  );
}

export function DashGlyph({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 12h12" />
    </svg>
  );
}
