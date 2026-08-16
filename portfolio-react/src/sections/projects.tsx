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
import { GitHubCalendar } from 'react-github-calendar';
import 'react-activity-calendar/tooltips.css'
import { Cog, Github } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const ProjectsList = ProjectsData as { projects: ProjectProps[] }
const categories = ['All', 'Web', 'Mobile']
/* const pageSize = 10 */

const ProjectsContent = ({ pinned, firstPinned, pinCount }: SectionProps, ref: React.Ref<HTMLDivElement>) => {

  const { t } = useTranslation()
  const [currentCategory, setCurrentCategory] = useState(categories[0])  
  const [currentPage, setCurrentPage] = useState(1)
  const [viewModal, setViewModal] = useState(false)
  const [currentProject, setCurrentProject] = useState<ProjectProps>()
  const pageSize = useResponsivePageSize()

  const openModal = (project : ProjectProps) => {
    setCurrentProject(project)
    setViewModal(true)
  }

  const ActivityColorTheme = {
    light: ['var(--buttonBg)', 'var(--accent)'],
    dark: ['var(--buttonBg)', 'var(--accent)']
  }

  const getLastThreeMonth = (contributions: any) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 3;

    return contributions.filter((activity: any) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  }
  
  return (
    <CustomSection id="projects" pinned={pinned} firstPinned={firstPinned} pinCount={pinCount} ref={ref} zIndex={3}>
      <Container variant='header' className='flex flex-col gap-2.5'>
        <CommandLine variant='title' title="" subtitle={t("projects.title")}>
          <Cog size={18} className="ml-2" />
        </CommandLine>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => { setCurrentCategory(category); setCurrentPage(1); }}
              className={`px-3 py-1 text-xs ${currentCategory === category ? 'active' : ''}`}
            >
              {t(`projects.${category.toLowerCase()}`)}
            </button>
          ))}
        </div>
      </Container>
      <div className="sect-main relative grid md:grid-cols-5 gap-4 items-start w-11/12 sm:w-5/6 h-full md:py-12 py-6">
        <div className='hidden md:mt-4 md:block lg:col-span-1'>
          <Container variant='text' className="text-sm">
            <p className='terminal typed'>{splittingText(t("projects.description"))}</p>
            <div className="logo-container w-full flex justify-center items-center mt-3">
              <ProjectsLogo 
                color={'var(--accent)'}
                primaryColor={'var(--primary)'}
                strokeWidth={3}
                className='w-full h-auto logo-draw'
              />
            </div>
          </Container>
          <Container variant='body' className='mt-4 github_activity hidden xl:block'>
            <CommandLine title="" subtitle={t("projects.activity")}>
              <Github size={18} className="ml-2" color='var(--primary)'/>
            </CommandLine>
            <div className="w-full flex items-center justify-center">
              <GitHubCalendar username='Gibet'
                showTotalCount={false}
                showColorLegend={false}
                weekStart={1}
                transformData={getLastThreeMonth}
                className='mt-4'
                theme={ActivityColorTheme}
                labels={{
                  months: t("projects.months", { returnObjects: true }) as string[],
                }}
                tooltips={{
                  activity: {
                    text: activity => `${activity.level} activité${activity.level > 1 ? 's' : ''} le ${activity.date}`,
                    placement: 'right',
                    offset: 6,
                    transitionStyles: {
                      duration: 100,
                      common: { fontFamily: 'JetBrains Mono' },
                    },
                    withArrow: true,
                  },
                }}
              />
            </div>
          </Container>
        </div>
        <Container variant='body' className="md:mt-4 md:col-span-4 flex flex-col w-full h-full gap-5">
            <div className="projects grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-5 content-start lg:gap-5 gap-2 h-full">
              {ProjectsList.projects.filter(project => currentCategory === 'All' || project.category === currentCategory).slice((currentPage - 1) * pageSize, currentPage * pageSize).map((project, index) => (
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