import React from 'react';
import Post from '../components/home/Post';
import PostInput from '../components/home/PostInput';
import Posts from '../components/home/Posts';

const HomePage = () => {
  return (
    <div className='w-1/3 flex gap-6 flex-col items-center justify-center h-screen'>
      <PostInput />
      <Posts />
    </div>
  );
};

export default HomePage;
