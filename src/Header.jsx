import React from "react";
import SignupForm from "./SignupForm";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
const Header = () => {
  return (
    <>
      <div className="bg-custom-blue text-white flex p-5">
        <img
          src="/images/indigo-bg-logo.png"
          alt="Google Logo"
          className="h-10  "
        />
        <div className="m-2">Base</div>
      </div>
      <SignupForm />
      <div className="flex mb-20 justify-center ">
        <div className="text-gray-500 text-3xl space-x-4 flex items-center">
          <FaGithub />
          <AiFillTwitterCircle />
          <FaLinkedin />
          <IoLogoDiscord />
        </div>
      </div>
    </>
  );
};

export default Header;
