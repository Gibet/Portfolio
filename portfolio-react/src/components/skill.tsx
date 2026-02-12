import React from 'react'

interface SkillProps {
  name: string
  imageSrc: string
}

export const skill = ({ name, imageSrc }: SkillProps) => {
  return (
    <div className="flex flex-col items-center m-4">
      <img src={imageSrc} loading='lazy' alt={name} className="w-16 h-16 mb-2" />
      <span className="text-center">{name}</span>
    </div>
  )
}
