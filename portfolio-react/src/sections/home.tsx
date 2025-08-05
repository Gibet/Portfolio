import React from 'react'
import type { SectionProps } from '../utils/types'


export const Home = ({ visible, setVisible }: SectionProps) => {
  return (
    <section id="home" className={`p-8 ${visible ? 'block' : 'hidden'} h-screen`}>
      <h1 className="text-2xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4">This is the home section where I introduce myself and my work.</p>
      <button onClick={() => setVisible(!visible)} className="mt-4 px-4 py-2 rounded">
        Toggle Visibility
      </button>
    </section>
  )
}