import type { HeaderProps } from "../utils/types";
import { Cog, Contact, Github, Home, Info, Linkedin, Mail } from "lucide-react";
import CommandLine from "./commandLine";
import { memo } from "react";

const Footer: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <footer className="textured-main backdrop-blur-xs w-full 2xl:max-w-[75vw] grid grid-cols-2 justify-center items-center text-center pt-6">
      <div className="col-span-1 flex flex-col justify-self-center w-full px-4 items-start gap-2">
        <CommandLine variant="tertiary" title="Menu" />
        <hr className="w-full" />
        <ul className="text-left w-full text-xs grid grid-cols-2 md:grid-cols-3 gap-3 text-nowrap">
          <li className="col-span-1">
            <button onClick={() => props.navigate("home")}>
              <Home size={14} strokeWidth={1} />
              <span>Accueil</span>
            </button>
          </li>
          <li className="md:col-span-2 col-span-1">
            <button onClick={() => props.navigate("about")}>
              <Info size={14} strokeWidth={1} />
              <span>À propos</span>
            </button>
          </li>
          <li className="col-span-1">
            <button onClick={() => props.navigate("projects")}>
              <Cog size={14} strokeWidth={1} />
              <span>Projets</span>
            </button>
          </li>
          <li className="col-span-1">
            <button onClick={() => props.navigate("contact")}>
              <Contact size={14} strokeWidth={1} />
              <span>Contact</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="col-span-1 flex flex-col justify-self-center w-full px-4 items-start gap-2">
        <CommandLine variant="tertiary" title="Liens" />
        <hr className="w-full" />
        <ul className="text-left text-xs grid grid-cols-1 gap-3">
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              <Github size={14} strokeWidth={1} />
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              <Linkedin size={14} strokeWidth={1} />
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
      <div id="contact-info" className="col-span-1 sm:col-start-2 flex flex-col justify-self-center w-full px-4 pt-3 items-start gap-2 md:hidden text-xs text-left">
        <span>
          <a href="" target="_blank" rel="noopener noreferrer">
            <Mail size={14} strokeWidth={1} />
            <span> laguerre.jb.dev@gmail.com</span>
          </a>
        </span>
      </div>
      <span className="absolute bottom-4 right-8 text-xs opacity-50">
        © 2026 - Jean-Bernard Laguerre.
      </span>
    </footer>
  );
};

export default memo(Footer);
