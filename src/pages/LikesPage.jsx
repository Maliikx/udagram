import React from "react";
import { Heart } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../components/layout/SideBar";
import NavBar from "../components/layout/NavBar";
import RightSide from "../components/layout/RightSide";
import Post from "../components/home/Post";


const LikesPage = () => {
  const [posts, setPosts] = useState([]);

  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  setLikedPosts(loggedInUser.likes);

  }, []);

  useEffect(() => {
    if (!localStorage.getItem("posts")) {
      localStorage.setItem("posts", JSON.stringify([]));
    } else {
      setPosts(JSON.parse(localStorage.getItem("posts")));
    }
  }, []);
  
  return (
    <>
      <NavBar />
      <section className=" w-full lg:w-[80%] h-screen relative flex items-start justify-around">
        <SideBar />
        <div className=" w-full lg:w-[80%]  w-2/3 bg-secondary p-10 flex gap-6 flex-col items-center justify- h-[85vh] mt-[calc(56px+2.5rem)] rounded-3xl rounded-tl-none rounded-br-none">
          <div className="w-full flex-col items-center flex  justify-center border-b pb-3 ">
            {/* <img
              src="/assets/cat.jpg"
              alt=""
              className=" rounded-full border-4 border-blue-700 w-24"
            /> */}
           <div className="border-[5px] p-3 rounded-full border-content opacity-40">
           <Heart
              className=" text-"
              fill="white"
              size={80}
              
            />
           </div>
            <h1 className=" font-bold text-2xl text-content opacity-40">
              <span className="hidden lg:inline">Liked posts!</span>
            </h1>
          </div>
          <div className="rounded flex flex-col gap-6 w-full overflow-y-scroll no-scrollbar">
            {likedPosts
              .sort((a, b) => b.createdAt - a.createdAt)
              .map((post) => (
                <Post
                  post={post}
                  key={post.id}
                  setPosts={setPosts}
                  posts={posts}
                />
              ))}
          </div>
        </div>
        <RightSide />
      </section>
    </>
  );
};

export default LikesPage;
