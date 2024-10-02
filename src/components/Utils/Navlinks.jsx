function Navlinks() {
  return (
    <nav className="grid place-content-center gap-8 font-[Gilroy-dark] font-bold uppercase md:flex md:items-center">
      <a href="#about" className="group my-2 md:my-0">
        About
        <div className="my-1 h-[3px] w-0 bg-blue-500 delay-150 duration-300 group-hover:w-full md:my-0"></div>
      </a>
      <a href="#career" className="group my-2 md:my-0">
        Skillset
        <div className="my-1 h-[3px] w-0 bg-blue-500 delay-150 duration-300 group-hover:w-full md:my-0"></div>
      </a>
      <a href="#projects" className="group my-2 md:my-0">
        Projects
        <div className="my-1 h-[3px] w-0 bg-blue-500 delay-150 duration-300 group-hover:w-full md:my-0"></div>
      </a>
      <a href="#connect" className="group my-2 md:my-0">
        Connect
        <div className="my-1 h-[3px] w-0 bg-blue-500 delay-150 duration-300 group-hover:w-full md:my-0"></div>
      </a>
    </nav>
  );
}

export default Navlinks;
