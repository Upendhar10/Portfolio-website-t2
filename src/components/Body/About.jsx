import assets from "../../assets/assets";
import { FaLongArrowAltRight } from "react-icons/fa";

import Links from "../../Configs/Links";

function About() {
  return (
    <div
      id="about"
      className="flex w-full flex-wrap items-center justify-evenly gap-10 text-black transition-colors duration-500 dark:bg-black dark:text-white md:p-0 lg:h-screen"
    >
      <div className="relative">
        <div className="h-[400px] max-h-[400px] w-[355px] rounded-lg bg-[#3b82f6]"></div>
        <img
          src={assets.Hero}
          className="absolute left-0 top-0 max-h-[400px] -rotate-6 rounded-lg transition-transform duration-200 hover:rotate-0"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-3 p-5">
        <h2 className="font-[Gilroy-Dark] text-4xl uppercase text-blue-500">
          About me
        </h2>
        <p className="max-w-[400px] text-justify font-[Alkatra] text-lg leading-loose tracking-wide md:max-w-[450px]">
          I am a passionate and an aspiring Frontend Engineer with a deep
          enthusiasm for crafting engaging and intuitive user interfaces. With a
          keen interest in building modern and accessible web applications, I am
          constantly driven by the desire to create seamless digital
          experiences. I thrive in environments where I can learn, grow, and
          bring ideas to life through code.
        </p>
        {/* <p className="text-justify text-lg font-semibold leading-loose tracking-wider">
          Bringing Ideas to live using Code!
        </p> */}

        <button className="btn w-3/5 text-black dark:border-white dark:text-white">
          <a href={Links.VITE_RESUME} target="_blank">
            <span className="flex items-center justify-center gap-2 font-[Alkatra] uppercase">
              Resume <FaLongArrowAltRight className="icon" />
            </span>
          </a>
          <div className="blue"></div>
        </button>
      </div>
    </div>
  );
}

export default About;

/*
















*/
