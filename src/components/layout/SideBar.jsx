import { Heart, HomeIcon, Sun, User2Icon, PlusSquare } from 'lucide-react';
import { useEffect, useState } from 'react';

function SideBar() {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (localStorage.getItem('loggedInUser'))
      setUser(JSON.parse(localStorage.getItem('loggedInUser')));
  }, []);

  return (
    <nav className='flex flex-col justify-between w-[15%] h-[85%] ml-2 mt-[calc(56px+2.5rem)] p-6 text-white bg-blue-700 rounded-3xl rounded-tr-none rounded-bl-none '>
      <ul className='w-full flex h-1/2  flex-col justify-around'>
        <li className='flex items-center border-b py-5  hover:scale-105 duration-300'>
          <HomeIcon className=' inline-block mr-2' size={36} />
          <button className='inline-block text-2xl align-middle '>Home</button>
        </li>
        <li className='flex items-center border-b py-5 hover:scale-105 duration-300'>
          <User2Icon className='inline-block mr-2' size={36} />
          <button className='text-2xl align-middle '>Profile</button>
        </li>
        <li className='flex items-center border-b py-5 hover:scale-105 duration-300'>
          <Heart className='inline-block mr-2' size={36} />
          <button className='text-2xl align-middle '>Likes</button>
        </li>
        <li className='flex items-center border-b py-5 hover:scale-105 duration-300'>
          <PlusSquare className='inline-block mr-2' size={36} />
          <button className='text-2xl align-middle '>Post</button>
        </li>
        <li className='flex items-center border-b py-5 hover:scale-105 duration-300'>
          <Sun className='inline-block mr-2' size={36} />
          <button className='text-2xl align-middle '>Light mode</button>
        </li>
      </ul>
      <div className='flex items-center gap-3'>
        <img
          src='/assets/cat.jpg'
          alt=''
          className='w-12 h-12 rounded-full  border border-x-2'
        />
        <h1 className='text-xl font-bold capitalize'>
          {user.username ? user.username : 'User'}
        </h1>
      </div>
    </nav>
  );
}
export default SideBar;