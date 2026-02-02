import { forwardRef } from 'react'
import type { SectionProps } from '../utils/types'
import CustomSection from '../components/customSection'
import { Link } from 'react-scroll'
import { Github, Linkedin, Mail,  } from 'lucide-react'


export const Home = forwardRef<HTMLDivElement, SectionProps>(({ pinned }, ref) =>  {
  return (
    <CustomSection id="home" pinned={pinned} ref={ref} zIndex={5}>
      <div className="flex flex-col flex-1 items-center justify-center h-full gap-6">
        <div className='flex flex-col items-end items-center gap-6'>
          <div id='square1' className='w-full flex flex-col gap-6'>
            <h1 className="md:text-9xl text-6xl font-bold">Laguerre</h1>
            <h2 className="md:text-5xl text-2xl font-normal">Jean-Bernard</h2>
          </div>
          <div id='square2' className='w-full'>
            <h1 className="md:text-5xl text-2xl font-bold text-center">Développeur Web Full Stack</h1>
          </div>
          <div id='square3' className='left'>
            <div className="flex space-x-4">
              <a href="http://linkedin.com/in/jean-bernard-laguerre" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
              <a href="http://github.com/gibet" target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
              <a href="http://mailto:laguerrejb13@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </CustomSection>
  )
})
