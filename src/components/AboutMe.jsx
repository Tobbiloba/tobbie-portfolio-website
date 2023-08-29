import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp} from 'react-icons/ai'
import {BiLogoGmail} from 'react-icons/bi'
const AboutMe = () => {
  return (
    <div className='w-[100vw] lg:h-[100vh] layer space bg-slate-100 flex flex-col lg:flex-row relative'>
      
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
        <div className='h-[100%] w-[50%] absolute right-0 bg-light'></div>
      <div className='lg:w-auto lg:h-[35rem] w-[85vw] max-w-[25rem] h-fit border-8 z-[100] overflow-hidden'>
        <img
        src="/img1.jpeg" // Replace with your image source
        alt="Rotated Image"
        className="transform grayscale hover:grayscale-0 cursor-pointer lg:h-[100%] w-[100%] h-fit border-l-slate-500 object-cover hover:scale-125
        "
      />
      </div>
        
      <div className='flex flex-col gap-[1.5rem] mt-[2rem] lg:w-[25rem] w-[85vw]'>
        <div className=''>
          <AiFillLinkedin className='text-light text-3xl cursor-pointer hover:text-secondary'/>
        </div>
        <div className=''>
          <AiFillGithub className='text-light text-3xl cursor-pointer hover:text-secondary'/>
        </div>
        <div className=''>
          <BiLogoGmail className='text-light text-3xl cursor-pointer hover:text-secondary'/>
        </div>
        <div className=''>
          <AiOutlineWhatsApp className='text-light text-3xl cursor-pointer hover:text-secondary'/>
        </div>
      </div>
      </div>
      <div className='relative w-[100vw] h-[100vh] lg:h-[100%]  lg:w-[60%] pl-[5%]
      flex flex-col iems-center justify-center'>
        <h1 className='lg:text-5xl text-2xl avro text-light'>I'm <span className='text-primary lg:text-5xl text-2xl'>Oluwatobiloba</span>, a <span className='underline lg:text-5xl text-2xl text-primary'>reactjs frontend developer</span> / <span className='underline lg:text-5xl text-2xl text-primary'>react native mobile developer</span>  currently open to job opportunities.</h1>
        <p className='mt-[5rem] text-xl avro'>I have spent the past few years working on mobile applications and websites across different screen sizes.</p>
        <p className='mt-[1rem] text-xl avro'>These days i spend most of time researching, coding and working on amazing projects</p>
        <p className='mt-[1rem] text-xl avro'>Outside coding i enjoy watching korean series or playing game.</p>
      </div>

    </div>
  );
}

export default AboutMe;
