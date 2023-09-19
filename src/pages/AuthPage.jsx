import React from 'react';

import SignIn from '../components/auth/SignIn';

import SignUp from '../components/auth/SignUp';

import { useState } from 'react';

const Auth = () => {
  const [authState, setAuthState] = useState('register'); // ['login', 'register']

  return (
    <section className='w-full min-h-screen relative flex flex-col justify-center items-center text-center'>
      {authState === 'login' ? (
        <SignIn setAuthState={setAuthState} />
      ) : (
        <SignUp setAuthState={setAuthState} />
      )}
    </section>
  );
};

export default Auth;
