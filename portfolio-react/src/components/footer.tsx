import type { HeaderProps } from '../utils/types'
import { Cog, Contact, Github, Home, Info, Linkedin } from 'lucide-react'
import CommandLine from './commandLine'
import { memo } from 'react'

const Footer: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <footer className='backdrop-blur-xs w-full 2xl:max-w-[75vw] flex gap-8 justify-center text-center pb-5 pt-6'>
      <div className='flex flex-col w-1/3 items-start gap-2'>
        <CommandLine variant='tertiary' title="Menu" />
        <hr className='w-full'/>
        <ul className='text-left text-xs'>
          <li><button onClick={() => props.navigate('home')}><Home size={14} strokeWidth={ 1} /><span>Accueil</span></button></li>
          <li><button onClick={() => props.navigate('about')}><Info size={14} strokeWidth={ 1} /><span>À propos</span></button></li>
          <li><button onClick={() => props.navigate('projects')}><Cog size={14} strokeWidth={ 1} /><span>Projets</span></button></li>
          <li><button onClick={() => props.navigate('contact')}><Contact size={14} strokeWidth={ 1} /><span>Contact</span></button></li>
        </ul>
      </div>
      <div className='flex flex-col w-1/3 items-start gap-2'>
        <CommandLine variant='tertiary' title="Liens" />
        <hr className='w-full'/>
        <ul className='text-left text-xs'>
          <li><a href="" target="_blank" rel="noopener noreferrer"><Github size={14} strokeWidth={ 1} /><span>GitHub</span></a></li>
          <li><a href="" target="_blank" rel="noopener noreferrer"><Linkedin size={14} strokeWidth={ 1} /><span>LinkedIn</span></a></li>
        </ul>
      </div>
      <span className='absolute bottom-4 right-8 text-xs opacity-50'>© 2026 - Jean-Bernard Laguerre.</span>
    </footer>
  )
}

export default memo(Footer)