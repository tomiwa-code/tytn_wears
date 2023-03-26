import { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SlideIn } from "../../variant";

const Login = () => {
  const [showPassword, setShowPassword] = useState("password");
  const handleShowPass = () => {
    setShowPassword((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <div className="w-full h-screen items-center justify-center flex overflow-hidden">
      <motion.form
        variants={SlideIn("left")}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="w-[30%] shadow-3xl rounded-xl py-8 px-10 space-y-5"
      >
        <div className="flex items-center">
          <Link
            to={"/login"}
            className="flex-1 border-b-4 border-dark-800 cursor-pointer"
          >
            <p className="text-dark-500 text-center py-3 font-semibold">
              Sign In
            </p>
          </Link>
          <Link to={"/register"} className="flex-1 cursor-pointer">
            <p to={"/register"} className="text-dark-300 text-center py-3">
              Sign Up
            </p>
          </Link>
        </div>
        <h2 className="text-dark-500 text-xl font-semibold text-center">
          Welcome back
        </h2>
        <div className="border border-gray-100 py-4 bg-red-500 rounded-lg justify-center flex items-center space-x-5 cursor-pointer">
          <BsGoogle className="text-xl text-light-500" />
          <p className="text-light-500 font-medium">Sign in with google</p>
        </div>
        <div className="flex items-center gap-x-5">
          <div className="w-full h-[2px] bg-gray-100 flex-1"></div>
          <p className="rounded-full font-semibold text-dark-500">OR</p>
          <div className="w-full h-[2px] bg-gray-100 flex-1"></div>
        </div>
        <div className="space-y-8">
          <div className="relative w-full">
            <p className="text-dark-500 font-medium text-sm absolute left-5 -top-2 bg-light-200">
              Email
            </p>
            <input
              type="text"
              placeholder="example@gmail.com"
              required
              className="w-full py-4 px-5 rounded-lg border border-gray-100 placeholder:text-dark-200 focus:outline-none"
            />
            {/* <p className="text-sm text-red-500 mt-3 font-medium">Error goes here</p> */}
          </div>
          <div className="relative w-full">
            <p className="text-dark-500 font-medium text-sm absolute left-5 -top-2 bg-light-200">
              Password
            </p>
            <input
              type={showPassword}
              placeholder="Password01"
              required
              className="w-full py-4 px-5 rounded-lg border border-gray-100 placeholder:text-dark-200 focus:outline-none"
            />
            <p
              className="absolute bg-transparent right-5 text-sm top-[50%] -translate-y-[50%] font-medium cursor-pointer"
              onClick={handleShowPass}
            >
              {showPassword === "password" ? "Show" : "Hide"}
            </p>
            {/* <p className="text-sm text-red-500 mt-3 font-medium">Error goes here</p> */}
          </div>
        </div>
        <button className="w-full rounded-lg bg-dark-700 text-light-500 py-4">
          Sign In
        </button>
        <div className="flex items-center justify-between">
          <Link to={"/"} className="text-sm font-medium text-dark-500">
            Forgot password
          </Link>
          <Link
            to={"/register"}
            className="text-sm font-medium text-dark-400 cursor-pointer"
          >
            Don't have an account? Sign Up
          </Link>
        </div>
      </motion.form>
    </div>
  );
};

export default Login;
