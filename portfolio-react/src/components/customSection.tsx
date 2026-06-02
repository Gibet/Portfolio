import { forwardRef } from 'react'
import type { SectionProps } from '../utils/types'
import { Element } from 'react-scroll'


const CustomSection = forwardRef<HTMLDivElement, SectionProps>(({ id, pinned, children, firstPinned = false, pinCount = 0, zIndex }, ref) => {
  return (
    <div id={id} className={`relative overflow-x-hidden h-screen custom-section ${pinned ? 'pinned' : ''}`} style={{ zIndex: zIndex }}
      data-first={firstPinned && pinCount > 1}
    >
      <div className="texture-layer absolute h-full w-full overflow-hidden">
        <span className='top-markers absolute top-0 left-0'>
          <span className='home-marker' style={{ '--marker-index': 0 } as React.CSSProperties}></span>
          <span className='about-marker' style={{ '--marker-index': 1 } as React.CSSProperties}></span>
          <span className='projects-marker' style={{ '--marker-index': 2 } as React.CSSProperties}></span>
          <span className='contact-marker' style={{ '--marker-index': 3 } as React.CSSProperties}></span>
        </span>
        <span className="bottom-markers absolute bottom-0 right-0">
          <span className='contact-marker' style={{ '--marker-index': 3 } as React.CSSProperties}></span>
          <span className='projects-marker' style={{ '--marker-index': 2 } as React.CSSProperties}></span>
          <span className='about-marker' style={{ '--marker-index': 1 } as React.CSSProperties}></span>
          <span className='home-marker' style={{ '--marker-index': 0 } as React.CSSProperties}></span>
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