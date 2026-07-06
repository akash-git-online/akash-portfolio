import React from 'react'
import { Briefcase, GraduationCap, LucideProps } from 'lucide-react'

const iconMap: { [key: string]: React.ElementType<LucideProps> } = {
  Briefcase,
  GraduationCap,
}

interface CareerItem {
  year: string
  title: string
  icon: string
}

/**
 * Minimal, horizontal career track styled like a data pipeline: milestones are
 * nodes on a teal-accented line flowing earliest -> now, the current role
 * pulsing. Shows only year + role + company (no descriptions or skill badges).
 * Server component; motion is CSS-driven (`.node-pulse`) and respects
 * prefers-reduced-motion. Scrolls horizontally on narrow screens.
 */
export default function CareerTimeline({ data }: { data: CareerItem[] }) {
  // Display oldest -> newest so the track reads left (past) to right (now).
  const items = [...data].reverse()

  return (
    <ol className="no-scrollbar flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2">
      {items.map((item, index) => {
        const Icon = iconMap[item.icon] ?? Briefcase
        const [role, ...rest] = item.title.split(',')
        const org = rest.join(',').trim()
        const isCurrent = /present/i.test(item.year)
        const isFirst = index === 0
        const isLast = index === items.length - 1

        return (
          <li
            key={index}
            className="flex min-w-[150px] flex-1 snap-center flex-col items-center text-center"
          >
            <span className="mb-3 font-mono text-xs whitespace-nowrap text-gray-500 dark:text-gray-400">
              {item.year}
            </span>

            {/* node band: the connecting line spans each cell and joins across cells */}
            <div className="relative flex h-12 w-full items-center justify-center">
              <span
                className={`absolute top-1/2 h-px -translate-y-1/2 bg-gray-200 dark:bg-gray-700 ${
                  isFirst ? 'right-0 left-1/2' : isLast ? 'right-1/2 left-0' : 'right-0 left-0'
                }`}
                aria-hidden="true"
              />
              {isCurrent && (
                <span
                  className="node-pulse bg-primary-500/25 absolute h-11 w-11 rounded-full"
                  aria-hidden="true"
                />
              )}
              <div
                className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 ${
                  isCurrent
                    ? 'border-primary-500 bg-primary-500 text-white dark:text-gray-950'
                    : 'border-primary-300 dark:border-primary-700 text-primary-600 dark:text-primary-400 bg-white dark:bg-gray-900'
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-3 px-1">
              <p className="text-sm leading-tight font-semibold text-gray-900 dark:text-gray-100">
                {role.trim()}
              </p>
              {org && <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{org}</p>}
            </div>
          </li>
        )
      })}
    </ol>
  )
}
