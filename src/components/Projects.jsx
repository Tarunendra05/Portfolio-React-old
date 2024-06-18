import React from "react";
import Section from "./common/Section";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";

function Projects() {
  const projects = [
    {
      id: 1,
      image: p1,
      title: "Keeper App",
      github: "https://github.com/Tarunendra05/Keeper-App",
      demo: "https://keeper-app-w9yb.onrender.com/",
    },
    {
      id: 2,
      image: p2,
      title: "ToDo List",
      github: "https://github.com/Tarunendra05/ToDo-List",
      demo: "https://todo-list-swf5.onrender.com/",
    },
    {
      id: 3,
      image: p3,
      title: "Startup Website Page",
      github: "https://github.com/Tarunendra05/TinDog-Project",
      demo: "https://tarunendra05.github.io/TinDog-Project/",
    },
    {
      id: 4,
      image: p4,
      title: "Simon Game Project",
      github: "https://github.com/Tarunendra05/SimonGame-Project",
      demo: "https://tarunendra05.github.io/SimonGame-Project/",
    },
    {
      id: 5,
      image: p5,
      title: "Personal Blog Website",
      github: "https://github.com/Tarunendra05/Personal-Blog-Website",
      demo: "https://personal-blog-website-gm2p.onrender.com",
    },
    {
      id: 6,
      image: p6,
      title: "Drum Kit Project",
      github: "https://github.com/Tarunendra05/Drum-Kit-Project",
      demo: "https://tarunendra05.github.io/Drum-Kit-Project/",
    },
  ];

  return (
    <Section
      title="Projects"
      subtitle="Hey, glad you stopped by the projects corner! Let's keep it short and sweet—check out the cool stuff I've been working on! 😊"
    >
      <div className="grid gap-8 lg:gap-14 lg:grid-cols-2 pt-8">
        {projects.map(({ id, image, title, github, demo }) => (
          <div
            key={id}
            className="max-w-md h-40 md:max-w-lg md:h-44 lg:max-w-xl lg:h-48 flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden"
          >
            <img src={image} alt={title} className="w-2/3" />
            <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
              <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-rose-600 dark:text-white">
                {title}
              </h2>
              <a
                className="text-xl md:text-2xl lg:text-3xl cursor-pointer duration-150 hover:scale-125  hover:text-rose-600"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className="text-xl md:text-2xl lg:text-3xl cursor-pointer duration-150 hover:scale-125  hover:text-rose-600"
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
