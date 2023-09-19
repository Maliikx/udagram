import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = (props) => {
  const [userInfo, setUserInfo] = useState({
    email: {
      value: "",
      isValid: undefined,
      errorMessage: "",
    },
    username: {
      value: "",
      isValid: undefined,
      errorMessage: "",
    },
    password: {
      value: "",
      isValid: undefined,
      errorMessage: "",
    },
    confirmPassword: {
      value: "",
      isValid: undefined,
      errorMessage: "",
    },
  });

  function validateUserInfo(event) {
    event.preventDefault();
    console.log(userInfo);
    if (!userInfo.email.value || !userInfo.email.value.includes("@gmail.com")) {
      console.log("userInfo");
      setUserInfo({
        ...userInfo,
        email: {
          isValid: false,
          errorMessage:'invalid email'

        },
      });
    }
  }

  return (
    // all container
    <div
      className="bg-secondary w-[42%]  rounded-lg  flex justify-between text-start  items-center  h-[32rem]  font-sans"
      id="box"
    >
      {/* main container */}
      <div className="flex flex-col  h-full justify-around p-8 mb-5 relative ">
        {/* logo container */}
        <div className="  flex ">
          <img
            src="/assets/logo-dark.png"
            className="w-30 "
            draggable={false}
            alt=""
          />
          <h1 className=" text-4xl select-none ">dagram</h1>
        </div>

        {/* login form */}
        <form action="post" className="  flex flex-col gap-6 text-xl">
          {/* email div */}
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="" className="text-red-600 text-sm">
              {userInfo.email.errorMessage}
            </label>
            <input
              type="text"
              className={` border-b ${
                userInfo.email.isValid === false
                  ? "border-red-600"
                  : "border-gray-400"
              } bg-transparent outline-none`}
              placeholder="email"
              onChange={(event) => {
                setUserInfo({
                  ...userInfo,
                  email: {
                    value: event.target.value,
                  },
                });
              }}
            />
          </div>

          {/* username div */}
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="" className=""></label>
            <input
              type="text"
              className=" border-b border-gray-400 bg-transparent outline-none"
              placeholder="username"
              onChange={(event) => {
                setUserInfo({
                  ...userInfo,
                  username: {
                    value: event.target.value,
                  },
                });
              }}
            />
          </div>

          {/* Password div */}
          <div className="flex flex-col gap-1">
            <label htmlFor="" className=""></label>
            <input
              type="password"
              className=" border-b border-gray-400 bg-transparent outline-none"
              placeholder="password"
              onChange={(event) => {
                setUserInfo({
                  ...userInfo,
                  password: {
                    value: event.target.value,
                  },
                });
              }}
            />
          </div>

          {/* confirm pass div */}
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="" className=""></label>
            <input
              type="password"
              className=" border-b border-gray-400 bg-transparent outline-none"
              placeholder="confirm password"
              onChange={(event) => {
                setUserInfo({
                  ...userInfo,
                  confirmPassword: {
                    value: event.target.value,
                  },
                });
              }}
            />
          </div>

          <p className=" text-sm text-center">
            Already have an account?
            <span
              className=" underline text-blue-600 cursor-pointer "
              onClick={() => props.setAuthState("login")}
            >
              Sign In
            </span>
          </p>

          <button
            className=" m-auto text-secondary pl-2 pr-2 w-18  rounded-sm bg-content"
            onClick={validateUserInfo}
          >
            Sign Up
          </button>
        </form>
      </div>
      {/* side picture div */}
      <div className=" w-[45%]">
        <img
          src="/assets/clouds.jpeg"
          className="  h-[32rem]   rounded-r-lg "
          alt=""
        />
      </div>
    </div>
  );
};

export default SignUp;
