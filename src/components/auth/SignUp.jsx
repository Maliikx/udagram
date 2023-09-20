import { Repeat2 } from 'lucide-react';
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

    if (!emailInput.value) {
      setEmailInput({
        ...emailInput,
        isValid: false,
        errorMessage: 'Email is required',
      });
    } else if (!emailInput.value || !emailInput.value.includes('@gmail.com')) {
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

    if (!usernameInput.value) {
      setUsernameInput({
        ...usernameInput,
        isValid: false,
        errorMessage: 'Username is required',
      });
    } else if (usernameInput.value.length < 3) {
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

    if (!passwordInput.value) {
      setPasswordInput({
        ...passwordInput,
        isValid: false,
        errorMessage: 'Password is required',
      });
    } else if (passwordInput.value.length < 6) {
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

    if (!confirmPasswordInput.value) {
      setConfirmPasswordInput({
        ...confirmPasswordInput,
        isValid: false,
        errorMessage: 'Confirm password is required',
      });
    } else if (passwordInput.value !== confirmPasswordInput.value) {
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
      let user = usernameInput.value;
      let email = emailInput.value;
      let password = passwordInput.value;
      const users = [user, email, password];
      localStorage.setItem('Users', JSON.stringify(users));
      navigate('/home');
    }
  }, [validateUserInfo]);

  return (
    // all container
    <div
      className='  bg-secondary w-[90%]  md:w-[42%] rounded-lg  flex justify-between text-start shadow-2xl  items-center  h-[28rem]  font-sans'
      id='box'
    >
      {/* main container */}
      <div className='  flex flex-col w-[100%] lg:w-[50%] h-full justify-around p-8 mb-5 relative '>
        {/* logo container */}
        <div className='flex'>
          <img
            src='/assets/logo-dark.png'
            className='w-10 h-10 md:w-10 md:h-10'
            draggable={false}
            alt=''
          />

          <h1 className=' text-3xl select-none text-content'>dagram</h1>
        </div>

        {/* login form */}
        <form action='post' className='  flex flex-col gap-6  '>
          {/* email div */}
          <div className=' flex flex-col gap-1 group z-0 relative'>
            <input
              type='email'
              name='email'
              id='email'
              class='block py-1 px-0 w-full text-sm focus:placeholder:invisible bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder={`${!emailInput.value ? 'Email address' : ''}`}
              value={emailInput.value}
              onChange={(event) => {
                setEmailInput({
                  ...emailInput,
                  value: event.target.value,
                });
              }}
            />
            <label
              for='email'
              class={`peer-focus:font-medium absolute  text-base ${
                emailInput.isValid === false
                  ? 'text-red-600 -translate-y-6 scale-75'
                  : emailInput.value
                  ? 'text-blue-600 -translate-y-6 scale-75'
                  : 'text-gray-500 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0'
              }  duration-300 transform  top-1 -z-10 text-sm origin-[0] peer-focus:left-0  peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
              {emailInput.isValid === false
                ? emailInput.errorMessage
                : 'Email address'}
            </label>
          </div>

          {/* username div */}
          <div className=' flex flex-col gap-1 group z-0 relative  '>
            <input
              type='username'
              name='username'
              id='username'
              class='block py-1 px-0 w-full text-sm focus:placeholder:invisible bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
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
              class={`peer-focus:font-medium absolute  text-base ${
                usernameInput.isValid === false
                  ? 'text-red-600 -translate-y-6 scale-75'
                  : usernameInput.value
                  ? 'text-blue-600 -translate-y-6 scale-75'
                  : 'text-gray-500 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0'
              }  duration-300 transform  top-1 -z-10 text-sm origin-[0] peer-focus:left-0  peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
              {usernameInput.isValid === false
                ? usernameInput.errorMessage
                : 'Username'}
            </label>
          </div>

          {/* Password div */}
          <div className=' flex flex-col gap-1 group z-0 relative   '>
            <input
              type='password'
              name='password'
              id='password'
              class='block py-1 px-0 w-full text-sm focus:placeholder:invisible bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
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
              class={`peer-focus:font-medium absolute  text-base ${
                passwordInput.isValid === false
                  ? 'text-red-600 -translate-y-6 scale-75'
                  : passwordInput.value
                  ? 'text-blue-600 -translate-y-6 scale-75'
                  : 'text-gray-500 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0'
              }  duration-300 transform  top-1 -z-10 text-sm origin-[0] peer-focus:left-0  peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
              {passwordInput.isValid === false
                ? passwordInput.errorMessage
                : 'Password'}
            </label>
          </div>

          {/* confirm pass div */}
          <div className=' flex flex-col gap-1 group z-0 relative   '>
            <input
              type='password'
              name='confirmPassword'
              id='confirmPassword'
              class='block py-1 px-0 w-full text-sm focus:placeholder:invisible bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder={`${
                !confirmPasswordInput.value ? 'Confirm password' : ''
              }`}
              value={confirmPasswordInput.value}
              onChange={(event) => {
                setConfirmPasswordInput({
                  ...confirmPasswordInput,
                  value: event.target.value,
                });
              }}
            />
            <label
              for='confirmPassword'
              class={`peer-focus:font-medium absolute  text-base ${
                confirmPasswordInput.isValid === false
                  ? 'text-red-600 -translate-y-6 scale-75'
                  : confirmPasswordInput.value
                  ? 'text-blue-600 -translate-y-6 scale-75'
                  : 'text-gray-500 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0'
              }  duration-300 transform  top-1 -z-10 text-sm origin-[0] peer-focus:left-0  peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
              {confirmPasswordInput.isValid === false
                ? confirmPasswordInput.errorMessage
                : 'Confirm password'}
            </label>
          </div>

          <p className=' text-sm text-center flex gap-1  '>
            <p className='hidden md:inline'> Already have an account?</p>
            <span
              className='    underline text-blue-500 hover:text-blue-600 duration-300 cursor-pointer '
              onClick={() => props.setAuthState('login')}
            >
              Login now
            </span>
          </p>

          <button
            className=' text-secondary p-1 rounded-sm bg-blue-700 hover:bg-blue-800 text-white font-bold font-sans duration-300 text-base '
            onClick={validateUserInfo}
          >
            Sign up
          </button>
        </form>
      </div>
      {/* side picture div */}
      <div className=' w-[45%] hidden lg:inline'>
        <img
          src='/assets/clouds.jpeg'
          className='  h-[28rem]   rounded-r-lg  '
          alt=''
        />
      </div>
    </div>
  );
};

export default SignUp;
