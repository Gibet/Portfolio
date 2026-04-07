import { Contact, Home, Info, Cog, Sun, Moon } from 'lucide-react'
import type { HeaderProps } from '../utils/types'
import { useTheme } from '../hooks/useTheme'

export const Header: React.FC<HeaderProps> = ({ navigate, activeSection }) => {
  const theme = useTheme()

  return (
    <header className='2xl:w-4/5 w-full fixed top-0 z-60 backdrop-blur-md sm:p-6 p-4 shadow-lg'>
      <nav className="flex justify-between items-center w-full">
        <div className="flex text-lg font-bold">
          <button onClick={theme.toggleTheme}>
            { theme.theme === 'light' ? 
              <Sun size={25} strokeWidth={1} className='cursor-pointer' /> :
              <Moon size={25} strokeWidth={1} className='cursor-pointer' />
            }
          </button>
        </div>
        <div className="flex space-x-4">
          <button onClick={() => navigate('home')} className={activeSection === 'home' ? 'active' : ''}><Home size={30} strokeWidth={activeSection === 'home' ? 1.5 : 1} /></button>
          <button onClick={() => navigate('about')} className={activeSection === 'about' ? 'active' : ''}><Info size={30} strokeWidth={activeSection === 'about' ? 1.5 : 1} /></button>
          <button onClick={() => navigate('projects')} className={activeSection === 'projects' ? 'active' : ''}><Cog size={30} strokeWidth={activeSection === 'projects' ? 1.5 : 1} /></button>
          <button onClick={() => navigate('contact')} className={activeSection === 'contact' ? 'active' : ''}><Contact size={30} strokeWidth={activeSection === 'contact' ? 1.5 : 1} /></button>
        </div>
      </nav>
    </header>
  )
}