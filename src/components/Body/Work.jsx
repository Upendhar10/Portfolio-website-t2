import Design from "./Design";
import Blog from "./Blog";

function Work() {
  return (
    <div className="mx-auto flex flex-col items-center justify-evenly gap-14 py-5 text-black transition-colors duration-500 dark:bg-black dark:text-white md:-my-3 md:flex-row lg:h-screen">
      <Blog />
      <div className="hidden h-3/5 w-[2px] bg-black dark:bg-white md:block"></div>
      <Design />
    </div>
  );
}

export default Work;
