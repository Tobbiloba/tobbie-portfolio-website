import React, { useEffect, useState } from "react";
// import TextReveal from '../components/reveal/TextAnimation'
import TextReveal from "./reveal/TextAnimation";
import { AiFillGithub } from "react-icons/ai";
// import {FaRegShareFromSquare} from 'react-icons/fa'
import { PiShareLight } from "react-icons/pi";
import { FaShare } from "react-icons/fa";
// import motion from 'framer-motion'
import { motion } from "framer-motion";
const ProjectOverview = ({ filter }) => {
  const projects = [
    {
      id: 1,
      name: "Keana.io Replica",
      description: " A bespoke digital platform meticulously crafted to mirror the exceptional logistics services of Keana. Seamlessly bridging the gap between businesses and efficient, reliable logistics, our clone provides an intuitive and user-friendly interface.",
      languages: [
        { name: "Reactjs" },
        { name: "Tailwindcss" },
        { name: "Material Ui" },
      ],
      tech: "web",
      image: "/keana.png",
      githubLink: "https://github.com/Tobbiloba/keana-clone",
      liveLink: "https://keana-clone-v2.vercel.app/",
      // image: '/keana.png'
    },
    {
      id: 2,
      name: "Tesla mobile app",
      description: "The Tesla Mobile App, an ongoing project, enhances Tesla ownership by enabling remote vehicle monitoring and control via smartphones. It offers features like battery status checks, climate adjustments, and software updates. While the app already delivers value, ongoing development focuses on refining and expanding capabilities. Future enhancements will include advanced diagnostics, security features, and deeper integration with Autopilot and Full Self-Driving systems. Tesla Mobile App aims to provide an unparalleled ownership experience, with more exciting updates in the pipeline.",
      languages: [
        { name: "React Native" },
        // { name: 'yoruba' },
        // { name: 'yoruba' },
      ],
      tech: "mobile",
      image: "/tesla.png",
      githubLink: "https://github.com/Tobbiloba/Tesla-app",
    },
    {
      id: 3,
      name: "Todo list",
      description: "Introducing my first personal mobile app, a sleek and user-friendly Todo List built with React Native! This app marks the beginning of my journey into mobile app development. With a minimalist design and intuitive interface, it empowers users to efficiently organize tasks, set priorities, and track progress—all from the palm of their hand. As a testament to my commitment to learning and growth, this Todo List showcases my early steps in the world of React Native development. Stay tuned for more exciting projects as I continue to evolve my skills and create innovative mobile experiences.",
      languages: [
        { name: "React Native" },
        // { name: 'yoruba' },
        // { name: 'yoruba' },
      ],
      tech: "mobile",
      image: "/todo.jpg",
      githubLink: "",
    },
    {
      id: 6,
      name: "Laundry app",
      description: " This app reflects my dedication to simplifying everyday tasks. Discover transparent pricing for various clothing types and tailor your laundry order to your liking. With a user-friendly interface, easily add items to your virtual cart. From your everyday essentials to cherished garments, my project redefines laundry day, making it stress-free and efficient. It's a testament to my commitment to streamlining daily routines and creating a more convenient lifestyle. Experience the laundry revolution with the Laundry App, a labor of love from my personal portfolio.",
      languages: [
        { name: "React Native" },
        { name: "Expo Locaton" },
        { name: "Expo Slider" },
        { name: "Redux/Toolkit" },
      ],
      tech: "mobile",
      image: "/laundry.jpg",
      githubLink: "https://github.com/Tobbiloba/laundry-app",
      // image: '/keana.png'
    },
    // {
    //   id: 4,
    //   name: "You Search",
    //   description:
    //     "Welcome to , your go-to destination for YouTube video and creator exploration. Our user-friendly platform allows you to search for any YouTube video and instantly access comprehensive details such as view count, likes, dislikes, comments, and more. Additionally, we make it effortless to discover information about your favorite YouTubers. Find out about their subscriber count, video count, and top uploads with just a few clicks.",
    //   languages: [
    //     { name: "ReactJs" },
    //     { name: "Tailwindcss" },
    //     { name: "RapidApi" },
    //   ],
    //   tech: "web",
    //   image: "/yousearch.png",
    //   githubLink: "https://github.com/Tobbiloba/You-Search",
    //   liveLink: "https://you-search-ten.vercel.app/",
    // },
    {
      id: 5,
      name: "Logistic",
      description: " A sleek and user-friendly interface designed to streamline your logistics experience. Crafted with precision and attention to detail, our website offers a visually engaging platform for all your logistical needs. From tracking shipments to accessing resources, our front-end design prioritizes clarity and accessibility. It's the digital face of our logistics venture, and it reflects our commitment to creating a seamless and efficient logistics solution for our clients. Stay tuned for more updates and features as we continue to evolve and enhance the front-end of our logistics website.",
      languages: [
        { name: "ReactJs" },
        { name: "Tailwindcss" },
        { name: "MUI" },
      ],
      tech: "web",
      image: "/logistics.png",
      githubLink: "https://github.com/Tobbiloba/tobbie-logistics",
      liveLink: "https://tobbie-logistics.vercel.app/",
      // image: '/keana.png'
    },

    {
      id: 7,
      name: "JobSearch",
      description: "Born out of a passion for connecting job seekers with their dream careers, this app is a testament to my commitment to simplifying the job search process. With an intuitive interface and powerful search capabilities, users can effortlessly explore a vast array of job opportunities. Whether you're a recent graduate, a seasoned professional, or someone looking for a career change, my project empowers you to find the perfect job match",
      languages: [
        { name: "React Native" },
        { name: "Expo icons" },
        { name: "Rapid Api" },
      ],
      tech: "mobile",
      image: "/jobsearch.png",
      githubLink: "https://github.com/Tobbiloba/react-native-jobs",
      // image: '/keana.png'
    },
    {
      id: 8,
      name: "Image Finder",
      description: " A versatile online tool that puts the world of visual content at your fingertips. This project embodies my passion for simplifying the search for images. With a clean and user-friendly interface, you can effortlessly explore and find images on any topic you desire. Whether it's for creative projects, research, or personal use, my website offers a convenient way to discover and access a vast repository of visual assets. It's a testament to my dedication to making image searching an efficient and enjoyable experience. Explore the limitless possibilities of visual discovery with my Image Search Website today!",
      languages: [
        { name: "ReactJs" },

        { name: "Tailwindcss" },
        { name: "Rapid Api" },
      ],
      tech: "web",
      image: "/imagesearch.png",
      githubLink: "https://github.com/Tobbiloba/Image-search",
      liveLink: "https://image-search-bice.vercel.app/",
      // image: '/keana.png'
    },
    {
      id: 9,
      name: "Tee Sneakers",
      description: " Your ultimate destination for sneaker enthusiasts and fashion-forward individuals. This project embodies my passion for blending technology with style. With a sleek, user-friendly design, my website offers a curated selection of the latest and greatest sneakers. Shop for iconic brands, limited-edition releases, and classic styles, all from the comfort of your screen. It's a testament to my commitment to providing a seamless and secure online shopping experience. Step into the world of sneakers and elevate your footwear game with my Sneaker Ecommerce Store – where fashion meets functionality.",
      languages: [
        { name: "ReactJs" },
        { name: "Tailwindcss" },
        { name: "Redux/Toolkit" },
        { name: "Stipe" },
        { name: "Sanity" },
      ],
      tech: "web",
      image: "/ecommerce.png",
      githubLink: "https://github.com/Tobbiloba/E-commerce",
      liveLink: "http://e-commerce-gilt-ten.vercel.app/",
      // image: '/keana.png'
    },
    {
      id: 10,
      name: "Cinema",
      description:
        "The Cinema Website, a dynamic hub for all things cinema. Created by a passionate team of friends, this platform offers more than just movie schedules. Dive into a world of cinematic wonder, where you can explore the latest releases, showtimes, and even book tickets seamlessly. With a user-friendly interface and a host of exciting features, our website is set to redefine your movie-going experience. Stay tuned for updates as we continue to craft a digital haven for movie enthusiasts everywhere. From film buffs to casual viewers, ",
      languages: [
        { name: "ReactJs" },
        { name: "Tailwindcss" },
        // { name: 'yoruba' },
      ],
      tech: "web",
      image: "/cinema.png",
      githubLink: "https://github.com/Tobbiloba/MTA-cinema",
      liveLink: "https://mt-cinema.vercel.app/",
    },
  ];
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (filter === 'all') {
      // Filter all items when the parameter is 'all'
      setFilteredData(projects);
    } else if (filter === 'web') {
      // Filter items with stack equal to 'Web'
      const webItems = projects.filter(item => item.tech === 'web');
      setFilteredData(webItems);
    } else if (filter === 'mobile') {
      // Filter items with tech equal to 'Mobile'
      const mobileItems = projects.filter(item => item.tech === 'mobile');
      setFilteredData(mobileItems);
    }
  }, [filter]);

  return (
    <div className="relative w-[100%] mt-[2rem]">
      <div className="flex flex-col gap-[1.5rem]">
        {filteredData.map((item) => (
          <div className="p-6 gap-[1rem] flex lg:flex-row flex-col justify-between rounded-2xl" key={item.id}>
            <div className="lg:w-[35rem] md:w-[30rem] border w-[100%] h-fit lg:h-auto  bg-secondary p-3 overflow-hidden">
              <img
                src={item.image}
                alt="image"
                className="hover:z-[100] hover:h-fit cursor-pointer w-[100%] h-auto"
              />
            </div>
            <div className="mt-[1.5rem]  lg:w-[50%]">
              <div className="flex flex-col gap-2 justify-between md:w-[30rem] w-[100%]">
                <TextReveal fontSize="avro text-white lg:text-[26px] text-[22px]">
                  {item.name}
                </TextReveal>
                <div className="flex flex-row text-white gap-3 text-[20px] ">
                  <a
                    href={item.githubLink}
                    target="_blank"
                    className="hover:text-slate-500 cursor-pointer"
                  >
                    <AiFillGithub />
                  </a>
                  {item.liveLink && (
                    <a
                      href={item.liveLink}
                      target="_blank"
                      className="hover:text-slate-500 cursor-pointer"
                    >
                      <FaShare className="font-bold " />{" "}
                    </a>
                  )}
                </div>
              </div>
              <TextReveal fontSize="text-gray-500 font-bold py-1 md:w-[30rem] w-[100%]">
                {item.description}{" "}
              </TextReveal>

              <div className="flex flex-row flex-wrap w-[30rem] gap-[1rem] mt-[.5rem]">
                {item.languages.map((language) => (
                  <TextReveal
                    fontSize="lilitia border text-extralight px-3 py-1"
                    key={language.name}
                  >
                    {language.name}
                  </TextReveal>
                ))}
              </div>
              {/* <div className="mt-[2rem]">
                <TextReveal fontSize="text-[20px] text- avro">
                  {item.description}
                </TextReveal>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectOverview;
