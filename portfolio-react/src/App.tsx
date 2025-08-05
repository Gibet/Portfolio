import './App.css'
import { Header } from './components/header'
import { Contact } from './sections/contact'
import { About } from './sections/about'
import { Projects } from './sections/projects'
import React from 'react'
import { Home } from './sections/home'

function App() {
  const [visibleSection, setVisibleSection] = React.useState('home')

  const handleSectionChange = (section: string) => {
    setVisibleSection(section)
  } 

  return (
    <>
      <Header />
      <main className="flex-1">
        <Home visible={visibleSection === 'home'} setVisible={() => handleSectionChange('home')} />
        <About visible={true} setVisible={() => {}} />
        <Projects visible={true} setVisible={() => {}} />
        <Contact visible={true} setVisible={() => {}} />
      </main>
    </>
  )
}

export default App
