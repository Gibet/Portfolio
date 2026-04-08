import type { ProjectNavProps } from '../../utils/types';


export const ProjectsNavigation = (props : ProjectNavProps) => {
  return (
    <div className="flex justify-center text-sm">
      <button
        disabled={props.currentPage === 1}
        onClick={() => props.setCurrentPage((prev) => Math.max(prev - 1, 1))}
        className="px-3 py-1 mr-2 mb-2 bg-gray-200 text-black"
      >
        Précédent
      </button>
      <button
        disabled={props.currentPage * props.pageSize >= props.ProjectsList.projects.filter(project => props.currentCategory === 'Tous' || project.category === props.currentCategory).length}
        onClick={() => props.setCurrentPage((prev) => prev + 1)}
        className="px-3 py-1 mr-2 mb-2 bg-gray-200 text-black"
      >
        Suivant
      </button>
    </div>
  )
}