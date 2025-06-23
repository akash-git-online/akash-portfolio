/*
import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}*/

// app/page.tsx
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
      {/* This div groups all the content in the right-hand scrollable column */}
      <div>
        {/* This renders your "About Me" paragraph */}
        <MDXLayoutRenderer code={author.body.code} />

        {/* This adds a clear dividing line with margin-top for spacing */}
        <hr className="mt-10 mb-10 border-gray-200 dark:border-gray-700" />

        {/* This is the container for your skills */}
        <div className="mb-12">
          <Skills />
        </div>

        {/* This adds another dividing line */}
        <hr className="mb-10 border-gray-200 dark:border-gray-700" />

        {/* This is the container for your certifications */}
        <div>
          <Certifications />
        </div>
      </div>
    </AuthorLayout>
  )
}
