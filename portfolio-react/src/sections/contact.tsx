import { forwardRef } from 'react'
import type { SectionProps } from '../utils/types'
import CustomSection from '../components/customSection'
import { useForm, ValidationError } from '@formspree/react';
import { Container } from '../components/container';
import { Mail } from 'lucide-react';
import { CommandLine } from '../components/commandLine';
import { Alert } from '../components/alert';


export const Contact = forwardRef<HTMLDivElement, SectionProps>(({ pinned, pinCount }, ref) => {

  const [state, handleSubmit] = useForm("xkovbadl");

  const handleAlertClose = () => {
    // Logic to close the alert, e.g., setting a state variable to hide it
    
  }
        

  const formValidation = () => Boolean(state.errors?.getFormErrors) || state.submitting;

  return (
    <CustomSection id="contact" pinned={pinned} pinCount={pinCount} ref={ref} zIndex={1}>
      <div className='flex flex-col h-full items-center w-11/12 sm:w-5/6 gap-6 sm:py-12 py-6'>
        <Container variant='header'>
          <CommandLine title="Contactez-moi" />
        </Container>
        <Container variant='body' className="md:w-2/5 sm:mt-8 mt-4">
          <form onSubmit={handleSubmit} className="grid grid-cols-2 grid-rows-4 gap-4">
            <input
              id="email"
              type="email" 
              name="email"
              placeholder='> Votre Email'
              className='px-4 py-6 text-xs col-span-2 row-span-1'
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <input
              id="name"
              type="text"
              name="name"
              placeholder='> Votre Nom'
              className='px-4 py-6 text-xs col-span-1 row-span-1'
            />
            <ValidationError 
              prefix="Name"
              field="name"
              errors={state.errors}
            />
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder='> Sujet'
              className='px-4 py-6 text-xs col-span-1 row-span-1'
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
              className='px-4 py-6 text-xs col-span-2 row-span-2 resize-none'
              rows={6}
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <button 
              type="submit"
              disabled={formValidation()}
              className="font-bold text-sm py-2 px-4 col-span-2">
              <Mail size={20} className='inline-block mr-2' strokeWidth={1.25}/>
              Envoyer
            </button>
          </form>
        </Container>
        <div className="footer"></div>
      </div>
      {state.result && (
        <Alert
          success={state.succeeded}
          message={state.succeeded ? "Message envoyé avec succès !" : "Une erreur est survenue. Veuillez réessayer."}
          close={handleAlertClose}
        />
      )}
    </CustomSection>
  )
})