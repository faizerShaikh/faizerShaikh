import React from "react";
import { Heading } from "./common";
import { experianceData } from "../constants";
import { ExperianceItem } from "./common/experiance-item";

export const Experiance = () => {
  return (
    <section id='experience'>
      <Heading number={1} title='professional journey' />
      <div className='md-lg:my-[8rem] my-16'>
        {experianceData.map((item) => (
          <ExperianceItem item={item} key={item.companyName} />
        ))}
      </div>
    </section>
  );
};
