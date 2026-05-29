import type { ThumbnailProps } from '../../utils/types';

const ProjectThumbnail = (props: ThumbnailProps) => {
  return (
    <div className="thumbnail lg:w-36 lg:h-36 md:w-30 md:h-30 py-3 sm:w-2/5 w-full h-25 relative cursor-pointer" onClick={props.onClick}>
      <img src={props.project.imageSrc} loading='lazy' alt={props.project.name} className="w-full h-9/12 absolute object-contain" />
      <div className='absolute bottom-0'>
        <h3 className="terminal text-xs mt-2 py-1 px-2">{props.project.name}</h3>
      </div>
    </div>
  );
}

export default ProjectThumbnail;