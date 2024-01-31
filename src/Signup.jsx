import React, { useState, useEffect } from "react";
import Header from "./Header";
import SignupForm from "./SignupForm";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";

const Signup = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <Header />
      ) : (
        <div className="grid grid-cols-2">
          <div className="clip-custom bg-custom-blue text-white">
            <img
              src="/src/images/indigo-bg-logo.png"
              alt="Google Logo"
              className="h-[120px]  "
            />
            <div className="flex justify-center items-center">
              <h1 className="text-5xl mt-20">BASE</h1>
            </div>

            <div className="left12 w-full fixed bottom-20 left-[14rem]">
              <div className="text-white text-3xl space-x-4 flex items-center">
                <FaGithub />
                <AiFillTwitterCircle />
                <FaLinkedin />
                <IoLogoDiscord />
              </div>
            </div>
          </div>
          <SignupForm />
        </div>
      )}
    </>
  );
};

export default Signup;
