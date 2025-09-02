// import React, { useRef, useEffect, useState } from 'react';
// import Tilt from 'react-parallax-tilt';
// import { motion } from 'framer-motion';

// const ProfileCard: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [constraints, setConstraints] = useState({ top: 0, left: 0, right: 0, bottom: 0 });

//   useEffect(() => {
//     if (containerRef.current) {
//       const rect = containerRef.current.getBoundingClientRect();

//       // Dimensions fixes de la carte
//       const cardWidth = 200;
//       const cardHeight = 300;

//       setConstraints({
//         top: 0,
//         left: 0,
//         right: rect.width - cardWidth,   // 👉 limite droite
//         bottom: rect.height - cardHeight // 👉 limite bas
//       });
//     }
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         width: "570px",          // largeur fixe comme avant
//         backgroundColor: "#111",
//         borderRight: "1px solid #8A2BE2",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       <motion.div
//         drag
//         dragMomentum={false}
//         dragConstraints={constraints}  // ✅ Contraintes calculées
//         style={{
//           position: "absolute",
//           top: 100,
//           left: 100,
//           cursor: "grab",
//         }}
//       >
//         <Tilt
//           glareEnable
//           glareMaxOpacity={0.2}
//           scale={1.05}
//           tiltMaxAngleX={15}
//           tiltMaxAngleY={15}
//           style={{
//             width: 200,
//             height: 300,
//             background: "#111",
//             border: "2px solid #8A2BE2",
//             borderRadius: "16px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             color: "#8A2BE2",
//             fontFamily: "monospace",
//             fontWeight: "bold",
//             boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
//             userSelect: "none",
//           }}
//         >
//           <img
//             src="/mephoto.jpg"
//             alt="Sacroud Riad"
//             style={{
//               width: 80,
//               height: 80,
//               borderRadius: "50%",
//               marginBottom: "20px",
//               objectFit: "cover",
//               border: "2px solid #8A2BE2",
//             }}
//           />
//           <h2 style={{ margin: "0 0 8px 0" }}>Sacroud Riad</h2>
//           <p style={{ margin: 0, fontSize: 14 }}>Développeur Fullstack</p>
//         </Tilt>
//       </motion.div>
//     </div>
//   );
// };

// export default ProfileCard;

// import React, { useRef, useEffect, useState } from 'react';
// import Tilt from 'react-parallax-tilt';
// import { motion } from 'framer-motion';

// const ProfileCard: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [constraints, setConstraints] = useState({ top: 0, left: 0, right: 0, bottom: 0 });

//   useEffect(() => {
//     if (containerRef.current) {
//       const rect = containerRef.current.getBoundingClientRect();
//       const cardWidth = 280;
//       const cardHeight = 380;

//       setConstraints({
//         top: 0,
//         left: 0,
//         right: rect.width - cardWidth,
//         bottom: rect.height - cardHeight
//       });
//     }
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         width: "570px",
//         // height: "100vh",
//         background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
//         borderRight: "1px solid #8A2BE2",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Particules d'arrière-plan */}
//       <div style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         background: `radial-gradient(circle at 20% 80%, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
//                      radial-gradient(circle at 80% 20%, rgba(0, 191, 255, 0.08) 0%, transparent 50%),
//                      radial-gradient(circle at 40% 40%, rgba(138, 43, 226, 0.05) 0%, transparent 50%)`,
//         pointerEvents: "none"
//       }} />

