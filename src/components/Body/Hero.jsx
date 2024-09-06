import propTypes from "prop-types";
import { TypeAnimation } from "react-type-animation";

import Socials from "../Utils/Socials";

import {
  FaSquareGithub,
  FaSquareXTwitter,
  FaLinkedin,
  FaSquareWhatsapp,
} from "react-icons/fa6";

const typeSpeed = {
  type: "KeyStrokeDelayInMs",
  value: 250,
};

typeSpeed.propTypes = {
  type: propTypes.string.isRequired,
  value: propTypes.number.isRequired,
};

const whatsappNumber = parseInt(import.meta.env.VITE_WHATSAPP);
const whatsappMessage = encodeURIComponent(import.meta.env.VITE_WHATSAPP_MSG);

function Hero(typeSpeed) {
  return (
    <>
      <div className="hero flex h-[100vh] flex-col items-center justify-center gap-5 bg-white pt-12 text-black transition-colors duration-500 dark:bg-black dark:text-white md:gap-0">
        <div className="flex flex-col gap-5 text-xl font-semibold leading-3 md:flex-row md:gap-2 md:text-[1.2rem]">
          <span>Hello👋, my name is</span>
          <span>
            {" "}
            <span className="text-[#3b82f6]">Upendhar</span> and I&lsquo;m a
          </span>
        </div>
        <div className="mx-auto flex flex-col items-center justify-center gap-3 md:gap-0">
          <h2 className="h2f-stroke text-[4rem] md:text-[8em]">FRontend</h2>
          <h2 className="h2e-stroke text-[3rem] leading-none transition-all delay-150 duration-300 md:text-[7em]">
            <TypeAnimation
              sequence={["Engineer.", 1200, "Developer.", 1200]}
              speed={typeSpeed}
              repeat={Infinity}
            />
          </h2>
        </div>
        <p className="mt-5 text-end text-xl font-semibold md:text-[1.2rem]">
          based in Hyderbad, India.
        </p>
        <div className="-mb-10 mt-8 flex gap-10 text-4xl">
          <Socials link={import.meta.env.VITE_LINKEDIN} icon={<FaLinkedin />} />
          <Socials
            link={import.meta.env.VITE_GITHUB}
            icon={<FaSquareGithub />}
          />
          <Socials
            link={import.meta.VITE_TWITTER}
            icon={<FaSquareXTwitter />}
          />
          <Socials
            link={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            icon={<FaSquareWhatsapp />}
          />
        </div>
      </div>
      {/* <iframe
        src="https://lottie.host/embed/8576d0d8-7182-403a-8e69-1224cf11c384/OHvFlSiuns.json"
        width={60}
        className="z-99 fixed bottom-1 left-[10rem] rotate-180"
      ></iframe> */}
    </>
  );
}

export default Hero;
