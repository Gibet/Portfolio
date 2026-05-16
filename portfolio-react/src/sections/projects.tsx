import { forwardRef, useState } from 'react'
import type { ProjectProps, SectionProps } from '../utils/types'
import CustomSection from '../components/customSection'
import ProjectThumbnail from '../components/projects/thumbnail'
import ProjectsData from '../utils/projects.json'
import ProjectModal from '../components/projects/modal'
import { useResponsivePageSize } from '../hooks/useResponsive'
import { Container } from '../components/container'
import { ProjectsNavigation } from '../components/projects/navigation'
import { CommandLine } from '../components/commandLine'

const ProjectsList = ProjectsData as { projects: ProjectProps[] }
const categories = ['Tous', 'Web', 'Mobile']
/* const pageSize = 10 */

export const Projects = forwardRef<HTMLDivElement, SectionProps>(({ pinned, firstPinned, pinCount, lower = false }, ref) => {

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
    <CustomSection id="projects" pinned={pinned} firstPinned={firstPinned} pinCount={pinCount} lower={lower} ref={ref} zIndex={3}>
      <div className="relative flex flex-col items-center w-11/12 sm:w-5/6 h-full sm:py-20 py-6">
        <Container variant='header' className='flex flex-col gap-2.5'>
          <CommandLine title="Mes Projets" />
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => { setCurrentCategory(category); setCurrentPage(1); }}
                className={`px-3 py-1 text-xs ${currentCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
        <Container variant='body' className="sm: mt-4 flex flex-col w-full h-full gap-5">
            <div className="flex flex-wrap content-start sm:m-6 lg:gap-5 gap-2 h-full">
              {ProjectsList.projects.filter(project => currentCategory === 'Tous' || project.category === currentCategory).slice((currentPage - 1) * pageSize, currentPage * pageSize).map((project) => (
                <ProjectThumbnail key={project.name} project={project} onClick={() => {openModal(project)}} />
              ))}
            </div>
            <ProjectsNavigation
            ProjectsList={ProjectsList}
            currentCategory={currentCategory}
            currentPage={currentPage}
            pageSize={pageSize}
            openModal={openModal}
            setCurrentPage={setCurrentPage}
          />
        </Container>
      </div>
      { (viewModal && currentProject) &&
        <ProjectModal project={currentProject} onClose={() => setViewModal(false)} />
      }
    </CustomSection>
  )
})