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
    title: "Rock Climbing App",
    description: [
      "A mobile app enabling users to create, edit, and delete climbing sessions with detailed climb logging including grade, attempts, ratings, and media attachments.",
      "Designed React Native UI components from Figma wireframes with a clean minimalistic design based on 90+ user survey responses. Architected Supabase backend with Row Level Security, PostgreSQL database, and cloud storage for photos/videos.",
    ],
    stack: ["React Native", "Supabase", "PostgreSQL", "Figma"],
    image: "",
    github: "https://github.com/ksheahen/Rock-Climbing-App",
    live: "",
  },
  {
    num: "02",
    title: "MonsterMatcher",
    description: [
      "A full-stack dating application built at HackUNT24 using the MERN stack. Engineered secure JWT authentication with refresh tokens, user-based access control, and persistent sessions achieving 99.9% uptime.",
      "Developed responsive UI components and created RESTful API endpoints for profile management, matchmaking logic, and user interactions. Delivered technical demo to panel of industry judges.",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js"],
    image:
      "https://github.com/user-attachments/assets/fafbfe49-3025-4870-9d90-75f10da39e61",
    github: "https://github.com/MegaClinton/monsterMatcher",
    live: "https://monster-matcher.vercel.app/",
  },
  {
    num: "03",
    title: "noteTaker",
    description: [
      "Led a 3-person team at HackUTA24 in developing a full-stack note-taking application using the MERN stack. Engineered RESTful API endpoints achieving 50ms average response time.",
      "Designed responsive interface using React and Tailwind CSS, increasing user retention by 35%. Validated API endpoints using Postman for quality assurance.",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
    image: "https://i.imgur.com/94YdWYd.png",
    github: "https://github.com/MegaClinton/noteTaker",
    live: "https://notetaker.up.railway.app/",
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
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-contain"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-white/5">
                            <span className="text-white/40">
                              No image available
                            </span>
                          </div>
                        )}
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
