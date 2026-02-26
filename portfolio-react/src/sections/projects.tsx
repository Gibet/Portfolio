import { forwardRef, useState } from 'react'
import type { ProjectProps, SectionProps } from '../utils/types'
import CustomSection from '../components/customSection'
import ProjectThumbnail from '../components/projects/thumbnail'
import * as ProjectsList from '../utils/projects.json'
import ProjectModal from '../components/projects/modal'
import { useResponsivePageSize } from '../hooks/useResponsive'

const categories = ['Tous', 'Web', 'Mobile']
/* const pageSize = 10 */

export const Projects = forwardRef<HTMLDivElement, SectionProps>(({ pinned, lower = false }, ref) => {

  const [currentCategory, setCurrentCategory] = useState(categories[0])  
  const [currentPage, setCurrentPage] = useState(1)
  const [viewModal, setViewModal] = useState(false)
  const [currentProject, setCurrentProject] = useState<ProjectProps>()
  const pageSize = useResponsivePageSize()

  const openModal = (project : ProjectProps) => {
    setCurrentProject(project)
    setViewModal(true)
  }
  
  return (
    <CustomSection id="projects" pinned={pinned} lower={lower} ref={ref} zIndex={3}>
      <div className="relative flex flex-col items-center w-5/6 h-full sm:py-20 py-6">
        <div className='container flex flex-col gap-2.5'>
          <h1 className="text-2xl font-bold">Mes Projets</h1>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => { setCurrentCategory(category); setCurrentPage(1); }}
                className={`px-4 py-2 mr-2 mb-2 ${currentCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4 container flex flex-col w-full h-full gap-5">
            <div className="flex flex-wrap content-start gap-5 h-full">
              {ProjectsList.projects.filter(project => currentCategory === 'Tous' || project.category === currentCategory).slice((currentPage - 1) * pageSize, currentPage * pageSize).map((project) => (
                <ProjectThumbnail key={project.name} project={project} onClick={() => {openModal(project)}} />
              ))}
            </div>
          <div className="flex justify-center">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 mr-2 mb-2 bg-gray-200 text-black rounded"
            >
              Précédent
            </button>
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-4 py-2 mr-2 mb-2 bg-gray-200 text-black rounded"
              disabled={currentPage * pageSize >= ProjectsList.projects.filter(project => currentCategory === 'Tous' || project.category === currentCategory).length}
            >
              Suivant
            </button>
          </div>
        </div>
      </div>
      { (viewModal && currentProject) &&
        <ProjectModal project={currentProject} onClose={() => setViewModal(false)} />
      }
    </CustomSection>
  )
})