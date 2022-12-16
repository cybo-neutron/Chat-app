import React from "react";

function Register() {
  return (
    <div className="min-h-screen bg-secondary-700 flex justify-center items-center relative">
      <img
        src="background.jpg"
        alt=""
        className="absolute z-0 h-screen object-fit w-screen blur-sm"
      />
      {/* <div className="bg-primary-300 h-screen absolute w-screen opacity-40 blur-md"></div> */}

      <div className="flex flex-col gap-y-1 bg-secondary-600  shadow-xl rounded-sm text-text_primary-800 px-10 py-5 z-10 bg-opacity-80">
        <h1 className="text-center text-2xl font-bold">Chat</h1>
        <h2 className="text-center font-semibold "> Create Account </h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="bg-transparent shadow-lg outline-none py-2 px-1 text-secondary-300 focus:bg-secondary-600 focus:bg-opacity-30 font-semibold"
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          className="bg-transparent shadow-lg outline-none py-2 px-1 text-secondary-300 focus:bg-secondary-600 focus:bg-opacity-30 font-semibold"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-transparent shadow-lg outline-none py-2 px-1 text-secondary-300 focus:bg-secondary-600 focus:bg-opacity-30 font-semibold"
        />
        <button className="bg-primary-400 font-bold text-text_primary-800 mt-5 shadow-xl py-1 rounded-sm">
          Create Account
        </button>

        <div className="text-secondary-400 mt-2">
          Already have an account?{" "}
          <span className="font-semibold underline text-secondary-900">
            Login here
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
