"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import { ProjectInterface } from "@/interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const ProjectDetails = ({ item }: { item: ProjectInterface }) => {
  const [viewMore, setViewMore] = useState(false);
  const [viewMore1, setViewMore1] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='text-lg font-semibold mb-3 line-clamp-1 underline cursor-pointer hover:font-bold hover:text-code-1'>
          {item.name}
        </div>
      </DialogTrigger>
      <DialogContent className='border-0 p-10 max-w-7xl'>
        <DialogHeader>
          <DialogTitle className='mb-2 text-xl font-bold text-neutral-300'>
            {item.name}
          </DialogTitle>
        </DialogHeader>
        <div className='grid grid-cols-2 gap-5'>
          <div>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              pagination={{
                dynamicBullets: true,
                horizontalClass: "mt-10",
              }}
              // autoplay={{
              //   delay: 2000,
              // }}
              modules={[Pagination, Autoplay]}
            >
              {item.images.map((image) => (
                <SwiperSlide
                  key={image}
                  className='bg-primary-light rounded-lg p-5 mb-8'
                >
                  <div className='w-full h-[400px] relative mb-3'>
                    <Image
                      src={image}
                      alt={item.name}
                      layout='fill'
                      className='object-contain h-full object-center'
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='flex flex-col gap-3 overflow-y-auto h-[500px]'>
            <div>
              <div className='font-semibold'>Project Description</div>
              <DialogDescription>{item.projectDescription}</DialogDescription>
            </div>
            <div className='grid grid-cols-2'>
              <div>
                <div className='font-semibold'>Role</div>
                <DialogDescription>{item.role}</DialogDescription>
              </div>
              <div>
                <div className='font-semibold'>Tech Stack</div>
                <div className='flex justify-start items-center gap-5 overflow-x-hidden'>
                  {item.techStack.map((tech, index) => (
                    <div
                      key={tech}
                      className={`rounded-full text-sm text-code-${
                        index + 1
                      } hover:font-semibold`}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className='font-semibold'>Responsibilites</div>
              <ul className='my-custome-list-style pt-2 px-5'>
                {item.responsibilites.map(
                  (detail, index) =>
                    (index <= 1 || viewMore) && (
                      <li
                        key={detail}
                        className='mb-3 pl-4 text-muted-foreground text-sm'
                      >
                        {detail}

                        {index ===
                          (viewMore ? item.responsibilites.length - 1 : 1) && (
                          <div
                            className='cursor-pointer text-code-1 underline'
                            onClick={() => setViewMore((prev) => !prev)}
                          >
                            {viewMore ? "View Less" : "View More"}
                          </div>
                        )}
                      </li>
                    )
                )}
              </ul>
            </div>
            <div>
              <div className='font-semibold'>Projet Features</div>
              <ul className='my-custome-list-style pt-2 px-5'>
                {item.features.map(
                  (feature, index) =>
                    (index <= 1 || viewMore1) && (
                      <li
                        key={feature.name}
                        className='mb-3 pl-4 text-muted-foreground text-sm'
                      >
                        <b>{feature.name}:</b> {feature.description}
                        {index ===
                          (viewMore1 ? item.features.length - 1 : 1) && (
                          <div
                            className='cursor-pointer text-code-1 underline'
                            onClick={() => setViewMore1((prev) => !prev)}
                          >
                            {viewMore1 ? "View Less" : "View More"}
                          </div>
                        )}
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetails;
