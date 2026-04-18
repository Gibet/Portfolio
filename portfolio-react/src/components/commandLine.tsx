import type { CommandLineProps } from '../utils/types'
import { Github } from 'lucide-react'

export const CommandLine = (props: CommandLineProps) => {
  return (
    <div className="command-line flex items-center overflow-x-auto">
      <span className="command-line-dot">
        
      </span>
      <span className='command-line-title'>{props.title}</span>
      {props.subtitle && <span className="command-line-sub">{props.subtitle}</span>}
      {props.additionalInfo && <span className="command-line-add">{props.additionalInfo}</span>}
      {props.link && (
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="command-line-link flex items-center">
          <Github size={16} />
        </a>
      )}

    </div>
  )
}