import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp, AiOutlineTwitter} from 'react-icons/ai'
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
    <div className='w-[100vw] lg:h-[100vh]  bg-black flex flex-col lg:flex-row relative'>

      <div className='relative w-[100%] flex  flex-col items-center h-[100vh] lg:h-[100%] justify-center lg:w-[40%]'>
        <div className='h-[100%] w-[50%] absolute'></div>
        <div className='h-[100%] w-[50%] absolute right-0 bg-gray-200'></div>
      <div className='lg:w-auto lg:h-[35rem] w-[85vw] max-w-[25rem] h-fit border-8 z-[100] overflow-hidden'>
        <img
        src="/img1.jpeg" // Replace with your image source
        alt="Rotated Image"
        //loading="lazy"
        className="transform grayscale hover:grayscale-0 cursor-pointer lg:h-[100%] w-[100%] h-fit border-l-slate-500 object-cover hover:scale-125
        "
      />
      </div>
        
      <div className='flex flex-col gap-[1.5rem]  mt-[2rem] lg:w-[25rem] w-[85vw]'>
        <div className=''>
          <a target='_blank' href='https://www.linkedin.com/in/tobiloba-abayomi-356295216/'>
        <AiFillLinkedin className='text-gray-500 text-3xl cursor-pointer hover:text-white'/>
          </a>
          
        </div>
        <div className=''>
        <a target='_blank' href='https://github.com/Tobbiloba'>
<AiFillGithub className='text-gray-500 text-3xl cursor-pointer hover:text-white'/>
</a>
          
        </div>
        <div className=''>
        <a target='_blank' href='https://twitter.com/TobilobaAbayom2'>
<AiOutlineTwitter className='text-gray-500 text-3xl cursor-pointer hover:text-white'/>
</a>
          
        </div>
        <div className=''>
        <a target='_blank' href='https://wa.link/jmgni4'>
 <AiOutlineWhatsApp className='text-gray-500 text-3xl cursor-pointer hover:text-white'/>
</a>
         
        </div>
      </div>
      </div>
      <div className='relative w-[100vw] h-fit py-[2rem] lg:h-[100%]  lg:w-[60%] px-[5%]
      flex flex-col iems-center justify-center'>


<div className="flex flex-row gap-[.5rem] items-center mb-[1rem]">
        <TextReveal fontSize="lg:text-[32px] avro text-gray-500  text-[24px]">
          About Me{" "}
        </TextReveal>
        <div className="lg:w-4 lg:h-4 h-3 w-3 rounded-full bord bg-gray-500"></div>
      </div>
        <div className='flex flex-col gap-4'>
          <TextReveal fontSize='lg:text-[22px] avro text-white  text-[20px]'>

Hey👋 , I'm Oluwatobiloba. I'm a self-taught developer on a mission to excel in the tech world. My passion lies in web frontend and Android development, and I'm currently expanding my skills to include backend development as well. 
        </TextReveal>
        <TextReveal fontSize='lg:text-[22px] avro text-white  text-[20px]'>
        I am currently searching a front-end developer / mobile developer role.
        </TextReveal>
        <TextReveal fontSize='lg:text-[22px] avro text-white  text-[20px]'>
        These days I spend most of my time researching, coding and working on amazing projects
        </TextReveal>
        <TextReveal fontSize='lg:text-[22px] avro text-white  text-[20px]'>
        Outside coding I enjoy watching korean series or playing FreeFire.
        </TextReveal>
        </div>

        




        
        <div>
        <div className='md:mt-[3rem] mt-[5rem]'>
          {/* <div className='flex flex-row gap-[.25rem] items-center mb-[1rem]'>
          <TextReveal fontSize='lg:text-[32px] handjet text-slate-500  text-[24px]'>
            Pragramming Languages</TextReveal>
          <div className='w-4 h-4 rounded-full border border-secondary bg-slate-500'></div>
        </div> */}
              <div className="flex flex-row gap-[.5rem] items-center mb-[1rem]">
        <TextReveal fontSize="lg:text-[32px] avro text-gray-500  text-[24px]">
          Programming Languages{" "}
        </TextReveal>
        <div className="lg:w-4 lg:h-4 h-3 w-3 rounded-full bord bg-gray-500"></div>
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
        <div className='md:mt-[3rem] mt-[5rem]'>
          {/* <div className='flex flex-row gap-[.25rem] items-center mb-[1rem]'>
          <TextReveal fontSize='lg:text-[32px] handjet text-slate-500  text-[24px]'>
            Others </TextReveal>
          <div className='w-4 h-4 rounded-full border border-secondary bg-slate-500'></div>
        </div> */}
              <div className="flex flex-row gap-[.5rem] items-center mb-[1rem]">
        <TextReveal fontSize="lg:text-[32px] avro text-gray-500  text-[24px]">
          Other{" "}
        </TextReveal>
        <div className="lg:w-4 lg:h-4 h-3 w-3 rounded-full bord bg-gray-500"></div>
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
      </div>

    </div>
  );
}

export default AboutMe;
