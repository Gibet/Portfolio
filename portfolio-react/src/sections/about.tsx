import { memo, forwardRef, useState, useMemo } from 'react'
import type { SectionProps, SkillKey } from '../utils/types'
import CustomSection from '../components/customSection'
import * as skills from "../utils/skills.json"
import Skill from '../components/skill'
import { Container } from '../components/container'
import CommandLine from '../components/commandLine'
import { splittingText } from '../utils/utils'
import DevLogo from '../components/logo/dev'
import { GraduationCap, Info, BriefcaseBusiness } from 'lucide-react'
import i18n from '../i18n'

type SkillsType = {
  name: string;
  imageSrc: string;
  related?: SkillKey[];
}

const skillsData = skills as Record<SkillKey, SkillsType>;

const AboutTabs = ['Competences', 'Éducation', 'Éxperience']
const languages: SkillKey[] = ['JavaScript', 'TypeScript', 'Golang', 'Python', 'SQL'];
const frontendSkills: SkillKey[] = ['Angular', 'React', 'ReactNative', 'TailwindCSS', 'Electron', 'Vite', 'Nextjs', 'HTML5', 'CSS3', 'Sass'];
const backendSkills: SkillKey[] = ['Nodejs', 'Expressjs', 'Nest', 'Fiber', 'MySQL', 'PostgreSQL', 'MongoDB'];
const toolsSkills: SkillKey[] = ['Git', 'Docker', 'GitHub', 'GithubActions'];