//       <motion.div
//         drag
//         dragMomentum={false}
//         dragConstraints={constraints}
//         whileHover={{ scale: 1.02 }}
//         whileDrag={{ scale: 1.05, rotate: 2 }}
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         style={{
//           position: "absolute",
//           top: 100,
//           left: 145,
//           cursor: "grab",
//           filter: "drop-shadow(0 25px 50px rgba(138, 43, 226, 0.4))"
//         }}
//       >
//         <Tilt
//           glareEnable
//           glareMaxOpacity={0.15}
//           glareColor="#8A2BE2"
//           glarePosition="all"
//           scale={1.03}
//           tiltMaxAngleX={12}
//           tiltMaxAngleY={12}
//           style={{
//             width: 280,
//             height: 380,
//             background: `linear-gradient(145deg, 
//                         rgba(17, 17, 17, 0.9) 0%, 
//                         rgba(30, 30, 30, 0.95) 100%)`,
//             backdropFilter: "blur(20px)",
//             border: "1px solid rgba(138, 43, 226, 0.4)",
//             borderRadius: "24px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             color: "#ffffff",
//             fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
//             position: "relative",
//             overflow: "hidden"
//           }}
//         >
//           {/* Effet de brillance en haut */}
//           <div style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             height: "1px",
//             background: "linear-gradient(90deg, transparent, rgba(138, 43, 226, 0.8), transparent)"
//           }} />

//           {/* Gradient subtil sur les côtés */}
//           <div style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: `radial-gradient(circle at 50% 0%, rgba(138, 43, 226, 0.1) 0%, transparent 50%)`,
//             pointerEvents: "none"
//           }} />

//           {/* Conteneur photo avec effet halo */}
//           <div style={{
//             position: "relative",
//             marginBottom: "32px"
//           }}>
//             <div style={{
//               position: "absolute",
//               top: "-4px",
//               left: "-4px",
//               right: "-4px",
//               bottom: "-4px",
//               borderRadius: "50%",
//               background: "linear-gradient(45deg, #8A2BE2, #00BFFF, #8A2BE2)",
//               padding: "4px",
//               animation: "rotate 3s linear infinite"
//             }}>
//               <div style={{
//                 width: "100%",
//                 height: "100%",
//                 borderRadius: "50%",
//                 background: "#111",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center"
//               }}>
//                 <img
//                   src="/mephoto.jpg"
//                   alt="Sacroud Riad"
//                   style={{
//                     width: 100,
//                     height: 100,
//                     borderRadius: "50%",
//                     objectFit: "cover",
//                     filter: "brightness(1.1) contrast(1.1)"
//                   }}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Nom avec effet gradient */}
//           <h2 style={{ 
//             margin: "0 0 12px 0",
//             fontSize: "24px",
//             fontWeight: "700",
//             background: "linear-gradient(135deg, #ffffff 0%, #8A2BE2 100%)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             backgroundClip: "text",
//             textAlign: "center",
//             letterSpacing: "-0.5px"
//           }}>
//             Sacroud Riad
//           </h2>

//           {/* Titre avec style moderne */}
//           <p style={{ 
//             margin: "0 0 24px 0", 
//             fontSize: "16px",
//             color: "rgba(255, 255, 255, 0.7)",
//             fontWeight: "400",
//             textAlign: "center",
//             letterSpacing: "0.5px"
//           }}>
//             Développeur Fullstack
//           </p>

//           {/* Indicateurs de compétences */}
//           {/* <div style={{
//             display: "flex",
//             gap: "8px",
//             marginBottom: "20px"
//           }}>
//             {["React", "Node.js", "TypeScript"].map((tech, index) => (
//               <span
//                 key={tech}
//                 style={{
//                   padding: "6px 12px",
//                   fontSize: "12px",
//                   background: "rgba(138, 43, 226, 0.15)",
//                   border: "1px solid rgba(138, 43, 226, 0.3)",
//                   borderRadius: "20px",
//                   color: "#8A2BE2",
//                   fontWeight: "500"
//                 }}
//               >
//                 {tech}
//               </span>
//             ))}
//           </div> */}

//           {/* Ligne de séparation élégante */}
//           <div style={{
//             width: "60px",
//             height: "2px",
//             background: "linear-gradient(90deg, transparent, #8A2BE2, transparent)",
//             borderRadius: "1px"
//           }} />
//         </Tilt>
//       </motion.div>
//     </div>
//   );
// };

// export default ProfileCard;

import React, { useRef, useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

const ProfileCard: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ top: 0, left: 0, right: 0, bottom: 0 });

  useEffect(() => {
    if (containerRef.current) {

      setConstraints({
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "620px",
        // height: "100vh",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
        borderRight: "1px solid #8A2BE2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Particules d'arrière-plan */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 20% 80%, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
                     radial-gradient(circle at 80% 20%, rgba(0, 191, 255, 0.08) 0%, transparent 50%),
                     radial-gradient(circle at 40% 40%, rgba(138, 43, 226, 0.05) 0%, transparent 50%)`,
        pointerEvents: "none"
      }} />

      <motion.div
        drag
        dragMomentum={false}
        dragConstraints={constraints}
        whileHover={{ scale: 1.02 }}
        whileDrag={{ scale: 1.05, rotate: 2 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: 100,
          left: 145,
          cursor: "grab",
          filter: "drop-shadow(0 25px 50px rgba(138, 43, 226, 0.4))"
        }}
      >
        <Tilt
          glareEnable
          glareMaxOpacity={0.15}
          glareColor="#8A2BE2"
          glarePosition="all"
          scale={1.03}
          tiltMaxAngleX={12}
          tiltMaxAngleY={12}
          style={{
            width: 280,
            height: 380,
            background: `linear-gradient(145deg, 
                        rgba(17, 17, 17, 0.9) 0%, 
                        rgba(30, 30, 30, 0.95) 100%)`,
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(138, 43, 226, 0.4)",
            borderRadius: "24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Effet de brillance en haut */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(138, 43, 226, 0.8), transparent)"
          }} />

          {/* Gradient subtil sur les côtés */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 50% 0%, rgba(138, 43, 226, 0.1) 0%, transparent 50%)`,
            pointerEvents: "none"
          }} />

          {/* Conteneur photo avec effet halo */}
          <div style={{
            position: "relative",
            marginBottom: "32px",
            width: "108px",
            height: "108px"
          }}>
            <div style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "108px",
              height: "108px",
              borderRadius: "50%",
              background: "linear-gradient(45deg, #8A2BE2, #2E0854, #8A2BE2)",
              padding: "4px",
              animation: "rotate 3s linear infinite",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <div style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                background: "#111",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2px"
              }}>
                <img
                  src="/mephoto.jpg"
                  alt="Sacroud Riad"
                  style={{
                    width: "96px",
                    height: "96px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    filter: "brightness(1.1) contrast(1.1)"
                  }}
                />
              </div>
            </div>
          </div>

          {/* Nom avec effet gradient */}
          <h2 style={{ 
            margin: "0 0 12px 0",
            fontSize: "24px",
            fontWeight: "700",
            background: "linear-gradient(135deg, #ffffff 0%, #8A2BE2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textAlign: "center",
            letterSpacing: "-0.5px"
          }}>
            Sacroud Riad
          </h2>

          {/* Titre avec style moderne */}
          <p style={{ 
            margin: "0 0 24px 0", 
            fontSize: "16px",
            color: "rgba(255, 255, 255, 0.7)",
            fontWeight: "400",
            textAlign: "center",
            letterSpacing: "0.5px"
          }}>
            Software Engineer
          </p>


          {/* Ligne de séparation élégante */}
          <div style={{
            width: "60px",
            height: "2px",
            background: "linear-gradient(90deg, transparent, #8A2BE2, transparent)",
            borderRadius: "1px"
          }} />

        </Tilt>
      </motion.div>
    </div>
  );
};

export default ProfileCard;