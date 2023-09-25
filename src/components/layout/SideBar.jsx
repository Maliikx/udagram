import {
  Heart,
  HomeIcon,
  Sun,
  User2Icon,
  PlusSquare,
  Router,
  LogOut,
  Moon,
} from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../utils/themeContext";

function SideBar() {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (localStorage.getItem("loggedInUser"))
      setUser(JSON.parse(localStorage.getItem("loggedInUser")));
  }, []);

  function logout() {
    navigate("/");
    localStorage.removeItem("loggedInUser");
  }

  return (
    <>
    <nav className=" hidden  md:flex flex-col justify-between w-[30%] h-[85%] mr-2 mt-[calc(56px+2.5rem)] p-6 text-white bg-blue-700 rounded-3xl rounded-tr-none rounded-bl-none ">
      <ul className="w-full flex h-1/2  flex-col justify-around">
          <Link to="/home" className="text-2xl align-middle ">
        <li className="flex items-center border-b py-5  hover:scale-105 duration-300">
          <HomeIcon className=" inline-block mr-2" size={36} />
            Home
        </li>
          </Link>
          <Link
            to={`/profile/${user.username}`}
            className="text-2xl align-middle "
          >
        <li className="flex items-center border-b py-5 hover:scale-105 duration-300">
          <User2Icon className="inline-block mr-2" size={36} />
            Profile
        </li>
          </Link>
          <Link to="/likes">
        <li className="flex items-center border-b py-5 hover:scale-105 duration-300">

          <Heart className="inline-block mr-2" size={36} />
          <button className="text-2xl align-middle ">Likes</button>
    
        </li>
        
        </Link>
        <li className="flex items-center border-b py-5 hover:scale-105 duration-300">
          <PlusSquare className="inline-block mr-2" size={36} />
          <button className="text-2xl align-middle ">Post</button>
        </li>
        <li className="flex items-center border-b py-5 hover:scale-105 duration-300">
          {isDarkMode? <Sun className="inline-block mr-2" size={36} /> : <Moon className="inline-block mr-2" size={36} />}
          
          <button className="text-2xl align-middle " onClick={toggleDarkMode}>
           {isDarkMode?'Light mode':'Dark mode'}
          </button>
        </li>
      </ul>
      <div className="flex items-center gap-3 justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/assets/cat.jpg"
            alt=""
            className="w-12 h-12 rounded-full  border border-x-2"
          />
          <h1 className="text-lg font-bold capitalize">
            {user.username ? user.username : "User"}
          </h1>
        </div>

        <button onClick={logout}>
          <LogOut />
        </button>
      </div>
    </nav>
    <nav className="  flex  md:hidden fixed bottom-0 flex-row justify-between w-full h-16 mr-2  p-6 text-white bg-blue-700 rounded-3xl rounded-tr-none rounded-bl-none ">
      <ul className="w-full flex h-1/2  flex-row justify-around">
        <li className="flex items-center border-b py-5  hover:scale-105 duration-300">
          <Link to="/home" className=" text-2xl align-middle ">
          <HomeIcon className=" inline-block mr-2" size={36} />
          <span className="hidden lg:inline ">Home</span>  
          </Link>
        </li>
        <li className="flex items-center border-b py-5 hover:scale-105 duration-300">
          
          <Link
            to={`/profile/${user.username}`}
            className= " text-2xl align-middle "
          >
            <User2Icon className="inline-block mr-2" size={36} />
              <span className="hidden lg:inline ">profile</span> 
          </Link>
        </li>
     
        <li className="flex items-center border-b py-5 hover:scale-105 duration-300">
        <Link to="/likes">
          <Heart className=" inline-block mr-2" size={36} />
          </Link>

          <button className=" text-2xl align-middle ">
            
          <span className="hidden lg:inline ">Likes</span> 
            </button>
        </li>
        <li className="flex items-center border-b py-5 hover:scale-105 duration-300">
          <PlusSquare className="inline-block mr-2" size={36} />
          <button className=" text-2xl align-middle ">
          <span className="hidden lg:inline ">Post</span> 
            </button>
        </li>
        <li  onClick={toggleDarkMode} className="flex items-center border-b py-5 hover:scale-105 duration-300">
          {isDarkMode? <Sun className="inline-block mr-2" size={36} /> : <Moon className="inline-block mr-2" size={36} />}
          
          <button className="hidden lg:inline text-2xl align-middle "
          >
           {isDarkMode?'Light mode':'Dark mode'}
          </button>
        </li>
      </ul>
      <div className=" align-middle flex items-center gap-3  justify-between">
        <div className="flex items-center gap-3 ">
          <img
            src="/assets/cat.jpg"
            alt=""
            className="hidden lg:inline w-12 h-12 rounded-full  border border-x-2"
          />
          <h1 className="hidden lg:inline text-lg font-bold capitalize">
            {user.username ? user.username : "User"}
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
