type MarkProps = { width: number; className?: string; tone?: "ivory" | "ink" };

/** A11 Precision Mark: the A and the 11 joined by one gold beam. */
export function Mark({ width, className, tone = "ivory" }: MarkProps) {
  const ink = tone === "ivory" ? "#F5F2EC" : "#111111";
  return (
    <svg viewBox="4 6 194 144" width={width} height={Math.round((width * 144) / 194)} className={className} aria-hidden="true" focusable="false">
      <path d="M16 142 L68 30 L120 142" fill="none" stroke={ink} strokeWidth="16" />
      <rect x="42" y="96" width="86" height="14" fill="#B08D57" />
      <g fill={ink}>
        <rect x="146" y="28" width="16" height="114" />
        <polygon points="146,28 131,45 146,45" />
        <rect x="178" y="28" width="16" height="114" />
        <polygon points="178,28 163,45 178,45" />
      </g>
    </svg>
  );
}

/** Horizontal lock-up: mark plus the two-line wordmark. */
export function Lockup({ width = 38, size = "sm" }: { width?: number; size?: "sm" | "md" }) {
  return (
    <span className="flex items-center gap-3.5">
      <Mark width={width} />
      <span
        className={`flex flex-col font-display font-medium leading-[1.45] tracking-[0.32em] ${size === "sm" ? "text-[11px]" : "text-[12px]"}`}
      >
        <span>AURUM</span>
        <span>ELEVEN</span>
      </span>
    </span>
  );
}
