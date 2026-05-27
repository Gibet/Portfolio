import { memo, forwardRef, useState, useEffect } from 'react'
import type { SectionProps } from '../utils/types'
import CustomSection from '../components/customSection'
import { useForm, ValidationError } from '@formspree/react';
import { Container } from '../components/container';
import { Mail } from 'lucide-react';
import  CommandLine from '../components/commandLine';
import { Alert } from '../components/alert';


const ContactContent = ({ pinned, pinCount }: SectionProps, ref: React.Ref<HTMLDivElement>) => {

  const [state, handleSubmit] = useForm("mredkrzg");
  const [showAlert, setShowAlert] = useState(false);

  const handleAlertClose = () => {
    setShowAlert(false);
    // reset form if error
    if (state.errors) {
      const form = document.querySelector('form');
      form?.reset();
    }
  };

  // Open alert when form submission is complete 
  useEffect(() => {
    if (state.succeeded || state.errors) {
      setShowAlert(true);
    }
  }, [state.result, state.errors ]);

  const formValidation = () => Boolean(state.errors?.getFormErrors) || state.submitting;

  return (
    <CustomSection id="contact" pinned={pinned} pinCount={pinCount} ref={ref} zIndex={1}>
      <Container variant='header' className='px-1/12 sm:px-0 pt-8'>
        <CommandLine variant='title' title="Contactez-moi" />
      </Container>
      <div className='flex flex-col h-full items-center w-11/12 sm:w-5/6 gap-6 sm:py-12 py-6'>
        <div className="flex flex-col lg:flex-row lg:gap-12 w-11/12 sm:w-5/6 h-full lg:items-start items-center justify-start">
          <Container variant='body' className="hidden sm:block w-full lg:w-3/5 w h-fit text-xs sm:mt-8 mt-0">
            <p className=''>
              Je suis actuellement à la recherche d'opportunités professionnelles. N'hésitez pas à me contacter pour discuter de projets ou simplement pour échanger des idées !
            </p>
            <a href="mailto:laguerre.jb.dev@gmail.com" className="terminal block mt-1">
              laguerre.jb.dev@gmail.com
            </a>
          </Container>
          <Container variant='body' className="lg:w-2/5 sm:mt-8">
            <form onSubmit={handleSubmit} className="grid grid-cols-2 grid-rows-4 gap-1 sm:gap-3">
              <input
                required
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
                required
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
                className="font-bold text-xs py-2 px-4 col-span-2">
                <Mail size={18} className='inline-block mr-2' strokeWidth={1.25}/>
                Envoyer
              </button>
            </form>
          </Container>
        </div>
        <div className="footer"></div>
      </div>
      {showAlert && (
        <Alert
          success={state.succeeded}
          message={state.succeeded ? "Message envoyé avec succès !" : "Une erreur est survenue. Veuillez réessayer."}
          close={handleAlertClose}
        />
      )}
    </CustomSection>
  )
}

const Contact = forwardRef<HTMLDivElement, SectionProps>(ContactContent)
export default memo(Contact) as React.MemoExoticComponent<
  React.ForwardRefExoticComponent<SectionProps & React.RefAttributes<HTMLDivElement>>
>