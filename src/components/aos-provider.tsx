"use client";
import AOS from "aos";

import "aos/dist/aos.css";
import { ReactNode, useEffect } from "react";

const AOSProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in",
      once: true,
    });
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
