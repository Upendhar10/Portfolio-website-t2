import Academics from "./Academics";
import Techstack from "./Techstack";

function Career() {
  return (
    <div
      id="career"
      className="mx-auto flex flex-col place-content-evenly gap-10 border-red-400 bg-white py-10 text-black dark:bg-black dark:text-white md:flex-row md:gap-5 lg:h-screen"
    >
      <Techstack />
      <Academics />
    </div>
  );
}

export default Career;
