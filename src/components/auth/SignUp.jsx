import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = (props) => {
  const navigate = useNavigate();

  const [emailInput, setEmailInput] = useState({
    value: '',
    isValid: undefined,
    errorMessage: '',
  });
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

  const [confirmPasswordInput, setConfirmPasswordInput] = useState({
    value: '',
    isValid: undefined,
    errorMessage: '',
  });

  function validateUserInfo(event) {
    event.preventDefault();

    if (!emailInput.value || !emailInput.value.includes('@gmail.com')) {
      setEmailInput({
        ...emailInput,
        isValid: false,
        errorMessage: 'Invalid email',
      });
    } else {
      setEmailInput({
        ...emailInput,
        isValid: true,
        errorMessage: '',
      });
    }

    if (usernameInput.value.length < 3) {
      console.log(usernameInput);
      setUsernameInput({
        ...usernameInput,
        isValid: false,
        errorMessage: 'Username is too short',
      });
    } else {
      setUsernameInput({
        ...usernameInput,
        isValid: true,
        errorMessage: '',
      });
    }

    if (passwordInput.value.length < 6) {
      setPasswordInput({
        ...passwordInput,
        isValid: false,
        errorMessage: 'Password is too short',
      });
    } else {
      setPasswordInput({
        ...passwordInput,
        isValid: true,
        errorMessage: '',
      });
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
      setConfirmPasswordInput({
        ...confirmPasswordInput,
        isValid: false,
        errorMessage: 'Passwords do not match',
      });
    } else {
      setConfirmPasswordInput({
        ...confirmPasswordInput,
        isValid: true,
        errorMessage: '',
      });
    }
  }

  useEffect(() => {
    if (
      emailInput.isValid &&
      usernameInput.isValid &&
      passwordInput.isValid &&
      confirmPasswordInput.isValid
    ) {
      navigate('/home');
    }
  }, [validateUserInfo]);

  return (
    // all container
    <div
      className='bg-secondary w-[42%] rounded-lg  flex justify-between text-start shadow-2xl  items-center  h-[32rem]  font-sans'
      id='box'
    >
      {/* main container */}
      <div className='flex flex-col w-[50%] h-full justify-around p-8 mb-5 relative '>
        {/* logo container */}
        <div className='  flex '>
          <img
            src='/assets/logo-dark.png'
            className='w-30 '
            draggable={false}
            alt=''
          />
          <h1 className=' text-4xl select-none '>dagram</h1>
        </div>

        {/* login form */}
        <form action='post' className='  flex flex-col gap-6 text-xl'>
          {/* email div */}
          <div className=' flex flex-col gap-1 '>
            <label htmlFor='' className='text-red-600 text-sm'>
              {emailInput.errorMessage}
            </label>
            <input
              type='email'
              className={` border-b ${
                emailInput.isValid === false
                  ? 'border-red-600'
                  : 'border-gray-400'
              } bg-transparent outline-none`}
              placeholder='Email'
              value={emailInput.value}
              onChange={(event) => {
                setEmailInput({
                  value: event.target.value,
                });
              }}
            />
          </div>

          {/* username div */}
          <div className=' flex flex-col gap-1 '>
            <label htmlFor='' className='text-red-600 text-sm'>
              {usernameInput.errorMessage}
            </label>
            <input
              type='text'
              value={usernameInput.value}
              className={` border-b ${
                usernameInput.isValid === false
                  ? 'border-red-600'
                  : 'border-gray-400'
              } bg-transparent outline-none`}
              placeholder='Username'
              onChange={(event) => {
                setUsernameInput({
                  value: event.target.value,
                });
              }}
            />
          </div>

          {/* Password div */}
          <div className='flex flex-col gap-1'>
            <label htmlFor='' className='text-red-600 text-sm'>
              {' '}
              {passwordInput.errorMessage}
            </label>
            <input
              type='password'
              value={passwordInput.value}
              className={` border-b ${
                passwordInput.isValid === false
                  ? 'border-red-600'
                  : 'border-gray-400'
              } bg-transparent outline-none`}
              placeholder='Password'
              onChange={(event) => {
                setPasswordInput({
                  value: event.target.value,
                });
              }}
            />
          </div>

          {/* confirm pass div */}
          <div className=' flex flex-col gap-1 '>
            <label htmlFor='' className='text-red-600 text-sm'>
              {' '}
              {confirmPasswordInput.errorMessage}
            </label>
            <input
              type='password'
              value={confirmPasswordInput.value}
              className={` border-b ${
                confirmPasswordInput.isValid === false
                  ? 'border-red-600'
                  : 'border-gray-400'
              } bg-transparent outline-none`}
              placeholder='Confirm password'
              onChange={(event) => {
                setConfirmPasswordInput({
                  value: event.target.value,
                });
              }}
            />
          </div>

          <p className=' text-sm text-center flex gap-1'>
            Already have an account?
            <span
              className=' underline text-blue-600 cursor-pointer '
              onClick={() => props.setAuthState('login')}
            >
              Sign In
            </span>
          </p>

          <button
            className='  text-secondary p-1 rounded-sm bg-blue-700 text-white font-bold font-sans duration-300 text-base hover:bg-blue-800'
            onClick={validateUserInfo}
          >
            Sign Up
          </button>
        </form>
      </div>
      {/* side picture div */}
      <div className=' w-[45%]'>
        <img
          src='/assets/clouds.jpeg'
          className='  h-[32rem]   rounded-r-lg '
          alt=''
        />
      </div>
    </div>
  );
};

export default SignUp;
