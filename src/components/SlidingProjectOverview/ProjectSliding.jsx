import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
// import Image from 'next/image';
import {BsArrowRightShort} from 'react-icons/bs';
import { Link } from 'react-router-dom';
const slider1 = [
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

  const slider2 = [
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
      
  ]
//   const slider2 = [
//     {
//         id: 3,
//         name: 'Todo list',
//         description: 'This is a todo list app',
//         languages: [
//           { name: 'React Native' },
//           // { name: 'yoruba' },
//           // { name: 'yoruba' },
//         ],
//         tech: 'mobile',
//         image: '/todo.jpg',
//         githubLink: "",
//       },
//   ]
export default function ProjectSlider() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return (
        <div ref={container} className={styles.slidingImages}>
          {/* <div className='border mx-[1rem] md:px-[7.5%] lg:px-[10%]'>
            <h1 className='text-white'>View all projects</h1>
          </div> */}
            <motion.div style={{x: x1}} className={styles.slider}>
                    {
                        slider1.map( (project, index) => {
                            return <div key={index} className={`${styles.project} h-[10rem] md:w-[35%] w-[5rem]`} style={{backgroundColor: project.color}} >
                                <div className={styles.imageContainer}>
                                    <img 
                                    fill={true}
                                    alt={"image"}
                                    src={`${project.image}`} className='w-auto h-[100%]'/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{x: x2}} className={styles.slider}>
                    {
                        slider2.map( (project, index) => {
                            return <div key={index} className={`${styles.project} h-[15rem] md:w-[35%]  w-[10rem]`} style={{backgroundColor: project.color}} >
                                <div key={index} className={styles.imageContainer}>
                                    <img 
                                    fill={true}
                                    alt={"image"}
                                    src={`${project.image}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <Link to="/projects">
                  <div className='relative mx-[1rem] md:px-[7.5%] w-fit cursor-pointer lg:px-[10%] my-[2rem] flex flex-row gap-[.5rem] items-center'>
                    <h1 className='text-white avro'>View Projects</h1>
                    <BsArrowRightShort className='text-white  text-[25px] hover:translate-x-6'/>
                  </div>
                </Link>
                
                <motion.div style={{height}} className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </motion.div>
                
        </div>
    )
}
