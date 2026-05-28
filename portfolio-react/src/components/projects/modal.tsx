import { useEffect, useState } from 'react';
import type { ModalProps } from '../../utils/types';
import Skill from '../skill';
import * as skills from "../../utils/skills.json";
import CommandLine from '../commandLine';
import loadingSVG from '../loading';

const ProjectImages = import.meta.glob<{default: string}>('/src/assets/images/projects/**/*.{png,jpg,jpeg}'); 
const imagesCache = new Map<string, string[]>();

const ProjectModal = (props: ModalProps) => {

  const [loading, setLoading] = useState(true);

  const [images, setImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //Load project images
  const getProjectImage = async (name: string) => {

    // Check cache first
    if (imagesCache.has(name)) {
      setImages(imagesCache.get(name) || []);
      setLoading(false);
      return;
    }
 
    // If not in cache, load images
    setLoading(true);
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
    setLoading(false);
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
      <div className="relative modal xl:w-[60vw] 2xl:w-[50vw] sm:w-5/6 w-11/12 h-[80vh] flex flex-col" onClick={e => e.stopPropagation()}>
        <button onClick={props.onClose} className="close-button h-10 w-10 absolute top-0 right-0">
          X
        </button>
        <div className="modal-body h-full flex flex-col gap-3">
          <div className="modal-image-container max-h-2/3 col-span-1 w-full relative">
            {loading ? (
              <div className="modal-loading w-full flex items-center justify-center">
                {loadingSVG}
              </div>
            ) : (
              <img src={images[currentImageIndex]} alt={`${props.project.name} screenshot`} className="modal-image mx-auto object-contain" />
            )}
            {images.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2">
                  &lt;
                </button>
                <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2">
                  &gt;
                </button>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white px-2 py-1 text-sm">
                  {images.map((_, i) => {
                    return (
                      <span key={i} className={`mx-1 w-2 h-2 image-index ${i === currentImageIndex && 'current-image'}`}></span>
                    );
                  })}
                </div>
              </>
            )}
          </div>
          <div className="px-6 w-full project-title">
            <CommandLine title={props.project.name} subtitle={props.project.context} additionalInfo={props.project.category} link={props.project.github} />
          </div>
          <div className="modal-content grid sm:grid-cols-2 grid-cols-1 col-span-1 gap-4 overflow-y-auto sm:overflow-y-hidden relative">
            <div className="px-6 py-1 gap-3 col-span-1 flex flex-col sm:overflow-y-auto overflow-y-visible">
              <h5 className="text-sm font-bold">Description:</h5>
              <p className="terminal text-sm">{props.project.description}</p>
              <div className="modal-stack flex flex-wrap gap-2 items-center">
                <h5 className="text-sm font-bold">Stack:</h5>
                {props.project.stack.map((tech) => (
                  <Skill key={tech} name={skills[tech]?.name || tech} imageSrc={skills[tech]?.imageSrc} />
                ))}
              </div>
            </div>
            <span className="self-stretch divider hidden sm:block absolute left-1/2 top-0 bottom-0"></span>
            <div className='px-6 py-1 gap-2 col-span-1 flex w-full flex-col sm:overflow-y-auto overflow-y-visible'>
              <h5 className="text-sm font-bold">Roles:</h5>
              <div className="flex flex-col">
                {props.project.role.map((role) => (
                  <span key={role} className="terminal text-sm px-2 py-1">
                    {role}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;