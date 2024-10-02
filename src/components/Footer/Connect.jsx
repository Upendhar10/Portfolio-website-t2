import Logo from "../Utils/Logo";
import EmailBox from "./EmailBox";

import Socials from "../Utils/Socials";
import Links from "../../Configs/Links";

import {
  FaSquareGithub,
  FaSquareXTwitter,
  FaLinkedin,
  FaSquareWhatsapp,
  FaHashnode,
} from "react-icons/fa6";
// import { FaMediumM } from "react-icons/fa";

const whatsappNumber = parseInt(Links.VITE_WHATSAPP);
const whatsappMessage = encodeURIComponent(Links.VITE_WHATSAPP_MSG);

function Connect() {
  return (
    <div>
      <h3 className="my-2 text-center font-[Gilroy-Dark] text-4xl uppercase text-blue-500">
        get in touch
      </h3>
      <div className="flex flex-wrap items-center justify-evenly gap-10 md:h-[80vh]">
        <EmailBox />
        <div className="hidden h-4/5 w-[2px] bg-black dark:bg-white md:block"></div>
        <div className="grid place-content-start gap-10 md:place-content-center">
          <div className="flex items-center gap-10 text-[2.5rem] md:flex-col">
            <h3 className="text-2xl font-bold uppercase">Say Hello !</h3>
            <div className="flex gap-5">
              <Socials link={Links.VITE_LINKEDIN} icon={<FaLinkedin />} />
              <Socials
                link={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                icon={<FaSquareWhatsapp />}
              />
              <Socials link={Links.VITE_TWITTER} icon={<FaSquareXTwitter />} />
            </div>
          </div>
          <div className="flex items-center gap-5 text-[2.5rem] md:flex-col">
            <h3 className="text-center text-2xl font-bold uppercase">
              Follow My Work
            </h3>
            <div className="flex gap-5">
              <Socials link={Links.VITE_GITHUB} icon={<FaSquareGithub />} />
              <Socials link={Links.VITE_HASHNODE} icon={<FaHashnode />} />
              {/* <Socials
              link={import.meta.env.VITE_HASHNODE}
              icon={<FaMediumM />}
            /> */}
            </div>
          </div>
          <div className="hidden items-center justify-center gap-1 md:flex">
            <Logo />
            <div className="font-[gilroy-dark] text-[1.15rem] uppercase">
              <p>nemmani</p>
              <p>upendhar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;
