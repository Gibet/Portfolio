import React from 'react'
import type { SkillProps } from '../utils/types'

export const Skill = (props : SkillProps) => {
  return (
    <div className="border px-2 flex items-center py-1 w-fit">
      <img src={props.imageSrc} loading='lazy' alt={props.name} className="w-8 h-8 inline-block" />
      <span className="ml-2 text-md font-medium">{props.name}</span>
    </div>
  )
}
