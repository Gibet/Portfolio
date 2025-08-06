import './App.css'
import { Header } from './components/header'
import { Contact } from './sections/contact'
import { About } from './sections/about'
import { Projects } from './sections/projects'
import { useEffect, useRef, useState } from 'react'
import { Home } from './sections/home'

const sections = ["home", "about", "projects", "contact"]

function App() {
  const [pinnedSections, setPinnedSections] = useState(new Set(['home']))
  const [activeSection, setActiveSection] = useState('home')

  // Ref to keep track of the current section
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  // Function to handle section visibility change
  const handleSectionChange = (section: string) => {
    sectionRefs.current[section]?.scrollIntoView({ behavior: 'smooth' })
  }

  const setSectionRef = (section: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[section] = el
  }

  // Intersection Observer to handle pinning sections
  const handleEntry = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const currentIndex = sections.indexOf(id);
      
      // If the section is intersecting, pin it
      if (entry.isIntersecting) {
        setPinnedSections(prev => new Set([...prev, id]));

        if (entry.intersectionRatio > 0.5) {
          setActiveSection(id);
        }

        // unpin all sections after it, to ensure only the current section and those before it are pinned
        setPinnedSections(prev => {
          const newSet = new Set(prev);
          
          // Remove all sections after the current one
          for (let i = currentIndex + 1; i < sections.length; i++) {
            newSet.delete(sections[i]);
          }          
          return newSet;
        });

      } else {
        setPinnedSections(prev => {
          const newSet = new Set(prev);
          newSet.delete(id);
          return newSet;
        });
      }
    });
  }

  // Set up the Intersection Observer when the component mounts
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
