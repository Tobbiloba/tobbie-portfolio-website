import React from 'react';
import GlowingText from '../components/animation/GlowingText';
import Design from '../components/animation/background';
import TextAnimation from '../components/animation/TextAnimation';
import Header from '../components/Header';
import { Navbar } from '../components/navbar/Navbar';
import AudioPlayer from '../components/AudioPlayer';
// import './animation.css'
const Homescreen = () => {
  return (
    <div className='w-full h-screen bg-black  '>
    <div className='absolute top-0 left-0 z-[10] border'>
      <Design />
    </div>
    <div className='w-[100vw] h-[100vh]  relative px-[7.5%] py-[2rem] lg:py-[4rem] flex flex-col justify-between '>
      

      <div className=''>
        <AudioPlayer />

      <TextAnimation>
        Salau Oluwatobiloba
      </TextAnimation>

      </div>
     
    </div>
  </div>
  );
}

export default Homescreen;
