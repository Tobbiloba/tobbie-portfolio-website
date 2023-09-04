import React, {useState} from 'react';
import GlowingText from '../components/animation/GlowingText';
import ContactMe from '../components/ContactMe';
import Navbar from '../components/navbar';
import ProjectOverview from '../components/ProjectOverview';
import TextReveal from '../components/reveal/TextAnimation';
// import Home from "../../components/Home";
import Home from '../components/Home';
import ShuffleHero from '../components/ProjectHome';
const ProjectScreen = () => {
    const [filter, setFilter] = useState('all')
  return (
    <div className='bg-black w-[100vw] pt-[3rem]'>
        <div className="absolute top-[2rem] left-[2rem] z-[100]">
    <GlowingText /> 
  </div>
  {/* <Home /> */}
  <ShuffleHero />
  <div className='w-full px-8 py-12   items-center gap-8 max-w-7xl mx-auto'>

        <div className="flex flex-row gap-[.5rem] items-center mb-[1rem]">
        <TextReveal fontSize="lg:text-[32px] gluten text-white  text-[24px]">
          My Projects{" "}
        </TextReveal>
        <div className="lg:w-4 lg:h-4 h-3 w-3 rounded-full bord bg-gray-500"></div>
      </div>
    <div className='mt-[3rem]'>
        <div className='flex flex-row gap-[2rem]'>
            <h1 className={`avro cursor-pointer ${filter === 'all' ? 'underline text-gray-500 text-[22px]' : 'text-white text-[20px]'}`} onClick={() => setFilter('all')}>All</h1>
            <h1 className={`avro cursor-pointer ${filter === 'web' ? 'underline text-gray-500 text-[22px]' : 'text-white text-[20px]'}`} onClick={() => setFilter('web')}>Web</h1>
            <h1 className={`avro cursor-pointer ${filter === 'mobile' ? 'underline text-gray-500 text-[22px]' : 'text-white text-[20px]'}`} onClick={() => setFilter('mobile')}>Mobile</h1>
        </div>
        <div className='w-[100%]'>
      <ProjectOverview filter={filter}/>
    </div>
    </div>
    
  
  </div>
  
  {/* <Navbar /> */}

  <ContactMe />
    </div>
  );
}

export default ProjectScreen;
