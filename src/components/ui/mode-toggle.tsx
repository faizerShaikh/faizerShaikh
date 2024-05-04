"use client";

import * as React from "react";
import { BsMoonStars } from "react-icons/bs";
import { useTheme } from "next-themes";
import { FiSun } from "react-icons/fi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='cursor-pointer'>
          <FiSun
            fontSize={18}
            className={`${theme === "light" ? "block" : "hidden"}`}
          />
          <BsMoonStars
            fontSize={18}
            className={`${theme === "dark" ? "block" : "hidden"}`}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='border-secondary'>
        <DropdownMenuItem
          className='focus:bg-secondary'
          onClick={() => setTheme("light")}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className='focus:bg-secondary'
          onClick={() => setTheme("dark")}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className='focus:bg-secondary'
          onClick={() => setTheme("system")}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
