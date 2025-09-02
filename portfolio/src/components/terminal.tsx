import React, { useCallback, useEffect, useRef, useState } from "react";
import { Terminal as XTerm } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";
import "../style/terminal.css";

import { commands } from "../data/commands";
import { findClosestCommand } from "../utils/commandHelper";
import { WebLinksAddon } from "xterm-addon-web-links";

interface TerminalProps {
  user?: string;
}

const Terminal: React.FC<TerminalProps> = ({ user = "sacroud@portfolio" }) => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const term = useRef<XTerm | null>(null);
  const fitAddon = useRef<FitAddon | null>(null);
  const resizeObserver = useRef<ResizeObserver | null>(null);
  const initializationTimeout = useRef<NodeJS.Timeout | null>(null);
  
  const inputBuffer = useRef("");
  const welcomeShown = useRef(false);
  const isExecuting = useRef(false);
  const history = useRef<string[]>([]);
  const historyIndex = useRef<number>(-1);
  
  const [isTerminalReady, setIsTerminalReady] = useState(false);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const typeText = (text: string, delay = 30, addNewLine = true): Promise<void> => {
  return new Promise((resolve) => {
    const chars = Array.from(text);
    let written = 0;
    const start = Date.now();

    const writeFrame = () => {
      // Combien de caractères auraient dû être affichés depuis le début
      const elapsed = Date.now() - start;
      const shouldHaveWritten = Math.floor(elapsed / delay);

      while (written < shouldHaveWritten && written < chars.length) {
        term.current?.write(chars[written]);
        written++;
      }

      if (written < chars.length) {
        requestAnimationFrame(writeFrame); // continue
      } else {
        if (addNewLine) term.current?.writeln("");
        resolve();
      }
    };

    requestAnimationFrame(writeFrame);
  });
};


  const prompt = useCallback(() => {
    term.current?.write(`\n\x1b[95m${user}\x1b[95m:~$ \x1b[0m`);
  }, [user]);

  const safeFit = useCallback(() => {
    if (!terminalRef.current || !fitAddon.current || !term.current) {
      return false;
    }
    
    const container = terminalRef.current;
    if (container.clientHeight <= 0 || container.clientWidth <= 0) {
      return false;
    }

    try {
      // Vérifier que le terminal a bien un buffer et un viewport
      if (term.current.buffer && term.current.buffer.active) {
        fitAddon.current.fit();
        return true;
      }
    } catch (error) {
      console.warn("Fit failed:", error);
    }
    return false;
  }, []);

  const handleCommand = useCallback(async (cmd: string) => {
    if (!isTerminalReady) return;
    
    isExecuting.current = true;

    if (cmd.trim() !== "") {
      history.current.push(cmd);
      historyIndex.current = history.current.length;
    }

    if (cmd === "clear") {
      term.current?.clear();
      prompt();
      isExecuting.current = false;
      return;
    }

    const commandFn = commands[cmd];
    if (!commandFn) {
      await typeText(`\x1b[91mCommand not found: ${cmd}\x1b[0m`);

      term.current?.write("\x1b[93mFetching information from AI assistant");
      let dots = 0;
      const maxDots = 3;
      const interval = setInterval(() => {
        term.current?.write(".");
        dots++;
        if (dots > maxDots) {
          term.current?.write("\b \b");
          dots--;
        }
      }, 400);

      const suggestion = await new Promise<string | null>((resolve) => {
        setTimeout(() => {
          clearInterval(interval);
          term.current?.write("\r\x1b[K");
          resolve(findClosestCommand(cmd));
        }, 2500);
      });

      if (suggestion) {
        const suggestedFn = commands[suggestion];
        if (suggestedFn) {
          await suggestedFn(typeText);
        }
      } else {
        await typeText(
          `\x1b[91mI can only provide information about SACROUD Riad from his portfolio.\x1b[0m`
        );
      }

      prompt();
      isExecuting.current = false;
      return;
    }

    await commandFn(typeText);
    prompt();
    isExecuting.current = false;
  }, [prompt, isTerminalReady]);

  // Observer pour détecter quand le container est redimensionné
  useEffect(() => {
    if (!terminalRef.current) return;

    const updateContainerSize = () => {
      if (terminalRef.current) {
        const { clientWidth, clientHeight } = terminalRef.current;
        setContainerSize({ width: clientWidth, height: clientHeight });
      }
    };

    // Créer un ResizeObserver pour surveiller les changements de taille
    const observer = new ResizeObserver(updateContainerSize);
    observer.observe(terminalRef.current);

    // Mise à jour initiale
    updateContainerSize();

    return () => {
      observer.disconnect();
    };
  }, []);

  // Initialisation du terminal quand le container a une taille valide
  useEffect(() => {
    if (containerSize.width <= 0 || containerSize.height <= 0 || term.current) {
      return;
    }

    const initTerminal = () => {
      if (!terminalRef.current) return;

      // Créer le terminal avec des dimensions fixes d'abord
      term.current = new XTerm({
        theme: { background: "#000000", foreground: "#FFFFFF" },
        cursorBlink: true,
        fontFamily: "monospace",
        fontSize: 16,
        cols: Math.floor(containerSize.width / 9), // Approximation basée sur la largeur de caractère
        rows: Math.floor(containerSize.height / 20), // Approximation basée sur la hauteur de ligne

        disableStdin: false,         // garder les entrées
        allowProposedApi: true,      // activer certaines options expérimentales
        rightClickSelectsWord: true, // clic droit = sélection mot
      });

      // Ouvrir le terminal immédiatement
      term.current.open(terminalRef.current);

      // Attendre que le terminal soit complètement ouvert avant d'ajouter le FitAddon
      initializationTimeout.current = setTimeout(() => {
        if (term.current && terminalRef.current) {
          fitAddon.current = new FitAddon();
          term.current.loadAddon(fitAddon.current);

          // 🔥 Rendre les liens cliquables
          term.current.loadAddon(new WebLinksAddon());
          
          // Essayer de fitter après un délai
          setTimeout(() => {
            if (safeFit()) {
              console.log("Terminal fit successful");
            }
            setIsTerminalReady(true);
          }, 200);
        }
      }, 300);
    };

    initTerminal();
  }, [containerSize, safeFit]);

  // Configuration des événements une fois que le terminal est prêt
  useEffect(() => {
    if (!isTerminalReady || !term.current) {
      return;
    }

    // Configuration du ResizeObserver pour le redimensionnement
    if (terminalRef.current && !resizeObserver.current) {
      resizeObserver.current = new ResizeObserver(() => {
        setTimeout(() => {
          safeFit();
        }, 100);
      });
      resizeObserver.current.observe(terminalRef.current);
    }

    // Gestionnaire d'événements pour les données
    const onDataDisposable = term.current.onData((data) => {
      if (isExecuting.current) {
        return;
      }

      switch (data) {
        case "\r":
          term.current?.writeln("\x1b[0m");
          handleCommand(inputBuffer.current.trim());
          inputBuffer.current = "";
          break;
        case "\u007F":
          if (inputBuffer.current.length > 0) {
            inputBuffer.current = inputBuffer.current.slice(0, -1);
            term.current?.write("\b \b");
          }
          break;
        case "\x1b[A":
          if (history.current.length > 0 && historyIndex.current > 0) {
            historyIndex.current--;
            inputBuffer.current = history.current[historyIndex.current];
            term.current?.write(
              `\r\x1b[K\x1b[95m${user}\x1b[95m:~$ \x1b[0m\x1b[96m${inputBuffer.current}\x1b[0m`
            );
          }
          break;
        case "\x1b[B":
          if (history.current.length > 0 && historyIndex.current < history.current.length - 1) {
            historyIndex.current++;
            inputBuffer.current = history.current[historyIndex.current];
            term.current?.write(
              `\r\x1b[K\x1b[95m${user}\x1b[95m:~$ \x1b[0m\x1b[96m${inputBuffer.current}\x1b[0m`
            );
          } else {
            historyIndex.current = history.current.length;
            inputBuffer.current = "";
            term.current?.write(`\r\x1b[K\x1b[95m${user}\x1b[95m:~$ \x1b[0m`);
          }
          break;
        default:
          inputBuffer.current += data;
          term.current?.write(`\x1b[96m${data}\x1b[0m`);
      }
    });

    // Gestionnaire de redimensionnement de la fenêtre
    const handleResize = () => {
      setTimeout(safeFit, 150);
    };
    window.addEventListener("resize", handleResize);

    // Message de bienvenue
    const displayWelcomeMessage = async () => {
      if (!welcomeShown.current) {
        welcomeShown.current = true;
        isExecuting.current = true;
        await typeText("Hi, I'm SACROUD Riad, a Software Engineer.");
        await typeText("\nWelcome to my interactive 'AI powered' portfolio terminal!");
        await typeText('Type "help" to see available commands.');
        prompt();
        isExecuting.current = false;
      }
    };

    displayWelcomeMessage();

    // Cleanup pour cet effet
    return () => {
      onDataDisposable.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, [isTerminalReady, handleCommand, user, prompt, safeFit]);

  // Cleanup principal
  useEffect(() => {
    return () => {
      if (initializationTimeout.current) {
        clearTimeout(initializationTimeout.current);
      }
      if (resizeObserver.current) {
        resizeObserver.current.disconnect();
        resizeObserver.current = null;
      }
      if (term.current) {
        term.current.dispose();
        term.current = null;
      }
      fitAddon.current = null;
    };
  }, []);

  return (
    <div className="terminal-wrapper">
      <div className="menu-wrapper">
        <nav className="terminal-menu">
            <span>help</span> | <span>about</span> | <span>projects</span> |{" "}
            <span>skills</span> | <span>experience</span> | <span>contact</span> |{" "}
            <span>education</span> | <span>clear</span>
        </nav>
      </div>
      <div 
        ref={terminalRef} 
        className="terminal-container"
      />
    </div>
  );
};

export default Terminal;