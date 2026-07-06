interface Props {
  /** The eyebrow label, e.g. "featured work". Rendered uppercase. */
  label: string
  /** Keep the label's natural case instead of forcing uppercase (for longer eyebrows). */
  keepCase?: boolean
  className?: string
}

/**
 * Section eyebrow: a short teal accent line followed by a muted mono label.
 * Replaces the old "// label" code-comment marker for a more professional look.
 */
export default function Eyebrow({ label, keepCase = false, className = '' }: Props) {
  return (
    <p
      className={`flex items-center gap-3 font-mono text-xs tracking-widest text-gray-500 dark:text-gray-400 ${
        keepCase ? '' : 'uppercase'
      } ${className}`}
    >
      <span className="bg-primary-500 inline-block h-px w-6 shrink-0" aria-hidden="true" />
      {label}
    </p>
  )
}
