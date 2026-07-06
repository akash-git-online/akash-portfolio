// components/Timeline.tsx
import React from 'react'
// We only need the main icons now, not the skill icons
import { Briefcase, Building, GraduationCap, Code2, LucideProps } from 'lucide-react'

// Mapping for the main timeline icons
const iconMap: { [key: string]: React.ElementType<LucideProps> } = {
  Briefcase,
  Building,
  GraduationCap,
  Code2,
}

// The data structure no longer needs the 'skills' array
interface TimelineItemData {
  year: string
  title: string
  icon: string
  description: string[]
  skills?: string[] // Kept optional for backward compatibility, but we won't use it
}

const Timeline = ({ data }: { data: TimelineItemData[] }) => {
  return (
    <div className="w-full max-w-3xl">
      <ol className="relative border-s border-gray-200 dark:border-gray-800">
        {data.map((item, index) => {
          const Icon = iconMap[item.icon]
          return (
            <li key={index} className="ms-8 mb-10">
              <span className="bg-primary-100 dark:bg-primary-900/40 absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white dark:ring-gray-950">
                {Icon && <Icon className="text-primary-700 dark:text-primary-300 h-4 w-4" />}
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <time className="mb-2 block font-mono text-sm leading-none font-normal text-gray-400 dark:text-gray-500">
                {item.year}
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {item.description.join(' ')}
              </p>

              {item.skills && item.skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="rounded-md bg-gray-100 px-2.5 py-1 font-mono text-xs font-medium text-gray-600 ring-1 ring-gray-200 ring-inset dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default Timeline
