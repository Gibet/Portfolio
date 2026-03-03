import type { ThumbnailProps } from '../../utils/types';

const ProjectThumbnail = (props: ThumbnailProps) => {
  return (
    <div className="thumbnail sm:w-48 sm:h-48 w-full h-40 relative cursor-pointer" onClick={props.onClick}>
      <img src={props.project.imageSrc} loading='lazy' alt={props.project.name} className="w-full h-full shadow-md absolute object-contain" />
      <div className='absolute bottom-0'>
        <h3 className="text-lg font-semibold mt-2 py-2 px-4">{props.project.name}</h3>
      </div>
    </div>
  );
}

export default ProjectThumbnail;