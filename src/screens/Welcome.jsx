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
    <div className='w-screen h-[98.5vh] flex flex-col items-center ' style={{
        backgroundImage: 'url("path/to/your/image.jpg")', // Replace with your image path
        backgroundSize: 'cover', // Adjust as needed
        width: '200px',
        height: '200px',
      }}>

      
    </div>
  );
}

export default Welcome;
