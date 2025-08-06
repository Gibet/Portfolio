import './App.css'
import { Header } from './components/header'
import { Contact } from './sections/contact'
import { About } from './sections/about'
import { Projects } from './sections/projects'
import React, { useEffect, useRef, useState } from 'react'
import { Home } from './sections/home'

const sections = ["home", "about", "projects", "contact"]

function App() {
  // State to manage visibility of sections
  const [pinnedSections, setPinnedSections] = useState(new Set(['home']))
  const [activeSection, setActiveSection] = useState('home')


  // Ref to keep track of the current section
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  // Function to handle section visibility change
  const handleSectionChange = (section: string) => {
    // Scroll to the top of current section
    sectionRefs.current[section]?.scrollIntoView({ behavior: 'smooth' })
  }

  // Function to set the ref for each section
  const setSectionRef = (section: string) => (el: HTMLDivElement | null) => {
    if (!el) {
      console.warn(`Element for section ${section} is null, skipping ref assignment.`)
    }
    sectionRefs.current[section] = el
  }

  // Intersection Observer to handle visibility of sections
  const handleEntry = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      
      if (entry.isIntersecting) {
        setPinnedSections(prev => new Set([...prev, id]));
        
      } else {
        setPinnedSections(prev => {
          const newSet = new Set(prev);
          newSet.delete(id);
          return newSet;
        });
      }
    });
  }

  // UseEffect to set up the Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(handleEntry, {
      threshold: [0.01, 0.5, 0.99],
    });

    sections.forEach(section => {
      const el = sectionRefs.current[section]
      if (el) {
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header navigate={handleSectionChange} activeSection={activeSection} />
      <main className="flex-1 scroll-smooth w-full">
        <Home pinned={pinnedSections.has('home')} ref={setSectionRef('home')} />
        <About pinned={pinnedSections.has('about')} ref={setSectionRef('about')} />
        <Projects pinned={pinnedSections.has('projects')} ref={setSectionRef('projects')} />
        <Contact pinned={pinnedSections.has('contact')} ref={setSectionRef('contact')} />
      </main>
    </>
  )
}

export default App
