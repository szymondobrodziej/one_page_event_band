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

// Line icons for the facts row and "Co dostajesz" (client corrections, point 6): a 32px grid, a 1.5 stroke,
// butt caps and mitre joins, so they share the square edges of the buttons and frames. Drawn for this site.
const LINE_ICONS = {
  // The 11 of the A11 mark, drawn as a line.
  muzycy: <path d="M12 27V5L7.5 10M23 27V5L18.5 10" />,
  // A trumpet: mouthpiece, lead pipe and its loop, three capped valves, a flared bell.
  sekcja: (
    <path d="M2.5 12v4M2.5 14H19M6 14v4.5h13M19 14c4 0 6.5-2.5 9.5-5.5v15c-3-3-5.5-5-9.5-5M9 14V9.5M12.5 14V9.5M16 14V9.5M7.75 9.5h2.5M11.25 9.5h2.5M14.75 9.5h2.5" />
  ),
  // Two beamed notes.
  aranzacje: (
    <>
      <path d="M11.5 23V8.5L25.5 5.5V20M11.5 12.5L25.5 9.5" />
      <ellipse cx="8.4" cy="23.2" rx="3.4" ry="2.5" transform="rotate(-18 8.4 23.2)" />
      <ellipse cx="22.4" cy="20.2" rx="3.4" ry="2.5" transform="rotate(-18 22.4 20.2)" />
    </>
  ),
  // A handheld vocal microphone.
  kontakt: (
    <>
      <circle cx="16" cy="9.5" r="5" />
      <path d="M11 9.5h10M12.6 13.2L14.5 27.5h3l1.9-14.3" />
    </>
  ),
  // Three faders of a mixing desk.
  realizator: (
    <>
      <path d="M8 4v6M8 15v13M16 4v15M16 24v4M24 4v2M24 11v17" />
      <rect x="5" y="10" width="6" height="5" />
      <rect x="13" y="19" width="6" height="5" />
      <rect x="21" y="6" width="6" height="5" />
    </>
  ),
  // A clock at forty minutes past.
  sety: (
    <>
      <circle cx="16" cy="16" r="11.5" />
      <path d="M16 16V7.5M16 16L8.6 20.3" />
    </>
  ),
  // The offer arriving: an envelope.
  wycena: (
    <>
      <rect x="4.5" y="7.5" width="23" height="17" />
      <path d="M4.5 7.5L16 17l11.5-9.5" />
    </>
  ),
  // A contract with a signature.
  umowa: <path d="M7.5 4.5h12l5 5v18h-17zM19.5 4.5v5h5M11 14h10M11 21.5c1.5-3 2.5-3 3 0s1.8 1.6 3.2-.6c.9-1.4 1.6-1 2.3.6" />,
  // The evening's running order.
  scenariusz: (
    <>
      <path d="M8 6v20M13 8h13M13 16h13M13 24h9" />
      <path d="M6 6h4v4H6zM6 14h4v4H6zM6 22h4v4H6z" fill="currentColor" stroke="none" />
    </>
  ),
  // A loudspeaker cabinet.
  produkcja: (
    <>
      <rect x="8.5" y="4.5" width="15" height="23" />
      <circle cx="16" cy="19" r="5" />
      <circle cx="16" cy="10" r="2" />
    </>
  ),
};

export type IconName = keyof typeof LINE_ICONS;

export function LineIcon({ name, className }: IconProps & { name: IconName }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {LINE_ICONS[name]}
    </svg>
  );
}
