"use client";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FiMenu } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export const NavMenuItems = [
  {
    name: "about me",
    link: "about-me",
  },
  {
    name: "experience",
    link: "experience",
  },
  {
    name: "projects",
    link: "projects",
  },
  {
    name: "skills",
    link: "skills",
  },
  {
    name: "contact me",
    link: "contact-me",
  },
];

const Navbar = () => {
  const [showBG, setShowBg] = useState(false);
  const [open, setOpen] = useState(false);

  const changeShowBG = () => {
    if (window.scrollY >= 110) {
      setShowBg(true);
    } else {
      setShowBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeShowBG);
    window.scrollTo(0, 0);
    return () => {
      window.removeEventListener("scroll", changeShowBG);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 py-7 transition-all ${
        showBG ? "shadow-2xl bg-primary-light opacity-95" : ""
      }`}
    >
      <nav className='container mx-auto flex justify-between items-center'>
        <a
          href='#hero-section'
          className='flex justify-start items-center gap-2'
        >
          {showBG && (
            <Image
              src={"/images/faizer-shaikh.png"}
              alt='Faizer Shaikh'
              width={40}
              height={40}
            />
          )}
          <p className='!m-0 font-semibold text-white text-xl underline'>
            faizer<span className='text-code-3'>.</span>shaikh
          </p>
        </a>
        <Sheet modal open={open} onOpenChange={(open) => setOpen(open)}>
          <SheetTrigger asChild className='md-lg:hidden block'>
            <div>
              <FiMenu size={28} />
            </div>
          </SheetTrigger>
          <SheetContent className='w-[70%]' side={"right"}>
            <ul className='flex flex-col gap-10 justify-center items-center font-fira-code text-text-color-2 font-medium mt-20'>
              {NavMenuItems.map((item, index) => (
                <li
                  key={item.name}
                  className='cursor-pointer'
                  onClick={() => setOpen(false)}
                >
                  <a href={`#${item.link}`}>
                    <span className={`text-code-${index}`}>[{index}]</span>:
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className='flex justify-center items-center mt-10 gap-5'>
              <a
                href='https://www.instagram.com/sahil.shaikh.25/'
                target='__blank'
              >
                <div className='flex justify-center items-center cursor-pointer'>
                  <FiInstagram
                    fontSize={20}
                    className='hover:text-neutral-200'
                  />
                </div>
              </a>
              <a
                href='https://www.linkedin.com/in/faizer-shaikh/'
                target='__blank'
              >
                <div className='flex justify-center items-center cursor-pointer'>
                  <GrLinkedin
                    fontSize={20}
                    className='hover:text-neutral-200'
                  />
                </div>
              </a>{" "}
              <a href='https://github.com/faizerShaikh' target='__blank'>
                <div className='flex justify-center items-center cursor-pointer'>
                  <FaGithub fontSize={20} className='hover:text-neutral-200' />
                </div>
              </a>
            </div>
          </SheetContent>
        </Sheet>
        <ul className='md-lg:flex hidden justify-start items-center gap-6 font-fira-code text-text-color-2 font-medium'>
          {NavMenuItems.map((item, index) => (
            <li key={item.name} className='cursor-pointer'>
              <a href={`#${item.link}`}>
                <span className={`text-code-${index}`}>[{index}]</span>:
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
