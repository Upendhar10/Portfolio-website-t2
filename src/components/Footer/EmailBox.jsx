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
    <div className="flex flex-col items-center justify-start gap-1 text-black dark:text-white">
      <p className="max-w-[350px] pt-5 text-center text-xl font-bold uppercase leading-relaxed">
        Looking for a collab for your next project?
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
        <fieldset className="rounded-md border-2">
          <legend className="px-2 text-lg font-semibold">Message</legend>
          <textarea
            htmlFor="message"
            value={message}
            id="message"
            required={true}
            rows={2}
            cols={40}
            onChange={(e) => SetMessage(e.target.value)}
            placeholder="your message here...."
            className="form-input w-full rounded-sm border-0 p-2 text-start text-black outline-none dark:bg-black dark:text-white"
          ></textarea>
        </fieldset>
        <button
          type="submit"
          className="btn mt-5 w-full border-2 text-black dark:text-white"
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
