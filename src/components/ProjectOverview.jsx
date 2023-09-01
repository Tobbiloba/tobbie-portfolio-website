import React, { useState } from 'react';
// import TextReveal from '../components/reveal/TextAnimation'
import TextReveal from './reveal/TextAnimation';
import {AiFillGithub} from 'react-icons/ai';
// import {FaRegShareFromSquare} from 'react-icons/fa'
import {PiShareLight} from 'react-icons/pi'
import {FaShare} from 'react-icons/fa';
// import motion from 'framer-motion'
import { motion } from 'framer-motion';
const ProjectOverview = () => {
 const projects = [
  {
    id: 1,
    name: 'Keana.io Replica',
    description: 'I built a replica of keana.io',
    languages: [
      { name: 'Reactjs' },
      { name: 'Tailwindcss' },
      { name: 'Material Ui' },
    ],
    tech: 'frontend',
    image: '/keana.png',
    githubLink: "https://github.com/Tobbiloba/keana-clone",
    liveLink: "https://keana-clone-v2.vercel.app/"
    // image: '/keana.png'
  },
  {
    id: 2,
    name: 'Tesla mobile app',
    description: 'This is a tesla app. still in progress',
    languages: [
      { name: 'React Native' },
      // { name: 'yoruba' },
      // { name: 'yoruba' },
    ],
    tech: 'mobile',
    image: '/tesla.png',
    githubLink: "https://github.com/Tobbiloba/Tesla-app",
  },
  {
    id: 3,
    name: 'Todo list',
    description: 'This is a todo list app',
    languages: [
      { name: 'React Native' },
      // { name: 'yoruba' },
      // { name: 'yoruba' },
    ],
    tech: 'mobile',
    image: '/todo.jpg',
    githubLink: "",
  },
  {
    id: 6,
    name: 'Laundry app',
    description: 'This is a laundry app',
    languages: [
      { name: 'React Native' },
      { name: 'Expo Locaton' },
      { name: 'Expo Slider' },
      { name: 'Redux/Toolkit' },
    ],
    tech: 'mobile',
    image: '/laundry.jpg',
    githubLink: "https://github.com/Tobbiloba/laundry-app",
    // image: '/keana.png'
  },
  {
    id: 4,
    name: 'You Search',
    description: 'With You Search you can search for details about your favorite youtube video/ favorite youtuber',
    languages: [
      { name: 'ReactJs' },
      { name: 'Tailwindcss' },
      { name: 'RapidApi' },
    ],
    tech: 'frontend',
    image: '/yousearch.png',
    githubLink: "https://github.com/Tobbiloba/You-Search",
    liveLink: "https://you-search-ten.vercel.app/"
  },
  {
    id: 5,
    name: 'Logistic',
    description: 'A Logistic website',
    languages: [
      { name: 'ReactJs' },
      { name: 'Tailwindcss' },
      { name: 'MUI' },
    ],
    tech: 'frontend',
    image: '/logistics.png',
    githubLink: "https://github.com/Tobbiloba/tobbie-logistics",
    liveLink: "https://tobbie-logistics.vercel.app/"
    // image: '/keana.png'
  },

  {
    id: 7,
    name: 'JobSearch',
    description: 'This is a job search app',
    languages: [
      { name: 'React Native' },
      { name: 'Expo icons' },
      { name: 'Rapid Api' },
    ],
    tech: 'mobile',
    image: '/jobsearch.png',
    githubLink: "https://github.com/Tobbiloba/react-native-jobs",
    // image: '/keana.png'
  },
  {
    id: 8,
    name: 'Image Finder',
    description: 'This is a website to find your favorite images',
    languages: [
      { name: 'ReactJs' },
      
      { name: 'Tailwindcss' },
      { name: 'Rapid Api' }
    ],
    tech: 'mobile',
    image: '/imagesearch.png',
    githubLink: "https://github.com/Tobbiloba/Image-search",
    liveLink: "https://image-search-bice.vercel.app/"
    // image: '/keana.png'
  },
  {
    id: 9,
    name: 'Tee Sneakers',
    description: 'This is a sneaker ecommerce',
    languages: [
      { name: 'ReactJs' },
      { name: 'Tailwindcss' },
      { name: 'Redux/Toolkit' },
      { name: 'Stipe' },
      { name: 'Sanity' },
    ],
    tech: 'mobile',
    image: '/ecommerce.png',
    githubLink: "https://github.com/Tobbiloba/E-commerce",
    liveLink: "http://e-commerce-gilt-ten.vercel.app/"
    // image: '/keana.png'
  },
  {
    id: 10,
    name: 'Project 1',
    description: 'This is a cinema webiste I am working on with few of my friends',
    languages: [
      { name: 'ReactJs' },
      { name: 'Tailwindcss' },
      // { name: 'yoruba' },
    ],
    tech: 'mobile',
    image: '/cinema.png',
    githubLink: "https://github.com/Tobbiloba/MTA-cinema",
    liveLink: "https://mt-cinema.vercel.app/"
    // image: '/keana.png'
  },


];

const [filter, setFilter] = useState('all')

  return (
    <div className='w-[100vw] h-fit py-[2rem] bg-black flex flex-col items-center lg:px-[10%] px-[1rem]'>
      
        <div className='flex flex-row gap-[.25rem] items-center mb-[1rem]'>
          <TextReveal fontSize='lg:text-[32px] handjet text-gray-500  text-[24px]'>
            Projects </TextReveal>
          <div className='w-4 h-4 rounded-full border border-secondary bg-gray-500'></div>
        </div>

{/* 
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className='flex flex-col gap-[1rem] mt-[2rem]'>
        {projects.map((item) => (
          <div className='flex lg:flex-row flex-col-reverse lg:gap-[2rem] gap-[1rem] justify-between mb-[5.5rem] lg:mb-[1.5rem]'>
            <div>
              <TextReveal fontSize='text-secondary avro text-[27px]'>{item.name}</TextReveal>
    
              <p className='text-slate-200 avro text-[20px]'>{item.description}</p>
              <div className='flex flex-row gap-[1.5rem] flex-wrap mt-[1.5rem]'>
              {
                item.languages.map((language) => (
                  <p className='px-4 py-1 bg-secondary text-white'>{language.name}</p>
                ))
              }
              </div>
              <div className='mt-[2rem] gap-[1rem]'>
                <a href="/" target='_blank' className='flex flex-row gap-[.5rem] items-center'>Github <AiFillGithub /></a>
                <a href="/" target='_blank' className='flex flex-row gap-[.5rem] mt-2 items-center'>Live Preview <FaShare className='font-bold '/></a>
              </div>
            </div>
            <div className='relative'>
              <img src={item.image} alt="project" className='lg:max-w-[40rem] lg:h-[20rem] w-[100%] h-auto  cursor-pointer'/>

            </div>
          </div>
        ))}
      </motion.div> */}
      <div className='grid gap-[2rem] lg:grid-cols-2 justify-between grid-cols-1'>
        {
          projects.map((item) => (
            <div className='p-6  rounded-2xl'>
              <div className='md:w-[30rem] w-[100%] h-fit lg:h-[17rem]  bg-secondary p-3 overflow-hidden'>
              <img src={item.image} alt="image" className='hover:scale- hover:absolute hover:w-[30rem]  hover:z-[100] hover:h-fit cursor-pointer w-[100%] h-auto'/>
              </div>
              <div className='mt-[1.5rem]'>
                <div className='flex flex-row justify-between lg:w-[30rem] w-[100%]'>
                  <TextReveal fontSize='avro text-white text-[24px]'>{item.name}</TextReveal>
                  <div className='flex flex-row text-white gap-3 text-[20px] '>
                  <a href={item.githubLink} target='_blank' className='hover:text-slate-500 cursor-pointer'><AiFillGithub /></a>
                  {
                    item.liveLink && 
                  
                <a href={item.liveLink} target='_blank' className='hover:text-slate-500 cursor-pointer'><FaShare className='font-bold '/> </a>
}</div>
                </div>
                <TextReveal fontSize="text-gray-500 font-bold py-1 lg:w-[30rem] w-[100%]">{item.description} </TextReveal>

              
              <div className='flex flex-row flex-wrap w-[30rem] gap-[1rem] mt-[.5rem]'>
              {
                item.languages.map((language) => (
                  <TextReveal fontSize='lilitia border text-extralight px-3 py-1'>{language.name}</TextReveal>
                ))
              }
              </div>
              <div className='mt-[2rem]'>
              <TextReveal fontSize='text-[20px] text- avro'>{item.description}</TextReveal>
              </div>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  );
}

export default ProjectOverview;
