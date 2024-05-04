import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <section className='h-screen w-screen flex justify-center items-center bg-background text-foreground'>
      <Image
        src={"/images/faizer-shaikh.png"}
        alt='Faizer Shaikh'
        width={40}
        height={40}
        className='animate-jump animate-infinite animate-duration-1000 animate-ease-out'
      />
    </section>
  );
};

export default Loading;
