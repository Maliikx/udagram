import { Search } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../../utils/context/themeContext";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function NavBar() {
  const { isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  useEffect(() => {
    if (localStorage.getItem("loggedInUser"))
      setUser(JSON.parse(localStorage.getItem("loggedInUser")));
  }, []);
  function logout() {
    navigate("/");
    localStorage.removeItem("loggedInUser");
  }
  return (
    <nav className="fixed h-14 flex bg-secondary w-full  z-50 justify-center mb-1">
      <div className="w-[90%] lg:w-[80%] flex  justify-between ">
        <div className="flex pl-0 lg:pl-4  items-center">
          <img
            src={`/assets/logo-${isDarkMode ? "dark" : "light"}.png `}
            className="w-10 h-10"
          />
          <h1 className="  text-2xl select-none">dagram</h1>
        </div>
        <div className="p-4 w-3/12 flex">
          <Search className=" hidden  absolute text-gray-400 " />
          <input
            type="text"
            placeholder="Search..."
            className=" hidden   w-full pl-7 py-[0.9rem] bg-transparent border-b   outline-none text-content "
          />
        </div>
          <div className= "  flex items-center gap-5  lg:hidden">
            
        <button onClick={logout}>
          <LogOut />
        </button>
          </div>

        <button
          className=" hidden lg:inline cursor-default text-secondary
            h-8 m-4 w-40
             p-1 rounded-md bg-blue-700
              text-white font-bold font-sans 
              text-base duration-300
               hover:bg-blue-800 opacity-0  "
        >
          Log Out
        </button>
      </div>
    </nav>
  );
}
export default NavBar;
