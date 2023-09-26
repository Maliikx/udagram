import React from "react";

const Cmnt = (props) => {
  return (
    <div className="text-content w-full bg-secondary flex flex-col gap-1 rounded-br-none  p-2  rounded-xl  outline-none">
     <div className='flex items-center gap-2'>
            <img
              src='/assets/cat.jpg'
              alt=''
              className='w-7 h-7 rounded-full rounded-tl-none border border-blue-700 border-x-2'
            />
        <h1 className=' text-sm lg:text-base font-semibold capitalize hover:underline'>
        {props.cmnt.user.username}
            </h1>
      </div>
      <span className="text-xs  lg:text-base pl-9">{props.cmnt.content}</span>
    </div>
  );
};

export default Cmnt;
