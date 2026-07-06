import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import skillsData from '@/data/skills/skillsData'
import Hero from '@/components/landing/Hero'
import Reveal from '@/components/landing/Reveal'
import SectionHeading from '@/components/landing/SectionHeading'
import Eyebrow from '@/components/Eyebrow'
import ProjectCard from '@/components/ProjectCard'
import { formatDate } from 'pliny/utils/formatDate'

// Key tech shown in the trust strip.
const trustTech = [
  'Azure',
  'Snowflake',
  'Databricks',
  'dbt',
  'Airflow',
  'Python',
  'Spark',
  'Power BI',
]

export default function Page() {
  const featured = projectsData.filter((p) => p.featured).slice(0, 3)
  const posts = allCoreContent(sortPosts(allBlogs)).slice(0, 3)
  const skillNames = skillsData.map((s) => s.name)

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-800">
      <Hero />

      {/* Trust strip */}
      <Reveal>
        <section className="py-8">
          <Eyebrow label="working daily with" className="mb-4" />
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {trustTech.map((t) => (
              <li key={t} className="font-mono text-sm text-gray-500 dark:text-gray-400">
                {t}
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      {/* Featured work */}
      <section className="py-14">
        <Reveal>
          <SectionHeading
            eyebrow="featured work"
            title="Selected case studies"
            action={{ href: '/projects', label: 'All projects' }}
          />
        </Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <ProjectCard {...p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills snapshot */}
      <section className="py-14">
        <Reveal>
          <SectionHeading
            eyebrow="the toolbox"
            title="Skills & technologies"
            action={{ href: '/about', label: 'Full profile' }}
          />
        </Reveal>
        <Reveal>
          <ul className="flex flex-wrap gap-2">
            {skillNames.map((name) => (
              <li
                key={name}
                className="rounded-md border border-gray-200 px-3 py-1.5 font-mono text-sm text-gray-600 dark:border-gray-800 dark:text-gray-300"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Selected writing */}
      {posts.length > 0 && (
        <section className="py-14">
          <Reveal>
            <SectionHeading
              eyebrow="writing"
              title="From the blog"
              action={{ href: '/blog', label: 'All posts' }}
            />
          </Reveal>
          <ul className="divide-y divide-gray-200 dark:divide-gray-800">
            {posts.map((post) => (
              <Reveal key={post.slug}>
                <li className="py-5">
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <p className="font-mono text-xs text-gray-400 dark:text-gray-600">
                      {formatDate(post.date, siteMetadata.locale)}
                    </p>
                    <h3 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 mt-1 text-lg font-bold text-gray-900 dark:text-gray-100">
                      {post.title}
                    </h3>
                    {post.summary && (
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {post.summary}
                      </p>
                    )}
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </section>
      )}

      {/* Contact band */}
      <Reveal>
        <section className="py-16 text-center">
          <Eyebrow label="let's build something reliable" className="mb-3 justify-center" />
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl dark:text-gray-100">
            Hiring, or need a pipeline built?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-gray-500 dark:text-gray-400">
            I'm open to data engineering roles and freelance work. Let's talk about your data.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${siteMetadata.mail}`}
              className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400 rounded-md px-6 py-3 text-sm font-semibold text-white transition-colors dark:text-gray-950"
            >
              Email me
            </a>
            <a
              href={siteMetadata.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition-colors dark:border-gray-700 dark:text-gray-100"
            >
              Connect on LinkedIn
            </a>
          </div>
        </section>
      </Reveal>
    </div>
  )
}
