import { type CSSProperties } from "react";

export const splittingText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char" style={{ '--char-index': index } as CSSProperties}>
        {char}
      </span>
    ));
  }