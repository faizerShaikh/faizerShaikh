"use client";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [showBG, setShowBg] = useState(false);

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
        <a href='#hero-section'>
          <p className='!m-0 font-semibold text-white text-xl underline'>
            faizer<span className='text-code-3'>.</span>shaikh
          </p>
        </a>
        <ul className='flex justify-start items-center gap-6 font-fira-code text-text-color-2 font-medium'>
          <li className='cursor-pointer'>
            <a href='#about-me'>
              <span className='text-code-1'>[0]</span>:about me
            </a>
          </li>
          <li className='cursor-pointer'>
            <a href='#experiance'>
              <span className='text-code-2'>[1]</span>:experience
            </a>
          </li>
          <li className='cursor-pointer'>
            <a href='#projects'>
              <span className='text-code-3'>[2]</span>:projects
            </a>
          </li>
          <li className='cursor-pointer'>
            <a href='#skills'>
              <span className='text-code-4'>[3]</span>:skills
            </a>
          </li>
          <li className='cursor-pointer'>
            <a href='#contact-me'>
              <span className='text-code-5'>[4]</span>:contact me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
