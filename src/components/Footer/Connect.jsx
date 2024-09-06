import Logo from "../Utils/Logo";
import EmailBox from "./EmailBox";
import Navlinks from "../Utils/Navlinks";

import Socials from "../Utils/Socials";

import {
  FaSquareGithub,
  FaSquareXTwitter,
  FaLinkedin,
  FaSquareWhatsapp,
} from "react-icons/fa6";

const whatsappNumber = parseInt(import.meta.env.VITE_WHATSAPP);
const whatsappMessage = encodeURIComponent(import.meta.env.VITE_WHATSAPP_MSG);

function Connect() {
  return (
    <div className="flex flex-wrap items-center justify-evenly md:h-[80vh]">
      <EmailBox />
      <div className="hidden h-4/5 w-[2px] bg-black dark:bg-white md:block"></div>
      <div className="mt-5 flex flex-row items-center gap-14 text-xl md:mt-0 md:flex-col">
        <Navlinks />
        <div className="flex flex-col gap-5">
          <Logo />
          <div className="flex gap-3 text-3xl">
            <Socials
              link={import.meta.env.VITE_LINKEDIN}
              icon={<FaLinkedin />}
            />
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
      </div>
    </div>
  );
}

export default Connect;
