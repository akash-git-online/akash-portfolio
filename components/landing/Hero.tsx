import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import PipelineDiagram from './PipelineDiagram'

const stats = [
  { value: '8+', label: 'years in data' },
  { value: '5', label: 'certifications' },
  { value: '3', label: 'cloud platforms' },
]

export default function Hero() {
  return (
    <section className="grid grid-cols-1 items-center gap-10 pt-10 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:pt-16">
      {/* Copy */}
      <div>
        <p className="text-primary-600 dark:text-primary-400 mb-5 font-mono text-sm">
          <span className="text-gray-400 dark:text-gray-600">{'// '}</span>
          Senior Data Engineer · Azure · Snowflake · Databricks
        </p>

        <h1 className="text-4xl leading-[1.1] font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-gray-100">
          Data platforms that turn raw data into{' '}
          <span className="text-primary-600 dark:text-primary-400">decisions</span>.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          I'm Akash — I design and build the cloud pipelines, warehouses, and orchestration that
          keep data flowing reliably, so teams can trust the numbers they act on.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/projects"
            className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400 rounded-md px-6 py-3 text-sm font-semibold text-white transition-colors dark:text-gray-950"
          >
            View projects
          </Link>
          <a
            href={`mailto:${siteMetadata.mail}`}
            className="hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition-colors dark:border-gray-700 dark:text-gray-100"
          >
            Let's talk
          </a>
        </div>

        {/* Stat strip */}
        <dl className="mt-12 flex gap-8 border-t border-gray-200 pt-6 dark:border-gray-800">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="text-primary-600 dark:text-primary-400 font-mono text-2xl font-bold">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs text-gray-500 dark:text-gray-400">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Signature data-flow diagram */}
      <div className="flex justify-center lg:justify-end">
        <PipelineDiagram />
      </div>
    </section>
  )
}
