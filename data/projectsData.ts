export interface Project {
  /** Short, specific project name. */
  title: string
  /** The problem / context in one or two sentences. */
  problem: string
  /** The result or impact you delivered. */
  outcome: string
  /** Tech used — rendered as mono chips. */
  stack: string[]
  /** Optional headline metric, e.g. { value: '40%', label: 'faster loads' }. */
  metric?: { value: string; label: string }
  /** Optional link to a writeup, repo, or live demo. */
  href?: string
  /** Show on the homepage "Featured work" section. */
  featured?: boolean
}

// -----------------------------------------------------------------------------
// NOTE (Akash): these are DRAFT case studies scaffolded from your real roles so
// the layout looks complete. Refine the copy, add real metrics in `metric`, and
// link `href` to a writeup/repo when ready. Replace or add entries freely.
// -----------------------------------------------------------------------------

const projectsData: Project[] = [
  {
    title: 'Workforce Management System Migration',
    problem:
      'A legacy workforce management system needed to be upgraded without disrupting the business or losing historical data.',
    outcome:
      'Owned the end-to-end migration strategy and built the automated pipelines that moved and reconciled the data, delivering a single, trusted source of truth for reporting.',
    stack: ['Azure', 'Databricks', 'Python', 'Snowflake', 'SQL'],
    metric: { value: 'Zero', label: 'data loss on cutover' },
    featured: true,
  },
  {
    title: 'Insurance ETL & Historical Tracking',
    problem:
      'A large insurer was moving off legacy systems and needed reliable pipelines that preserved history for BI.',
    outcome:
      'Engineered the data migration frameworks and slowly-changing-dimension tracking that moved data into a modern warehouse and improved reporting timeliness.',
    stack: ['Ab Initio', 'Oracle', 'SQL', 'Power BI'],
    featured: true,
  },
  {
    title: 'Finance Data Pipeline: Single Source of Truth',
    problem: 'Finance and L&D teams were working from fragmented, inconsistent data sources.',
    outcome:
      'Built robust, automated pipelines that consolidated raw data into clean, governed datasets the business could rely on.',
    stack: ['Azure', 'dbt', 'Snowflake', 'Airflow'],
    featured: true,
  },
]

export default projectsData
