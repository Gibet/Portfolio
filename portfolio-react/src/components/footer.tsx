import React from 'react'
import { Link } from 'react-scroll'
import type { HeaderProps } from '../utils/types'

export const Footer = (props: HeaderProps) => {
  return (
    <footer className='w-full flex gap-8 justify-center text-white text-center py-16 mt-8'>
      <div className='flex flex-col w-1/3 items-start gap-2'>
        <h3 className='text-lg font-bold'>Menu</h3>
        <hr className='w-full'/>
        <ul className='text-left'>
          <li><button onClick={() => props.navigate('home')}>Accueil</button></li>
          <li><button onClick={() => props.navigate('about')}>À propos</button></li>
          <li><button onClick={() => props.navigate('projects')}>Projets</button></li>
          {/* <li><Link to="skills" smooth={true} duration={500}>Compétences</Link></li> */}
          <li><button onClick={() => props.navigate('contact')}>Contact</button></li>
        </ul>
      </div>
      <div className='flex flex-col w-1/3 items-start gap-2'>
        <h3 className='text-lg font-bold'>Liens</h3>
        <hr className='w-full'/>
        <ul className='text-left'>
          <li><a href="" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  )
}