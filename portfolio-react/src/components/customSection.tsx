import { forwardRef } from 'react'
import type { SectionProps } from '../utils/types'
import { Element } from 'react-scroll'


const CustomSection = forwardRef<HTMLDivElement, SectionProps>(({ id, pinned, lower = false, children, firstPinned = false, pinCount = 0, zIndex }, ref) => {
  return (
    <div className={`relative overflow-x-hidden h-screen custom-section ${pinned ? 'pinned' : ''}`} style={{ zIndex: lower ? -1 : zIndex }}
      data-first={firstPinned && pinCount > 1}
    >
      <div className="grid-layer absolute h-full w-full overflow-hidden">
        <div className='bglayer'></div>
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