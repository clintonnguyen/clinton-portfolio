"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    title: "MonsterMatcher",
    description: [
      "A spooky twist on traditional dating apps, this Tinder-like app connects ghouls, goblins, and all things monstrous with human or monster fans looking for a frightfully fun match. Swipe through profiles of eerie characters and see if sparks (or spooky chills) fly.",
      "Created at HackUNT24",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js"],
    image:
      "https://github.com/user-attachments/assets/fafbfe49-3025-4870-9d90-75f10da39e61",
    github: "https://github.com/MegaClinton/monsterMatcher",
    live: "https://monster-matcher.vercel.app/",
  },
  {
    num: "02",
    title: "noteTaker",
    description: [
      "A full-stack note-taking application built with the MERN (MongoDB, Express.js, React, Node.js) stack. This application allows users to create, manage, and organize their notes with a clean and intuitive interface.",
      "Created at HackUTA24",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js, Tailwind"],
    image: "https://i.imgur.com/94YdWYd.png",
    github: "https://github.com/MegaClinton/noteTaker",
    live: "https://notetaker.up.railway.app/",
  },
  {
    num: "03",
    title: "Student Management System",
    description: [
      "An efficient student data management system comparing time complexities of Linked Lists and Binary Search Trees for optimized data operations.",
      "Features include adding, searching, and updating student records, with demonstrated scalability handling 100,000 student entries generated using Python's Faker library.",
    ],
    stack: ["C++", "Python"],
    image: null,
    github: "https://github.com/MegaClinton/Student-Management-System",
    live: "",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get real index when loop is true
    const realIndex = swiper.realIndex;
    setProject(projects[realIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Project Info */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/*outline num*/}
              <div className="font-extrabold leading-none text-transparent text-8xl text-outline">
                {project.num}
              </div>
              {/*title*/}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">
                {project.title}
              </h2>
              {/*description*/}
              <div className="space-y-2">
                {Array.isArray(project.description) ? (
                  project.description.map((paragraph, index) => (
                    <p key={index} className="text-white/60">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-white/60">{project.description}</p>
                )}
              </div>
              {/*stack*/}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/*border*/}
              <div className="border border-white/20"></div>
              {/*buttons*/}
              <div className="flex items-center gap-4">
                {/*Live project button*/}
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={0}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {/*Github project button*/}
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Project Slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              loop={true}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-transparent">
                      {/*overlay*/}
                      <div className="absolute top-0 bottom-0 z-10 w-full h-full"></div>
                      {/*image*/}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/*slider buttons*/}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 z-20 bottom-[calc(50%_-_22px)] xl:bottom-0 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover hover:text-white text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
