import React from "react";
import Lottie from "lottie-react";
import animation from "../assets/loader/welcome.json";
import { useLottie } from "lottie-react";
import TextAnimation from "./animation/TextAnimation";
import TextReveal from "./reveal/TextAnimation";
import {motion} from 'framer-motion'
import CurvedText from "./CurvedText";
import Navbar from "./navbar";
import Homebackground from "./background/Homebackground";
import revealPage from "./animation/PageReveal";
import TextScrollAnimation from "./text scroll animation";
const Home = () => {
  const options = {
    animationData: animation,
    loop: true,
  };

  const { View } = useLottie(options);

  const slideUp = {
    initial: {
        y: 300
    },
    enter: {
        y: 0,
        transition: {duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5}
    }
}
  return (
    <motion.div
      className="w-screen h-[100vh] max-h-[100vh] bg-black flex flex-row overflow-hidden  justify- px-[5%] md:px-[6.5%] lg:px-[10%] items-center "

    >

      {/* <motion.div variants={slideUp} initial="initial" animate="enter" className="absolute bg-white z-[100] w-[100vw] h-[100vh] top-0 left-0"></motion.div> */}

      {/* <motion.div  variants={slideUp} initial="initial" animate="enter" className="w-[100vw] h-[100vh] z-[100] absolute left-0 top-0 bg-white">

      </motion.div>
         */}


{/* <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, .9)', // Black layer with transparency
          zIndex: 1, // Above the image, below the text
        }}
      ></div> */}
      {/* <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%', // Half of the screen
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2, 
        }}
      ></div> */}
      {/* <div className='absolute inset-0 flex justify-center items-center'>
  <div className='relative'>
    <img src="/img3.jpeg" alt="background image" className='w-full h-auto'/>
    <div className='absolute inset-0 bg-black opacity-70'></div>
  </div>
</div> */}
{/* <div className="w-[100vw] h-[100vh] overflow-hidden bordee border-white"> */}
  {/* <Homebackground /> */}
{/* </div> */}

      <div className="flex lg:flex-row flex-col-reverse gap-[2rem] z-[100]">
        <div className="flex flex-col justify-center ">
          <TextReveal 
          fontSize='lg:text-[8rem] text-[10vw] md:text-[6rem] avro    text-extralight'
          >SALAU</TextReveal>
          <TextReveal fontSize='lg:text-[8rem] md:w-[100%] avro md:text-[5rem] text-[9.5vw] text-extralight'>OLUWATOBILOBA</TextReveal>
          <div >


          <motion.p initial={{opacity: 0.25, y: 150}} animate={{opacity: 1, y: 0}} transition={{ease: 'easeInOut', duration: 1}} className="text-gray-500 lilitia text-[23px]">Hello my name is <span className="text-[23px] text-gray-200">Salau Oluwatobiloba Abayomi</span>, nice to meet you. <br />I would like to welcome you to my personal portfolio.</motion.p>
          </div>
        </div>
        <TextScrollAnimation>Frontend Developer</TextScrollAnimation>
        {/* <Navbar /> */}
        {/* <div>
          <motion.img initial={{x: 750, opacity: 0.25}}
          animate={{x: 0, opacity: 1}}
          transition={{ease: 'easeInOut', duration: 1,
          }} src="/img.jpeg" alt="image" className="grayscale cursor-pointer z-[100] border hover:grayscale-0 lg:w-[30rem] h-auto rounded-2xl"/>
        </div> */}
      </div>
      {/* <div className="absolute bottom-[2rem] right-[2rem] w-fit">
      <p className="bg-gray-500 px-6 py-3 rounded-xl text-white">Get Started</p>
      </div> */}
      {/* <div className="absolute top-[100vh] w-[100%] border">
        
      </div> */}
      {/* <div className="text-white border border-slate-500 h-[100vh] w-[6rem] absolute left-0 top-0 z-0">
  <h1 className="border rotate-90 bg-white w-[6rem] h-[5rem] transform origin-top-right absolute right-[6rem] top-[6rem]">
    Hey
  </h1>
</div> */}


      {/* <div class="rotate-45 transform origin-center">
  <p class="rotate-neg-45">Rotated Text</p>
</div> */}


{/* <div class="relative">
  <div class="top-part absolute h-16 w-full bg-blue-500 transform skew-y-3"></div>
  <div class="bottom-part h-16 bg-red-500">Content</div>
</div> */}

      
    </motion.div>
  );
};

export default Home;

