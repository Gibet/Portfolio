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


type ScrollBehaviorMode = ScrollBehavior

// get appropriate scroll behavior based on user preferences and device capabilities
const getScrollBehavior = (): ScrollBehaviorMode => {
  if (typeof window === 'undefined') return 'auto'
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const nav = navigator as Navigator & {
    deviceMemory?: number
    connection?: {
      saveData?: boolean
    }
  }

  const lowMem = nav.deviceMemory !== undefined && nav.deviceMemory <= 4
  const saveData = nav.connection?.saveData
  const lowCpu = nav.hardwareConcurrency !== undefined && nav.hardwareConcurrency <= 2

  if (prefersReducedMotion || saveData || lowMem || lowCpu) return 'auto'
  return 'smooth'
}

function App() {
  const scrollBehavior = useRef(getScrollBehavior())
  const [pinnedSections, setPinnedSections] = useState(new Set(['home']))
  const [activeSection, setActiveSection] = useState('home')

  // Ref to keep track of the current section
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})
  const activeSectionRef = useRef(activeSection)
  /* const keepCurrentPinnedRef = useRef(keepCurrentPinned) */

  // Function to handle section visibility change
  const handleSectionChange = useCallback ((section: string, from = activeSectionRef.current) => {
    const targetElement = sectionRefs.current[section]
    if (!targetElement) return
    
    // If navigating to the same section, but with another one on top, scroll down to reveal it
    if (section === activeSectionRef.current && from !== activeSectionRef.current) {
      const fromElement = sectionRefs.current[from]
      if (fromElement) {
        const { bottom } = fromElement.getBoundingClientRect()
        const delta = Math.max(bottom, 1)
        
        // Scroll down by the delta to reveal the section below
        const rootElement = document.getElementById('root')
        rootElement?.scrollBy({ top: delta, behavior: scrollBehavior.current })
        return
      }
    }
    targetElement?.scrollIntoView({ behavior: scrollBehavior.current })
  }, [])

  // Get the z-index for a section based on its order in the sections array
  const getSectionZIndex = (sectionName: string) => {
    const baseIndex = sections.indexOf(sectionName)
    return baseIndex
  }

  // Get the section above the currently active for animation purposes
  const getAbovePinnedSection = () => {
    const prevActiveIndex = sections.indexOf(activeSectionRef.current)
    if (prevActiveIndex === 0) return null
    return sections[prevActiveIndex-1]
  }

  const setSectionRef = (section: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[section] = el
  }

  const getActiveSection = () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const triggerPoint = viewportHeight * .99;

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
  const handleEntry = useCallback(() => {

    const nextActiveSection = getActiveSection();
    const nextIndex = sections.indexOf(nextActiveSection);

    setPinnedSections(new Set(sections.slice(0, nextIndex + 1)));

    if (nextActiveSection !== activeSectionRef.current) {
      setActiveSection(nextActiveSection);
    }
  }, [getActiveSection])


  // Update the active section ref whenever it changes
  useEffect(() => {
    activeSectionRef.current = activeSection;
    sectionRefs.current[activeSection]?.classList.add('animated');
  }, [activeSection]);

  // Set up the Intersection Observer when the component mounts
  useEffect(() => {
    const observer = new IntersectionObserver(handleEntry, {
      threshold: [0],
    });

    sections.forEach(section => {
      const el = sectionRefs.current[section]
      if (el) {
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [handleEntry])

  // Inject Vercel Speed Insights and Analytics scripts
  useEffect(() => {
    let cancelled = false;

    (async () => {
      // small delay so that the scripts don't interfere with the initial page load and rendering
      await new Promise(resolve => setTimeout(resolve, 800));
      if (cancelled) return;

      try {
        const [{ injectSpeedInsights }, { inject }] = await Promise.all([
          import('@vercel/speed-insights'),
          import('@vercel/analytics'),
        ]);
        if (cancelled) return;
        injectSpeedInsights?.();
        inject?.();
      } catch (e) {
        // fail silently
      }
    })();

    return () => { cancelled = true; };
  }, []);

  return (
    <>
      <div className="pattern-layer absolute h-full w-full overflow-hidden"></div>
      <Header navigate={handleSectionChange} activeSection={activeSection} />
      <main id='main-container' className="relative w-full 2xl:max-w-[75vw] flex-1">
        <Home pinned={pinnedSections.has('home')} firstPinned={getAbovePinnedSection() === 'home'} pinCount={pinnedSections.size} ref={setSectionRef('home')} zIndex={getSectionZIndex('home')} />
        <About pinned={pinnedSections.has('about')} firstPinned={getAbovePinnedSection() === 'about'} pinCount={pinnedSections.size} ref={setSectionRef('about')} zIndex={getSectionZIndex('about')} />
        <Projects pinned={pinnedSections.has('projects')} firstPinned={getAbovePinnedSection() === 'projects'} pinCount={pinnedSections.size} ref={setSectionRef('projects')} zIndex={getSectionZIndex('projects')} />
        <Contact pinned={pinnedSections.has('contact')} firstPinned={getAbovePinnedSection() === 'contact'} pinCount={pinnedSections.size} ref={setSectionRef('contact')} zIndex={getSectionZIndex('contact')} />
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