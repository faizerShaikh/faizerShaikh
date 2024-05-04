"use client";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FiMenu } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { ModeToggle } from "../ui/mode-toggle";

export const NavMenuItems = [
  {
    name: "about me",
    link: "about-me",
    className: "delay-0",
  },
  {
    name: "experience",
    link: "experience",
    className: "delay-200",
  },
  {
    name: "projects",
    link: "projects",
    className: "delay-400",
  },
  {
    name: "skills",
    link: "skills",
    className: "delay-600",
  },
  {
    name: "contact me",
    link: "contact-me",
    className: "delay-800",
  },
];

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const [showBg, setShwoBg] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;

      if (window.scrollY >= 90) {
        setShwoBg(true);
      } else {
        setShwoBg(false);
      }
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection, showBg]);

  return { scrollDirection, showBg };
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { scrollDirection, showBg } = useScrollDirection();

  return (
    <header
      className={`sticky z-30 py-7 transition-all bg-background ${
        showBg ? "shadow-2xl" : ""
      } ${scrollDirection === "down" ? "-top-24" : "top-0"}  `}
    >
      <nav className='container mx-auto flex justify-between items-center'>
        <a
          href='#top'
          className='flex justify-start items-center gap-2 animate-fade animate-duration-1000 animate-ease-in'
        >
          <Image
            src={"/images/faizer-shaikh.png"}
            alt='Faizer Shaikh'
            width={40}
            height={40}
          />
          <p className='!m-0 font-semibold text-text-color-1 text-xl underline'>
            faizer<span className='text-code-3'>.</span>shaikh
          </p>
        </a>

        <Sheet modal open={open} onOpenChange={(open) => setOpen(open)}>
          <SheetTrigger asChild className='lg:hidden block'>
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
              <ModeToggle />
            </div>
          </SheetContent>
        </Sheet>
        <ul className='lg:flex hidden justify-start items-center gap-6 font-fira-code text-text-color-2 font-medium'>
          {NavMenuItems.map((item, index) => (
            <li
              key={item.name}
              className={`cursor-pointer animate-fade-down animate-duration-200 animate-ease-in ${item.className}`}
            >
              <a href={`#${item.link}`}>
                <span className={`text-code-${index}`}>[{index}]</span>:
                {item.name}
              </a>
            </li>
          ))}
          <li className='animate-fade-down animate-duration-200 animate-ease-in delay-1000'>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
