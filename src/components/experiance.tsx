import React from "react";
import { Heading } from "./common";
import { experianceData } from "../constants";
import { ExperianceItem } from "./common/experiance-item";

export const Experiance = () => {
  return (
    <section id='experiance'>
      <Heading number={1} title='professional journey' />
      <div className='my-[8rem]'>
        {experianceData.map((item) => (
          <ExperianceItem item={item} key={item.companyName} />
        ))}
      </div>
    </section>
  );
};
