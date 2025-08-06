import { forwardRef } from 'react'
import type { SectionProps } from '../utils/types'


export const Home = forwardRef<HTMLDivElement, SectionProps>(({ pinned }, ref) =>  {
  return (
    <section id="home" className={`min-h-screen ${pinned ? 'pinned' : ''}`} ref={ref}>
      <h1 className="text-2xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4">This is the home section where I introduce myself and my work.</p>
    </section>
  )
})
