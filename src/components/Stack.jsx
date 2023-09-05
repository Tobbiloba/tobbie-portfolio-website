import React, {useState, useEffect} from 'react';
import Lottie from 'lottie-react';
import animation from '../assets/loader/mobile.json'
import animation2 from '../assets/loader/web.json'
import { useLottie } from "lottie-react";
import { motion } from 'framer-motion';
import MobileAnimations from './animation/MobileAnimations';
import TextReveal from './reveal/TextAnimation';
const Stack = () => {
    const option1 = {
        animationData: animation,
        loop: true
      };
      const option2 = {
        animationData: animation2,
        loop: true
      };
  
      const { View } = useLottie(option1);
      const { View2 } = useLottie(option2)
  return (
    <div className='flex lg:flex-row flex-col items-center  justify-center gap-[5rem] bg-black py-2'>
        <div className='flex flex-col'>
           <div className='w-[30rem] opacity-[.4] h-[30rem] object-contain flex items-center justify-center'>
            
            {View}
        </div> 
        <div className='lg:max-w-[30rem] w-[85%] text-center  mx-auto py-6 px-[1rem] flex flex-col items-center'>
            <TextReveal fontSize="text-white avro text-2xl">Frontend Developer</TextReveal>

            <p className="text-slate-500 px-[1rem] avro mt-3">A proficient frontend developer skilled in crafting responsive and visually appealing web applications using HTML, CSS, Javascript and Reactjs to bring innovative designs to life and enhance better user engagement.</p>

            <p className="text-slate-500 gluten mt-3 px-[1rem]">A proficient frontend developer skilled in crafting responsive and visually appealing web applications using HTML, CSS, Javascript and Reactjs to bring innovative designs to life and enhance better user engagement.</p>

        </div>
        </div>
        
        <div className='flex flex-col items-center'>
            <MobileAnimations />
            <div className='md:max-w-[30rem] w-[85%]  text-center  py-6 flex flex-col items-center'>
                <TextReveal fontSize="text-white avro text-2xl">Mobile Developer</TextReveal>

                <p className="text-slate-500 px-[1rem]  avro mt-3">I specialize in React Native mobile development, harnessing its power to build sleek and responsive cross-platform apps that captivate users.</p>

                <p className="text-slate-500 gluten mt-3 px-[1rem]">I specialize in React Native mobile development, harnessing its power to build sleek and responsive cross-platform apps that captivate users.</p>

            </div>
        </div>
      
    </div>
  );
}

export default Stack;
