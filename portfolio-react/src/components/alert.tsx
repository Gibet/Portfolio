import type { AlertProps } from '../utils/types'

export const Alert = (props : AlertProps) => {

  return (
    <div className={`alert ${props.success ? 'alert-success' : props.info ? 'alert-info' : 'alert-error'} relative`} role="alert">
      <span className="inline alert-message px-4 py-3">{props.message}</span>
      <button onClick={(e) => {}} 
        className="text-2xl close-button leading-none top-0 left-0 h-10 w-10">&times;</button>
    </div>
  )
}

