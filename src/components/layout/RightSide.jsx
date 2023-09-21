import { Heart, HomeIcon, Sun, User2Icon } from 'lucide-react';

function RightSide() {
  return (
    <nav className='flex w-[15%] h-[85%] ml-2 mt-[calc(56px+2.5rem)] bg-secondary justify-center items-center rounded-3xl rounded-tl-none rounded-br-none '>
      <h1>TBD</h1>
      {/* <ul className=' w-full flex-row 0'>
        <li className='m-7'>
          <HomeIcon className=' inline-block mr-2' />
          <button className='inline-block text-2xl align-middle '>home</button>
        </li>
        <li className='m-7'>
          <User2Icon className='inline-block mr-2' />
          <button className='text-2xl align-middle '>profile</button>
        </li>
        <li className='m-7'>
          <Heart className='inline-block mr-2' />
          <button className='text-2xl align-middle '>likes</button>
        </li>
        <li className='m-7'>
          <Sun className='inline-block mr-2' />
          <button className='text-2xl align-middle '>light mood</button>
        </li>
      </ul> */}
    </nav>
  );
}
export default RightSide;
