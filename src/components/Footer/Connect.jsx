import Logo from "../Utils/Logo";
import EmailBox from "./EmailBox";

import Socials from "../Utils/Socials";

import {
  FaSquareGithub,
  FaSquareXTwitter,
  FaLinkedin,
  FaSquareWhatsapp,
  FaHashnode,
} from "react-icons/fa6";
// import { FaMediumM } from "react-icons/fa";

const whatsappNumber = parseInt(import.meta.env.VITE_WHATSAPP);
const whatsappMessage = encodeURIComponent(import.meta.env.VITE_WHATSAPP_MSG);

function Connect() {
  return (
    <div>
      <h3 className="my-2 text-center font-[Gilroy-Dark] text-3xl uppercase text-blue-500">
        get in touch
      </h3>
      <div className="flex flex-wrap items-center justify-evenly gap-5 md:h-[80vh]">
        <EmailBox />
        <div className="hidden h-4/5 w-[2px] bg-black dark:bg-white md:block"></div>
        <div className="grid place-content-center gap-10">
          <h3 className="text-2xl font-bold uppercase">Say Hello !</h3>
          <div className="flex gap-5 text-4xl">
            <Socials
              link={import.meta.env.VITE_LINKEDIN}
              icon={<FaLinkedin />}
            />
            <Socials
              link={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              icon={<FaSquareWhatsapp />}
            />
            <Socials
              link={import.meta.env.VITE_TWITTER}
              icon={<FaSquareXTwitter />}
            />
          </div>
          <h3 className="text-center text-2xl font-bold uppercase">
            Follow My Work
          </h3>
          <div className="flex gap-5 text-4xl">
            <Socials
              link={import.meta.env.VITE_GITHUB}
              icon={<FaSquareGithub />}
            />
            <Socials
              link={import.meta.env.VITE_HASHNODE}
              icon={<FaHashnode />}
            />
            {/* <Socials
              link={import.meta.env.VITE_HASHNODE}
              icon={<FaMediumM />}
            /> */}
          </div>
          <div className="flex items-center gap-1">
            <Logo />
            <div className="font-[gilroy-dark] text-xl uppercase">
              <h3>nemmani</h3>
              <h3>upendhar</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;
