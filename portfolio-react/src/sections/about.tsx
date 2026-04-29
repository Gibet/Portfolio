import { forwardRef, useState } from 'react'
import type { SectionProps, SkillKey } from '../utils/types'
import CustomSection from '../components/customSection'
import * as skills from "../utils/skills.json"
import { Skill } from '../components/skill'
import { Container } from '../components/container'
import { CommandLine } from '../components/commandLine'

const AboutTabs = ['Competences', 'Éducation', 'Éxperience']
const languages: SkillKey[] = ['JavaScript', 'TypeScript', 'Golang', 'Python'];
const frontendSkills: SkillKey[] = ['React', 'ReactNative', 'TailwindCSS', 'Electron', 'Vite', 'Nextjs', 'HTML5', 'CSS3'];
const backendSkills: SkillKey[] = ['Nodejs', 'Expressjs', 'Nest', 'Fiber', 'MySQL', 'PostgreSQL', 'MongoDB'];
const toolsSkills: SkillKey[] = ['Git', 'Docker', 'GitHub', 'GithubActions'];

export const About = forwardRef<HTMLDivElement, SectionProps>(({ pinned, firstPinned, pinCount, lower = false }, ref) => {

  const [currentTab, setCurrentTab] = useState(AboutTabs[0])

  return (
    <CustomSection id='about' pinned={pinned} firstPinned={firstPinned} pinCount={pinCount} lower={lower} ref={ref} zIndex={4}>
      <div className='flex flex-col items-center  w-5/6 h-full sm:py-20 py-6'>
        <Container variant='header' className='flex flex-col gap-2.5'>
          <CommandLine title="A propos de moi" />
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
                <span className="pointer-events-none absolute inset-y-0 top-5 bottom-0 left-1.5 w-0">
                  <span className="sticky left-1.5 h-full border-l chrono-line"></span>
                </span>  
                <li className='mb-2 sm:ml-10 ml-6 flex items-center'>
                  <span className="absolute left-0 w-3.5 h-3.5 chrono-dot"></span>
                  <div className='event'>
                    <CommandLine title="Bachelor Concepteur Développeur d'Applications (CDA)" />
                    <h4 className="terminal text-md font-medium sm:ml-6">La Plateforme_ - 2022-2025</h4>
                    <ul className='list-disc sm:ml-10 ml-6 text-sm'>
                      <li>Développement full stack, avec JavaScript, Node.js, React et Symfony</li>
                      <li>Développement d’API avec API Platform, Express</li>
                      <li>Développement mobile </li>
                    </ul>
                  </div>
                </li>
                <li className='mb-2 sm:ml-10 ml-6 flex items-center'>
                  <span className="absolute left-0 w-3.5 h-3.5 chrono-dot"></span>
                  <div className='event'>
                    <CommandLine title="Supinfo Marseille" />
                    <h4 className="terminal text-md font-medium sm:ml-6">2012-2016</h4>
                    <ul className='list-disc sm:ml-10 ml-6 text-sm'>
                      <li>Formation en développement web et mobile, avec JavaScript, Java, PHP, et les frameworks associés</li>
                      <li>Projets de développement en équipe, avec gestion de versions Git et méthodologies agiles</li>
                    </ul>
                  </div>
                </li>
              </ol>
          )}
          {currentTab === 'Éxperience' && (
              <ol className='sm:ml-6 sm:py-10 sm:pr-6 h-full relative py-10 overflow-y-auto'>
                <span className="pointer-events-none absolute inset-y-0 left-1.5 top-5 bottom-0 w-0">
                  <span className="sticky left-1.5 h-full border-l chrono-line"></span>
                </span> 
                <li className='mb-2 sm:ml-10 ml-6 flex items-center'>
                  <span className="absolute left-0 w-3.5 h-3.5 chrono-dot"></span>
                  <div className='event'>
                    <CommandLine title="Développeur Web Junior (Alternance)" />
                    <h4 className="terminal text-md font-medium sm:ml-6">L'Atelier de La Plateforme - 2023-2025</h4>
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
            <div className="flex flex-col gap-6 sm:gap-2 sm:ml-6 py-8">
              <div className="flex flex-col gap-3 sm:gap-1">
                <CommandLine title="Langages" />
                <div className='flex flex-wrap gap-2 sm:px-6 sm:py-3'>
                  {languages.map((lang) => (
                    <Skill key={lang} name={skills[lang]?.name || lang} imageSrc={skills[lang]?.imageSrc} />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:gap-1">
                <CommandLine title="Front-end" />
                <div className='flex flex-wrap gap-2 sm:px-6 sm:py-3'>
                  {frontendSkills.map((tech) => (
                    <Skill key={tech} name={skills[tech]?.name || tech} imageSrc={skills[tech]?.imageSrc} />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:gap-1">
                <CommandLine title="Back-end" />
                <div className='flex flex-wrap gap-2 sm:px-6 sm:py-3'>
                  {backendSkills.map((tech) => (
                    <Skill key={tech} name={skills[tech]?.name || tech} imageSrc={skills[tech]?.imageSrc} />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:gap-1">
                <CommandLine title="Outils" />
                <div className='flex flex-wrap gap-2 sm:px-6 sm:py-3'>
                  {toolsSkills.map((tech) => (
                    <Skill key={tech} name={skills[tech]?.name || tech} imageSrc={skills[tech]?.imageSrc} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </Container>
      </div>
    </CustomSection>
  )
})