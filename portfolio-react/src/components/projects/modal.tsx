import { useEffect, useState } from 'react';
import type { ModalProps } from '../../utils/types';
import { Skill } from '../skill';
import * as skills from "../../utils/skills.json";

const ProjectImages = import.meta.glob<{default: string}>('/src/assets/images/projects/**/*.{png,jpg,jpeg}'); 
const imagesCache = new Map<string, string[]>();

const ProjectModal = (props: ModalProps) => {
  const [images, setImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //Load project images
  const getProjectImage = async (name: string) => {

    // Check cache first
    if (imagesCache.has(name)) {
      setImages(imagesCache.get(name) || []);
      return;
    }

    // If not in cache, load images
    const imagePath: string[] = [];
    for (const [path, resolver] of Object.entries(ProjectImages)) {
      if (path.includes(`/projects/${name}`)) {
        const resolvedPath = await resolver();
        imagePath.push(resolvedPath.default);// Debug log
      }
    }

    // Cache the loaded images
    (imagePath.length > 0) && imagesCache.set(name, imagePath);
    setImages(imagePath);
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }

  useEffect(() => {
    getProjectImage(props.project.name);
  }, [props.project.name]);

  return (
    <div className='absolute inset-0 bg-black/50 flex items-center justify-center' onClick={props.onClose}>
      <div className="relative modal sm:w-fit w-5/6 max-h-5/6 flex flex-col" onClick={e => e.stopPropagation()}>
        <button onClick={props.onClose} className="close-button h-10 w-10 absolute top-0 right-0">
          X
        </button>
        <div className="modal-body h-full flex flex-col gap-4">
          <div className="modal-image-container w-full relative">
            <img src={images[currentImageIndex]} alt={`${props.project.name} screenshot`} className="modal-image mx-auto object-contain" />
            {images.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2">
                  &lt;
                </button>
                <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2">
                  &gt;
                </button>
              </>
            )}
          </div>
          <div className="modal-content p-6 pt-2">
            <h3 className="text-2xl mb-4 font-bold terminal">{props.project.name}</h3>
            <p className="text-sm">{props.project.description}</p>
            <div className="modal-stack flex flex-wrap gap-2 mt-4 items-center">
              <h5 className="text-sm font-bold">Stack:</h5>
              {props.project.stack.map((tech) => (
                <Skill key={tech} name={skills[tech]?.name || tech} imageSrc={skills[tech]?.imageSrc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;