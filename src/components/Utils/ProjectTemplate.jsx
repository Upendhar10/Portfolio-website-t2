import propTypes from "prop-types";

import { FaGithub } from "react-icons/fa6";
import { GrDeploy } from "react-icons/gr";

const ProjectTemplate = ({
  img,
  title,
  description,
  tech,
  github,
  demo,
  isExpand,
  onToggle,
}) => {
  return (
    <div className="flex w-5/6 flex-col justify-center overflow-hidden rounded-md hover:shadow-xl md:w-5/6">
      <div className="h-20 w-full border-none text-center outline-none">
        <h3
          onClick={onToggle}
          className="h-full cursor-pointer border-none bg-[#3b82f6] p-5 font-[Gilroy-Dark] text-3xl uppercase text-black hover:bg-[#2f77eb] dark:text-white"
        >
          {title}
        </h3>
      </div>
      {isExpand && (
        <div className="grid gap-5 bg-[#3b82f6] p-2 md:grid-cols-2">
          <div className="border-none">
            <img src={img} className="object-fit h-[300px] w-full rounded-md" />
          </div>
          <div className="">
            <p className="text-black-500 max-w-[450px] text-justify text-xl font-semibold leading-loose tracking-wide">
              {description}
            </p>
            <img src={tech} className="block h-24 w-32" />
            <div className="flex items-center gap-5 text-2xl">
              <a
                href={github}
                target="_blank"
                className="rounded-md p-1 outline duration-300 hover:-translate-y-2"
              >
                {" "}
                <FaGithub />
              </a>
              <a
                href={demo}
                target="_blank"
                className="rounded-md p-1 outline duration-300 hover:-translate-y-2"
              >
                <GrDeploy />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectTemplate;

ProjectTemplate.propTypes = {
  img: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  tech: propTypes.string.isRequired,
  github: propTypes.string.isRequired,
  demo: propTypes.string.isRequired,
  isExpand: propTypes.bool.isRequired,
  onToggle: propTypes.func.isRequired,
};
