import React from 'react';
import Lottie from 'lottie-react';
import animation from '../../assets/loader/loading2.json'
import { useLottie } from "lottie-react";
const Loader = () => {

    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: animation,
    //     rendererSettings: {
    //       preserveAspectRatio: 'xMidYMid slice',
    //     },
    //   };

    const options = {
      animationData: animation,
      loop: true
    };

    const { View } = useLottie(options);
  return (

    <div className='w-[100vw] h-[100vh] bg-black flex justify-center items-center overflow-hidden'>
      <div 
    className="lg:w-auto lg:h-[100vh] w-[100vw] h-auto flex items-center justify-center"
    >
        {/* <Lottie options={defaultOptions} />; */}
        {View}
    </div>
    </div>
    
  );
}

export default Loader;
