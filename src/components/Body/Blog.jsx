import { FaLongArrowAltRight } from "react-icons/fa";
function Blog() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 px-2">
      <h2 className="font-[Gilroy-Dark] text-3xl uppercase text-blue-500 md:text-start">
        BLOG
      </h2>
      <h2 className="text-3xl font-semibold leading-relaxed">
        I write stuff, <br /> sometimes
      </h2>
      <p className="p-0 text-xl">About Web Dev, Software Engineering</p>
      <button className="btn border-black text-black dark:border-white dark:text-white">
        <span className="flex items-center justify-center gap-2 uppercase">
          Read articles <FaLongArrowAltRight className="icon" />
        </span>
        <div className="blue"></div>
      </button>
    </div>
  );
}

export default Blog;
