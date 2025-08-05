import React from 'react'
import type { SectionProps } from '../utils/types'


export const Contact = ({ visible, setVisible }: SectionProps) => {
  return (
    <section id="contact" className={`p-8 ${visible ? 'block' : 'hidden'} h-screen`}>
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <p className="mt-4">This is the contact section where you can reach out to me.</p>
      <button onClick={() => setVisible(!visible)} className="mt-4 px-4 py-2 rounded">
        Toggle Visibility
      </button>
    </section>
  )
}