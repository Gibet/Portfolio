import { Contact, Home, Info, Cog, Sun, Moon } from 'lucide-react'
import type { HeaderProps } from '../utils/types'
import { useTheme } from '../hooks/useTheme'

export const Header: React.FC<HeaderProps> = ({ navigate, activeSection }) => {
  const theme = useTheme()

  return (
    <header className='2xl:w-3/4 w-full z-60 backdrop-blur-xs'>
      <nav className="flex justify-between items-center w-full">
        <div className="flex text-lg font-bold">
          <button onClick={theme.toggleTheme}>
            { theme.theme === 'light' ? 
              <Sun size={20} strokeWidth={1} className='cursor-pointer' /> :
              <Moon size={20} strokeWidth={1} className='cursor-pointer' />
            }
          </button>
        </div>
        <div className="flex">
          <button onClick={() => navigate('home')} className={activeSection === 'home' ? 'active' : ''}><Home size={24} strokeWidth={activeSection === 'home' ? 1.5 : 1} /></button>
          <button onClick={() => navigate('about')} className={activeSection === 'about' ? 'active' : ''}><Info size={24} strokeWidth={activeSection === 'about' ? 1.5 : 1} /></button>
          <button onClick={() => navigate('projects')} className={activeSection === 'projects' ? 'active' : ''}><Cog size={24} strokeWidth={activeSection === 'projects' ? 1.5 : 1} /></button>
          <button onClick={() => navigate('contact')} className={activeSection === 'contact' ? 'active' : ''}><Contact size={24} strokeWidth={activeSection === 'contact' ? 1.5 : 1} /></button>
        </div>
      </nav>
    </header>
  )
}