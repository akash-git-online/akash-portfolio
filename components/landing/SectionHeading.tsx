import Link from '@/components/Link'
import Eyebrow from '@/components/Eyebrow'

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
        <Eyebrow label={eyebrow} className="mb-2" />
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
