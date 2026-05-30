import { type LogoProps } from "../../utils/types";

const MailLogo = (props: LogoProps) => (
  <svg
    viewBox="-2 -2 24.00 24.00"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={props.color || "#000000"}
    strokeWidth={props.strokeWidth || 0}
    xmlSpace="preserve"
    className={props.className}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <g id="layer1">
        {" "}
        <path
          d="M 0 4 L 0 17 L 9 17 L 9 16 L 1 16 L 1 5 L 19 5 L 19 12.671875 L 20 13.671875 L 20 4 L 0 4 z M 14 6 L 14 11 L 15 11 L 16.5 11 L 18 11 L 18 6 L 14 6 z M 15 7 L 17 7 L 17 10 L 15 10 L 15 7 z M 3 11 L 3 12 L 11 12 L 11 11 L 3 11 z M 3 13 L 3 14 L 9 14 L 9 13 L 3 13 z M 15 13 L 18 16 L 11 16 L 11 17 L 18 17 L 15 20 L 16.5 20 L 20 16.5 L 16.5 13 L 15 13 z "
        ></path>{" "}
      </g>{" "}
    </g>
  </svg>
);

export default MailLogo;
