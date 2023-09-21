import { Image } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const PostInput = (props) => {
  const[postContent , setPostContent] = useState('')
  const [loggedInUser, setLoggedInUser] = useState()

  useEffect(()=>{
    setLoggedInUser(JSON.parse(localStorage.getItem("loggedInUser")))
  },[])

  function createPost(){
props.setPosts((prevPosts)=> [...prevPosts, {
  id: prevPosts.length + 1,
  content: postContent,
  user: loggedInUser,
  comments: [],
  sharedUserIds: [],
  createdAt: Date.now()
}])
  }
  return (
    <div className='bg-accent p-3 border-blue-700 border-x-2 rounded-tl-none rounded-br-none rounded-3xl text-content w-full flex flex-col gap-10'>
      <div className='flex gap-2 items-center'>
        <img src='/assets/cat.jpg' alt='' className='w-12 h-12 rounded-full' />
        <input onChange={(event)=>{
          setPostContent(event.target.value)
        }}
          type='text'
          className='bg-transparent outline-none w-full '
          placeholder='Type some text...'
        />
      </div>
      <div className='flex justify-between'>
        <button className='bg-accent p-2 rounded duration-300 flex items-center gap-1 hover:bg-primary'>
          <Image className='text-content' />
          <span>Upload an image</span>
        </button>
        <button onClick={createPost}
        className='text-white font-bold bg-blue-700 px-5 rounded duration-300 '>
          Post
        </button>
      </div>
    </div>
  );
};

export default PostInput;
