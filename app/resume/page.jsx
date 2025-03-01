"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGithub,
  FaGit,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiExpress,
  SiCplusplus,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

import Image from "next/image";

//about data
const about = {
  title: "About Me",
  description:
    "I am an aspiring software engineer passionate about solving complex problems through innovative solutions. With experience across various technologies and a strong drive to learn, I quickly adapt to new challenges and continuously expand my skillset.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Clinton Nguyen",
    },
    {
      fieldName: "Email",
      fieldValue: "clintondnguyen@gmail.com",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) 817-881-3675",
    },
    {
      fieldName: "Education",
      fieldValue: "University of North Texas",
    },
    {
      fieldName: "Nationality",
      fieldValue: "American",
    },
    {
      fieldName: "Location",
      fieldValue: "Fort Worth, TX",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "Here is where I've worked and what I've done.",
  items: [
    {
      company: "Edikt Studios",
      position: "Game Developer",
      duration: "January 2022 - May 2022",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "Here is where I've studied and what I've learned.",
  items: [
    {
      institution: "CodeSignal",
      degree: "Full-Stack Engineering with JavaScript",
      duration: "2024",
    },
    {
      institution: "University of North Texas",
      degree: "B.S. Computer Science",
      duration: "August 2022 - May 2026",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "These are the skills I have and the technologies I've worked with.",
  skillList: [
    {
      icon: <FaHtml5 />,
      skillName: "html",
    },
    {
      icon: <FaCss3 />,
      skillName: "css",
    },
    {
      icon: <FaJs />,
      skillName: "javascript",
    },
    {
      icon: <FaReact />,
      skillName: "react.js",
    },
    {
      icon: <FaNodeJs />,
      skillName: "node.js",
    },
    {
      icon: <SiTailwindcss />,
      skillName: "tailwind.css",
    },
    {
      icon: <SiNextdotjs />,
      skillName: "next.js",
    },
    {
      icon: <SiExpress />,
      skillName: "express.js",
    },
    {
      icon: <FaPython />,
      skillName: "python",
    },
    {
      icon: <FaJava />,
      skillName: "java",
    },
    {
      icon: <SiCplusplus />,
      skillName: "c++",
    },
    {
      icon: <FaGithub />,
      skillName: "github",
    },
    {
      icon: <FaGit />,
      skillName: "git",
    },
    {
      icon: <SiPostgresql />,
      skillName: "postgresql",
    },
    {
      icon: <SiMongodb />,
      skillName: "mongodb",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-20 xl:py-0"
    >
      <div className="container pb-20">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] [mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/*content*/}
          <div className="min-h-[70vh] w-full ">
            {/*about*/}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center gap-4 xl:justify-start"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/*education*/}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={education.icon}
                    alt="Education Icon"
                    width={24}
                    height={24}
                  />
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                </div>

                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dot*/}
                            <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/*experience*/}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={experience.icon}
                    alt="Experience Icon"
                    width={24}
                    height={24}
                  />
                  <h3 className="text-4xl font-bold">{experience.title}</h3>{" "}
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dot*/}
                            <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*skills*/}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 mb-8 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={50}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group">
                              <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.skillName}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
