import { forwardRef } from 'react'
import type { SectionProps } from '../utils/types'
import CustomSection from '../components/customSection'


export const Contact = forwardRef<HTMLDivElement, SectionProps>(({ pinned }, ref) => {
  return (
    <CustomSection id="contact" pinned={pinned} ref={ref} zIndex={1}>
      <div className='flex flex-col items-start  w-5/6 gap-6 py-20'>
        <div className="container">
          <h1 className="text-2xl font-bold">Contactez-moi</h1>
        </div>
        <div className="container md:w-2/5">
          <form action="" className='flex flex-col'>
            <input type="text" placeholder="Votre nom" className="border p-2 mb-4 w-full" />
            <input type="email" placeholder="Votre email" className="border p-2 mb-4 w-full" />
            <textarea placeholder="Votre message" className="border p-2 mb-4 w-full h-32"></textarea>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Envoyer</button>
          </form>
        </div>
      </div>
    </CustomSection>
  )
})