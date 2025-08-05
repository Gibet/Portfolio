import React from 'react'
import { Contact, Home, Info, Cog } from 'lucide-react'

export const Header = () => {
  return (
    <header className='w-full m-4 sticky top-0 z-50'>
      <nav className="flex justify-between items-center w-full">
        <div className="flex text-lg font-bold">My Portfolio</div>
        <div className="flex space-x-4">
          <span><a href="#home"><Home /></a></span>
          <span><a href="#about"><Info /></a></span>
          <span><a href="#projects"><Cog /></a></span>
          <span><a href="#contact"><Contact /></a></span>
        </div>
      </nav>
    </header>
  )
}