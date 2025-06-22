// app/resume/page.tsx
import Timeline from '@/components/Timeline'
import { resumeData } from '@/data/resume/resumeData'
import { certificationsData } from '@/data/resume/certificationsData' // Import the certifications data
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Resume' })

export default function Page() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            My Professional Journey
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A timeline of my work experience and skills.
          </p>
        </div>

        {/* --- NEW CERTIFICATIONS SECTION --- */}
        <div className="py-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <h3 className="text-xl leading-7 font-bold text-gray-900 dark:text-gray-100">
              Certifications:
            </h3>
            <div className="flex flex-wrap gap-2">
              {/* We map over the certification data to create a badge for each */}
              {certificationsData.map((cert) => (
                <span
                  key={cert.name}
                  className="rounded-md bg-gray-100 px-2.5 py-1 text-sm font-medium text-gray-800 ring-1 ring-gray-200 ring-inset dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-700"
                >
                  {/* We only display the name of the certification issuer for a cleaner look */}
                  {cert.issuer}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* --- END OF NEW SECTION --- */}

        <div className="py-12">
          <Timeline data={resumeData} />
        </div>
      </div>
    </>
  )
}
