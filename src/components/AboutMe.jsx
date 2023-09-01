import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp} from 'react-icons/ai'
import {BiLogoGmail} from 'react-icons/bi'
import TextReveal from './reveal/TextAnimation';
const AboutMe = () => {
  const languages = [
    {
      id: 1,
      name: 'HTML'
    },
    {
      id: 2,
      name: 'CSS'
    },
    {
      id: 3,
      name: 'JAVASCRIPT'
    },
    {
      id: 4,
      name: 'TYPESCRIPT'
    },
    {
      id: 5,
      name: 'REACTJS'
    },
    {
      id: 6,
      name: 'REACT NATIVE'
    },


  ]
  const others = [
    {
      id: 1,
      name: 'GIT / GITHUB / GITLAB'
    },
    {
      id: 2,
      name: 'TAILWINDCSS'
    },
    {
      id: 3,
      name: 'MATERIAL UI'
    },
    
    {
      id: 4,
      name: 'CHAKRA UI'
    },
    {
      id: 5,
      name: 'FRAMER MOTION'
    },
    {
      id: 6,
      name: 'LOTTIE'
    },
  ]
  return (
    <div className='w-[100vw] lg:h-[100vh]  bg-gray-900 flex flex-col lg:flex-row relative'>
      
      {/* <div className='border z-[100] border-black w-[30rem] h-[30rem] object-container transform'>

      <img
        src="/img1.jpeg" // Replace with your image source
        alt="Rotated Image"
        className="transform w-[100%] h-[100%] object-cover"
      />
      </div> */}
      {/* <div className='r'></div> */}
      <div className='relative w-[100%] flex  flex-col items-center h-[100vh] lg:h-[100%] justify-center lg:w-[40%]'>
        <div className='h-[100%] w-[50%] absolute'></div>
        <div className='h-[100%] w-[50%] absolute right-0 bg-gray-200'></div>
      <div className='lg:w-auto lg:h-[35rem] w-[85vw] max-w-[25rem] h-fit border-8 z-[100] overflow-hidden'>
        <img
        src="/img1.jpeg" // Replace with your image source
        alt="Rotated Image"
        loading="lazy"
        className="transform grayscale hover:grayscale-0 cursor-pointer lg:h-[100%] w-[100%] h-fit border-l-slate-500 object-cover hover:scale-125
        "
      />
      </div>
        
      <div className='flex flex-col gap-[1.5rem]  mt-[2rem] lg:w-[25rem] w-[85vw]'>
        <div className=''>
          <AiFillLinkedin className='text-gray-500 text-3xl cursor-pointer hover:text-white'/>
        </div>
        <div className=''>
          <AiFillGithub className='text-gray-500 text-3xl cursor-pointer hover:text-white'/>
        </div>
        <div className=''>
          <BiLogoGmail className='text-gray-500 text-3xl cursor-pointer hover:text-white'/>
        </div>
        <div className=''>
          <AiOutlineWhatsApp className='text-gray-500 text-3xl cursor-pointer hover:text-white'/>
        </div>
      </div>
      </div>
      <div className='relative w-[100vw] h-fit py-[2rem] lg:h-[100%]  lg:w-[60%] px-[5%]
      flex flex-col iems-center justify-center'>
        <div className='flex flex-row gap-[.25rem] items-center mb-[1rem]'>
          
          <TextReveal fontSize='lg:text-[34px] handjet text-slate-500  text-[24px]'>
            About</TextReveal>
          <div className='w-4 h-4 rounded-full border border-secondary bg-slate-500'></div>
        </div>
        <div className='flex flex-col gap-4'>
          <TextReveal fontSize='lg:text-[22px] lilitia text-white  text-[20px]'>
          Hey I'm Oluwatobiloba. I am a school dropout who decided to pursue his tech career as a Web Frontend / Mobile Developer. I specialise in web frontend and anrdoid development, currently learning backend development. 
        </TextReveal>
        <TextReveal fontSize='lg:text-[22px] lilitia text-white  text-[20px]'>
          I am currently searching for the role of a frontend developer / mobile developer.
        </TextReveal>
        <TextReveal fontSize='lg:text-[22px] lilitia text-white  text-[20px]'>
        These days i spend most of time researching, coding and working on amazing projects
        </TextReveal>
        <TextReveal fontSize='lg:text-[22px] lilitia text-white  text-[20px]'>
        Outside coding i enjoy watching korean series or playing game.
        </TextReveal>
        </div>
        
        <div>
        <div className='mt-[3rem]'>
          <div className='flex flex-row gap-[.25rem] items-center mb-[1rem]'>
          <TextReveal fontSize='lg:text-[32px] handjet text-slate-500  text-[24px]'>
            Pragramming Languages</TextReveal>
          <div className='w-4 h-4 rounded-full border border-secondary bg-slate-500'></div>
        </div>
        
        </div>

        <div className='flex flex-row flex-wrap gap-[1rem]'>
          {
            languages.map((item) => (
              <div className='' key={item.id}>
                  <TextReveal fontSize='text-[16px] text-slate-700 avro px-4 py-2 rounded-2xl bg-secondary'>{item.name}</TextReveal>
              </div>
            ))
          }
        </div>
        </div>

        <div>
        <div className='mt-[3rem]'>
          <div className='flex flex-row gap-[.25rem] items-center mb-[1rem]'>
          <TextReveal fontSize='lg:text-[32px] handjet text-slate-500  text-[24px]'>
            Others </TextReveal>
          <div className='w-4 h-4 rounded-full border border-secondary bg-slate-500'></div>
        </div>
        
        </div>
        
        <div className='flex flex-row flex-wrap gap-[1rem]'>
          {
            others.map((item) => (
              <div className='' key={item.id}>
                  <TextReveal fontSize='text-[16px] text-slate-700 px-4 py-2 avro rounded-2xl bg-secondary'>{item.name}</TextReveal>
              </div>
            ))
          }
        </div>
        </div>
       
        
        {/* <h1 className='lg:text-5xl text-2xl avro text-light'>I'm <span className='text-primary lg:text-5xl text-2xl'>Oluwatobiloba</span>, a <span className='underline lg:text-5xl text-2xl text-primary'>reactjs frontend developer</span> / <span className='underline lg:text-5xl text-2xl text-primary'>react native mobile developer</span>  currently open to job opportunities.</h1> */}
        {/* <p className='mt-[5rem] text-xl avro'>I have spent the past few years working on mobile applications and websites across different screen sizes.</p>
        <p className='mt-[1rem] text-xl avro'>These days i spend most of time researching, coding and working on amazing projects</p>
        <p className='mt-[1rem] text-xl avro'>Outside coding i enjoy watching korean series or playing game.</p> */}
      </div>

    </div>
  );
}

export default AboutMe;
