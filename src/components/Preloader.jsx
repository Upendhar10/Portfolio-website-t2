// eslint-disable-next-line react/prop-types

function Preloader() {
  return (
    <div
      className={`absolute z-50 grid h-screen w-screen transform place-content-center bg-white duration-150`}
    >
      <svg
        id="logo"
        width="150px"
        height="150px"
        viewBox="0 0 53 44"
        fill="#3b82f6"
        stroke="#ffff"
        strokeWidth="5px"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="5500"
        xmlns="http://www.w3.org/2000/svg"
        className="draw drawAnim"
      >
        {" "}
        <path
          d="M23.2997 0L52.0461 28.6301V44H38.6311V34.1553L17.7522 13.3607L13.415 13.3607L13.415 44H0L0 0L23.2997 0ZM38.6311 15.2694V0L52.0461 0V15.2694L38.6311 15.2694Z"
          className="custom"
        ></path>{" "}
      </svg>
    </div>
  );
}

export default Preloader;
