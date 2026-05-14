import type { SkillProps } from '../utils/types'
import { memo } from 'react'

const Skill: React.FC<SkillProps> = ({name, imageSrc, handleHover}) => {
  return (
    <div id={name.replace(/[\s.]+/g, '-')} className="skill px-2 flex items-center py-1 w-fit"
      {...handleHover ? { onMouseEnter: handleHover, onMouseLeave: handleHover } : {}}
      >  
      <img src={imageSrc} loading='lazy' alt={name} className="w-5 h-5 inline-block" />
      <span className="ml-2 text-sm font-medium">{name}</span>
    </div>
  )
}

export default memo(Skill)