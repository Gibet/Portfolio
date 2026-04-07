import './App.css'
import { sections } from './utils/types'
import { Header } from './components/header'
import { Contact } from './sections/contact'
import { About } from './sections/about'
import { Projects } from './sections/projects'
import { useEffect, useRef, useState } from 'react'
import { Home } from './sections/home'
import { Footer } from './components/footer'
import { SectionNavigation } from './components/navigation'


function App() {
  const [pinnedSections, setPinnedSections] = useState(new Set(['home']))
  const [lowerSections, setLowerSections] = useState(new Set<string>())
  const [activeSection, setActiveSection] = useState('home')
  const [keepCurrentPinned, setKeepCurrentPinned] = useState(false)

  // Ref to keep track of the current section
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})
  const activeSectionRef = useRef(activeSection)

  // Function to handle section visibility change
  const handleSectionChange = (section: string, from = activeSectionRef.current) => {
    const targetElement = sectionRefs.current[section]
    if (!targetElement) return

    const targetIndex = sections.indexOf(section)
    const currentIndex = sections.indexOf(from)
    
    // If navigating to the same section, but with another one on top, scroll down to reveal it
    if (section === activeSectionRef.current && from !== activeSectionRef.current) {
      const fromElement = sectionRefs.current[from]
      if (fromElement) {
        const { bottom } = fromElement.getBoundingClientRect()
        const delta = Math.max(bottom, 1)
        
        // Scroll down by the delta to reveal the section below
        const rootElement = document.getElementById('root')
        rootElement?.scrollBy({ top: delta, behavior: 'smooth' })
        return
      }
    }

    if (Math.abs(targetIndex - currentIndex) > 1) {
      const start = Math.min(currentIndex, targetIndex)
      const end = Math.max(currentIndex, targetIndex)
      const intermediateSections = sections.slice(start + 1, end)
      
      // First: Pin intermediate sections behind current section
      setPinnedSections(prev => {
        const newSet = new Set(prev)
        intermediateSections.forEach(sectionName => newSet.add(sectionName))
        return newSet
      })
      
      // Hide them behind current section with lower z-index
      setKeepCurrentPinned(true)
      
      // Small delay to ensure pinning takes effect, then scroll
      requestAnimationFrame(() => {
        targetElement.scrollIntoView({ behavior: 'smooth' })
        setActiveSection(section)
      })

      // Clean up after scroll
      setTimeout(() => {
        setKeepCurrentPinned(false)
        /* setLowerSections(new Set()) */
        setPinnedSections(new Set([section]))
      }, 1000)
    } else {
      targetElement?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const getSectionZIndex = (sectionName: string) => {
    const baseIndex = sections.indexOf(sectionName)
    return lowerSections.has(sectionName) ? -(baseIndex + 1) : baseIndex
  }

  const setSectionRef = (section: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[section] = el
  }

  // Intersection Observer to handle pinning sections
  const handleEntry = (entries: IntersectionObserverEntry[]) => {
    if (keepCurrentPinned) return

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

  useEffect(() => {
    // Update the active section ref whenever activeSection changes
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  // Set up the Intersection Observer when the component mounts
  useEffect(() => {
    const observer = new IntersectionObserver(handleEntry, {
      threshold: [0.01, 0.99],
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
      <main id='main-container' className="relative 2xl:w-4/5 w-full flex-1 scroll-smooth w-screen light bg-black">
        <Home pinned={pinnedSections.has('home')} ref={setSectionRef('home')} zIndex={getSectionZIndex('home')} />
        <About pinned={pinnedSections.has('about')} lower={lowerSections.has('about')} ref={setSectionRef('about')} zIndex={getSectionZIndex('about')} />
        <Projects pinned={pinnedSections.has('projects')} lower={lowerSections.has('projects')} ref={setSectionRef('projects')} zIndex={getSectionZIndex('projects')} />
        {/* <Skills pinned={pinnedSections.has('skills')} lower={lowerSections.has('skills')} ref={setSectionRef('skills')} zIndex={getSectionZIndex('skills')} /> */}
        <Contact pinned={pinnedSections.has('contact')} ref={setSectionRef('contact')} zIndex={getSectionZIndex('contact')} />
        <SectionNavigation
          index={sections.indexOf(activeSection)}
          sectionRefs={sectionRefs}
          activeSectionRef={activeSectionRef}
          handleSectionChange={handleSectionChange}
        />
      </main>
      { (activeSection === 'contact') &&
        <Footer navigate={handleSectionChange} activeSection={activeSection} />
      }
    </>
  )
}

export default App
