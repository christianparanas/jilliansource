"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { ThemeProvider } from "next-themes";
import Sun from "@/icons/Sun";
import Moon from "@/icons/Moon";

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // setIsDarkMode(theme == "light" ? false : false);
  }, [theme]);

  function changeTheme() {
    if (theme == "light") {
      setIsDarkMode(true);
      setTheme("dark");
      return;
    }

    setIsDarkMode(false);
    setTheme("light");
  }

  return (
    <div className="themeChanger cursor-pointer" onClick={changeTheme}>
      {isDarkMode ? <Moon /> : <Sun />}
    </div>
  );
}
