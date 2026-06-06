import type { CommandLineProps } from '../utils/types'
import { Github } from 'lucide-react'
import { memo } from 'react'

const CommandLine: React.FC<CommandLineProps> = (props: CommandLineProps) => {

  return (
    <div className={`command-line text-sm ubuntu-semi-bold flex items-center overflow-x-auto overflow-y-hidden whitespace-nowrap ${props.variant}`}>
      <span className="command-line-dot textured-main">&nbsp;</span>
      <span className='command-line-title textured-main'>{props.title}
        {props.children}
      </span>
      {props.subtitle && <span className="command-line-sub textured-main">{props.subtitle}</span>}
      {props.additionalInfo && <span className="command-line-add textured-main">{props.additionalInfo}</span>}
      {props.link && (
        <a href={props.link} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub" className="command-line-link flex items-center">
          <Github size={16} />
        </a>
      )}

    </div>
  )
}

export default memo(CommandLine)