import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import Post from "../components/home/Post";

const ProfilePage = () => {
  const { username } = useParams();

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
  }, []);

  return (
    <div>
      <div>
        <img src="" alt="" />
        <h1>ohhhh</h1>
      </div>
      <div>
        {profilePosts
          .sort((a, b) => b.createdAt - a.createdAt)
          .map((post) => (
            <Post post={post} key={post.id} />
          ))}
      </div>
    </div>
  );
};

export default ProfilePage;
