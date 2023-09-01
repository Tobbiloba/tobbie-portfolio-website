import React from "react";
import Lottie from "lottie-react";
import animation from "../../assets/loader/welcome.json";
import { useLottie } from "lottie-react";
import TextAnimation from "../../components/animation/TextAnimation";
import TextReveal from "../../components/reveal/TextAnimation";
import {motion} from 'framer-motion'
import CurvedText from "../../components/CurvedText";
import Navbar from "../../components/navbar";
import Home from "../../components/Home";
import AboutMe from "../../components/AboutMe";
import GlowingText from "../../components/animation/GlowingText";
import Aboutus from "../Aboutus";
import ProjectOverview from "../../components/ProjectOverview";
import Experience from "../Experience";
import ContactMe from "../../components/ContactMe";
const Homescreen = () => {
  const options = {
    animationData: animation,
    loop: true,
  };
// working
  const { View } = useLottie(options);
  return (
    <div className="w-[100vw] overflow-x-hidden">
      {/* <Navbar /> */}
      <div className="fixed top-[2rem] left-[2rem] z-[100]">
        <GlowingText /> 
      </div>
      <Home />
<AboutMe />
<ProjectOverview />
<Experience />
<ContactMe />
{/* <Aboutus /> */}
    </div>

  );
};

export default Homescreen;

