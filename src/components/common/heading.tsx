import React from "react";

const numberClass: { [key: number]: string } = {
  0: "text-code-1",
  1: "text-code-2",
  2: "text-code-3",
  3: "text-code-4",
  4: "text-code-5",
};

export const Heading = ({
  number,
  title,
}: {
  number: number;
  title: string;
}) => {
  return (
    <>
      <h2 className='text-3xl flex justify-start items-center text-text-color-2'>
        <span className={numberClass[number]}>[{number}]</span>:
        <span className='pl-7 font-bold decoration-code-3 pr-2'>{title}</span>
        <div className='flex-grow border-[#233554] border-t-[0.5px]'></div>
      </h2>
    </>
  );
};
