import { memo, forwardRef, useState } from 'react'
import type { ProjectProps, SectionProps } from '../utils/types'
import CustomSection from '../components/customSection'
import ProjectThumbnail from '../components/projects/thumbnail'
import ProjectsData from '../utils/projects.json'
import ProjectModal from '../components/projects/modal'
import { useResponsivePageSize } from '../hooks/useResponsive'
import { Container } from '../components/container'
import { ProjectsNavigation } from '../components/projects/navigation'
import CommandLine from '../components/commandLine'
import { splittingText } from '../utils/utils'
import ProjectsLogo from '../components/logo/projects'

const ProjectsList = ProjectsData as { projects: ProjectProps[] }
const categories = ['Tous', 'Web', 'Mobile']
/* const pageSize = 10 */

const ProjectsContent = ({ pinned, firstPinned, pinCount }: SectionProps, ref: React.Ref<HTMLDivElement>) => {

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
    <CustomSection id="projects" pinned={pinned} firstPinned={firstPinned} pinCount={pinCount} ref={ref} zIndex={3}>
      <Container variant='header' className='flex flex-col gap-2.5'>
        <CommandLine variant='title' title="Mes Projets" />
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
      <div className="sect-main relative grid md:grid-cols-5 gap-4 items-start w-11/12 sm:w-5/6 h-full md:py-12 py-6">
        <Container variant='text' className="text-sm hidden md:mt-4 md:block lg:col-span-1">
          <p className='terminal typed'>{splittingText("Voici une sélection de mes projets, mettant en avant mes compétences en développement web et mobile.")}</p>
          <div className="logo-container w-full flex justify-center items-center mt-3">
            <ProjectsLogo 
              color={'var(--accent)'}
              primaryColor={'var(--primary)'}
              strokeWidth={3}
              className='w-full h-auto'
            />
          </div>
        </Container>
        <Container variant='body' className="md:mt-4 md:col-span-4 flex flex-col w-full h-full gap-5">
            <div className="projects grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-5 content-start lg:gap-5 gap-2 h-full">
              {ProjectsList.projects.filter(project => currentCategory === 'Tous' || project.category === currentCategory).slice((currentPage - 1) * pageSize, currentPage * pageSize).map((project, index) => (
                <ProjectThumbnail key={project.name} project={project} onClick={() => {openModal(project)}} style={{ '--thumbnail--index': index } as React.CSSProperties} />
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
}

const Projects = forwardRef<HTMLDivElement, SectionProps>(ProjectsContent)
export default memo(Projects) as React.MemoExoticComponent<
  React.ForwardRefExoticComponent<SectionProps & React.RefAttributes<HTMLDivElement>>
>