import React from 'react';
import { useState } from 'react';

const SignIn = (props) => {
  const [usernameInput, setUsernameInput] = useState({
    value: '',
    isValid: undefined,
    errorMessage: '',
  });

  const [passwordInput, setPasswordInput] = useState({
    value: '',
    isValid: undefined,
    errorMessage: '',
  });

  return (
    // all container
    <div
      className='bg-secondary w-[42%]  rounded-lg  flex justify-between text-start  items-center shadow-2xl  h-[28rem]  font-sans'
      id='box'
    >
      {/* main container */}
      <div className='flex flex-col w-[100%] sm:w-[50%] h-full justify-around p-8    mb-5 relative '>
        {/* logo container */}
        <div className='  flex mb-[4rem] '>
          <img
            src='/assets/logo-dark.png'
            className='w-30  '
            draggable={false}
            alt=''
          />

          <h1 className=' text-4xl select-none '>dagram</h1>
        </div>

        {/* login form */}
        <form action='post' className='  flex flex-col gap-8 text-xl'>
          {/* username div */}
          <div className=' flex flex-col gap-1 group z-0 relative '>
            <input
              type='username'
              name='username'
              id='username'
              class='block py-1 px-0 w-full text-lg focus:placeholder:invisible bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder={`${!usernameInput.value ? 'Username' : ''}`}
              value={usernameInput.value}
              onChange={(event) => {
                setUsernameInput({
                  ...usernameInput,
                  value: event.target.value,
                });
              }}
            />
            <label
              for='username'
              class={`peer-focus:font-medium absolute  text-lg ${
                usernameInput.isValid === false
                  ? 'text-red-600 -translate-y-6 scale-75'
                  : usernameInput.value
                  ? 'text-blue-600 -translate-y-6 scale-75'
                  : 'text-gray-500 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0'
              }  duration-300 transform  top-1 -z-10 text-lg origin-[0] peer-focus:left-0  peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
              {usernameInput.isValid === false
                ? usernameInput.errorMessage
                : 'Username'}
            </label>
          </div>

          {/* Password div */}
          <div className=' flex flex-col gap-1 group z-0 relative '>
            <input
              type='password'
              name='password'
              id='password'
              class='block py-1 px-0 w-full text-lg focus:placeholder:invisible bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder={`${!passwordInput.value ? 'Password' : ''}`}
              value={passwordInput.value}
              onChange={(event) => {
                setPasswordInput({
                  ...passwordInput,
                  value: event.target.value,
                });
              }}
            />
            <label
              for='password'
              class={`peer-focus:font-medium absolute  text-lg ${
                passwordInput.isValid === false
                  ? 'text-red-600 -translate-y-6 scale-75'
                  : passwordInput.value
                  ? 'text-blue-600 -translate-y-6 scale-75'
                  : 'text-gray-500 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0'
              }  duration-300 transform  top-1 -z-10 text-lg origin-[0] peer-focus:left-0  peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
              {passwordInput.isValid === false
                ? passwordInput.errorMessage
                : 'Password'}
            </label>
          </div>

          <p className=' text-sm text-center flex gap-1'>
            Don't have an account?
            <span
              className=' underline text-blue-500 hover:text-blue-600 cursor-pointer'
              onClick={() => props.setAuthState('register')}
            >
              Register now
            </span>
          </p>

          <button className='  text-secondary p-1 rounded-sm bg-blue-700 text-white font-bold font-sans text-lg duration-300 hover:bg-blue-800'>
            Sign In
          </button>
        </form>
      </div>
      {/* side picture div */}
      <div className=' w-[45%]'>
        <img
          src='/assets/clouds.jpeg'
          className='h-[28rem] rounded-r-lg w-full hidden sm:inline'
          alt=''
        />
      </div>
    </div>
  );
};

export default SignIn;
