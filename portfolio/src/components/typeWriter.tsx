// import React, { useEffect, useState } from "react";

// interface TypewriterProps {
//   text: string;
//   delay?: number;
// }

// const Typewriter: React.FC<TypewriterProps> = ({ text, delay = 10 }) => {
//   const [displayed, setDisplayed] = useState("");

//   useEffect(() => {
//     let i = 0;
//     const interval = setInterval(() => {
//       setDisplayed((prev) => prev + text[i]);
//       i++;
//       if (i >= text.length) clearInterval(interval);
//     }, delay);

//     return () => clearInterval(interval);
//   }, [text]);

//   return <div>{displayed}</div>;
// };

// export default Typewriter;


import React, { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  delay?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, delay = 10 }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    // Réinitialiser le texte affiché quand le texte change
    setDisplayed("");
    
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay]);

  return <span>{displayed}</span>;
};

export default Typewriter;