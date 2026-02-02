import { forwardRef, useState } from 'react'
import type { SectionProps } from '../utils/types'
import CustomSection from '../components/customSection'

const AboutTabs = ['Competences', 'Education', 'Experience']

export const About = forwardRef<HTMLDivElement, SectionProps>(({ pinned, lower = false }, ref) => {

  const [currentTab, setCurrentTab] = useState(AboutTabs[0])

  return (
    <CustomSection id='about' pinned={pinned} lower={lower} ref={ref} zIndex={4}>
      <div className='flex flex-col items-start  w-5/6 h-3/4 py-20'>
        <div className='container flex flex-col gap-2.5'>
          <h1 className="text-2xl font-bold">A propos de moi</h1>
          <div className="flex flex-wrap gap-2">
            {AboutTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setCurrentTab(tab)}
                className={`px-4 py-2 ${currentTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4 w-full">
          <div className="mt-4">
            {currentTab === 'Education' && (
              <div className='container'>
                <ul>
                  <li className='mb-2'>
                    <h2 className="text-xl font-semibold">Bachelor Concepteur Développeur d'Applications</h2>
                    <h4 className="text-md font-medium">La Plateforme_ - 2022-2025</h4>
                  </li>
                  <li className='mb-2'>
                  </li>
                </ul>
              </div>
            )}
            {currentTab === 'Experience' && (
              <div className='container'>
                <ul>
                  <li className='mb-2'>
                    <h2 className="text-xl font-semibold">Développeur Web Junior (Alternance)</h2>
                    <h4 className="text-md font-medium">L'Atelier de La Plateforme - 2023-2025</h4>
                  </li>
                  <li className='mb-2'>
                  </li>
                </ul>
              </div>
            )}
            {currentTab === 'Competences' && (
              <div className='container'>
              </div>
            )}
          </div>
        </div>
      </div>
    </CustomSection>
  )
})