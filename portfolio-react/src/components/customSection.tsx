import { forwardRef } from 'react'
import type { SectionProps } from '../utils/types'
import { Element } from 'react-scroll'


const CustomSection = forwardRef<HTMLDivElement, SectionProps>(({ id, pinned, lower = false, children, zIndex }, ref) => {
  return (
    <div className={`h-screen custom-section ${pinned ? 'pinned' : ''}`} style={{ zIndex: lower ? -1 : zIndex }}>
      <Element name={id!}>
        <section id={id} className={`h-screen flex flex-col`} ref={ref}>
          {children}
        </section>
      </Element>
    </div>
  )
})  

export default CustomSection