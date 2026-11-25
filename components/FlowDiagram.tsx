import { AI } from "./AiWording";

// WR-07: one simple hero diagram, no screenshot needed. Requirement, build, independent tests, your approval, release.
// The labels come from the AI switch (components/AiWording.tsx): with the switch off the diagram names no AI.
// Colours are the site's theme tokens (fill-*, stroke-*), so it follows the light and dark themes. Text is 16px in a viewBox that
// scales to the container width; the accessible name and description are the title and desc.
const STEP_H = 54;
const GAP = 26;
const W = 340;

export function FlowDiagram() {
  const steps = AI.flow;
  const h = steps.length * STEP_H + (steps.length - 1) * GAP + 4;
  return (
    <svg
      role="img"
      aria-labelledby="flow-title flow-desc"
      viewBox={`0 0 ${W} ${h}`}
      className="mx-auto h-auto w-full max-w-sm"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="flow-title">How a release is made in AssuredForge</title>
      <desc id="flow-desc">{AI.flowAlt}</desc>
      {steps.map((label, i) => {
        const y = 2 + i * (STEP_H + GAP);
        const approval = i === 3;
        return (
          <g key={label}>
            <rect
              x={2}
              y={y}
              width={W - 4}
              height={STEP_H}
              rx={8}
              className={`fill-surface-alt ${approval ? "stroke-gold" : "stroke-accent"}`}
              strokeWidth={approval ? 3 : 1.5}
            />
            <text x={22} y={y + STEP_H / 2 + 6} fontSize={16} fontWeight={600} className="fill-ink">
              {i + 1}. {label}
            </text>
            {i < steps.length - 1 && (
              <g className="stroke-gold" strokeWidth={2} fill="none">
                <line x1={W / 2} y1={y + STEP_H + 2} x2={W / 2} y2={y + STEP_H + GAP - 6} />
                <polyline points={`${W / 2 - 6},${y + STEP_H + GAP - 12} ${W / 2},${y + STEP_H + GAP - 4} ${W / 2 + 6},${y + STEP_H + GAP - 12}`} />
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
}
