import React from "react";
import Lottie from "lottie-react";
import animation from "../assets/loader/welcome.json";
import { useLottie } from "lottie-react";
import TextAnimation from "../components/animation/TextAnimation";
import TextReveal from "../components/reveal/TextAnimation";
import {motion} from 'framer-motion'
const Welcome = () => {
  const options = {
    animationData: animation,
    loop: true,
  };

  const { View } = useLottie(options);
  return (
    <div
      className="w-screen h-[100vh] max-h-[100vh] bg-black flex flex-row justify-center items-center "
      // style={{
      //     backgroundImage: 'url("/img1.jpeg")', // Replace with your image path
      //     backgroundSize: 'cover', // Adjust as needed

      //     backgroundRepeat: 'no-repeat'
      //   }}
    >
      {/* <div className='absolute inset-0 flex justify-center items-center'>
  <div className='relative'>
    <img src="/img3.jpeg" alt="background image" className='w-full h-auto'/>
    <div className='absolute inset-0 bg-black opacity-70'></div>
  </div>
</div> */}
      <div className="flex flex-row gap-[2rem] ">
        <div className="flex flex-col justify-center w-[70%]">
          <TextReveal fontSize='text-[6.5rem]'>SALAU</TextReveal>
          <TextReveal fontSize='text-[6rem]'>OLUWATOBILOBA</TextReveal>
          <div >

          <motion.p initial={{opacity: 0.25}} animate={{opacity: 1}} transition={{ease: 'easeInOut', duration: 1}} className="text-gray-500 lilitia text-[23px]">Hello my name is <span className="text-[23px] text-gray-200">Salau Oluwatobiloba Abayomi</span>, nice to meet you <br />I would like to welcome you to my personal portfolio.</motion.p>
          </div>
        </div>
        <div>
          <motion.img initial={{x: 750, opacity: 0.25}}
          animate={{x: 0, opacity: 1}}
          transition={{ease: 'easeInOut', duration: 1,
          }} src="/img1.jpeg" alt="image" className="grayscale cursor-pointer hover:grayscale-0 w-[30rem] h-auto rounded-2xl"/>
        </div>
      </div>
      <div className="absolute bottom-[2rem] right-[2rem] w-fit">
      <p className="bg-gray-500 px-6 py-3 rounded-xl text-white">Get Started</p>
      </div>
      {/* <div className="absolute top-[100vh] w-[100%] border">
        
      </div> */}
    </div>
  );
};

export default Welcome;