const AboutContent = ({ pinned, firstPinned, pinCount }: SectionProps, ref: React.Ref<HTMLDivElement>) => {

  const [currentTab, setCurrentTab] = useState(AboutTabs[0])
  const [hoveredSkill, setHoveredSkill] = useState<SkillKey | null>(null);

  const relatedSkills = useMemo(() => {
    return new Set(skillsData[hoveredSkill as SkillKey]?.related || []);
  }, [hoveredSkill]);

  const handleSkillHover = (skillKey: SkillKey) => {
    setHoveredSkill(current => current === skillKey ? null : skillKey);
  };

  return (
    <CustomSection id='about' pinned={pinned} firstPinned={firstPinned} pinCount={pinCount} ref={ref} zIndex={4}>
      <Container variant='header' className='flex flex-col gap-2'>
        <CommandLine variant='title' title="" subtitle={i18n.t("about.title")}>
          <Info size={18} className="ml-2" />
        </CommandLine>
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
      <div className='sect-main grid md:grid-cols-3 gap-4 items-start w-11/12 sm:w-5/6 h-full sm:py-12 py-6'>
        <Container variant='body' className="relative sm:mt-4 col-span-2 w-full h-full overflow-y-auto">
          { (currentTab === 'Éducation' || currentTab === 'Éxperience') && (
            <span className="pointer-events-none absolute inset-y-0 top-5 bottom-0 left-6 sm:left-12.5 w-0">
              <span className="sticky left-1.5 h-full border-l chrono-line"></span>
            </span> 
          ) }
          {currentTab === 'Éducation' && (
              <ol className='sm:ml-6 sm:pr-6 h-full relative'>
                <li className='mb-2 sm:ml-10 ml-6 flex items-center' style={{ '--event--index': 0 } as React.CSSProperties}>
                  <div className="event">
                    <CommandLine variant='diplome' title="" subtitle="Bachelor Concepteur Développeur d'Applications (CDA)">
                      <GraduationCap size={20} className="ml-2" color="var(--accent)"/>
                    </CommandLine>
                  </div>
                </li>
                <li className='mb-2 sm:ml-10 sm:mt-4 ml-6 flex items-center' style={{ '--event--index': 1 } as React.CSSProperties}>
                  <span className="absolute left-0 chrono-dot"></span>
                  <div className='event'>
                    <CommandLine variant='secondary' title="La Plateforme_" />
                    <h4 className="terminal text-sm font-medium sm:ml-6 items-center"><span className="text-xs">2023-2025: </span>Bachelor: Developpement Web et Mobile</h4>
                    <ul className='list-disc sm:ml-10 ml-6 text-xs'>
                      <li>Développement full stack, avec JavaScript, TypeScript, Node.js, React et Symfony</li>
                      <li>Développement d’API avec API Platform, Express, Integration de tests</li>
                      <li>Développement d'applications mobiles </li>
                      <li>Gestion de projets </li>
                      <li>CI/CD: Intégration et déploiement continus, declenchement de workflow et automatisation de pipeline</li>
                    </ul>
                    <h4 className="terminal text-sm font-medium sm:ml-6 items-center"><span className="text-xs">2022-2023: </span>Prepa Bachelor</h4>
                    <ul className='list-disc sm:ml-10 ml-6 text-xs'>
                      <li>HTML – CSS: Creation de site responsive</li>
                      <li>JavaScript – React JS – Node JS, PHP: manipulation du DOM, traitement de données et utilisation d'APIs</li>
                    </ul>
                  </div>
                </li>
                {/* <li className='mb-2 sm:ml-10 ml-6 flex items-center'>
                  <span className="absolute left-0 w-3.5 h-3.5 chrono-dot"></span>
                  <div className='event'>
                    <CommandLine variant='secondary' title="Supinfo Marseille" />
                    <h4 className="terminal text-xs font-medium sm:ml-6 items-center">2012-2016</h4>
                    <ul className='list-disc sm:ml-10 ml-6 text-xs'>
                      <li>Formation en développement web et mobile, avec JavaScript, Java, PHP, et les frameworks associés</li>
                      <li>Projets de développement en équipe, avec gestion de versions Git et méthodologies agiles</li>
                    </ul>
                  </div>
                </li> */}
              </ol>
          )}
          {currentTab === 'Éxperience' && (
              <ol className='sm:ml-6 sm:mt-4 sm:pr-6 h-full relative'>
                <li className='mb-2 sm:ml-10 ml-6 flex items-center' style={{ '--event--index': 0 } as React.CSSProperties}>
                  <div className="event">
                    <CommandLine variant='secondary' title="" subtitle="2 ans d'expérience professionnelle">
                      <BriefcaseBusiness size={20} className="ml-2" color="var(--accent)"/>
                    </CommandLine>
                  </div>
                </li>
                <li className='mb-2 sm:ml-10 ml-6 flex items-center' style={{ '--event--index': 1 } as React.CSSProperties}>
                  <span className="absolute left-0 w-3.5 h-3.5 chrono-dot"></span>
                  <div className='event'>
                    <CommandLine variant='secondary' title="Développeur Web Junior (Alternance)" />
                    <h4 className="terminal text-sm font-medium sm:ml-6 items-center">L'Atelier de La Plateforme - <span className="text-xs">2023-2025</span></h4>
                    <ul className='list-disc sm:ml-10 ml-6 text-xs'>
                      <li>Participation à plusieurs projets de développement web et mobile en environnement agile.</li>
                      <li>Contribution au développement full stack (React, Node.js) et à la mise en place de bonnes pratiques (tests,intégration continue, gestion de versions Git).</li>
                      <div className='mt-3'>
                        <CommandLine title='Projets' variant='title'/>
                        <ul className='mt-3 flex flex-col gap-2'>
                          <li className='terminal'>SRIAS: Projet avec lead dev pour la <a href="https://www.srias.paca.gouv.fr/">SRIAS PACA</a> de création d'une nouvelle platefore de gestion de leurs opérations.</li>
                          <li className='terminal'><a href="https://laplateforme.io/cyberpark/">Cyberpark</a>: Projet solo pour L'inovation Lab de La Plateforme_, Application Electron ayant pour but d'accompagner une escape game.</li>
                          <li className='terminal'>Toolbox (Projet interne): Outil de gestion de projet (création de repo github, monitoring des sites déployés, gestions des pull requests, emploi du temps, etc...).</li>
                        </ul>
                      </div>
                    </ul>
                  </div>
                </li>
                <li className='mb-2' style={{ '--event--index': 1 } as React.CSSProperties}>
                </li>
              </ol>
          )}
          {currentTab === 'Competences' && (
            <div className="flex flex-col gap-2 skills-container">
              <div className="event flex flex-col gap-1 sm:gap-1" style={{ '--event--index': 0 } as React.CSSProperties}>
                <CommandLine variant='tertiary' title="Langages" />
                <div className='flex flex-wrap sm:gap-2 gap-1 sm:px-6 sm:py-0.5'>
                  {languages.map((lang) => (
                    <Skill key={lang} name={skillsData[lang]?.name || lang} imageSrc={skillsData[lang]?.imageSrc}
                    highlighted={relatedSkills.has(lang)}
                    handleHover={() => {handleSkillHover(lang)}} />
                  ))}
                </div>
              </div>
              <div className="event flex flex-col gap-1 sm:gap-1" style={{ '--event--index': 1 } as React.CSSProperties}>
                <CommandLine variant='tertiary' title="Front-end" />
                <div className='flex flex-wrap sm:gap-2 gap-1 sm:px-6 sm:py-0.5'>
                  {frontendSkills.map((tech) => (
                    <Skill key={tech} name={skillsData[tech]?.name || tech} imageSrc={skillsData[tech]?.imageSrc} 
                    highlighted={relatedSkills.has(tech)}
                    handleHover={() => {handleSkillHover(tech)}} />
                  ))}
                </div>
              </div>
              <div className="event flex flex-col gap-3 sm:gap-1" style={{ '--event--index': 2 } as React.CSSProperties}>
                <CommandLine variant='tertiary' title="Back-end" />
                <div className='flex flex-wrap sm:gap-2 gap-1 sm:px-6 sm:py-0.5'>
                  {backendSkills.map((tech) => (
                    <Skill key={tech} name={skillsData[tech]?.name || tech} imageSrc={skillsData[tech]?.imageSrc}
                    highlighted={relatedSkills.has(tech)}
                    handleHover={() => {handleSkillHover(tech)}} />
                  ))}
                </div>
              </div>
              <div className="event flex flex-col gap-3 sm:gap-1" style={{ '--event--index': 3 } as React.CSSProperties}>
                <CommandLine variant='tertiary' title="Outils" />
                <div className='flex flex-wrap sm:gap-2 gap-1 sm:px-6 sm:py-0.5'>
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
        <Container variant='text' className="sm:mt-4 col-span-1 text-sm hidden md:block">
          <p className='terminal typed'>{splittingText(i18n.t("about.description"))}</p>
          <div className="logo-container w-full flex justify-center items-center mt-3">
            <DevLogo
              color={'var(--accent)'}
              primaryColor={'var(--primary)'}
              strokeWidth={.4}
              className='w-1/2 h-auto logo-draw'
            
            />
          </div>
        </Container>
      </div>
    </CustomSection>
  )
}

const About = forwardRef<HTMLDivElement, SectionProps>(AboutContent)
export default memo(About) as React.MemoExoticComponent<
  React.ForwardRefExoticComponent<SectionProps & React.RefAttributes<HTMLDivElement>>
>