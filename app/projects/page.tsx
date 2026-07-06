import projectsData from '@/data/projectsData'
import ProjectCard from '@/components/ProjectCard'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-800">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <p className="text-primary-600 dark:text-primary-400 font-mono text-sm">
          <span className="text-gray-400 dark:text-gray-600">{'// '}</span>selected work
        </p>
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Projects
        </h1>
        <p className="max-w-2xl text-lg leading-7 text-gray-500 dark:text-gray-400">
          Case studies from real data engineering work — the problem, the approach, and the impact.
        </p>
      </div>
      <div className="py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projectsData.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </div>
  )
}
