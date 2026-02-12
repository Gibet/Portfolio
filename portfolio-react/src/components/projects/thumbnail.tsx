import type { ThumbnailProps } from '../../utils/types';

const ProjectThumbnail = (props: ThumbnailProps) => {
  return (
    <div className="sm:w-60 sm:h-60 w-full h-40 relative cursor-pointer" onClick={props.onClick}>
      <img src={props.project.imageSrc} loading='lazy' alt={props.project.name} className="w-full h-full shadow-md absolute" />
      <div className='absolute bottom-0'>
        <h3 className="text-lg font-semibold mt-2">{props.project.name}</h3>
      </div>
    </div>
  );
}

export default ProjectThumbnail;