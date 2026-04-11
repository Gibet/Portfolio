import { forwardRef } from 'react'
import type { SectionProps } from '../utils/types'
import { Element } from 'react-scroll'


const CustomSection = forwardRef<HTMLDivElement, SectionProps>(({ id, pinned, lower = false, children, firstPinned = false, pinCount = 0, zIndex }, ref) => {
  return (
    <div className={`relative overflow-x-hidden h-screen custom-section ${pinned ? 'pinned' : ''}`} style={{ zIndex: lower ? -1 : zIndex }}
      data-first={firstPinned && pinCount > 1}
    >
      <div id={`${id}-sublayer`} className='sublayer absolute h-full w-full'></div>
      <div id={`${id}-toplayer`} className='toplayer absolute h-full w-full'></div>
      <Element name={id!}>
        <section id={id} className={`h-screen flex flex-col`} ref={ref} style={{ zIndex: zIndex ? (zIndex + 1) : undefined }}>
          {children}
        </section>
      </Element>
    </div>
  )
})  

export default CustomSection