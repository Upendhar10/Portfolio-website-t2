import assets from "../../assets/assets";
import { FaLongArrowAltRight } from "react-icons/fa";

function About() {
  return (
    <div
      id="about"
      className="flex w-full flex-wrap items-center justify-evenly space-y-10 p-8 text-black transition-colors duration-500 dark:bg-black dark:text-white md:p-0 lg:h-screen"
    >
      <div className="">
        <img src={assets.Hero} className="max-h-[475px] rounded-lg" />
      </div>
      <div className="flex flex-col items-start justify-center gap-5">
        <h2 className="font-[Gilroy-Dark] text-3xl uppercase text-blue-500">
          About me
        </h2>
        <p className="max-w-[450px] text-justify text-sm font-semibold leading-loose tracking-wider">
          Im a passionate Frontend Engineer who loves building clean, modern,
          and accessible web applications. My primary focus is on React and
          JavaScript, but I also have experience with other technologies like
          HTML, CSS, and MySQL. I am always looking for opportunities to learn
          and grow.
        </p>
        <button className="btn w-3/5 border-black text-black dark:border-white dark:text-white">
          <span className="flex items-center justify-center gap-2 uppercase">
            Resume <FaLongArrowAltRight className="icon" />
          </span>
          <div className="blue"></div>
        </button>
        <h2 className="my-1 text-center font-[Gilroy-Dark] text-2xl uppercase text-blue-500 md:text-start">
          Techstack
        </h2>

        <div className="flex items-center justify-center gap-1 md:justify-start">
          <span className="text-xl font-semibold">Intermediate : </span>
          <div className="flex flex-wrap justify-center gap-3 py-2">
            <img className="h-7" src="https://skillicons.dev/icons?i=js" />
            <img className="h-7" src="https://skillicons.dev/icons?i=react" />
            <img className="h-7" src="https://skillicons.dev/icons?i=css" />
            <img className="h-7" src="https://skillicons.dev/icons?i=git" />
            <img className="h-7" src="https://skillicons.dev/icons?i=github" />
            <img className="h-7" src="https://skillicons.dev/icons?i=mongodb" />
          </div>
        </div>
        <div className="flex-warp flex justify-center md:justify-start">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold">Basic : </span>
            <div className="flex flex-wrap justify-center gap-3">
              <img className="h-7" src="https://skillicons.dev/icons?i=figma" />
              <img
                className="h-7"
                src="https://skillicons.dev/icons?i=nodejs"
              />
              <img
                className="h-7"
                src="https://skillicons.dev/icons?i=firebase"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="ml-5 block h-4/5 w-[2px] bg-black dark:bg-white"></div>
            <span className="ml-4 text-xl font-semibold">Advanced : </span>
            <div className="flex flex-wrap justify-center gap-3 py-2">
              <img className="h-7" src="https://skillicons.dev/icons?i=html" />
              <img className="h-7" src="https://skillicons.dev/icons?i=mysql" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

/*
















*/
