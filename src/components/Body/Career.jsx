import Academics from "./Academics";
import Techstack from "./Techstack";
import Experience from "./Experience";

function Career() {
  return (
    <div id="career" className="grid gap-10 dark:bg-black dark:text-white">
      <Techstack />
      <div className="my-3 flex flex-wrap items-center justify-around gap-4 p-3">
        <Academics />
        <Experience />
      </div>
    </div>
  );
}

export default Career;

// mx-auto flex flex-col place-content-evenly gap-10 border-2 border-yellow-300 bg-white py-10 font-[Alkatra] text-black dark:bg-black dark:text-white md:flex-row md:gap-5 lg:h-screen
