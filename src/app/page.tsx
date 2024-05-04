"use client";
import { Skills } from "@/components/skills";
import { AboutMe, Experiance, HeroSection, Projects } from "../components";
import ContactMe from "@/components/contact-me";
import Loading from "./loading";
import { useState, useEffect } from "react";
import Navbar from "@/components/common/navbar";
import { FaHeart } from "react-icons/fa";

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setShowLoading(false);
    }, 1500);
  }, []);

  if (showLoading) return <Loading />;
  return (
    <>
      <Navbar />
      <div className='container mx-auto px-5'>
        <HeroSection />
        <AboutMe />
        <Experiance />
        <Projects />
        <Skills />
        <ContactMe />
      </div>
      <footer className='flex justify-center items-center py-7 bg-secondary'>
        <p className='text-text-color-1 flex gap-1 md:text-base text-xs'>
          2024 | Designed and coded with{" "}
          <FaHeart fontSize={18} className='text-red-600' />
          by Faizer Shaikh
        </p>
      </footer>
    </>
  );
}
