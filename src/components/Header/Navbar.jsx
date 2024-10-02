import { useState } from "react";
import ThemeToggle from "../Utils/ThemeToggle";
import Menubar from "./Menubar";
import Navlinks from "../Utils/Navlinks";
import { RiMenu3Fill } from "react-icons/ri";

function Navbar() {
  const [isMenu, setIsMenu] = useState(false);

  function handleMenubar() {
    setIsMenu(!isMenu);
  }

  return (
    <div className="flex flex-row-reverse items-center gap-10 text-xl font-bold md:flex-row">
      {window.innerWidth > 768 ? (
        <Navlinks />
      ) : (
        <RiMenu3Fill
          className="cursor-pointer text-4xl font-semibold text-black dark:text-white"
          onClick={handleMenubar}
        />
      )}

      {isMenu && <Menubar status={isMenu} setStatus={setIsMenu} />}
      <ThemeToggle />
    </div>
  );
}

export default Navbar;
