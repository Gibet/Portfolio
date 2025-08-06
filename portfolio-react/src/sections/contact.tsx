import { forwardRef } from 'react'
import type { SectionProps } from '../utils/types'


export const Contact = forwardRef<HTMLDivElement, SectionProps>(({ pinned }, ref) => {
  return (
    <section id="contact" className={`min-h-screen ${pinned && 'pinned'}`} ref={ref}>
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <p className="mt-4">This is the contact section where you can reach out to me.</p>
    </section>
  )
})