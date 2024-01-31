import React, { useState } from "react";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission/validation logic here
  };

  return (
    <div className="flex justify-center items-center h-screen pl-5 pr-5">
      <div className="signin-form p-2">
        <h1 className="text-3xl pb-1">Sign In</h1>
        <p className="text-sm pb-2">Sign in your account</p>
        <div className="grid grid-cols-2 gap-x-0">
          <button
            className="flex items-center gap-2 shadow-md rounded-lg p-2 m-1"
            aria-label="Sign in with Google"
          >
            <img
              src="images/google.png"
              alt="Google Logo"
              className="h-4 w-6 object-contain"
            />
            <span className="text-xs text-gray-500 sm:text-[10px]">
              Sign in with Google
            </span>
          </button>

          <button
            className="flex items-center gap-2 shadow-md rounded-lg p-2 m-1"
            aria-label="Sign in with Apple"
          >
            <img
              src="/images/apple.png"
              alt="Apple Logo"
              className="h-5 w-8 object-contain"
            />
            <span className="text-xs text-gray-500 sm:text-[10px]">
              Sign in with Apple
            </span>
          </button>
        </div>
        <form
          className="signin-input pt-3 shadow-md rounded-lg p-5 mt-3"
          onSubmit={handleSubmit}
        >
          <p className="pb-3 pt-5">Email address</p>
          <input
            type="email"
            className="shadow-md rounded-lg w-[100%] bg-gray-100 p-2"
            value={email}
            onChange={handleEmailChange}
            aria-label="Email address"
            required
          />
          <p className="pb-3 pt-5">Password</p>
          <input
            type="password"
            className="shadow-md rounded-lg w-[100%] bg-gray-100 p-2"
            value={password}
            onChange={handlePasswordChange}
            aria-label="Password"
            required
          />
          <p className="text-blue-500 p-5">Forgot password?</p>
          <button
            type="submit"
            className="bg-indigo-600 w-[100%] text-white rounded-lg p-2 text-align-center"
          >
            Sign in
          </button>
        </form>
        <p className="p-5 text-sm flex justify-center">
          Don't have an account?{" "}
          <span className="text-blue-500 pl-1">Register here</span>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
