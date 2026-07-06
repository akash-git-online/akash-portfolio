import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import Image from '@/components/Image'
import SocialIcon from '@/components/social-icons'
import CareerTimeline from '@/components/CareerTimeline'
import { resumeData } from '@/data/resume/resumeData'
import Reveal from '@/components/landing/Reveal'
import SectionHeading from '@/components/landing/SectionHeading'
import Eyebrow from '@/components/Eyebrow'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const content = coreContent(author)
  const { name, avatar, occupation, company, email, linkedin, github } = content

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-800">
      {/* Intro */}
      <section className="py-10">
        <Eyebrow label="about" className="mb-6" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-[auto_1fr] sm:gap-10">
          <div className="flex flex-col items-start gap-4">
            {avatar && (
              <Image
                src={avatar}
                alt={name}
                width={160}
                height={160}
                className="h-40 w-40 rounded-2xl object-cover"
              />
            )}
            <div className="flex items-center gap-3">
              <SocialIcon kind="mail" href={`mailto:${email}`} size={6} />
              <SocialIcon kind="github" href={github} size={6} />
              <SocialIcon kind="linkedin" href={linkedin} size={6} />
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
              {name}
            </h1>
            <p className="text-primary-600 dark:text-primary-400 mt-2 font-mono text-sm">
              {occupation}
              {company ? ` @ ${company}` : ''}
            </p>
            <div className="prose dark:prose-invert mt-5 max-w-none text-gray-600 dark:text-gray-300">
              <MDXLayoutRenderer code={author.body.code} />
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400 rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-colors dark:text-gray-950"
              >
                Connect on LinkedIn
              </a>
              <a
                href={`mailto:${email}`}
                className="hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 rounded-md border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-900 transition-colors dark:border-gray-700 dark:text-gray-100"
              >
                Email me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-12">
        <Reveal>
          <SectionHeading eyebrow="career log" title="Experience" />
        </Reveal>
        <Reveal>
          <CareerTimeline data={resumeData} />
        </Reveal>
      </section>
    </div>
  )
}
