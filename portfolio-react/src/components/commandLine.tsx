import type { CommandLineProps } from '../utils/types'
import { Github, Link } from 'lucide-react'
import { memo } from 'react'

const CommandLine: React.FC<CommandLineProps> = (props: CommandLineProps) => {

  return (
    <div className={`command-line text-sm font-semibold flex items-center overflow-x-auto overflow-y-hidden whitespace-nowrap ${props.variant}`}>
      <span className="command-line-dot textured-main">&nbsp;</span>
      <span className='command-line-title textured-main'>
        <h3>{props.children}{props.title}</h3>
      </span>
      {props.subtitle && <span className="command-line-sub textured-main">
        <h3>{props.subtitle}</h3></span>}
      {props.additionalInfo && <span className="command-line-add textured-main">{props.additionalInfo}</span>}
      {props.link && (
        <a href={props.link} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub" className="command-line-link flex items-center">
          <Github size={16} />
        </a>
      )}
      {props.demo && (
        <a href={props.demo} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub" className="command-line-demo flex items-center">
          <Link size={16} />
        </a>
      )}

    </div>
  )
}

export default memo(CommandLine)