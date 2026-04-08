import { forwardRef, useState } from 'react'
import type { SectionProps } from '../utils/types'
import CustomSection from '../components/customSection'
import * as skills from "../utils/skills.json"
import { Skill } from '../components/skill'
import { Container } from '../components/container'

const AboutTabs = ['Competences', 'Éducation', 'Éxperience']

export const About = forwardRef<HTMLDivElement, SectionProps>(({ pinned, lower = false }, ref) => {

  const [currentTab, setCurrentTab] = useState(AboutTabs[0])

  return (
    <CustomSection id='about' pinned={pinned} lower={lower} ref={ref} zIndex={4}>
      <div className='flex flex-col items-center  w-5/6 h-full sm:py-20 py-6'>
        <Container variant='header' className='flex flex-col gap-2.5'>
          <h1 className="text-xl font-bold terminal">A propos de moi</h1>
          <div className="flex flex-wrap gap-2">
            {AboutTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setCurrentTab(tab)}
                className={`px-3 py-1 text-sm ${currentTab === tab ? 'active' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </Container>
        <Container variant='body' className="mt-4 w-full h-full overflow-y-auto">
          {currentTab === 'Éducation' && (
              <ol className='sm:ml-6 sm:py-10 sm:pr-6 h-full relative py-10 overflow-y-auto'>
                <li className=''></li>
                <li className='mb-2 sm:ml-10 ml-6 flex items-center'>
                  <span className="absolute left-1.5 top-6 bottom-6 border-l chrono-line"></span>
                  <span className="absolute left-0 w-3.5 h-3.5 chrono-dot"></span>
                  <div className='event'>
                    <h2 className="text-lg font-semibold terminal">Bachelor Concepteur Développeur d'Applications (CDA)</h2>
                    <h4 className="text-md font-medium sm:ml-6">La Plateforme_ - 2022-2025</h4>
                    <ul className='list-disc sm:ml-10 ml-6 text-sm'>
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
          {currentTab === 'Éxperience' && (
              <ol className='sm:ml-6 sm:py-10 sm:pr-6 h-full relative py-10 overflow-y-auto'>
                <li className='mb-2 sm:ml-10 ml-6 flex items-center'>
                  <span className="absolute left-1.5 top-6 bottom-6 border-l chrono-line"></span>
                  <span className="absolute left-0 w-3.5 h-3.5 chrono-dot"></span>
                  <div className='event'>
                    <h2 className="text-lg font-semibold terminal">Développeur Web Junior (Alternance)</h2>
                    <h4 className="text-md font-medium sm:ml-6">L'Atelier de La Plateforme - 2023-2025</h4>
                    <ul className='list-disc sm:ml-10 ml-6 text-sm'>
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
            <div className='flex flex-wrap gap-3 sm:px-6 sm:py-6'>
              {Object.values(skills)
                .filter((s) => s?.name && s?.imageSrc)
                .map((skill) => (
                  <Skill imageSrc={skill.imageSrc} name={skill.name} key={skill.name} />
              ))}
            </div>
          )}
        </Container>
      </div>
    </CustomSection>
  )
})