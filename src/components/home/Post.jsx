import { MessageSquare } from "lucide-react";
import { Heart } from "lucide-react";
import { Repeat2 } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cmnt from "./Cmnt";

// import Comment from "/components/home/Comment.jsx";

function Post(props) {
  const [isLiked, setIsLiked] = useState(false);
  const [pressedComment, setPressedComment] = useState(false);
  const [commentContent, setCommentContent] = useState('');
  const [preCommentContent, setPreCommentContent] = useState('');
  var content = '';
  
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
  function manageComment() {
    setPressedComment(!pressedComment);
    return pressedComment;
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
        <div
          className={` flex text-secondary justify-around ${
            pressedComment ? !pressedComment : pressedComment
          }`}
        >
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
            <div
              className={`${
                isLiked ? "text-red-600 font-bold" : "text-content font-bold"
              } `}
            >
              {isLiked ? "Liked!" : "Like"}
            </div>
          </button>
          <button
            onClick={manageComment}
            className=" hover:text-blue-600  bg-transparent text-content flex items-center duration-300 gap-1"
          >
            <MessageSquare /> Comment
          </button>
          <button className=" hover:text-green-600 bg-transparent text-content flex items-center duration-300 gap-1">
            <Repeat2 />
           
          </button>
        </div>
        <div className={` flex   flex-col gap-3 text-secondary justify-around  ${
              pressedComment ? "" : "hidden"
            }`} >
          <div>
            <div className=" flex">
            <input
              type="text"
              className="w-full text-content bg-secondary rounded-br-none  rounded-2xl p-2 outline-none"
                placeholder="Write comment..."
                value={preCommentContent}
                onChange={(event) => {
                  setPreCommentContent(event.target.value);
                }}/>
              <button className="text-white font-bold bg-blue-700 px-5 rounded duration-300 "
                onClick={
                  () => { 
                    setCommentContent(preCommentContent)
                    setPreCommentContent('')
                  }
               }
              >
              Comment
            </button>

            </div>
          </div>
          <div>
            <Cmnt cmnt={commentContent} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Post;
