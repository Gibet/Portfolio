import { useState } from 'react'

export const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Check localStorage for a saved theme
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      // Apply the saved theme to the root element      const root = document.getElementById('root')
      const root = document.getElementById('root')
      if (root) {
        root.dataset.theme = savedTheme
      }
      return savedTheme
    }
    // If no saved theme, set to light by default
    return 'light'
  })

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
    const root = document.getElementById('root')

    if (root) {
      root.dataset.theme = theme === 'light' ? 'dark' : 'light'
    }

    // Update the theme in localStorage
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
  }

  return { theme, toggleTheme }
}