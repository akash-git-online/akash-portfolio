/**
 * Animated data-pipeline DAG — the site's signature "data-viz" motif.
 *
 * Three sources → a transform stage → a warehouse → BI / ML outputs, with
 * teal "packets" flowing along the edges. Pure SVG + CSS (the `.data-flow` and
 * `.node-pulse` classes in css/tailwind.css); no animation library. Motion is
 * disabled under prefers-reduced-motion via those same classes.
 *
 * This is a server component — it renders static markup and the browser drives
 * the animation with CSS, so no `'use client'` is needed.
 */

const primary = 'var(--color-primary-500)'

interface EdgeProps {
  d: string
  /** Stagger the flowing packet so the whole graph doesn't pulse in lockstep. */
  delay?: number
}

function Edge({ d, delay = 0 }: EdgeProps) {
  return (
    <g fill="none">
      {/* static wire */}
      <path d={d} className="stroke-gray-300 dark:stroke-gray-700" strokeWidth={1.5} />
      {/* flowing packet */}
      <path
        d={d}
        pathLength={1}
        className="data-flow"
        stroke={primary}
        strokeWidth={2.5}
        strokeLinecap="round"
        style={delay ? { animationDelay: `${delay}s` } : undefined}
      />
    </g>
  )
}

interface NodeProps {
  x: number
  y: number
  w: number
  h: number
  label: string
  sub?: string
  accent?: boolean
}

function Node({ x, y, w, h, label, sub, accent }: NodeProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={8}
        className={
          accent
            ? 'fill-primary-50 stroke-primary-500 dark:fill-primary-950/40'
            : 'fill-white stroke-gray-300 dark:fill-gray-900 dark:stroke-gray-700'
        }
        strokeWidth={1.5}
      />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 3 : y + h / 2 + 4}
        textAnchor="middle"
        className="fill-gray-900 font-mono dark:fill-gray-100"
        style={{ fontSize: 11, fontWeight: 600, letterSpacing: 0.5 }}
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 12}
          textAnchor="middle"
          className="fill-gray-500 font-mono dark:fill-gray-400"
          style={{ fontSize: 8.5 }}
        >
          {sub}
        </text>
      )}
    </g>
  )
}

export default function PipelineDiagram() {
  return (
    <svg
      viewBox="0 0 480 360"
      role="img"
      aria-label="A data pipeline: three sources feed a transform stage, into a warehouse, out to BI and ML."
      className="h-auto w-full max-w-lg"
    >
      {/* edges (drawn first so nodes sit on top) */}
      <Edge d="M110 70 C 160 70, 160 165, 205 165" delay={0} />
      <Edge d="M110 180 L 205 180" delay={0.5} />
      <Edge d="M110 290 C 160 290, 160 195, 205 195" delay={1} />
      <Edge d="M300 180 L 345 180" delay={0.4} />
      <Edge d="M440 165 C 470 165, 470 90, 452 90" delay={0.9} />
      <Edge d="M440 195 C 470 195, 470 270, 452 270" delay={1.3} />

      {/* source nodes */}
      <Node x={40} y={52} w={70} h={36} label="API" sub="events" />
      <Node x={40} y={162} w={70} h={36} label="DB" sub="postgres" />
      <Node x={40} y={272} w={70} h={36} label="FILES" sub="csv · parquet" />

      {/* transform (accent — the heart of the work) */}
      <Node x={205} y={150} w={95} h={60} label="TRANSFORM" sub="dbt · spark" accent />

      {/* warehouse */}
      <Node x={345} y={155} w={95} h={50} label="WAREHOUSE" sub="snowflake" />

      {/* outputs */}
      <Node x={420} y={72} w={56} h={34} label="BI" sub="power bi" />
      <Node x={420} y={253} w={56} h={34} label="ML" sub="models" />

      {/* pulsing status dots on the transform node */}
      <circle cx={216} cy={161} r={3} className="node-pulse" fill={primary} />
      <circle
        cx={228}
        cy={161}
        r={3}
        className="node-pulse"
        fill={primary}
        style={{ animationDelay: '0.8s' }}
      />
    </svg>
  )
}
