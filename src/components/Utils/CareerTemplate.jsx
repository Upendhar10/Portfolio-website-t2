import propTypes from "prop-types";
import { MdArrowOutward } from "react-icons/md";
const CareerTemplate = ({ title, name, cgpa, href }) => {
  return (
    <div className="w-5/5 relative my-5 h-[120px] font-[Alkatra] text-2xl text-black dark:text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#3b82f6"
        className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-md text-black dark:text-white"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      </svg>
      <div className="ml-6 max-w-[350px] leading-loose">
        <h4 className="text-xl font-bold leading-relaxed">{title}</h4>
        <li className="text-base font-semibold leading-loose">{name}</li>
        <a href={href} target="_blank">
          <li className="cursor-pointer text-base font-bold leading-loose">
            {cgpa} <MdArrowOutward className="ml-1 inline" />
          </li>
        </a>
      </div>
    </div>
  );
};

export default CareerTemplate;

CareerTemplate.propTypes = {
  title: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  cgpa: propTypes.string.isRequired, // CGPA in format "CGPA : x.x"
  href: propTypes.string,
};
