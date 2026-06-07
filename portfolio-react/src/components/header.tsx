import { Contact, Home, Info, Cog, Sun, Moon } from 'lucide-react'
import type { HeaderProps } from '../utils/types'
import { useTheme } from '../contexts/themeContext'
import { memo } from 'react'

const Header: React.FC<HeaderProps> = ({ navigate, activeSection }) => {
  const theme = useTheme();

  return (
    <header className='textured-main w-full 2xl:max-w-[75vw] z-60 backdrop-blur-xs'>
      <nav className="flex justify-between items-center w-full">
        <div className="flex">
          <button onClick={theme.toggleTheme} aria-label="Toggle theme">
            { theme.theme === 'light' ? 
              <Sun size={20} strokeWidth={1} className='cursor-pointer' /> :
              <Moon size={20} strokeWidth={1} className='cursor-pointer' />
            }
          </button>
        </div>
        <div className="flex">
          <button onClick={() => navigate('home')} className={activeSection === 'home' ? 'active' : ''} aria-label="Go to home section">
            <Home size={24} strokeWidth={activeSection === 'home' ? 1.5 : 1} />
          </button>
          <button onClick={() => navigate('about')} className={activeSection === 'about' ? 'active' : ''} aria-label="Go to about section">
            <Info size={24} strokeWidth={activeSection === 'about' ? 1.5 : 1} />
          </button>
          <button onClick={() => navigate('projects')} className={activeSection === 'projects' ? 'active' : ''} aria-label="Go to projects section">
            <Cog size={24} strokeWidth={activeSection === 'projects' ? 1.5 : 1} />
          </button>
          <button onClick={() => navigate('contact')} className={activeSection === 'contact' ? 'active' : ''} aria-label="Go to contact section">
            <Contact size={24} strokeWidth={activeSection === 'contact' ? 1.5 : 1} />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default memo(Header)