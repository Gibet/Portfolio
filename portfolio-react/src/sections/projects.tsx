import { forwardRef } from 'react'
import type { SectionProps } from '../utils/types'


export const Projects = forwardRef<HTMLDivElement, SectionProps>(({ pinned }, ref) => {
  return (
    <section id="projects" className={`min-h-screen ${pinned && 'pinned'}`} ref={ref}>
      <h1 className="text-2xl font-bold">My Projects</h1>
      <p className="mt-4">This is the projects section where I showcase my work.</p>
    </section>
  )
})