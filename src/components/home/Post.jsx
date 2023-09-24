import { MessageSquare } from "lucide-react";
import { Heart } from "lucide-react";
import { Repeat2 } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Post(props) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  // const [loggedInUser, setLoggedInUser] = useState([]);

  const users = JSON.parse(localStorage.getItem("users"));
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const loggedInUserIndex = users.findIndex(
    (user) => user.id === loggedInUser.id
  );

  const currentPost = props.posts.filter(
    (post) => post.id === props.post.id
  )[0];

  useEffect(() => {
    if (!currentPost) return;
    console.log(currentPost);
    console.log(loggedInUser.likes);
    const x = loggedInUser.likes.reduce((a, b) => {
      return a || b["id"] == currentPost["id"];
    }, false);
    if (x) setIsLiked(true);
  }, []);

  function manageLike() {
    if (!isLiked) {
      loggedInUser.likes.push(currentPost);
      users[loggedInUserIndex].likes.push(currentPost);
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      localStorage.setItem("users", JSON.stringify(users));
      console.log(users[loggedInUserIndex]);
    } else {
      loggedInUser.likes.pull(currentPost);
    }
  }

  return (
    <>
      {/* post div */}
      <div className="  w-full bg-accent rounded-tl-none rounded-br-none rounded-3xl px-5 py-4 text-lg flex flex-col gap-6 ">
        {/* user info div */}
        <div className="text-content flex gap-1 items-center ">
          <img
            src="/assets/cat.jpg"
            alt=""
            className="w-10 h-10 rounded-full rounded-tl-none border border-blue-700 border-x-2"
          />
          <h1 className="text-xl capitalize hover:underline">
            <Link to={`/profile/${props.post.user.username}`}>
              <b>{props.post.user.username}</b>
            </Link>
          </h1>
        </div>
        {/* content */}
        <div> {props.post.content}</div>
        {/* buttons div */}
        <hr />
        <div className=" flex text-secondary justify-around">
          <button
            onClick={() => {
              setIsLiked(!isLiked);
              manageLike();
            }}
            className=" hover:text-red-600 bg-transparent text-content flex items-center duration-300 gap-1"
          >
            <Heart
              className={`${isLiked ? "fill-red-600 text-red-600" : ""} `}
              fill="transparent"
            />
            <div className="">{props.post.likeCount}</div>
          </button>
          <button className=" hover:text-blue-600  bg-transparent text-content flex items-center duration-300 gap-1">
            <MessageSquare /> 22
          </button>
          <button className=" hover:text-green-600 bg-transparent text-content flex items-center duration-300 gap-1">
            <Repeat2 />
            21
          </button>
        </div>
      </div>
    </>
  );
}
export default Post;
