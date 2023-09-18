import React from "react";
import {Link} from "react-router-dom"

const Signup = () => {
  return (
    // all container
    <div
      className="bg-secondary w-[42%]  rounded-lg  flex justify-between text-start  items-center  h-[32rem]  font-sans"
      id="box-light"
    >
      {/* main container */}
      <div className="flex flex-col  h-full justify-around p-5    mb-5 relative ">
        
        {/* logo container */}
        <div className="  flex mb-[4rem] ">
          <img
            src="src/assets/logo-light.png"
            className="w-30 "
            draggable={false}
            alt=""
          />
          <h1 className=" text-4xl select-none ">dagram</h1>
        </div>

        {/* log in form */}
        <form action="post" className="  flex flex-col gap-3 text-xl">


             {/* email div */}
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="" className="">
              Email
            </label>
            <input type="email" className=" rounded-sm border border-content" />
          </div>

          {/* username div */}
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="" className="">
              Username
            </label>
            <input type="text" className=" rounded-sm border border-content" />
          </div>

          {/* Password div */}
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="">
              Password
            </label>
            <input type="password" className=" rounded-sm border border-content" />
          </div>

           {/* confirm pass div */}
           <div className=" flex flex-col gap-1 ">
            <label htmlFor="" className="">
             Confirm Password
            </label>
            <input type="password" className=" rounded-sm border border-content" />
          </div>
          
          <p className=" text-sm text-center">
            Already have an account?
            <span className=" underline text-blue-600 "><Link to="/">Sign in </Link></span>
          </p>

          <button className=" m-auto text-secondary pl-2 pr-2 w-18  rounded-sm bg-content">
            <Link to="/">sign up</Link>
          </button>
        </form>
      </div>
      {/* side picture div */}
      <div className=" w-[45%]">
        <img
          src="src/assets/clouds.jpeg"
          className="  h-[32rem]   rounded-r-lg "
          alt=""
        />
      </div>
    </div>
  );
};

export default Signup;
