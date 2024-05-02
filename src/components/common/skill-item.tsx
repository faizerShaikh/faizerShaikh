import { Skill } from "@/interfaces";
import Image from "next/image";
import React from "react";

export const SkillItem = ({ item }: { item: Skill }) => {
  return (
    <div className='flex justify-center items-center flex-col w-40 h-40 bg-primary-light rounded-xl'>
      <Image
        alt='react'
        src={`/images/logos/${item.icon}`}
        height={80}
        width={80}
      ></Image>
      <h4 className='text-lg mt-2 font-medium text-text-color-2 text-center'>
        {item.title}
      </h4>
    </div>
  );
};
