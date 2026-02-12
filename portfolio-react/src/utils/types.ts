export interface SectionProps {
  id?: string;
  pinned: boolean;
  lower?: boolean;
  children?: React.ReactNode;
  zIndex?: number;
}

export interface ProjectProps {
  category: string;
  name: string;
  description: string;
  imageSrc: string;
  stack: string[];
}

export interface ThumbnailProps {
  project: ProjectProps;
  onClick: () => void
}

export interface ModalProps {
  project: ProjectProps;
  onClose: () => void;
}