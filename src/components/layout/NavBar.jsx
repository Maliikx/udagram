import { Search } from 'lucide-react';

function NavBar() {
  return (
    <nav className='fixed h-14 flex bg-secondary w-full  z-50 justify-between mb-1'>
      <div className='flex pl-4 items-center'>
        <img src='/assets/logo-dark.png ' className='w-10 h-10' />
        <h1 className=' text-2xl select-none'>dagram</h1>
      </div>
      <div className='p-4 w-3/12 flex'>
        <Search className='absolute text-gray-400 ' />
        <input
          type='text'
          placeholder='Search...'
          className='w-full pl-7 py-[0.9rem] bg-transparent border-b   outline-none text-content '
        />
      </div>
      <button
        className='text-secondary
            h-8 m-4 w-40
             p-1 rounded-md bg-blue-700
              text-white font-bold font-sans 
              text-base duration-300
               hover:bg-blue-800 opacity-0'
      >
        Log Out
      </button>
    </nav>
  );
}
export default NavBar;
