import Link from '@/components/Link'
import type { Project } from '@/data/projectsData'

/**
 * Case-study card: problem → outcome, tech chips, and an optional headline
 * metric. Used on the homepage "Featured work" section and the Projects page.
 */
export default function ProjectCard({ title, problem, outcome, stack, metric, href }: Project) {
  const body = (
    <div className="hover:border-primary-400 dark:hover:border-primary-500 flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 transition-colors dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        {metric && (
          <div className="shrink-0 text-right">
            <div className="text-primary-600 dark:text-primary-400 font-mono text-xl leading-none font-bold">
              {metric.value}
            </div>
            <div className="mt-1 text-[10px] text-gray-500 dark:text-gray-400">{metric.label}</div>
          </div>
        )}
      </div>

      <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">{problem}</p>
      <p className="mt-3 text-sm leading-6 text-gray-700 dark:text-gray-300">{outcome}</p>

      <ul className="mt-5 flex flex-wrap gap-2 pt-1">
        {stack.map((tech) => (
          <li
            key={tech}
            className="rounded-md bg-gray-100 px-2 py-1 font-mono text-[11px] text-gray-600 dark:bg-gray-800 dark:text-gray-300"
          >
            {tech}
          </li>
        ))}
      </ul>

      {href && (
        <span className="text-primary-600 dark:text-primary-400 mt-5 inline-flex items-center gap-1 text-sm font-medium">
          Read more <span aria-hidden="true">→</span>
        </span>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} aria-label={`${title}: read more`} className="block h-full">
        {body}
      </Link>
    )
  }
  return body
}
