import { Skill } from "@/interfaces";
import Image from "next/image";
import React from "react";

export const SkillItem = ({ item }: { item: Skill }) => {
  return (
    <div className='flex justify-center items-center flex-col md:w-40 md:h-40 w-32 h-32 bg-secondary rounded-xl'>
      <Image
        alt='react'
        src={`/images/logos/${item.icon}`}
        height={50}
        width={50}
        className='md:w-[80px] md:h-[80px]'
      ></Image>
      <h4 className='text-lg mt-2 font-medium text-text-color-2 text-center'>
        {item.title}
      </h4>
    </div>
  );
};
