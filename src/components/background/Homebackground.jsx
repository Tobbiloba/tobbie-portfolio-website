// import "./styles.css";
// import { useState } from "react";
// import { motion } from "framer-motion";

// const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
// const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

// function Image({ id }) {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [isInView, setIsInView] = useState(false);

//   return (
//     <section>
//       <motion.div
//         initial={false}
//         animate={
//           isLoaded && isInView
//             ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
//             : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
//         }
//         transition={{ duration: 1, delay: 1 }}
//         viewport={{ once: true }}
//         onViewportEnter={() => setIsInView(true)}
//       >
//         <img
//           src={`/${id}.jpg`}
//           alt=""
//           onLoad={() => setIsLoaded(true)}
//           style={{ maxWidth: "100%", height: "auto" }}
//         />
//       </motion.div>
//     </section>
//   );
// }

// export default function App() {
//   return <Image id={1} />;
// }



import React from 'react';
import { useCallback } from 'react';
// import Particles from 'react-particles';
// import { loadSlim } from 'tsparticles-slim';

const Homebackground = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   const particlesLoaded = useCallback(async (container) => {
//     await console.log(container);
//   }, []);

  return (
    <div>
      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: '#0d47a1',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      /> */}
    </div>
  );
};

export default Homebackground;
