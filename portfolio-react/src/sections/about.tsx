import React from 'react'
import type { SectionProps } from '../utils/types'


export const About = ({ visible, setVisible }: SectionProps) => {
  return (
    <section id="about" className={`p-8 ${visible ? 'block' : 'hidden'} h-screen`}>
      <h1 className="text-2xl font-bold">About Me</h1>
      <p className="mt-4">This is the about section where I provide more information about myself.</p>
      <button onClick={() => setVisible(!visible)} className="mt-4 bg px-4 py-2 rounded">
        Toggle Visibility
      </button>
    </section>
  )
}