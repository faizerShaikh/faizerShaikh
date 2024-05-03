"use client";

import { Experiance } from "@/interfaces";
import React, { useMemo, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

export const ExperianceItem = ({ item }: { item: Experiance }) => {
  const [viewMore, setViewMore] = useState(false);
  const heading = useMemo(
    () => (
      <h4 className='text-lg text-code-7'>{`{"${item.startYear}-${
        item.isCurrentJob ? "PRESENT" : item.endYear
      }"}`}</h4>
    ),
    [item]
  );
  return (
    <div className='flex flex-col md:flex-row justify-start items-start md:mx-10 mb-14'>
      <div className='px-5 pt-1 w-[30%] md-lg:block hidden'>
        <div className='justify-end items-center flex'>{heading}</div>
      </div>
      <div className='md-lg:border-l border-l-0 border-[#233554] md-lg:w-[70%] w-full relative'>
        <h3 className='md:px-10 md:text-4xl text-3xl font-semibold'>
          {item.jobRole}
        </h3>
        <div className='my-2 md-lg:hidden block md:px-10'>{heading}</div>
        <div className='flex justify-start items-center gap-4 md:px-10'>
          <a
            href={item.companyWebsite}
            target='_blank'
            referrerPolicy='no-referrer'
          >
            <h2 className='mt-1 font-medium text-code-1'>{item.companyName}</h2>
          </a>
          <div className='flex justify-start items-center gap-2'>
            <HiOutlineLocationMarker className='text-text-color-1' />
            <p className='!m-0'>{item.location}</p>
          </div>
        </div>
        <div className='md:px-16'>
          <ul className='my-custome-list-style pt-2 pl-5 md:pl-0'>
            {item.details.map(
              (detail, index) =>
                (index <= 2 || viewMore) && (
                  <li key={detail} className='mt-3 pl-4'>
                    {detail}

                    {index === (viewMore ? item.details.length - 1 : 2) && (
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
      </div>
    </div>
  );
};
