import { useState } from "react";
import InputForm from "../Utils/InputForm";

import { FaLongArrowAltRight } from "react-icons/fa";

function EmailBox() {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [message, SetMessage] = useState("");

  const handleShoot = async (e) => {
    e.preventDefault();

    try {
      console.log(`${name}, ${email}, ${message}`);
      console.log("Message sent sucessfully");

      alert("Message sent successfully!");
      SetName("");
      SetEmail("");
      SetMessage("");
    } catch (error) {
      alert("Failed to send message. Please try again later.", error);
    }
  };

  return (
    <div className="m-5 flex flex-col items-center justify-start gap-5 text-center text-black dark:text-white">
      <h3 className="font-[Gilroy-Dark] text-3xl uppercase text-blue-500">
        get in touch
      </h3>
      <p className="w-3/5 text-lg font-semibold">
        Looking for a collab (or) just want to say hello ? Go ahead !{" "}
      </p>
      <form onSubmit={handleShoot}>
        <InputForm
          htmlFor="name"
          labelText="Name"
          type="text"
          id="name"
          value={name}
          required={true}
          placeholder="miketyson"
          onChange={(e) => SetName(e.target.value)}
        />
        <InputForm
          htmlFor="email"
          labelText="Email"
          type="email"
          id="email"
          value={email}
          required={true}
          placeholder="miketyson@example.com"
          onChange={(e) => SetEmail(e.target.value)}
        />
        <textarea
          htmlFor="message"
          value={message}
          id="message"
          required={true}
          rows={3}
          cols={30}
          onChange={(e) => SetMessage(e.target.value)}
          placeholder="your message here...."
          className="form-input my-2 w-full rounded-sm border-0 py-2 text-start text-black outline-none dark:bg-black dark:text-white"
        ></textarea>
        <button
          type="submit"
          className="btn w-4/5 border-black text-black dark:border-white dark:text-white"
        >
          <span className="flex items-center justify-center gap-2 px-10 uppercase">
            Shoot <FaLongArrowAltRight />
          </span>
          <div className="blue"></div>
        </button>
      </form>
    </div>
  );
}

export default EmailBox;
