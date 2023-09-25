import { Search } from 'lucide-react';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/context/themeContext';

function NavBar() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <nav className='fixed h-14 flex bg-secondary w-full  z-50 justify-center mb-1'>
      <div className='w-[80%] flex justify-between '>
        <div className='flex pl-4 items-center'>
          <img
            src={`/assets/logo-${isDarkMode ? 'dark' : 'light'}.png `}
            className='w-10 h-10'
          />
          <h1 className='  text-2xl select-none'>dagram</h1>
        </div>
        <div className='p-4 w-3/12 flex'>
          <Search className=' hidden lg:inline absolute text-gray-400 ' />
          <input
            type='text'
            placeholder='Search...'
            className=' hidden lg:inline  w-full pl-7 py-[0.9rem] bg-transparent border-b   outline-none text-content '
          />
        </div>
        <button
          className=' text-secondary
            h-8 m-4 w-40
             p-1 rounded-md bg-blue-700
              text-white font-bold font-sans 
              text-base duration-300
               hover:bg-blue-800 opacity-0'
        >
          Log Out
        </button>
      </div>
    </nav>
  );
}
export default NavBar;
