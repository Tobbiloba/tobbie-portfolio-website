// import React, { useState, useEffect } from 'react';
import './CircularTextAnimation.css'; // Import your CSS file

// const CircularTextAnimation = () => {
//   const [angle, setAngle] = useState(0);

//   useEffect(() => {
//     const animationInterval = setInterval(() => {
//       setAngle(angle => angle + 5); // Adjust the angle increment as needed
//     }, 50); // Adjust the interval as needed

//     return () => clearInterval(animationInterval);
//   }, []);

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div
//         className="text-4xl transform rotate-[45deg] origin-center animate-spin"
//         style={{ transform: `rotate(${angle}deg)` }}
//       >
//         Curved Text Animation
//       </div>
//     </div>
//   );
// };

// export default CircularTextAnimation;



import React from 'react';
import { useSpring, animated } from 'react-spring';
import './CircularTextAnimation.css'; // Import your CSS file

const CircularTextAnimation = () => {
  const { radians } = useSpring({
    to: async next => {
      while (true) {
        await next({ radians: 2 * Math.PI });
      }
    },
    from: { radians: 0 },
    reset: true,
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="circle">
        <animated.div
          className="text-4xl circular-text"
          style={{
            transform: radians.interpolate(r => `rotate(${r}rad)`),
          }}
        >
          Curved Text Animation
        </animated.div>
      </div>
    </div>
  );
};

export default CircularTextAnimation;
