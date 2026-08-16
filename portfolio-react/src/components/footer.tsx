import type { HeaderProps } from "../utils/types";
import { Cog, Contact, File, Github, Home, Info, Linkedin, Mail, MapPin } from "lucide-react";
import CommandLine from "./commandLine";
import { memo } from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC<HeaderProps> = (props: HeaderProps) => {

  const { t } = useTranslation();
  return (
    <footer className="textured-main backdrop-blur-xs w-full 2xl:max-w-[75vw] grid grid-cols-2 justify-center items-start text-center pt-6">
      <div className="col-span-1 flex flex-col justify-self-center w-full px-4 items-start gap-2">
        <CommandLine variant="tertiary" title={t("footer.menu")} />
        <hr className="w-full" />
        <ul className="text-left w-full text-xs grid grid-cols-2 md:grid-cols-3 gap-3 text-nowrap">
          <li className="col-span-1">
            <button title="Accueil" onClick={() => props.navigate("home")}>
              <Home size={14} strokeWidth={1} />
              <span>{t("home.title")}</span>
            </button>
          </li>
          <li className="md:col-span-2 col-span-1">
            <button title="À propos" onClick={() => props.navigate("about")}>
              <Info size={14} strokeWidth={1} />
              <span>{t("about.title")}</span>
            </button>
          </li>
          <li className="col-span-1">
            <button title="Projets" onClick={() => props.navigate("projects")}>
              <Cog size={14} strokeWidth={1} />
              <span>{t("projects.title")}</span>
            </button>
          </li>
          <li className="col-span-1">
            <button title="Contact" onClick={() => props.navigate("contact")}>
              <Contact size={14} strokeWidth={1} />
              <span>{t("contact.title")}</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="col-span-1 flex flex-col justify-self-center w-full px-4 items-start gap-2">
        <CommandLine variant="tertiary" title={t("footer.links")} />
        <hr className="w-full" />
        <ul className="text-left text-xs grid grid-cols-1 gap-3">
          <li>
            <a href="https://github.com/Gibet" target="_blank" rel="noopener noreferrer">
              <Github size={14} strokeWidth={1} />
              <span>{t("home.github")}</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jean-bernard-laguerre/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={14} strokeWidth={1} />
              <span>{t("home.linkedin")}</span>
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1M1VR3DCBn6lERS2H2oUcULZt19GsVWh1/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <File size={14} strokeWidth={1} />
              <span>{t("home.cv")}</span>
            </a>
          </li>
        </ul>
      </div>
      <div id="contact-info" className="col-span-2 sm:col-span-1  sm:col-start-2 grid grid-cols-1 gap-3 justify-self-center w-full px-4 pt-3 items-start gap-2 md:hidden text-xs text-left">
          <a href="mailto:laguerre.jb.dev@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail size={14} strokeWidth={1} />
            <span> laguerre.jb.dev@gmail.com</span>
          </a>
          <span className="flex items-center">
            <MapPin size={14} strokeWidth={1} />
            <span> Marseille, France</span>
          </span>
      </div>
      <span className="absolute bottom-4 right-8 text-xs opacity-50">
        © 2026 - Jean-Bernard Laguerre.
      </span>
    </footer>
  );
};

export default memo(Footer);
