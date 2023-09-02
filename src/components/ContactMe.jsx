import React from 'react';
import TextReveal from './reveal/TextAnimation';
import {BiLogoGmail} from 'react-icons/bi'
const ContactMe = () => {
  return (
    <div className='w-[100vw] bg-black lg:h-[35rem] h-[30rem] text-white flex flex-col justify-center items-center px-[1rem]'>
      <div className='mb-[1rem]'>
        <TextReveal fontSize="avro text-[40px] flex flex-row items-center">Contact <div className='w-4 ml-2 mt-3 h-4 bg-slate-500'></div></TextReveal>
      </div>
      <TextReveal fontSize="text-[24px] avro text-center"> Shoot me an email if you want to connect! You can also find me on <a href='https://www.linkedin.com/in/tobiloba-abayomi-356295216/' className='text-slate-500 cursor-pointer'>LinkedIn</a> or <a href='https://twitter.com/TobilobaAbayom2' className='text-slate-500 cursor-pointer'>Twitter</a> of thats more your speed.</TextReveal>
      <div className='flex flex-row mt-[2rem] items-center gap-3 hover:text-slate-500'>
        <BiLogoGmail className='text-[32px]'/>
        <TextReveal fontSize="font-mono text-[20px] cursor-pointer "><a>tobiloba.a.salau@gmail.com</a></TextReveal>
      </div>
    </div>
  );
}

export default ContactMe;
