import type { AlertProps } from '../utils/types'

export const Alert = (props : AlertProps) => {

  return (
    <div className={`alert relative ${props.type === 'success' ? 'alert-success' : props.type === 'error' ? 'alert-error' : 'alert-info'} px-4 py-3 rounded relative`} role="alert">
      <span className="block sm:inline">{props.message}</span>
      <span className="absolute top-0 right-0 px-4 py-3">
          <button onClick={(e) => {}} className="text-2xl leading-none">&times;</button>
      </span>
    </div>
  )
}

