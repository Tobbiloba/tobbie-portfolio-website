import React from 'react';
import Lottie from 'lottie-react';
import animation from '../assets/loader/welcome.json'
import { useLottie } from "lottie-react";
import TextAnimation from '../components/animation/TextAnimation';
const Welcome = () => {


    const options = {
        animationData: animation,
        loop: true
      };
  
      const { View } = useLottie(options);
  return (
    <div className='w-screen h-[100vh] bg-black flex flex-col items-center ' 
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


      
    </div>
  );
}

export default Welcome;
