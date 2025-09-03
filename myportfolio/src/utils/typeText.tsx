import { MutableRefObject } from "react";
import { Terminal as XTerm } from "xterm";

// Contrôleur pour gérer l'animation en cours
export const typeTextController: MutableRefObject<{
  resolve?: () => void;
  fullText?: string;
  currentWritten?: number;
  active?: boolean;
}> = { current: {} } as MutableRefObject<any>;

export const typeText = (
  term: MutableRefObject<XTerm | null>,
  text: string,
  delay = 30,
  addNewLine = true
): Promise<void> => {
  return new Promise((resolve) => {
    const chars = Array.from(text);
    let written = 0;
    const start = Date.now();

    typeTextController.current = {
      resolve,
      fullText: text,
      currentWritten: 0,
      active: true,
    };

    const writeFrame = () => {
      if (!typeTextController.current?.active) {
        // Si Enter est pressé, afficher le reste immédiatement
        const remaining = chars.slice(written).join("");
        term.current?.write(remaining);
        if (addNewLine) term.current?.writeln("");
        typeTextController.current.resolve?.();
        typeTextController.current.active = false;
        return;
      }

      const elapsed = Date.now() - start;
      const shouldHaveWritten = Math.floor(elapsed / delay);

      while (written < shouldHaveWritten && written < chars.length) {
        term.current?.write(chars[written]);
        written++;
        typeTextController.current.currentWritten = written;
      }

      if (written < chars.length) {
        requestAnimationFrame(writeFrame);
      } else {
        if (addNewLine) term.current?.writeln("");
        resolve();
        typeTextController.current.active = false;
      }
    };

    requestAnimationFrame(writeFrame);
  });
};
