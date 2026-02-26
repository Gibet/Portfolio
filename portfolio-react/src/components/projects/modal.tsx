import { useEffect, useState } from 'react';
import type { ModalProps } from '../../utils/types';
import { Skill } from '../skill';


const ProjectModal = (props: ModalProps) => {
  const [images, setImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //Load project images
  const getProjectImage = (name: string) => {
    const imagesFolder = import.meta.glob<{default: string}>(`../../assets/projects/${name}/*.{png,jpg,jpeg,svg}`, { eager: true });
    
    const imagePaths = Object.values(imagesFolder).map(image => image.default);
    setImages(imagePaths);
  }

  useEffect(() => {
    getProjectImage(props.project.name);
  }, [props.project.name]);

  return (
    <div className='absolute inset-0 bg-black/50 flex items-center justify-center' onClick={props.onClose}>
      <div className="modal sm:w-3/4 w-5/6 h-5/6 flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <p className="modal-title">{props.project.name}</p>
          <button onClick={props.onClose} className="close-button">X</button>
        </div>
        <div className="modal-body h-full flex flex-col justify-between gap-4">
          <div className="modal-image-container w-full h-full">
            <img src={props.project.imageSrc} alt={props.project.name} className="modal-image h-full" />
          </div>
          <div>
            <p>{props.project.description}</p>
            <div className="modal-stack flex flex-wrap gap-2 mt-4 items-center">
              <h5 className="text-sm font-bold">Stack:</h5>
              {props.project.stack.map((tech) => (
                <Skill key={tech} name={tech} imageSrc={`/images/logo/${tech}.svg`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;