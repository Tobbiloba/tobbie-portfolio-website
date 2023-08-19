import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Aboutus = () => {
  const { ref, inView } = useInView(); // No need for triggerOnce, to repeat the animation

  return (
    <div
      ref={ref}
      style={{ width: '100%', height: '100vh', backgroundColor: 'white' }}
    >
      <motion.div
        initial={{ opacity: 0, x: '-100%' }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 3 }}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'lightblue', // Change to desired animation background color
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '2rem',
          color: 'black',
        }}
      >
        <p>This is the About Us section</p>
      </motion.div>
    </div>
  );
};

export default Aboutus;
