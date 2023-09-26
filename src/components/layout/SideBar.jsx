import {
  Heart,
  HomeIcon,
  Sun,
  User2Icon,
  PlusSquare,
  Router,
  LogOut,
  Moon,
  
} from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../utils/context/themeContext';
import Timer from '../Timer';



function SideBar() {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  const { isDarkMode, toggleDarkMode, focusPostInput } =
    useContext(ThemeContext);

  useEffect(() => {
    if (localStorage.getItem('loggedInUser'))
      setUser(JSON.parse(localStorage.getItem('loggedInUser')));
  }, []);

  function logout() {
    navigate('/');
    localStorage.removeItem('loggedInUser');
  }

  return (
    <>
      <nav className=' hidden  lg:flex flex-col justify-between w-[30%] h-[85%] mr-2 mt-[calc(56px+2.5rem)] p-6 text-white bg-blue-700 rounded-3xl rounded-tr-none rounded-br-none '>
        <ul className='w-full flex h-1/2 text-lg xl:text-2xl flex-col justify-around'>
          <Link to='/home' className=' align-middle '>
            <li className='flex items-center border-b py-5  hover:scale-105 duration-300'>
              <HomeIcon className=' inline-block mr-2' size={36} />
              Home
            </li>
          </Link>
          <Link to={`/profile/${user.username}`} className=' align-middle '>
            <li className='flex items-center border-b py-5 hover:scale-105 duration-300'>
              <User2Icon className='inline-block mr-2' size={36} />
              Profile
            </li>
          </Link>
          <Link to='/likes'>
            <li className='flex items-center border-b py-5 hover:scale-105 duration-300'>
              <Heart className='inline-block mr-2' size={36} />
              <button className=' align-middle '>Likes</button>
            </li>
          </Link>
          <li className='flex items-center border-b py-5 hover:scale-105 duration-300'>
            <PlusSquare className='inline-block mr-2' size={36} />
            <button
              className='text-2xl align-middle '
              onClick={() => focusPostInput()}
            >
              Post
            </button>
          </li>
          <button className=' align-middle ' onClick={toggleDarkMode}>
            <li className='flex items-center border-b py-5 hover:scale-105 duration-300'>
              {isDarkMode ? (
                <Sun className='inline-block mr-2' size={36} />
              ) : (
                <Moon className='inline-block mr-2' size={36} />
              )}

              {isDarkMode ? 'Light mode' : 'Dark mode'}
            </li>
          </button>
          <li className='flex flex-col items-center border-b py-5 hover:scale-105 duration-300'>
            <h1>your max is 2 hours</h1> 
            <Timer/>
          </li>
        </ul>
        <div className='flex items-center gap-3 justify-between'>
          <div className='flex items-center gap-3'>
            <img
              src='/assets/cat.jpg'
              alt=''
              className='w-12 h-12 rounded-full  border border-x-2'
            />
            <h1 className='text-lg font-bold capitalize'>
              {user.username ? user.username : 'User'}
            </h1>
          </div>

          <button onClick={logout}>
            <LogOut />
          </button>
        </div>
      </nav>
      <nav className='  flex  lg:hidden  fixed bottom-0 flex-row justify-between w-full  h-14  p-4 text-white bg-blue-700 rounded-xl rounded-br-none rounded-bl-none '>
        <ul className='w-full flex h-1/2  flex-row justify-around'>
          <li className='flex items-center  py-3  hover:scale-105 duration-300'>
            <Link to='/home'>
              <HomeIcon className=' inline-block ' size={26} />
              <span className='hidden lg:inline '>Home</span>
            </Link>
          </li>
          <li className='flex items-center py-3 hover:scale-105 duration-300'>
            <Link to={`/profile/${user.username}`}>
              <User2Icon className='inline-block ' size={26} />
              <span className='hidden lg:inline '>profile</span>
            </Link>
          </li>

          <li
            className='flex items-center  py-3 hover:scale-105 duration-300'
            onClick={() => focusPostInput()}
          >
            <PlusSquare className='inline-block cursor-pointer ' size={26} />
            <button
              className=' text-2xl align-middle '
              onClick={() => focusPostInput()}
            >
              <span className='hidden lg:inline '>Post</span>
            </button>
          </li>
          <li className='flex items-center  py-3 hover:scale-105 duration-300'>
            <Link to='/likes'>
              <Heart className=' inline-block ' size={26} />
            </Link>

            <button className=' text-2xl align-middle '>
              <span className='hidden lg:inline '>Likes</span>
            </button>
          </li>
          <li
            onClick={toggleDarkMode}
            className='flex items-center  py-3 hover:scale-105 duration-300'
          >
            {isDarkMode ? (
              <Sun className='inline-block ' size={26} />
            ) : (
              <Moon className='inline-block ' size={26} />
            )}

            <button className='hidden lg:inline text-2xl align-middle '>
              {isDarkMode ? 'Light mode' : 'Dark mode'}
            </button>
          </li>
          
        </ul>
        <div className=' align-middle flex items-center gap-3  justify-between'>
          <div className='flex items-center gap-3 '>
            <img
              src='/assets/cat.jpg'
              alt=''
              className='hidden lg:inline w-12 h-12 rounded-full  border border-x-2'
            />
            <h1 className='hidden lg:inline text-lg font-bold capitalize'>
              {user.username ? user.username : 'User'}
              
            </h1>
          </div>

          <button onClick={logout}>
            <LogOut />
          </button>

        </div>
      
      </nav>
    </>
  );
}
export default SideBar;
