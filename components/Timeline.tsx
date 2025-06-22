// 1. UPDATED: components/Timeline.tsx
// The <p> tag has been replaced with a <ul> to render bullet points.

import React from 'react'
// Import the main icons from lucide-react
import { Briefcase, Building, GraduationCap, Code2, LucideProps } from 'lucide-react'
// Import the NEW tech icons from react-icons
import {
  SiPython,
  SiTerraform,
  SiAmazon,
  SiDocker,
  SiDatabricks,
  SiSnowflake,
  SiOracle,
  SiGitlab, // Added for completeness
} from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'

// Mapping for the main timeline icons
const iconMap: { [key: string]: React.ElementType<LucideProps> } = {
  Briefcase,
  Building,
  GraduationCap,
  Code2,
}

// Mapping for the skill icons
const skillIconMap: { [key: string]: React.ElementType } = {
  PySpark: SiPython,
  SQL: GrMysql,
  'Power BI': Code2,
  Databricks: SiDatabricks,
  Snowflake: SiSnowflake,
  Oracle: SiOracle,
  Terraform: SiTerraform,
  Docker: SiDocker,
  'GitHub Actions': SiGitlab,
  AWS: SiAmazon,
  // Fallback for general terms
  'Ab Initio': Code2,
  'Data Quality': Code2,
}

// Define the data structure, now including the optional skills array
interface TimelineItemData {
  year: string
  title: string
  icon: string
  description: string[]
  skills?: string[]
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

              {/* --- THIS IS THE UPDATED PART --- */}
              {/* We now render an unordered list (ul) for the description points */}
              <ul className="mb-4 list-disc space-y-1 pl-5 text-base font-normal text-gray-500 dark:text-gray-400">
                {item.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {item.skills && (
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => {
                    const SkillIcon = skillIconMap[skill]
                    return (
                      <span
                        key={skillIndex}
                        className="inline-flex items-center gap-x-1.5 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800 ring-1 ring-gray-200 ring-inset dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-700"
                      >
                        {SkillIcon && <SkillIcon className="h-3 w-3" />}
                        {skill}
                      </span>
                    )
                  })}
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
