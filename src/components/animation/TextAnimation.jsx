import React, {useState} from 'react';
import { motion, useAnimationControls, AnimatePresence } from 'framer-motion';
import './animation.css'
// import 
import { headTextAnimation } from '../config/motion';
const TextAnimate = ({children}) => {
    const [display, setDisplay] = useState(false);

    const controls = useAnimationControls();
        const rubberBand = () => {
            controls.start({
                transform: [
                    "scale3d(1, 1, 1)",
                    "scale3d(1.4, 1.55, 1)",
                    "scale3d(.75, 1.25, 1)",
                    "scale3d(1.25, .85, 1)",
                    "scale3d(.9, 1.05, 1)",
                    "scale3d(1, 1, 1)",
                ],
                transition: {
                    time: [0, .16, 1.8, 1, 1.2, 1.5]
                }
            })
            setDisplay(true)
                
            
        }
    
    return (
        <motion.span animate={controls}
        onMouseOver={() => {
            

            if (!display) {
                rubberBand()
            }
            
        }}
        onAnimationComplete={() => setDisplay(false)}
        {...headTextAnimation}
        className='text-gray-900 prism cursor-pointer hover:text-white text-[80px] lg:hover:text-[9.5rem] lg:text-[9rem]'
        >
            {children}
        </motion.span>
    )
}

const TextAnimation = ({children}) => {
    const sentence = children.split("")
  return (
    <div>
      {sentence.map((item, index) => (
        <TextAnimate key={index}>
            {item === " " ? "\u00A0" : item}
        </TextAnimate>
      ))}
    </div>
  );
}

export default TextAnimation;
