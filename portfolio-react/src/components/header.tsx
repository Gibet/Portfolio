import React from 'react'
import { Contact, Home, Info, Cog } from 'lucide-react'

interface HeaderProps {
  navigate: (section: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ navigate, activeSection }) => {
  return (
    <header className='w-full fixed top-0 z-60 bg-black text-white bg-opacity-80 backdrop-blur-md p-4 shadow-lg'>
      <nav className="flex justify-between items-center w-full">
        <div className="flex text-lg font-bold">My Portfolio</div>
        <div className="flex space-x-4">
          <button onClick={() => navigate('home')} className={activeSection === 'home' ? 'text-blue-700' : 'text-white'}><Home /></button>
          <button onClick={() => navigate('about')} className={activeSection === 'about' ? 'text-blue-700' : 'text-white'}><Info /></button>
          <button onClick={() => navigate('projects')} className={activeSection === 'projects' ? 'text-blue-700' : 'text-white'}><Cog /></button>
          <button onClick={() => navigate('contact')} className={activeSection === 'contact' ? 'text-blue-700' : 'text-white'}><Contact /></button>
        </div>
      </nav>
    </header>
  )
}