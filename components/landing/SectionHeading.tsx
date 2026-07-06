import Link from '@/components/Link'

interface Props {
  /** Mono eyebrow label, e.g. "featured work". */
  eyebrow: string
  title: string
  /** Optional "see all" style link on the right. */
  action?: { href: string; label: string }
}

export default function SectionHeading({ eyebrow, title, action }: Props) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <p className="text-primary-600 dark:text-primary-400 mb-2 font-mono text-xs tracking-wide">
          <span className="text-gray-400 dark:text-gray-600">{'// '}</span>
          {eyebrow}
        </p>
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl dark:text-gray-100">
          {title}
        </h2>
      </div>
      {action && (
        <Link
          href={action.href}
          className="hover:text-primary-600 dark:hover:text-primary-400 shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400"
        >
          {action.label} <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  )
}
