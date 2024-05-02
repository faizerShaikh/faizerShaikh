import React, { HTMLAttributes, ReactNode } from "react";

export const WindowCard = ({
  containerProps,
  innerContainerProps,
  children,
}: {
  innerContainerProps?: HTMLAttributes<HTMLDivElement>;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  children: ReactNode;
}) => {
  return (
    <div
      {...containerProps}
      className={`border-2 border-text-color-1 rounded-lg w-[33%] ${containerProps?.className}`}
    >
      <div className='flex justify-start items-center gap-2 border-b border-code-1 p-4'>
        <div className='h-4 w-4 rounded-full bg-code-6'></div>
        <div className='h-4 w-4 rounded-full bg-code-7'></div>
        <div className='h-4 w-4 rounded-full bg-code-8'></div>
      </div>
      <div
        {...innerContainerProps}
        className={`p-5 ${innerContainerProps?.className}`}
      >
        {children}
      </div>
    </div>
  );
};
