import { motion } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import TextReveal from "./reveal/TextAnimation";


const ShuffleHero = () => {

  return (

    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto">

      <div>
        <TextReveal fontSize="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
        Welcome to project section
        </TextReveal>

        {/* <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">

         

        </span> */}<TextReveal fontSize="text-4xl lg:text-6xl avro md:text-6xl text-white font-semibold leading-12">
            Hi, I'm Salau Oluwatobiloba .
        </TextReveal>



        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">

        Welcome to my projects page! Explore a showcase of my creative work, from web development to design and more. Dive into a world of innovation and craftsmanship, where every project tells a unique story.

        </p>

 

      </div>

      <ShuffleGrid />

    </section>

  );

};


const shuffle = (array) => {

  let currentIndex = array.length,

    randomIndex;


  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);

    currentIndex--;


    [array[currentIndex], array[randomIndex]] = [

      array[randomIndex],

      array[currentIndex],

    ];

  }


  return array;

};


const squareData = [

  {

    id: 1,

    src: "/keana.png",

  },

  {

    id: 2,

    src: "/jobsearch.png",

  },

  {

    id: 3,

    src: "/laundry.jpg",

  },

  {

    id: 4,

    src: "/logistics.png",

  },

  {

    id: 5,

    src: "/tesla.png",

  },

  {

    id: 6,

    src: "/todo.jpg",

  },

  {

    id: 7,

    src: "/clinic.png",

  },

  {

    id: 8,

    src: "/ecommerce.png",

  },

  {

    id: 9,

    src: "/imagesearch.png",

  },

  {

    id: 10,

    src: "/cinema.png",

  },

  {

    id: 11,

    src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",

  },

  {

    id: 12,

    src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",

  },

  {

    id: 13,

    src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

  },

  {

    id: 14,

    src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",

  },

  {

    id: 15,

    src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",

  },

  {

    id: 16,

    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",

  },

];


const generateSquares = () => {

  return shuffle(squareData).map((sq) => (

    <motion.div

      key={sq.id}

      layout

      transition={{ duration: 1.5, type: "spring" }}

      className="w-full h-full"

      style={{

        backgroundImage: `url(${sq.src})`,

        backgroundSize: "cover",

      }}

    ></motion.div>

  ));

};


const ShuffleGrid = () => {

  const timeoutRef = useRef(null);

  const [squares, setSquares] = useState(generateSquares());


  useEffect(() => {

    shuffleSquares();


    return () => clearTimeout(timeoutRef.current);

  }, []);


  const shuffleSquares = () => {

    setSquares(generateSquares());


    timeoutRef.current = setTimeout(shuffleSquares, 3000);

  };


  return (

    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">

      {squares.map((sq) => sq)}

    </div>

  );

};


export default ShuffleHero;