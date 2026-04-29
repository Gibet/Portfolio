import React, { type CSSProperties } from 'react'
import { forwardRef } from 'react'
import type { SectionProps } from '../utils/types'
import CustomSection from '../components/customSection'
import { Github, Linkedin, File} from 'lucide-react'


export const Home = forwardRef<HTMLDivElement, SectionProps>(({ pinned, firstPinned, pinCount }, ref) =>  {

  const splittingText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char" style={{ '--char-index': index } as CSSProperties}>
        {char}
      </span>
    ));
  }

  return (
    <CustomSection id="home" pinned={pinned} firstPinned={firstPinned} pinCount={pinCount} ref={ref} zIndex={5}>
      <div className="flex flex-col flex-1 items-center justify-center h-full gap-6">
        <div className='flex flex-col items-end items-center gap-6'>
          <div id='square1' className='w-full flex flex-col gap-6'>
            <h1 className="md:text-9xl text-6xl font-bold ubuntu-bold line-1">{splittingText("Laguerre")}</h1>
            <h2 className="md:text-5xl text-2xl font-normal line-2">{splittingText("Jean-Bernard")}</h2>
          </div>
          <div id='square2' className='w-full'>
            <h1 className="md:text-5xl text-xl font-bold text-center line-3 terminal blink-cursor">{splittingText("Développeur Web Full Stack")}</h1>
          </div>
          <div id='square3' className='left'>
            <div className="flex space-x-4">
              <a href="http://linkedin.com/in/jean-bernard-laguerre" target="_blank" rel="noopener noreferrer">
                <Linkedin strokeWidth={1.25}/>
              </a>
              <a href="http://github.com/gibet" target="_blank" rel="noopener noreferrer">
                <Github strokeWidth={1.25}/>
              </a>
              <a href="https://drive.google.com/file/d/1NZyFFAsyqDmLNJQVqSQoIBoJxT2LkMUH/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <File strokeWidth={1.25}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </CustomSection>
  )
})
