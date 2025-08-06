import { forwardRef } from 'react'
import type { SectionProps } from '../utils/types'


export const About = forwardRef<HTMLDivElement, SectionProps>(({ pinned }, ref) => {
  return (
    <section id="about" className={`min-h-screen ${pinned && 'pinned'}`} ref={ref}>
      <h1 className="text-2xl font-bold">About Me</h1>
      <p className="mt-4">This is the about section where I provide more information about myself.</p>
    </section>
  )
})