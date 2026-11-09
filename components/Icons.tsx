// Decorative line icons: hidden from assistive technology, coloured through currentColor (no style attributes).
// The gold detail is a child element with its own text colour class.

type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...base} strokeWidth={2.25} className={className}>
      <path stroke="currentColor" d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

// Govern: a gate with its bar.
export function GateIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path stroke="currentColor" d="M5 21V4M19 21V4M3 21h18" />
      <path className="text-gold" stroke="currentColor" strokeWidth={2.5} d="M5 10h14" />
    </svg>
  );
}

// Trace: linked nodes of one thread.
export function ThreadIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path className="text-gold" stroke="currentColor" d="M6.6 16.2l3.8-7.6M14 7.6l3.6 6.4" />
      <circle stroke="currentColor" cx="5.5" cy="18" r="2.25" />
      <circle stroke="currentColor" cx="12" cy="6" r="2.25" />
      <circle stroke="currentColor" cx="18.5" cy="16" r="2.25" />
    </svg>
  );
}

// Prove: a shield with a check.
export function ShieldCheckIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path stroke="currentColor" d="M12 3l7 3v5.5c0 4.6-3 7.9-7 9.5-4-1.6-7-4.9-7-9.5V6z" />
      <path className="text-gold" stroke="currentColor" strokeWidth={2.25} d="M8.8 12.2l2.2 2.2 4.2-4.4" />
    </svg>
  );
}
