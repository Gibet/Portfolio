export interface SectionProps {
  id?: string;
  pinned: boolean;
  lower?: boolean;
  children?: React.ReactNode;
  zIndex?: number;
}

export interface HeaderProps {
  navigate: (section: string) => void;
  activeSection: string;
}

export interface ProjectProps {
  category: string;
  name: string;
  description: string;
  imageSrc: string;
  stack: string[];
  link: string;
}

export interface ThumbnailProps {
  project: ProjectProps;
  onClick: () => void
}

export interface ModalProps {
  project: ProjectProps;
  onClose: () => void;
}

export interface SkillProps {
  name: string;
  imageSrc: string;
}