import { forwardRef } from 'react'
import type { SectionProps } from '../utils/types'
import CustomSection from '../components/customSection'


export const Projects = forwardRef<HTMLDivElement, SectionProps>(({ pinned, lower = false }, ref) => {
  return (
    <CustomSection id="projects" pinned={pinned} lower={lower} ref={ref} zIndex={3}>
      <h1 className="text-2xl font-bold">My Projects</h1>
      <p className="mt-4">This is the projects section where I showcase my work.</p>
    </CustomSection>
  )
})