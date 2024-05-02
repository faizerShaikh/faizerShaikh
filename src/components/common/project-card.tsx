"use client";
import { ProjectInterface } from "@/interfaces";
import Image from "next/image";
import React from "react";
import ProjectDetails from "./project-details";

const ProjectCard = ({ item }: { item: ProjectInterface }) => {
  return (
    <div className='flex flex-col h-[480px] justify-between'>
      <div className='w-full min-h-[220px] relative mb-3'>
        <Image
          src={item.images[0]}
          alt={item.name}
          layout='fill'
          className='object-contain h-full object-center'
        />
      </div>
      <ProjectDetails item={item} />

      <div className='mb-3'>
        <div className='font-semibold'>Role: </div>
        <div className='line-clamp-3'>{item.role}</div>
      </div>
      <div className='mb-3'>
        <div className='font-semibold'>Project Description: </div>
        <div className='line-clamp-3'>{item.projectDescription}</div>
      </div>

      <div className='flex justify-start items-center gap-5 overflow-x-hidden'>
        {item.techStack.map((tech, index) => (
          <div
            key={tech}
            className={`rounded-full text-code-${
              index + 1
            } hover:font-semibold`}
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
