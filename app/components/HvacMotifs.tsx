/**
 * HVAC trade-identity motifs — North East Heating And Cooling.
 * Pure SVG server components, colored via currentColor so each placement
 * sets its own tone with a text-* class. Animations (.hvac-spin / .hvac-flow)
 * live in globals.css and respect prefers-reduced-motion.
 */

export function FanGrille({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2" />
      <circle cx="100" cy="100" r="66" stroke="currentColor" strokeWidth="2" />
      <circle cx="100" cy="100" r="42" stroke="currentColor" strokeWidth="2" />
      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={i}
          x1="100" y1="78" x2="100" y2="10"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          transform={`rotate(${i * 30} 100 100)`}
        />
      ))}
      <circle cx="100" cy="100" r="12" fill="currentColor" />
    </svg>
  )
}

export function PressureGauge({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="3" />
      {Array.from({ length: 11 }).map((_, i) => (
        <line
          key={i}
          x1="100" y1="22" x2="100" y2="34"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
          transform={`rotate(${-135 + i * 27} 100 100)`}
        />
      ))}
      <line x1="100" y1="100" x2="148" y2="62" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <circle cx="100" cy="100" r="8" fill="currentColor" />
    </svg>
  )
}

export function AirflowLines({ className = '' }: { className?: string }) {
  const wave = (y: number) =>
    `M-40 ${y} C 200 ${y - 60}, 460 ${y + 50}, 740 ${y - 15} S 1260 ${y + 40}, 1480 ${y - 25}`
  return (
    <svg viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none" className={className} aria-hidden="true">
      {[110, 250, 390, 520].map((y, i) => (
        <path
          key={y}
          d={wave(y)}
          stroke="currentColor"
          strokeWidth={i % 2 ? 1.5 : 2}
          strokeLinecap="round"
          className="hvac-flow"
          opacity={i % 2 ? 0.55 : 0.9}
        />
      ))}
    </svg>
  )
}
