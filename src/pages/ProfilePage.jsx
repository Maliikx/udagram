import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../components/layout/SideBar";
import NavBar from "../components/layout/NavBar";
import RightSide from "../components/layout/RightSide";
import Post from "../components/home/Post";

const ProfilePage = () => {

  const { username } = useParams();
  const [posts, setPosts] = useState([]);
  const [bio, setBio] = useState([]);

  const [profilePosts, setProfilePosts] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser.username === username) {
      setProfilePosts(loggedInUser.posts);
    } else {
      const user = users.filter((user) => {
        return user.username === username;
      })[0];
      setProfilePosts(user.posts);
    }
  }, [username]);

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
      <section className="w-[80%] h-screen relative flex items-start justify-around">
        <SideBar />
        <div className="w-2/3 bg-secondary p-10 flex gap-6 flex-col items-center justify- h-[85vh] mt-[calc(56px+2.5rem)] rounded-3xl rounded-tl-none rounded-br-none">
          <div className="w-full flex-col items-center flex  justify-center border-b pb-3 ">
            <img
              src="/assets/cat.jpg"
              alt=""
              className=" rounded-full border-4 border-blue-700 w-24"
            />
            <h1 className=" text-2xl font-bold">{username}</h1>
          </div>
          <div className="rounded flex flex-col gap-6 w-full overflow-y-scroll no-scrollbar">
            {profilePosts.length === 0 ? (
        <div className="self-center font-bold">- Nothing to show -</div>
      ):(
            profilePosts
              .sort((a, b) => b.createdAt - a.createdAt)
              .map((post) => (
                <Post
                  post={post}
                  key={post.id}
                  setPosts={setPosts}
                  posts={posts}
                />
              )))}
          </div>
        </div>
        <RightSide />
      </section>
    </>
  );
};

export default ProfilePage;
