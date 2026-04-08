import type { HeaderProps } from '../utils/types'
import { Cog, Contact, Github, Home, Info, Linkedin } from 'lucide-react'

export const Footer = (props: HeaderProps) => {
  return (
    <footer className='2xl:w-4/5 backdrop-blur-md w-full flex gap-8 justify-center text-center py-12'>
      <div className='flex flex-col w-1/3 items-start gap-2'>
        <h3 className='text-lg font-bold terminal'>Menu</h3>
        <hr className='w-full'/>
        <ul className='text-left text-sm'>
          <li><button onClick={() => props.navigate('home')}><Home size={18} strokeWidth={ 1} /><span>Accueil</span></button></li>
          <li><button onClick={() => props.navigate('about')}><Info size={18} strokeWidth={ 1} /><span>À propos</span></button></li>
          <li><button onClick={() => props.navigate('projects')}><Cog size={18} strokeWidth={ 1} /><span>Projets</span></button></li>
          <li><button onClick={() => props.navigate('contact')}><Contact size={18} strokeWidth={ 1} /><span>Contact</span></button></li>
        </ul>
      </div>
      <div className='flex flex-col w-1/3 items-start gap-2'>
        <h3 className='text-lg font-bold terminal'>Liens</h3>
        <hr className='w-full'/>
        <ul className='text-left text-sm'>
          <li><a href="" target="_blank" rel="noopener noreferrer"><Github size={18} strokeWidth={ 1} /><span>GitHub</span></a></li>
          <li><a href="" target="_blank" rel="noopener noreferrer"><Linkedin size={18} strokeWidth={ 1} /><span>LinkedIn</span></a></li>
        </ul>
      </div>
      <span className='absolute bottom-4 text-sm opacity-50'>© 2025 - Jean-Bernard Laguerre.</span>
    </footer>
  )
}