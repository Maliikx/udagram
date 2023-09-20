import React from 'react';
import PostInput from '../components/home/PostInput';
import Posts from '../components/home/Posts';
import NavBar from '../components/layout/NavBar';
import SideBar from '../components/layout/SideBar';

const HomePage = () => {
  return (
    <section className='w-full min-h-screen relative flex flex-col items-center'>
      <NavBar />
      <div className='w-1/3 flex gap-6 flex-col items-center justify-center h-screen'>
        <PostInput />
        <Posts />
      </div>
      <SideBar />
    </section>
  );
};

export default HomePage;
