import { memo, forwardRef } from 'react'
import type { SectionProps } from '../utils/types'
import CustomSection from '../components/customSection'
import { Github, Linkedin, File} from 'lucide-react'
import { splittingText } from '../utils/utils'
import i18n from '../i18n'

const HomeContent = ({ pinned, firstPinned, pinCount }: SectionProps, ref: React.Ref<HTMLDivElement>) =>  {

  return (
    <CustomSection id="home" pinned={pinned} firstPinned={firstPinned} pinCount={pinCount} ref={ref} zIndex={5}>
      <div className="flex flex-col flex-1 items-center justify-center h-full gap-6">
        <div className='flex flex-col items-end gap-6'>
          <div id='square1' className='w-full flex flex-col gap-3'>
            <h1 className="md:text-9xl text-7xl font-bold line-1">{splittingText("Laguerre")}</h1>
            <h2 className="md:text-5xl text-3xl font-normal line-2">{splittingText("Jean-Bernard")}</h2>
          </div>
          <div id='square2' className='w-full'>
            <h2 className="md:text-4xl text-xl text-center line-3 terminal blink-cursor">{splittingText(i18n.t("home.jobTitle"))}</h2>
          </div>
          <div id='square3' className='left'>
            <div className="flex space-x-4">
              <a href="http://linkedin.com/in/jean-bernard-laguerre"  target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} strokeWidth={1.25}/>
              </a>
              <a href="http://github.com/gibet" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} strokeWidth={1.25}/>
              </a>
              <a href="https://drive.google.com/file/d/1M1VR3DCBn6lERS2H2oUcULZt19GsVWh1/view?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label="Télécharger le CV">
                <File size={20} strokeWidth={1.25}/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="home-arrow" className="absolute left-1/2 -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--accent)" className="w-6 h-6">
          <path strokeLinecap="square" strokeLinejoin="miter" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </CustomSection>
  )
}

const Home = forwardRef<HTMLDivElement, SectionProps>(HomeContent)

export default memo(Home) as React.MemoExoticComponent<
  React.ForwardRefExoticComponent<SectionProps & React.RefAttributes<HTMLDivElement>>
>