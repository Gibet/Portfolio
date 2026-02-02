import React from 'react'
import { Contact, Home, Info, Cog, BarChartHorizontal } from 'lucide-react'

interface HeaderProps {
  navigate: (section: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ navigate, activeSection }) => {
  return (
    <header className='w-full fixed top-0 z-60 bg-black  bg-opacity-80 backdrop-blur-md p-4 shadow-lg'>
      <nav className="flex justify-between items-center w-full">
        <div className="flex text-lg font-bold">JB</div>
        <div className="flex space-x-4">
          <button onClick={() => navigate('home')} className={activeSection === 'home' ? 'text-blue-700' : 'text-black'}><Home /></button>
          <button onClick={() => navigate('about')} className={activeSection === 'about' ? 'text-blue-700' : 'text-black'}><Info /></button>
          <button onClick={() => navigate('projects')} className={activeSection === 'projects' ? 'text-blue-700' : 'text-black'}><Cog /></button>
          {/* <button onClick={() => navigate('skills')} className={activeSection === 'skills' ? 'text-blue-700' : 'text-black'}><BarChartHorizontal /></button> */}
          <button onClick={() => navigate('contact')} className={activeSection === 'contact' ? 'text-blue-700' : 'text-black'}><Contact /></button>
        </div>
      </nav>
    </header>
  )
}