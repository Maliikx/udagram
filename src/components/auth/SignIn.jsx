import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = (props) => {
  return (
    // all container
    <div
      className='bg-secondary w-[42%]  rounded-lg  flex justify-between text-start  items-center shadow-2xl  h-[28rem]  font-sans'
      id='box'
    >
      {/* main container */}
      <div className='flex flex-col  h-full justify-around p-8    mb-5 relative '>
        {/* logo container */}
        <div className='  flex mb-[4rem] '>
          <img
            src='/assets/logo-dark.png'
            className='w-30 '
            draggable={false}
            alt=''
          />

          <h1 className=' text-4xl select-none '>dagram</h1>
        </div>

        {/* login form */}
        <form action='post' className='  flex flex-col gap-8 text-xl'>
          {/* username div */}
          <div className=' flex flex-col gap-1 '>
            <label htmlFor='' className=''></label>
            <input
              type='text'
              className=' border-b border-gray-400 bg-transparent outline-none'
              placeholder='username'
            />
          </div>

          {/* Password div */}
          <div className='flex flex-col gap-1'>
            <label htmlFor='' className=''></label>
            <input
              type='password'
              className=' border-b border-gray-400 bg-transparent outline-none'
              placeholder='password'
            />
          </div>

          <p className=' text-sm text-center'>
            Don't have an account?
            <span
              className=' underline text-blue-600 cursor-pointer'
              onClick={() => props.setAuthState('register')}
            >
              Sign up
            </span>
          </p>

          <button className=' m-auto text-secondary pl-2 pr-2 w-20  rounded-sm bg-content'>
            <Link to='/home'>Sign in</Link>
          </button>
        </form>
      </div>
      {/* side picture div */}
      <div className=' w-[45%]'>
        <img
          src='/assets/clouds.jpeg'
          className='  h-[28rem]   rounded-r-lg w-full'
          alt=''
        />
      </div>
    </div>
  );
};

export default SignIn;
