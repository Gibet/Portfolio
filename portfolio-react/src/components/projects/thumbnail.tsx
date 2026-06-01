import type { ThumbnailProps } from '../../utils/types';

const ProjectThumbnail = (props: ThumbnailProps) => {
  return (
    <div className="thumbnail xl:w-36 xl:h-36 lg:w-30 lg:h-30 py-3 sm:w-2/5 w-full h-20 relative cursor-pointer" onClick={props.onClick} style={props.style}>
      <img src={props.project.imageSrc} loading='lazy' alt={props.project.name} className="w-full h-9/12 absolute object-contain" />
      <div className='absolute bottom-0'>
        <h3 className="terminal text-xs mt-2 py-1 px-2">{props.project.name}</h3>
      </div>
    </div>
  );
}

export default ProjectThumbnail;