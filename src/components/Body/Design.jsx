import { FaLongArrowAltRight } from "react-icons/fa";
function Design() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h2 className="font-[Gilroy-Dark] text-3xl uppercase text-blue-500">
        DESIGN
      </h2>
      <h2 className="text-3xl font-semibold leading-relaxed">
        I started, <br /> designing stuff recently
      </h2>
      <p className="p-0 text-xl">web apps and experimental designs</p>
      <button className="btn border-black text-black dark:border-white dark:text-white">
        <span className="flex items-center justify-center gap-2 uppercase">
          see my work <FaLongArrowAltRight className="icon" />
        </span>
        <div className="blue"></div>
      </button>
    </div>
  );
}

export default Design;
