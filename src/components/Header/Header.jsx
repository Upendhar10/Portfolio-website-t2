import Logo from "../Utils/Logo";
import Navbar from "../Header/Navbar";

function Header() {
  return (
    <div className="fixed z-20 flex h-[14vh] w-full items-center justify-around bg-white text-black transition-colors duration-500 dark:bg-black dark:text-white">
      <Logo />
      <Navbar />
    </div>
  );
}

export default Header;
