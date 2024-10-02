// import { FaLongArrowAltRight } from "react-icons/fa";

function Copyright() {
  return (
    <div className="text-center text-base leading-loose text-black dark:text-white">
      {/* <p className="mx-auto max-w-[300px] md:max-w-full">
        Hope to see you again, and I&apos;ve got a little mesage for you. <br />
        <button
          type="submit"
          className="btn mt-3 w-auto border-0 border-black text-black dark:border-white dark:text-white"
        >
          <span className="flex h-5 items-center justify-center gap-3 uppercase hover:opacity-0">
            Read Message <FaLongArrowAltRight />
          </span>
          <div className="blue h-5 pt-2 text-sm">Hahaa..Take care!😊</div>
        </button>
      </p> */}
      <hr className="border-1 my-3 dark:bg-slate-600" />
      <p className="mx-auto max-w-[300px] md:max-w-full">
        Built with 💖 and plenty of caffeine! ☕
      </p>
      <p> &copy; Nemmani Upendhar | All rights & wrongs reserved.</p>
    </div>
  );
}

export default Copyright;
