import type { SkillProps } from '../utils/types'

export const Skill = (props : SkillProps) => {
  return (
    <div className="skill px-2 flex items-center py-1 w-fit">
      <img src={props.imageSrc} loading='lazy' alt={props.name} className="w-5 h-5 inline-block" />
      <span className="ml-2 text-sm font-medium">{props.name}</span>
    </div>
  )
}
