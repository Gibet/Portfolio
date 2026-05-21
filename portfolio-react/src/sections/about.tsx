import { memo, forwardRef, useState, useMemo } from 'react'
import type { SectionProps, SkillKey } from '../utils/types'
import CustomSection from '../components/customSection'
import * as skills from "../utils/skills.json"
import Skill from '../components/skill'
import { Container } from '../components/container'
import CommandLine from '../components/commandLine'

type SkillsType = {
  name: string;
  imageSrc: string;
  related?: SkillKey[];
}

const skillsData = skills as Record<SkillKey, SkillsType>;

const AboutTabs = ['Competences', 'Éducation', 'Éxperience']
const languages: SkillKey[] = ['JavaScript', 'TypeScript', 'Golang', 'Python', 'SQL'];
const frontendSkills: SkillKey[] = ['React', 'ReactNative', 'TailwindCSS', 'Electron', 'Vite', 'Nextjs', 'HTML5', 'CSS3', 'Sass'];
const backendSkills: SkillKey[] = ['Nodejs', 'Expressjs', 'Nest', 'Fiber', 'MySQL', 'PostgreSQL', 'MongoDB'];
const toolsSkills: SkillKey[] = ['Git', 'Docker', 'GitHub', 'GithubActions'];

const AboutContent = ({ pinned, firstPinned, pinCount, lower = false }: SectionProps, ref: React.Ref<HTMLDivElement>) => {

  const [currentTab, setCurrentTab] = useState(AboutTabs[0])
  const [hoveredSkill, setHoveredSkill] = useState<SkillKey | null>(null);

  const relatedSkills = useMemo(() => {
    return new Set(skillsData[hoveredSkill as SkillKey]?.related || []);
  }, [hoveredSkill]);

  const handleSkillHover = (skillKey: SkillKey) => {
    setHoveredSkill(current => current === skillKey ? null : skillKey);
  };

  return (
    <CustomSection id='about' pinned={pinned} firstPinned={firstPinned} pinCount={pinCount} lower={lower} ref={ref} zIndex={4}>
      <div className='flex flex-col items-center w-11/12 sm:w-5/6 h-full sm:py-12 py-6'>
        <Container variant='header' className='flex flex-col gap-2'>
          <CommandLine variant='title' title="A propos de moi" />
          <div className="flex flex-wrap gap-2">
            {AboutTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setCurrentTab(tab)}
                className={`px-3 py-1 text-xs ${currentTab === tab ? 'active' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </Container>
        <Container variant='body' className="mt-4 w-full h-full overflow-y-auto">
          {currentTab === 'Éducation' && (
              <ol className='sm:ml-6 sm:py-10 sm:pr-6 h-full relative overflow-y-auto'>
                <span className="pointer-events-none absolute inset-y-0 top-5 bottom-0 left-1.5 w-0">
                  <span className="sticky left-1.5 h-full border-l chrono-line"></span>
                </span>  
                <li className='mb-2 sm:ml-10 ml-6 flex items-center'>
                  <span className="absolute left-0 chrono-dot"></span>
                  <div className='event'>
                    <CommandLine variant='secondary' title="Bachelor Concepteur Développeur d'Applications (CDA)" />
                    <h4 className="terminal text-md font-medium sm:ml-6 items-center">La Plateforme_ - <span className="text-xs">2022-2025</span></h4>
                    <ul className='list-disc sm:ml-10 ml-6 text-xs'>
                      <li>Développement full stack, avec JavaScript, Node.js, React et Symfony</li>
                      <li>Développement d’API avec API Platform, Express</li>
                      <li>Développement mobile </li>
                    </ul>
                  </div>
                </li>
                <li className='mb-2 sm:ml-10 ml-6 flex items-center'>
                  <span className="absolute left-0 w-3.5 h-3.5 chrono-dot"></span>
                  <div className='event'>
                    <CommandLine variant='secondary' title="Supinfo Marseille" />
                    <h4 className="terminal text-xs font-medium sm:ml-6 items-center">2012-2016</h4>
                    <ul className='list-disc sm:ml-10 ml-6 text-xs'>
                      <li>Formation en développement web et mobile, avec JavaScript, Java, PHP, et les frameworks associés</li>
                      <li>Projets de développement en équipe, avec gestion de versions Git et méthodologies agiles</li>
                    </ul>
                  </div>
                </li>
              </ol>
          )}
          {currentTab === 'Éxperience' && (
              <ol className='sm:ml-6 sm:py-10 sm:pr-6 h-full relative overflow-y-auto'>
                <span className="pointer-events-none absolute inset-y-0 left-1.5 top-5 bottom-0 w-0">
                  <span className="sticky left-1.5 h-full border-l chrono-line"></span>
                </span> 
                <li className='mb-2 sm:ml-10 ml-6 flex items-center'>
                  <span className="absolute left-0 w-3.5 h-3.5 chrono-dot"></span>
                  <div className='event'>
                    <CommandLine variant='secondary' title="Développeur Web Junior (Alternance)" />
                    <h4 className="terminal text-md font-medium sm:ml-6 items-center">L'Atelier de La Plateforme - <span className="text-xs">2023-2025</span></h4>
                    <ul className='list-disc sm:ml-10 ml-6 text-xs'>
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
            <div className="flex flex-col gap-2 sm:ml-6 sm:py-6">
              <div className="event flex flex-col gap-3 sm:gap-1">
                <CommandLine variant='tertiary' title="Langages" />
                <div className='flex flex-wrap gap-2 sm:px-6 sm:py-0.5'>
                  {languages.map((lang) => (
                    <Skill key={lang} name={skillsData[lang]?.name || lang} imageSrc={skillsData[lang]?.imageSrc}
                    highlighted={relatedSkills.has(lang)}
                    handleHover={() => {handleSkillHover(lang)}} />
                  ))}
                </div>
              </div>
              <div className="event flex flex-col gap-3 sm:gap-1">
                <CommandLine variant='tertiary' title="Front-end" />
                <div className='flex flex-wrap gap-2 sm:px-6 sm:py-0.5'>
                  {frontendSkills.map((tech) => (
                    <Skill key={tech} name={skillsData[tech]?.name || tech} imageSrc={skillsData[tech]?.imageSrc} 
                    highlighted={relatedSkills.has(tech)}
                    handleHover={() => {handleSkillHover(tech)}} />
                  ))}
                </div>
              </div>
              <div className="event flex flex-col gap-3 sm:gap-1">
                <CommandLine variant='tertiary' title="Back-end" />
                <div className='flex flex-wrap gap-2 sm:px-6 sm:py-0.5'>
                  {backendSkills.map((tech) => (
                    <Skill key={tech} name={skillsData[tech]?.name || tech} imageSrc={skillsData[tech]?.imageSrc}
                    highlighted={relatedSkills.has(tech)}
                    handleHover={() => {handleSkillHover(tech)}} />
                  ))}
                </div>
              </div>
              <div className="event flex flex-col gap-3 sm:gap-1">
                <CommandLine variant='tertiary' title="Outils" />
                <div className='flex flex-wrap gap-2 sm:px-6 sm:py-0.5'>
                  {toolsSkills.map((tech) => (
                    <Skill key={tech} name={skillsData[tech]?.name || tech} 
                      imageSrc={skillsData[tech]?.imageSrc}
                      highlighted={relatedSkills.has(tech)}
                      handleHover={() => {handleSkillHover(tech)}} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </Container>
      </div>
    </CustomSection>
  )
}

const About = forwardRef<HTMLDivElement, SectionProps>(AboutContent)
export default memo(About) as React.MemoExoticComponent<
  React.ForwardRefExoticComponent<SectionProps & React.RefAttributes<HTMLDivElement>>
>