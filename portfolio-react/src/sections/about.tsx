import { forwardRef, useState } from 'react'
import type { SectionProps } from '../utils/types'
import CustomSection from '../components/customSection'
import * as skills from "../utils/skills.json"

const AboutTabs = ['Competences', 'Education', 'Experience']

export const About = forwardRef<HTMLDivElement, SectionProps>(({ pinned, lower = false }, ref) => {

  const [currentTab, setCurrentTab] = useState(AboutTabs[0])

  return (
    <CustomSection id='about' pinned={pinned} lower={lower} ref={ref} zIndex={4}>
      <div className='flex flex-col items-center  w-5/6 h-full sm:py-20 py-6'>
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
          <div className="mt-4 container w-full h-full overflow-y-auto">
            {currentTab === 'Education' && (
                <ol className='border-l sm:ml-6 relative py-10'>
                  <li className=''></li>
                  <li className='mb-2 sm:ml-10 ml-6 flex items-center'>
                    <span className="absolute left-0 w-3.5 h-3.5 bg-blue-500"></span>
                    <div>
                      <h2 className="text-xl font-semibold">Bachelor Concepteur Développeur d'Applications (CDA)</h2>
                      <h4 className="text-md font-medium">La Plateforme_ - 2022-2025</h4>
                      <ul className='list-disc ml-5'>
                        <li>Développement full stack, avec JavaScript, Node.js, React et Symfony</li>
                        <li>Développement d’API avec API Platform, Express</li>
                        <li>Développement mobile </li>
                      </ul>
                    </div>
                  </li>
                  <li className='mb-2'>
                  </li>
                </ol>
            )}
            {currentTab === 'Experience' && (
                <ol className='border-l sm:ml-6 relative py-10'>
                  <li className='mb-2 sm:ml-10 ml-6 flex items-center'>
                    <span className="absolute left-0 w-3.5 h-3.5 bg-blue-500"></span>
                    <div>
                      <h2 className="text-xl font-semibold">Développeur Web Junior (Alternance)</h2>
                      <h4 className="text-md font-medium">L'Atelier de La Plateforme - 2023-2025</h4>
                      <ul className='list-disc ml-5'>
                        <li>Participation à plusieurs projets de développement web et mobile en environnement agile.</li>
                        <li>Contribution au développement full stack (React, Node.js) et à la mise en place de bonnes pratiques (tests,intégration continue, gestion de versions Git).</li>
                      </ul>
                    </div>
                  </li>
                  <li className='mb-2'>
                  </li>
                </ol>
            )}
            {currentTab === 'Competences' && (
              <div className='flex flex-wrap gap-3'>
                {skills.skills.map((skill) => (
                  <div key={skill.name} className="border px-2 flex items-center">
                    <img src={skill.imageSrc} alt={skill.name} className="w-10 h-10 inline-block mr-2" />
                    <span className="text-md font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
    </CustomSection>
  )
})