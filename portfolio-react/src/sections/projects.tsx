import { forwardRef, useState } from 'react'
import type { SectionProps } from '../utils/types'
import CustomSection from '../components/customSection'
import { ProjectThumbnail } from '../components/projects/thumbnail'
import * as ProjectsList from '../utils/projects.json'

const categories = ['Tous', 'Web', 'Mobile']

export const Projects = forwardRef<HTMLDivElement, SectionProps>(({ pinned, lower = false }, ref) => {

  const [currentCategory, setCurrentCategory] = useState(categories[0])  
  
  return (
    <CustomSection id="projects" pinned={pinned} lower={lower} ref={ref} zIndex={3}>
      <div className="flex flex-col items-center w-5/6 h-full sm:py-20 py-10">
        <div className='container flex flex-col gap-2.5'>
          <h1 className="text-2xl font-bold">Mes Projets</h1>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setCurrentCategory(category)}
                className={`px-4 py-2 mr-2 mb-2 ${currentCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4 container w-full h-full">
            {ProjectsList.projects.filter(project => currentCategory === 'Tous' || project.category === currentCategory).map((project) => (
              <ProjectThumbnail key={project.name} {...project} />
            ))}
        </div>
      </div>
      
    </CustomSection>
  )
})