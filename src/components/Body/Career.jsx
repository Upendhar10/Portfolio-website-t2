import Academics from "./Academics";
import Experience from "./Experience";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Career() {
  return (
    <div
      id="experience"
      className="mx-auto flex flex-col items-center justify-evenly gap-5 bg-white py-10 text-black dark:bg-black dark:text-white md:flex-row lg:h-screen"
    >
      <Academics />
      <div className="mt-5 hidden h-4/5 w-[2px] bg-black dark:bg-white md:block"></div>
      <Experience />
    </div>
  );
}

export default Career;
