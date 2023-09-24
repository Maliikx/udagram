import { Image } from "lucide-react";
import { useEffect, useState } from "react";
import useIsMount from "../../utils/hooks/useMount";


const PostInput = (props) => {
  const [postContent, setPostContent] = useState("");
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState();

  const isMount = useIsMount();

  useEffect(() => {
    setLoggedInUser(JSON.parse(localStorage.getItem("loggedInUser")));
    setUsers(JSON.parse(localStorage.getItem("users")));
  }, []);

  function createPost() {
    if (!postContent) {
      return;
    }
    props.setPosts((prevPosts) => [
      ...prevPosts,
      {
        id: prevPosts.length + 1,
        content: postContent,
        user: loggedInUser,
        likeCount: 0,

        comments: [],
        sharedUserIds: [],
        createdAt: Date.now(),
      },
    ]);
    setPostContent("");
    setLoggedInUser((prevUser) => ({
      ...prevUser,
      posts: [
        ...prevUser.posts,
        {
          id: prevUser.posts.length + 1,
          content: postContent,
          user: loggedInUser,
          likeCount: 0,
          comments: [],
          sharedUserIds: [],
          createdAt: Date.now(),
        },
      ],
    }));

    setUsers((prevUsers) => {
      const userIndex = prevUsers.findIndex(
        (user) => user.id === loggedInUser.id
      );
      const updatedUsers = [...prevUsers];
      updatedUsers[userIndex] = {
        ...updatedUsers[userIndex],
        posts: [
          ...updatedUsers[userIndex].posts,
          {
            id: updatedUsers[userIndex].posts.length + 1,
            content: postContent,
            user: loggedInUser,
            likeCount: 0,
            comments: [],
            sharedUserIds: [],
            createdAt: Date.now(),
          },
        ],
      };
      return updatedUsers;
    });
  }

  useEffect(() => {
    if (isMount) return;
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    localStorage.setItem("users", JSON.stringify(users));
  }, [createPost]);

  return (
    <div className="bg-accent p-3 border-blue-700 border-x-2 rounded-tl-none rounded-br-none rounded-3xl text-content w-full flex flex-col gap-10">
      <div className="flex gap-2 items-center">
        <img src="/assets/cat.jpg" alt="" className="w-12 h-12 rounded-full" />
        <input
          onChange={(event) => {
            setPostContent(event.target.value);
          }}
          type="text"
          value={postContent}
          className="bg-transparent outline-none w-full "
          placeholder="Type some text..."
        />
      </div>
      <div className="flex justify-between">
        <button className="bg-accent p-2 rounded duration-300 flex items-center gap-1 hover:bg-primary">
          <Image className="text-content" />
          <span>Upload an image</span>
        </button>
        <button
          onClick={createPost}
          className="text-white font-bold bg-blue-700 px-5 rounded duration-300 "
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default PostInput;
