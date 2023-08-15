import React from 'react';
import GlowingText from '../components/animation/GlowingText';
import Design from '../components/animation/background';
import TextAnimation from '../components/animation/TextAnimation';
import Header from '../components/Header';
// import './animation.css'
const Homescreen = () => {
  return (
    <div className='w-full h-screen bg-slate-950'>
    <div className='absolute top-0 left-0'>
      <Design />
    </div>
  
    <div className='w-[100vw] h-[100vh] relative px-[5%] py-[2rem] flex flex-col justify-between lg:px-[5rem]'>
      <Header />
      {/* <GlowingText /> */}
      <div className=''>
         <TextAnimation>
        Hello,
      </TextAnimation>
      <TextAnimation>
        I'm Salau Oluwatobiloba
      </TextAnimation>

      {/* <TextAnimation>
        Hey
      </TextAnimation> */}
      </div>
     <div></div>
    </div>
  </div>
  );
}

export default Homescreen;
