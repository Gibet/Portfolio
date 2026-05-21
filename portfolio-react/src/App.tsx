import './App.css'
import { useEffect, useRef, useState, useCallback } from 'react'
import { sections } from './utils/types'
import Header from './components/header'
import Home from './sections/home'
import About from './sections/about'
import Projects from './sections/projects'
import Contact from './sections/contact'
import Footer from './components/footer'
import SectionNavigation from './components/navigation'
import { injectSpeedInsights } from "@vercel/speed-insights"



function App() {
  const [pinnedSections, setPinnedSections] = useState(new Set(['home']))
  const [lowerSections, setLowerSections] = useState(new Set<string>())
  const [activeSection, setActiveSection] = useState('home')
  const [keepCurrentPinned, setKeepCurrentPinned] = useState(false)

  // Ref to keep track of the current section
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})
  const activeSectionRef = useRef(activeSection)
  const keepCurrentPinnedRef = useRef(keepCurrentPinned)

  // Function to handle section visibility change
  const handleSectionChange = useCallback ((section: string, from = activeSectionRef.current) => {
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
        setLowerSections(new Set())
        setPinnedSections(new Set([section]))
      }, 1000)
    } else {
      targetElement?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const getSectionZIndex = (sectionName: string) => {
    const baseIndex = sections.indexOf(sectionName)
    return lowerSections.has(sectionName) ? -(baseIndex + 1) : baseIndex
  }

  const getFirstPinnedSection = () => {
    if (pinnedSections.size === 0) return null
    return [...pinnedSections][0]
  }

  const setSectionRef = (section: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[section] = el
  }

  const getActiveSection = () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const triggerPoint = viewportHeight *.99;

    let candidate: { id: string; distance: number } | null = null;

    for (const name of sections) {
      const el = sectionRefs.current[name];
      if (!el) continue;

      const rect = el.getBoundingClientRect();
      const crossedTrigger = rect.top < triggerPoint && rect.bottom > triggerPoint;
      if (crossedTrigger) {
        return name;
      }

      if (rect.bottom > 0 && rect.top < viewportHeight) {
        const toTop = Math.abs(rect.top - triggerPoint);
        if (!candidate || toTop < candidate.distance) {
          candidate = { id: name, distance: toTop };
        }
      }
    }
    return candidate?.id || activeSectionRef.current;
  }

  // Intersection Observer to handle pinning sections
  const handleEntry = useCallback((entries: IntersectionObserverEntry[]) => {
    if (keepCurrentPinnedRef.current) return

    /* let nextPinned = new Set<string>(pinnedSections)
    let nextActiveSection = activeSectionRef.current;
    let maxVisibleTop = Number.POSITIVE_INFINITY;


    for (const entry of entries) {
      const id = entry.target.id;
      const currentIndex = sections.indexOf(id);

      if (entry.isIntersecting) {
        nextPinned.add(id);

        // Determine the topmost visible section to set as active
        const top = entry.boundingClientRect.top;
        if (top >= 0 && top < maxVisibleTop) {
          maxVisibleTop = top;
          nextActiveSection = id;
        }

        // Unpin sections that are below the currently active one
        for (let i = currentIndex + 1; i < sections.length; i++) {
          nextPinned.delete(sections[i]);
        }
      } else {
        nextPinned.delete(id);
      }
    }
    setPinnedSections(nextPinned); */

    const nextActiveSection = getActiveSection();
    const nextIndex = sections.indexOf(nextActiveSection);

    setPinnedSections(new Set(sections.slice(0, nextIndex + 1)));

    if (nextActiveSection !== activeSectionRef.current) {
      setActiveSection(nextActiveSection);
    }
  }, [getActiveSection])

  useEffect(() => {
    keepCurrentPinnedRef.current = keepCurrentPinned;
  }, [keepCurrentPinned]);

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  // Set up the Intersection Observer when the component mounts
  useEffect(() => {
    const observer = new IntersectionObserver(handleEntry, {
      threshold: [0.01, .99],
    });

    sections.forEach(section => {
      const el = sectionRefs.current[section]
      if (el) {
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [handleEntry])

  // Inject Vercel Speed Insights script
  useEffect(() => {
    injectSpeedInsights();
  }, []);

  return (
    <>
      <Header navigate={handleSectionChange} activeSection={activeSection} />
      <main id='main-container' className="relative w-full 2xl:max-w-[75vw] flex-1 scroll-smooth light">
        <Home pinned={pinnedSections.has('home')} firstPinned={getFirstPinnedSection() === 'home'} pinCount={pinnedSections.size} ref={setSectionRef('home')} zIndex={getSectionZIndex('home')} />
        <About pinned={pinnedSections.has('about')} firstPinned={getFirstPinnedSection() === 'about'} pinCount={pinnedSections.size} lower={lowerSections.has('about')} ref={setSectionRef('about')} zIndex={getSectionZIndex('about')} />
        <Projects pinned={pinnedSections.has('projects')} firstPinned={getFirstPinnedSection() === 'projects'} pinCount={pinnedSections.size} lower={lowerSections.has('projects')} ref={setSectionRef('projects')} zIndex={getSectionZIndex('projects')} />
        <Contact pinned={pinnedSections.has('contact')} firstPinned={getFirstPinnedSection() === 'contact'} pinCount={pinnedSections.size} ref={setSectionRef('contact')} zIndex={getSectionZIndex('contact')} />
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
