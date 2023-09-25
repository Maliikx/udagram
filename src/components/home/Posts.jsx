import React, { useEffect, useState } from "react";
import Post from "./Post";
import PostInput from "./PostInput";
import useIsMount from "../../utils/hooks/useMount";


const Posts = () => {
  const [posts, setPosts] = useState([]);
  const isMount = useIsMount();

  useEffect(() => {
    if (isMount) return;
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    if (!localStorage.getItem("posts")) {
      localStorage.setItem("posts", JSON.stringify([]));
    } else {
      setPosts(JSON.parse(localStorage.getItem("posts")));
    }
  }, []);

  return (
    <div className=" rounded flex flex-col gap-6 w-full overflow-y-scroll no-scrollbar ">
      <PostInput setPosts={setPosts} posts={posts} />
      {posts.length === 0 ? (
        <div className="self-center font-bold">- Nothing to show -</div>
      ) : (
        posts
          .sort((a, b) => b.createdAt - a.createdAt)
          .map((post) => (
            <Post post={post} key={post.id} setPosts={setPosts} posts={posts} />
          ))
      )}
    </div>
  );
};

export default Posts;
