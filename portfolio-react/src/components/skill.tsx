import type { SkillProps } from '../utils/types'
import { memo } from 'react'

const Skill: React.FC<SkillProps> = ({name, imageSrc, highlighted, handleHover}) => {
  return (
    <div id={name.replace(/[\s.]+/g, '-')} className={`skill textured-main px-1 flex items-center py-0.5 w-fit ${highlighted ? 'highlight' : ''}`}
      {...handleHover ? { onMouseEnter: handleHover, onMouseLeave: handleHover } : {}}
      >  
      <img src={imageSrc} loading='lazy' alt={name} className="w-5 h-5 inline-block" />
      <span className="ml-2 text-xs font-medium">{name}</span>
    </div>
  )
}

export default memo(Skill)