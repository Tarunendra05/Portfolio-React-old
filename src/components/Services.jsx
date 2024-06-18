import React from "react";
import Section from "./common/Section";

import continuousLearning from "../assets/continuousLearning.png";
import mERNStackDevelopment from "../assets/mERNStackDevelopment.png";
import problemSolving from "../assets/problemSolving.png";
import coding from "../assets/coding.png";

function Services() {
  const services = [
    {
      id: 1,
      image: mERNStackDevelopment,
      title: "MERN Stack Development",
    },
    {
      id: 2,
      image: coding,
      title: "Coding",
    },
    {
      id: 3,
      image: problemSolving,
      title: "Problem Solving",
    },
    {
      id: 4,
      image: continuousLearning,
      title: "Continuous Learning",
    },
  ];

  return (
    <Section
      title="About Me"
      subtitle="Hello! I am a Computer Science and Engineering student with a passion for coding and bringing new designs to life through programming. Specializing in the MERN stack, I have crafted numerous small-scale projects during my ongoing learning journey. I possess strong problem-solving skills and thrive on continuous learning. I am eager to collaborate and contribute my skills to create meaningful solutions."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        {services.map(({ id, image, title }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center p-3 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110"
          >
            <img
              src={image}
              alt={title}
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
            />
            <h3 className="mt-5 text-base font-medium text-rose-600 dark:text-white">
              {title}
            </h3>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Services;
