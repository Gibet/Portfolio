import type{ NavigationProps } from '../utils/types'
import { sections } from '../utils/types'
import { ArrowBigUp, ArrowBigDown } from 'lucide-react'
import { memo } from 'react'

export const SectionNavigation:React.FC<NavigationProps> = (props: NavigationProps) => {

  const getVisibleSection = () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    let visibleSection: { id: string, top: number } | null = null;

    for (const name of sections) {
      const el = props.sectionRefs.current[name];
      if (!el) continue;

      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < viewportHeight && rect.bottom > 0;
      if (!isVisible) continue;
      
      if (!visibleSection || rect.top < visibleSection.top) {
        visibleSection = { id: name, top: rect.top };
      }
  }
    return visibleSection?.id || props.activeSectionRef.current;
  }

  const prev = () => {
    const currentIndex = sections.indexOf(props.activeSectionRef.current)
    if (currentIndex > 0) {
      props.handleSectionChange(sections[currentIndex - 1])
    }
  }

  const next = () => {
    const visibleSection = getVisibleSection();
    const currentIndex = sections.indexOf(visibleSection);
    if (currentIndex < sections.length - 1) {
      props.handleSectionChange(sections[currentIndex + 1], visibleSection)
    }
  }

  const handleNextDisabled = () => {
    const visibleSection = getVisibleSection();
    const currentIndex = sections.indexOf(visibleSection);
    return currentIndex > sections.length - 1;
  }

  return (
    <div id='arrow-nav' className='flex flex-col gap-1'>
      <button disabled={props.index <= 0} id='prev' aria-label='Previous section' onClick={() => {
        prev()
      }}>
        <ArrowBigUp strokeWidth={1.25} />
      </button>
      <button disabled={handleNextDisabled()} id='next' aria-label='Next section' onClick={() => {
        next()
      }}>
        <ArrowBigDown strokeWidth={1.25} />
      </button>
    </div>
  )
}

export default memo(SectionNavigation)