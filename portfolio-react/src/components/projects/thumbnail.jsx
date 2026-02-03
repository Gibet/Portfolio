import ProjectProps from '../../utils/types';

const ProjectThumbnail = (ProjectProps) => {
  return (
    <div className="p-4">
      <img src={ProjectProps.imageSrc} alt={ProjectProps.name} className="w-full h-auto rounded-lg shadow-md" />
      <h3 className="text-lg font-semibold mt-2">{ProjectProps.name}</h3>
    </div>
  );
}

export default ProjectThumbnail;