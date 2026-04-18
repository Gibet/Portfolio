import { forwardRef } from 'react'
import type { SectionProps } from '../utils/types'
import CustomSection from '../components/customSection'
import { useForm, ValidationError } from '@formspree/react';
import { Container } from '../components/container';
import { Mail } from 'lucide-react';
import { CommandLine } from '../components/commandLine';


export const Contact = forwardRef<HTMLDivElement, SectionProps>(({ pinned, pinCount }, ref) => {

  const [state, handleSubmit] = useForm("xkovbadl");
  /* if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  } */

  return (
    <CustomSection id="contact" pinned={pinned} pinCount={pinCount} ref={ref} zIndex={1}>
      <div className='flex flex-col h-full items-center w-5/6 gap-6 sm:py-20 py-6'>
        <Container variant='header'>
          <CommandLine title="Contactez-moi" />
        </Container>
        <Container variant='body' className="md:w-2/5 sm:mt-8 mt-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              id="name"
              type="text"
              name="name"
              placeholder='> Votre Nom'
              className='px-4 py-6 text-sm'
            />
            <ValidationError 
              prefix="Name"
              field="name"
              errors={state.errors}
            />
            <input
              id="email"
              type="email" 
              name="email"
              placeholder='> Votre Email'
              className='px-4 py-6 text-sm'
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder='> Sujet'
              className='px-4 py-6 text-sm'
            />
            <ValidationError 
              prefix="Subject" 
              field="subject"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
              placeholder='> Votre Message'
              className='px-4 py-6 text-sm'
              rows={6}
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <button 
              type="submit"
              disabled={state.submitting}
              className="font-bold text-sm py-2 px-4">
              <Mail className='inline-block mr-2' strokeWidth={1.25}/>
              Envoyer
            </button>
          </form>
        </Container>
      </div>
    </CustomSection>
  )
})