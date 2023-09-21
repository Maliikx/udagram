import { Image } from 'lucide-react';
import React from 'react';

const PostInput = () => {
  return (
    <div className='bg-accent p-3 border-blue-700 border-x-2 rounded-tl-none rounded-br-none rounded-3xl text-content w-full flex flex-col gap-10'>
      <div className='flex gap-2 items-center'>
        <img src='/assets/cat.jpg' alt='' className='w-12 h-12 rounded-full' />
        <input
          type='text'
          className='bg-transparent outline-none '
          placeholder='Type some text...'
        />
      </div>
      <div className='flex justify-between'>
        <button className='bg-accent p-2 rounded duration-300 flex items-center gap-1 hover:bg-primary'>
          <Image className='text-content' />
          <span>Upload an image</span>
        </button>
        <button className='text-white font-bold bg-blue-700 px-5 rounded duration-300 '>
          Post
        </button>
      </div>
    </div>
  );
};

export default PostInput;
