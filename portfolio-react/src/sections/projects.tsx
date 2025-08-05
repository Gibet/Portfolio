import React from 'react'
import type { SectionProps } from '../utils/types'


export const Projects = ({ visible, setVisible }: SectionProps) => {
  return (
    <section id="projects" className={`p-8 ${visible ? 'block' : 'hidden'} h-screen`}>
      <h1 className="text-2xl font-bold">My Projects</h1>
      <p className="mt-4">This is the projects section where I showcase my work.</p>
      <button onClick={() => setVisible(!visible)} className="mt-4 px-4 py-2 rounded">
        Toggle Visibility
      </button>
    </section>
  )
}