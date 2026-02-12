import type { ModalProps } from '../../utils/types';

const ProjectModal = (props: ModalProps) => {
  return (
    <div className='absolute inset-0 bg-black/50 flex items-center justify-center' onClick={props.onClose}>
      <div className="modal sm:w-3/4 w-5/6 h-5/6 flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <p className="modal-title">{props.project.name}</p>
          <button onClick={props.onClose} className="close-button">X</button>
        </div>
        <div className="modal-body h-full flex flex-col justify-between gap-4">
          <div className="modal-image-container">
            <img src={props.project.imageSrc} alt={props.project.name} className="modal-image" />
          </div>
          <div>
            <p>{props.project.description}</p>
            <div className="modal-stack">
              {props.project.stack.map((tech) => (
                <span key={tech} className="modal-stack-item">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;