import React from "react";

const PostInput = () => {
  return (
    <div className="bg-white p-3 rounded-2xl  text-black w-full flex flex-col gap-10">
      <div className="flex gap-2 items-center">
        <img src="/assets/cat.jpg" alt="" className="w-12 h-12 rounded-full" />
        <input
          type="text"
          className="bg-transparent outline-none "
          placeholder="Type some text..."
        />
      </div>
      <div className="flex justify-between">
        <button className="bg-green-400 p-2 rounded-3xl">Upload a photo</button>
        <button className="bg-blue-400 p-2 rounded-3xl ">Post</button>
      </div>
    </div>
  );
};

export default PostInput;
