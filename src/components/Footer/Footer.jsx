import Connect from "./Connect";
import Copyright from "./Copyright";

function Footer() {
  return (
    <div
      id="connect"
      className="flex w-full flex-col justify-center gap-5 bg-white p-5 text-black transition-colors duration-500 dark:bg-black dark:text-white"
    >
      <Connect />
      <Copyright />
    </div>
  );
}

export default Footer;
