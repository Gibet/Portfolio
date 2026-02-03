import type { ProjectProps } from '../../utils/types';

const ProjectThumbnail = (props: ProjectProps) => {
  return (
    <div className="p-4">
      <img src={props.imageSrc} alt={props.name} className="w-full h-auto rounded-lg shadow-md" />
      <h3 className="text-lg font-semibold mt-2">{props.name}</h3>
    </div>
  );
}

export default ProjectThumbnail;