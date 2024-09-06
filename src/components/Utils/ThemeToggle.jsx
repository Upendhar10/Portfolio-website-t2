import { useState, useEffect } from "react";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      className="cursor-pointer rounded-full border-2 border-white p-1 text-lg dark:border-black dark:bg-black dark:text-white"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <IoMdSunny /> : <BsFillMoonStarsFill />}
    </button>
  );
}

export default ThemeToggle;
