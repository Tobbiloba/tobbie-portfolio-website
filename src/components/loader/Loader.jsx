import React, {useState, useEffect} from 'react';
import Lottie from 'lottie-react';
import animation from '../../assets/loader/loading2.json'
import { useLottie } from "lottie-react";
import { motion } from 'framer-motion';
import { slideUp, opacity } from './anim';
import styles from './style.module.scss';
const Loader = () => {
  const [dimension, setDimension] = useState({width: 0, height:0});

  useEffect( () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
  }, [])
const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

  const curve = {
    initial: {
        d: initialPath,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
    },
    exit: {
        d: targetPath,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3}
    }
}



    const options = {
      animationData: animation,
      loop: true
    };

    const { View } = useLottie(options);
  return (

    <motion.div 
    // className='w-[100vw] h-[100vh] bg-black flex justify-center items-center overflow-hidden'
    // className={styles.introduction}
    >
      <div 
    className="lg:w-auto lg:h-[100vh] w-[100vw] bg-black h-auto flex items-center justify-center"
    >
        {/* <Lottie options={defaultOptions} />; */}
        {View}
    </div>
    {/* <svg>
                    <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                </svg> */}
    </motion.div>
    
  );
}

export default Loader;
