import { forwardRef } from 'react'
import type { SectionProps } from '../utils/types'
import CustomSection from '../components/customSection'

export const Skills = forwardRef<HTMLDivElement, SectionProps>(({ pinned, lower = false }, ref) => {
  return (
    <CustomSection id="skills" pinned={pinned} lower={lower} ref={ref} zIndex={2}>
      <h1 className="text-2xl font-bold">My Skills</h1>
      <p className="mt-4">This is the skills section where I list my technical abilities.</p>
    </CustomSection>
  )
})
