import React, {useState, useEffect} from 'react';
import Lottie from 'lottie-react';
// import animation from '../assets/loader/mobile.json'
import animation2 from '../../assets/loader/web.json'
import { useLottie } from "lottie-react";
import { motion } from 'framer-motion';
const MobileAnimations = () => {
    const option = {
        animationData: animation2,
        loop: true
      };

      const { View } = useLottie(option)
  return (
    <div>
        <div className='w-[30rem] opacity-[.4] h-[30rem] object-contain flex items-center justify-center'>
            {View}
        </div>
    </div>
  );
}

export default MobileAnimations;
