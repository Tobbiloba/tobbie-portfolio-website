import React from "react";
import TextReveal from "../components/reveal/TextAnimation";
const Experience = () => {
  const experience = [
    {
      id: 1,
    role: "Frontend Developer",
    company: "West Afriq Production",
    task: [
      {
        description: "Created error-free code in REACT, JAVASCRIPT, and CSS.",
      },
      {
        description: "Established websites and incorporated distinctive features to realize the intended functionality as prescribed by project designs."
      },
      {
        description: "Collaborated with the design team to create attractive and user-friendly websites."
      },
      {
        description: "Built reusable code for future use."
      }
    ],
    language: [
      {
        name: "Reactjs"
      },
      {
        name: "Tailwindcss"
      },
    ],
    duration: "2022",
    location: "Nigeria"
    },
    {
      id: 2,
      role: "Frontend developer",
      company: "Bitshub",
      task: [
        {
          description: "Implemented automation tools for repetitive tasks, which helped reduce manual errors by 50% and saved the team 20+ hours of work per week.",
        },
        {
          description: "Developed an intuitive and easily navigable user interface with the aim of enhancing accessibility."
        },
        {
          description: "Reviewed proposed UI and UX designs for technical feasibility and collaborated with the backend personnel. "
        },
        {
          description: "Sustain brand coherence of brand identity across the design"
        }
      ],
      language: [
        {
          name: "Reactjs"
        },
        {
          name: "Tailwindcss"
        },
        {
          name: "Redux"
        },
        {
          name: "Material UI"
        },
        {
          name: "SwiperJs"
        },
        {
          name: "GIthub"
        },
      ],
      duration: "2023 - Present",
      location: "Nigeria"
    }
  ]
  return (
    <div className="bg-black text-white lg:px-[10%] px-[1rem] py-[2rem]">
      <div className="flex flex-row gap-[.25rem] items-center mb-[1rem]">
        <TextReveal fontSize="lg:text-[32px] handjet text-gray-500  text-[24px]">
          Experience{" "}
        </TextReveal>
        <div className="w-4 h-4 rounded-full bord bg-gray-500"></div>
      </div>
      <div className="w-[100%] flex flex-col gap-[2rem]">
        {
          experience.map((item) => (
            <div className="border border-black border-b-white px-2 py-6">
              <div className="flex flex-row justify-between items-center">
                <TextReveal fontSize="text-[40px] avro">{item.company}</TextReveal>
                <TextReveal fontSize="avro tracking-[.12rem]">{item.duration}</TextReveal>
              </div>
              <div className="flex flex-row justify-between items-center mb-[1rem]">
                <TextReveal fontSize="avro my-2 text-slate-400 text-[20px]">{item.role}</TextReveal>
                <TextReveal fontSize="avro tracking-[.12rem]">{item.location}</TextReveal>
              </div>
              {/* <p>I help build and scale Google Photos. Increased throughput of our primary services.</p>
              <p>I help build and scale Google Photos. Increased throughput of our primary services.</p>
              <p>I help build and scale Google Photos. Increased throughput of our primary services.</p> */}
              {item.task.map((item) => (
                <div className="my-[.5rem] flex flex-row items-center gap-4">
                  <div className="w-4 h-4 bg-white rounded-full border"></div>
                  <TextReveal fontSize="text-[16px]">{item.description}</TextReveal>
                </div>
              ))}
              <div className="mt-[2rem] flex flex-row gap-[2rem]">
                {item.language.map((item) => (
                  <div className="border px-3 py-1">
                    <TextReveal fontSize="avro">{item.name}</TextReveal>
                    {/* <p></p> */}
                  </div>
                ))}
              </div>
            </div>
          ))
        }
      </div>

      <div>
        {/* <button></button> */}
        <a href="https://drive.google.com/file/d/1RXFHGNBAGH47dNutNgaPgTp7YI9PJxYg/view?usp=drive_link" target="_blank" className="border px-3 py-2 relative top-[2rem]">Resume</a>
      </div>
    </div>
  );
};

export default Experience;
