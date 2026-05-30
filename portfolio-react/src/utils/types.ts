import type React from "react";
import type { RefObject } from "react";

export interface SectionProps {
  id?: string;
  pinned: boolean;
  children?: React.ReactNode;
  firstPinned?: boolean;
  pinCount?: number;
  zIndex?: number;
}

export interface HeaderProps {
  navigate: (section: string) => void;
  activeSection: string;
}

export type SkillKey = keyof typeof import("./skills.json");
export interface ProjectProps {
  category: string;
  context: string;
  name: string;
  description: string;
  imageSrc: string;
  videoSrc?: string;
  stack: SkillKey[];
  github: string;
  role: string[];
}

export interface ThumbnailProps 
  extends React.ComponentProps<'div'> {
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
  highlighted?: boolean;
  handleHover?: () => void;
}


export const sections = ['home', 'about', 'projects', 'contact'];
export interface NavigationProps {
  index: number;
  sectionRefs: RefObject<{ [key: string]: HTMLElement | null }>;
  activeSectionRef: RefObject<string>;
  handleSectionChange: (section: string, from?: string) => void;
}

export interface ProjectNavProps {
  ProjectsList: { projects: ProjectProps[] },
  currentCategory: string,
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  openModal: (project: ProjectProps) => void,
  pageSize: number;
};

export interface CommandLineProps {
  title: string
  subtitle?: string
  additionalInfo?: string
  link?: string
  variant?: 'primary' | 'title' | 'secondary' | 'tertiary'
}

export interface AlertProps {
  success?: boolean
  /* errors?: string[] */
  info?: boolean
  message: string
  close: () => void
}

export type LogoProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  primaryColor?: string;
  strokeWidth?: number;
}