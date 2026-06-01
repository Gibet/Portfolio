import type { ThumbnailProps } from '../../utils/types';

const ProjectThumbnail = (props: ThumbnailProps) => {
  return (
    <div className="thumbnail xl:h-36 sm:h-30 py-3 w-full min-w- h-25 relative cursor-pointer" onClick={props.onClick} style={props.style}>
      <img src={props.project.imageSrc} loading='lazy' alt={props.project.name} className="w-full h-9/12 absolute object-contain" />
      <div className='absolute bottom-0'>
        <h3 className="terminal text-xs mt-2 py-1 px-2">{props.project.name}</h3>
      </div>
    </div>
  );
}

export default ProjectThumbnail;