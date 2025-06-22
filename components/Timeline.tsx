// components/Timeline.tsx
import React from 'react'

// Define the structure of a single timeline item's data
interface TimelineItemData {
  year: string
  title: string
  icon: React.ElementType
  description: string[]
}

// The component for a single item on the timeline
const TimelineItem = ({ data, index }: { data: TimelineItemData; index: number }) => {
  const { year, title, icon: Icon, description } = data
  const isOdd = index % 2 !== 0

  return (
    <div className="relative mb-12 md:mb-8">
      {/* Centerpiece (Year and Icon) - Positioned absolutely on the timeline */}
      <div className="absolute left-1/2 top-0 z-10 flex w-auto -translate-x-1/2 flex-col items-center">
        <span className="text-xl font-bold text-gray-700 dark:text-gray-300">{year}</span>
        <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary-500 bg-gray-100 shadow-lg dark:bg-gray-900">
          <Icon className="text-primary-500" size={28} />
        </div>
      </div>

      {/* Content Card */}
      <div
        className={`w-full rounded-lg border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800 md:w-5/12 ${
          isOdd ? 'md:ml-auto' : 'md:mr-auto'
        }`}
        style={{ marginTop: '4.5rem' }} // Pushes the card down to clear the year/icon centerpiece
      >
        <h3 className="mb-2 font-bold text-primary-500">{title}</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-800 dark:text-gray-300">
          {description.join(' ')}
        </p>
      </div>
    </div>
  )
}

// The main Timeline container component
const Timeline = ({ data }: { data: TimelineItemData[] }) => {
  return (
    <div className="container mx-auto w-full max-w-5xl">
      <div className="relative wrap h-full overflow-hidden p-4 pt-8 md:p-10">
        {/* The vertical line */}
        <div
          className="absolute left-1/2 -ml-px h-full w-1 bg-gray-300 dark:bg-gray-700"
          aria-hidden="true"
        ></div>

        {data.map((item, index) => (
          <TimelineItem data={item} index={index} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Timeline