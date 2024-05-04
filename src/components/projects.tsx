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
      <div className='flex justify-between items-center mx-auto md:px-[4rem] md:my-32 my-28'>
        <Swiper
          pagination={{
            dynamicBullets: true,
            horizontalClass: "mt-10",
          }}
          autoplay={{
            delay: 2000,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {projectsData.map((item) => (
            <SwiperSlide
              key={item.id}
              className='bg-secondary rounded-lg p-5 mb-8 hover:shadow-xl hover:shadow-primary-light transition-all hover:scale-50'
            >
              <ProjectCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
