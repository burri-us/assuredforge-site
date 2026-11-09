// Direction A "Thread Check" (DEC-271 D-12): an "A" whose crossbar is a check breaking past the right leg.
// Colours follow the theme tokens, so the mark switches with dark mode. Decorative: the adjacent wordmark names it.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      strokeWidth={6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={true}
      focusable={false}
      className={className}
    >
      <path className="text-ink" stroke="currentColor" d="M14 54L32 10l18 44" />
      <path className="text-gold" stroke="currentColor" d="M20 37l8 8 26-21" />
    </svg>
  );
}
