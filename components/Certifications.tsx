// components/Certifications.tsx
import React from 'react'
import { certificationsData } from '@/data/certifications/certificationsData'
import Image from '@/components/Image' // Import the Next.js Image component for optimization

const Certifications = () => {
  return (
    <div className="w-full">
      <h2 className="mb-6 text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
        Certifications
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {certificationsData.map((cert, index) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-900">
              {/* --- THIS IS THE NEW LOGIC --- */}
              {/* If an image source exists, render an Image component. */}
              {cert.imageSrc ? (
                <Image
                  src={cert.imageSrc}
                  alt={`${cert.name} logo`}
                  width={24} // Adjust size as needed
                  height={24}
                />
              ) : (
                /* Otherwise, fall back to rendering the Devicon icon class. */
                <i className={`${cert.iconClass} colored text-3xl`}></i>
              )}
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">{cert.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certifications