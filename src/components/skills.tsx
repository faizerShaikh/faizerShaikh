import React from "react";
import { Heading } from ".";
import { skills } from "@/constants";
import { SkillItem } from "./common/skill-item";

export const Skills = () => {
  return (
    <section id='skills'>
      <Heading number={3} title='my skills' />{" "}
      <div className='flex justify-center gap-8 items-start flex-wrap mx-auto md:px-[4rem] md:my-[8rem] my-16'>
        {skills.map((item) => (
          <SkillItem item={item} key={item.title} />
        ))}
      </div>
    </section>
  );
};
