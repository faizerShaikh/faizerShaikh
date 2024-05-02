import React from "react";
import { Heading, WindowCard } from ".";

export const AboutMe = () => {
  return (
    <section id='about-me'>
      <Heading number={0} title='about me' />{" "}
      <div className='flex justify-between items-center mx-auto px-[4rem] my-[8rem]'>
        <WindowCard
          innerContainerProps={{
            className: "w-full !p-0",
          }}
          containerProps={{
            className: "!w-100% h-auto",
          }}
        >
          <img
            src='/images/my-pic.jpg'
            alt='User profile'
            className='w-full h-full rounded-b-lg'
          ></img>
        </WindowCard>
        <p className='w-1/2 my-8'>
          I am a full-stack software engineer with over{" "}
          <span className='text-code-1 font-semibold'>2+ years</span> of
          experience dedicated to simplifying life with a few clicks through web
          application development.
          <span className='block py-3' />
          In the frontend, I specialize in technologies like{" "}
          <span className='text-code-5 font-semibold'>Angular</span>,{" "}
          <span className='text-neutral-300 font-semibold'>Next.js</span>, and{" "}
          <span className='text-cyan-400 font-semibold'>React.js</span>,{" "}
          providing me with the flexibility to choose the best tools for
          clients' requirements. On the backend, I excel in{" "}
          <span className='text-code-5 font-semibold'>Nest.js</span> and{" "}
          <span className='text-neutral-300 font-semibold'>Express.js</span>{" "}
          enabling the creation of scalable and optimized RESTful APIs.
          <span className='block py-3' />
          I'm committed to innovation and constantly seek new development
          methods that streamline the developer's experience. This includes
          exploring{" "}
          <span className='text-code-5 font-semibold'>
            code reuse strategies
          </span>
          ,{" "}
          <span className='text-cyan-400 font-semibold'>
            adhering to industry best practices
          </span>
          ,
          <span className='text-neutral-300 font-semibold'>
            {" "}
            discovering new packages{" "}
          </span>
          and
          <span className='text-neutral-300 font-semibold'> technologies</span>,
          and. My goal is to make the development journey more efficient and
          productive.
        </p>
      </div>
    </section>
  );
};
