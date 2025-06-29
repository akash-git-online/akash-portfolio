// app/my-journey/page.tsx
import Timeline from '@/components/Timeline'
import { resumeData } from '@/data/resume/resumeData'
import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link' // Import the Link component for the button
import { FaHandshake } from 'react-icons/fa'

export const metadata = genPageMetadata({ title: 'My Journey' })

export default function Page() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            My Journey
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A timeline of my experience in building scalable data solutions.
          </p>
        </div>

        {/* --- NEW: LinkedIn Button Section --- */}
        <div className="pt-8 pb-8">
          <Link
            href="https://www.linkedin.com/in/akash-singh93/"
            className="bg-primary-500 hover:bg-primary-600 focus:ring-primary-500 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white focus:ring-2 focus:ring-offset-2 focus:outline-none dark:ring-offset-black"
          >
            <FaHandshake className="h-4 w-4" />
            Say Hi on LinkedIn
          </Link>
        </div>
        {/* --- End of New Section --- */}

        <div className="py-12">
          <Timeline data={resumeData} />
        </div>
      </div>
    </>
  )
}
