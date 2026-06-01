import { forwardRef } from 'react'
import type { SectionProps } from '../utils/types'
import { Element } from 'react-scroll'


const CustomSection = forwardRef<HTMLDivElement, SectionProps>(({ id, pinned, children, firstPinned = false, pinCount = 0, zIndex }, ref) => {
  return (
    <div id={id} className={`relative overflow-x-hidden h-screen custom-section ${pinned ? 'pinned' : ''}`} style={{ zIndex: zIndex }}
      data-first={firstPinned && pinCount > 1}
    >
      <div className="grid-layer absolute h-full w-full overflow-hidden">
        <span className='top-markers absolute top-0 left-0'>
          <span className='home-marker'></span>
          <span className='about-marker'></span>
          <span className='projects-marker'></span>
          <span className='contact-marker'></span>
        </span>
        <span className="bottom-markers absolute bottom-0 right-0">
          <span className='contact-marker'></span>
          <span className='projects-marker'></span>
          <span className='about-marker'></span>
          <span className='home-marker'></span>
        </span>
      </div>
      <Element name={id!}>
        <section id={id} className={`h-screen flex flex-col`} ref={ref} style={{ zIndex: zIndex ? (zIndex + 1) : undefined }}>
          {children}
        </section>
      </Element>
    </div>
  )
})  

export default CustomSection