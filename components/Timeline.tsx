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
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {data.map((item, index) => {
          const Icon = iconMap[item.icon]
          return (
            <li key={index} className="ms-8 mb-10">
              <span className="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                {Icon && <Icon className="h-4 w-4 text-blue-800 dark:text-blue-300" />}
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <time className="mb-2 block text-sm leading-none font-normal text-gray-400 dark:text-gray-500">
                {item.year}
              </time>
              <p className="mb-4 text-justify text-base font-normal text-gray-500 dark:text-gray-400">
                {item.description.join(' ')}
              </p>

              {/* --- THIS IS THE UPDATED SKILLS SECTION --- */}
              {item.skills && item.skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    // This is now a simple text badge with no icon
                    <span
                      key={skillIndex}
                      className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800 ring-1 ring-gray-200 ring-inset dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-700"
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
