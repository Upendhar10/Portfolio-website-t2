import Navlinks from "../Utils/Navlinks";
import Socials from "../Utils/Socials";

import { IoClose } from "react-icons/io5";
import {
  FaSquareGithub,
  FaSquareXTwitter,
  FaLinkedin,
  FaSquareWhatsapp,
} from "react-icons/fa6";

import { motion, AnimatePresence } from "framer-motion";

const variants = {
  show: {
    opacity: 1,
    x: 0,
  },
  hide: {
    opacity: 0,
    x: "100%",
  },
};

const whatsappNumber = parseInt(import.meta.env.VITE_WHATSAPP);
const whatsappMessage = encodeURIComponent(import.meta.env.VITE_WHATSAPP_MSG);

// eslint-disable-next-line react/prop-types
function Menubar({ status, setStatus }) {
  console.log(status);

  return (
    <AnimatePresence>
      <motion.div
        className="absolute right-0 top-0 h-screen w-full backdrop-blur-lg md:w-2/5"
        initial="hide"
        animate={status ? "show" : "hide"}
        variants={variants}
        exit="hide"
        transition="opacity 1s ease-in-out, x 1s ease-in-out"
      >
        <span
          className="absolute right-[20%] top-[10%] cursor-pointer rounded-full text-5xl text-[#3b82f6]"
          onClick={() => setStatus(!status)}
        >
          <IoClose />
        </span>
        <div
          className="grid h-full place-content-center gap-10 text-4xl"
          onClick={() => setStatus(!status)}
        >
          <Navlinks />
          <div className="flex gap-5 text-4xl">
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
      </motion.div>
    </AnimatePresence>
  );
}

export default Menubar;
