"use client";

import { Experiance } from "@/interfaces";
import React, { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

export const ExperianceItem = ({ item }: { item: Experiance }) => {
  const [viewMore, setViewMore] = useState(false);
  return (
    <div className='flex justify-start items-start mx-10 mb-14'>
      <div className='px-5 pt-1 w-[30%]'>
        <div className='flex justify-end items-center'>
          <h4 className='text-lg text-code-7'>{`{"${item.startYear}-${
            item.isCurrentJob ? "PRESENT" : item.endYear
          }"}`}</h4>
          {/* <h4 className='bg-text-color-2 pl-4 py-[4.5px] text-neutral-600'>
		2022-PRESENT
	  </h4> */}
          {/* <div className='w-0 h-0  border-t-[17px] border-t-transparent border-l-[20px] border-l-text-color-2 border-b-[17px] border-b-transparent'></div> */}
        </div>
      </div>
      <div className='border-l border-l-1 border-[#233554] w-[70%] relative'>
        <h3 className='px-10 text-4xl font-semibold'>{item.jobRole}</h3>
        <div className='flex justify-start items-center gap-4 px-10'>
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
        <div className='px-16'>
          <ul className='my-custome-list-style pt-2'>
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
