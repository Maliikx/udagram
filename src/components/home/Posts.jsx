import React from "react";
import Post from "./Post";
import { Heading1 } from "lucide-react";

const Posts = (props) => {
  const posts = [
    {
      id: 1,
      user: "omar sand",
      content: "this is user1's post",
    },
    {
      id: 2,
      user: "mohamed ahmed",
      content: "this is user2's post",
    },
    {
      id: 3,
      user: "ashrf mohamed",
      content: "this is user3's post",
    },
  ];
  return (
    <>
      <div className=" flex flex-col gap-7  ">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </>
  );
};

export default Posts;
