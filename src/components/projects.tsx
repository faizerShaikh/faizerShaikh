"use client";
import React from "react";
import { Heading } from "./common/heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { projectsData } from "@/constants";
import ProjectCard from "./common/project-card";

export const Projects = () => {
  return (
    <section id='projects'>
      <Heading number={2} title="projects i'have built" />{" "}
      <div className='flex justify-between items-center mx-auto px-[4rem] my-[8rem]'>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          pagination={{
            dynamicBullets: true,
            horizontalClass: "mt-10",
          }}
          // autoplay={{
          //   delay: 2000,
          // }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {projectsData.map((item) => (
            <SwiperSlide
              key={item.id}
              className='bg-primary-light rounded-lg p-5 mb-8'
            >
              <ProjectCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
