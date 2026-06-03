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

export function Snowflake({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      {Array.from({ length: 6 }).map((_, i) => (
        <g key={i} transform={`rotate(${i * 60} 12 12)`} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <line x1="12" y1="12" x2="12" y2="2.5" />
          <line x1="12" y1="5.5" x2="9.6" y2="3.6" />
          <line x1="12" y1="5.5" x2="14.4" y2="3.6" />
        </g>
      ))}
    </svg>
  )
}

export function Flame({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 22c-3.9 0-6.5-2.5-6.5-6.1 0-2.2 1.1-4 2.3-5.6.9-1.2 1.9-2.4 2.4-3.9.2-.5.8-.7 1.2-.3 1 1 1.7 2.2 2 3.4.5-.5.9-1.1 1.2-1.8.2-.5.8-.6 1.2-.2 1.7 1.8 2.7 4.2 2.7 6.4 0 3.6-2.6 6.1-6.5 6.1z"
        fill="currentColor"
      />
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

/** Thin slat band with a centered fan-grille emblem — reads as a supply vent. */
export function LouverDivider() {
  return (
    <div aria-hidden="true" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-center h-12">
        <div
          className="absolute inset-x-0 h-3"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(15,22,32,0.13) 0 3px, transparent 3px 12px)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, black 18%, black 82%, transparent)',
            maskImage: 'linear-gradient(90deg, transparent, black 18%, black 82%, transparent)',
          }}
        />
        <span className="relative flex items-center justify-center w-11 h-11 rounded-full bg-white ring-1 ring-slate-200 shadow-sm text-[#C8330A]">
          <FanGrille className="w-7 h-7" />
        </span>
      </div>
    </div>
  )
}

/** Floating thermostat status card for the hero photo — cool mode active. */
export function ThermostatChip() {
  return (
    <div className="hidden sm:flex items-center gap-3 absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl ring-1 ring-black/5 pl-3 pr-4 py-2.5">
      <span className="relative flex items-center justify-center w-12 h-12 rounded-full border-[2.5px] border-[#0f1620]">
        <span className="absolute inset-1 rounded-full border-2 border-[#C8330A]/15" aria-hidden="true" />
        <span className="font-display font-extrabold text-[0.95rem] leading-none text-[#C8330A]">72&deg;</span>
      </span>
      <span>
        <span className="block text-xs font-bold text-slate-900 leading-tight">Set to cool</span>
        <span className="flex items-center gap-1.5 mt-1">
          <Snowflake className="w-3.5 h-3.5 text-[#C8330A]" />
          <Flame className="w-3.5 h-3.5 text-slate-300" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">Cool &middot; Heat</span>
        </span>
      </span>
    </div>
  )
}
