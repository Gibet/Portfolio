import { useState } from 'react';
import type { AlertProps } from '../utils/types'

export const Alert = (props : AlertProps) => {

  const [isClosing, setIsClosing] = useState(false);
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      props.close();
      setIsClosing(false);
    }, 300);
  }

  return (
    <div data-closing={isClosing} className={`alert textured-main ${props.success ? 'alert-success' : props.info ? 'alert-info' : 'alert-error'} relative`} role="alert">
      <span className="inline alert-message px-4 py-3 text-xs terminal">{props.message}</span>
      <button onClick={handleClose} 
        className="text-2xl close-button leading-none top-0 left-0 h-10 w-10">&times;</button>
    </div>
  )
}

