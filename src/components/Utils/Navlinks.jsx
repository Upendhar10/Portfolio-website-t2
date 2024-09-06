function Navlinks() {
  return (
    <nav className="grid place-content-center font-bold">
      <a href="#about" className="group my-2">
        About
        <div className="my-1 h-[3px] w-0 bg-blue-500 delay-150 duration-300 group-hover:w-full"></div>
      </a>
      <a href="#experience" className="group my-2">
        Experience
        <div className="my-1 h-[3px] w-0 bg-blue-500 delay-150 duration-300 group-hover:w-full"></div>
      </a>
      <a href="#projects" className="group my-2">
        Projects
        <div className="my-1 h-[3px] w-0 bg-blue-500 delay-150 duration-300 group-hover:w-full"></div>
      </a>
      <a href="#connect" className="group my-2">
        Connect
        <div className="my-1 h-[3px] w-0 bg-blue-500 delay-150 duration-300 group-hover:w-full"></div>
      </a>
    </nav>
  );
}

export default Navlinks;
