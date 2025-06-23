// components/Skills.tsx
import React from 'react'
import skillsData from '@/data/skills/skillsData'
import Image from '@/components/Image'

const Skills = () => {
  return (
    <div className="w-full">
      <h2 className="mb-8 text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10">
        My Skills
      </h2>
      {/* This flex container now has smaller gaps */}
      <div className="flex flex-wrap gap-x-4 gap-y-3">
        {skillsData.map((skill, index) => (
          // The hover effect has been removed from this container
          <div key={index} className="flex items-center gap-2">
            {skill.imageSrc ? (
              <Image src={skill.imageSrc} alt={`${skill.name} logo`} width={24} height={24} />
            ) : (
              <i className={`${skill.iconClass} colored text-2xl`}></i>
            )}
            <p className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills