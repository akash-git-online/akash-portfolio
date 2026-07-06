import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <AuthorLayout content={mainContent}>
      <div>
        <MDXLayoutRenderer code={author.body.code} />

        <hr className="mt-10 mb-10 border-gray-200 dark:border-gray-800" />
        <div className="mb-12">
          <Skills />
        </div>

        <hr className="mb-10 border-gray-200 dark:border-gray-800" />
        <div>
          <Certifications />
        </div>
      </div>
    </AuthorLayout>
  )
}
