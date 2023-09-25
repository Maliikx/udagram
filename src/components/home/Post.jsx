import { MessageSquare } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Repeat2 } from 'lucide-react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Cmnt from './Cmnt';

// import Comment from "/components/home/Comment.jsx";

function Post(props) {
  const [isLiked, setIsLiked] = useState(false);
  const [pressedComment, setPressedComment] = useState(false);
  const [commentContent, setCommentContent] = useState({
    user: {},
    content: '',
  });
  const [preCommentContent, setPreCommentContent] = useState('');

  // const [loggedInUser, setLoggedInUser] = useState([]);

  const users = JSON.parse(localStorage.getItem('users'));
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const loggedInUserIndex = users.findIndex(
    (user) => user.id === loggedInUser.id
  );

  const currentPost = props.posts.filter(
    (post) => post.id === props.post.id
  )[0];

  useEffect(() => {
    if (!currentPost) return;

    const x = loggedInUser.likes.reduce((a, b) => {
      return a || b['id'] == currentPost['id'];
    }, false);
    if (x) setIsLiked(true);
  }, []);

  function manageLike() {
    if (!isLiked) {
      loggedInUser.likes.push(currentPost);
      users[loggedInUserIndex].likes.push(currentPost);
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
      localStorage.setItem('users', JSON.stringify(users));
      console.log('liked');
      console.log(loggedInUser.likes);
    } else {
      console.log('unliked');
      loggedInUser.likes = loggedInUser.likes.filter(
        (post) => post.id !== currentPost.id
      );
      users[loggedInUserIndex].likes = users[loggedInUserIndex].likes.filter(
        (post) => post.id !== currentPost.id
      );
      console.log(loggedInUser.likes);
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
      localStorage.setItem('users', JSON.stringify(users));
    }
  }
  function manageComment() {
    setPressedComment(!pressedComment);
    return pressedComment;
  }

  return (
    <>
      {/* post div */}
      <motion.div
        transition={{ duration: 0.4, delay: 0.1 }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className='  w-full bg-accent rounded-tl-none rounded-br-none rounded-3xl px-5 py-4 text-lg flex flex-col gap-6 '
      >
        {/* user info div */}
        <div className='text-content flex gap-1 items-center '>
          <img
            src='/assets/cat.jpg'
            alt=''
            className='w-10 h-10 rounded-full rounded-tl-none border border-blue-700 border-x-2'
          />
          <h1 className='text-xl capitalize hover:underline'>
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
            className=' hover:text-red-600 bg-transparent text-content flex items-center duration-300 gap-1'
          >
            <Heart
              className={`${isLiked ? 'fill-red-600 text-red-600' : ''} `}
              fill='transparent'
            />
            <div
              className={`hover:text-red-600 hidden lg:inline  ${
                isLiked ? 'text-red-600 ' : 'text-content '
              }font-semibold `}
            >
              {isLiked ? 'Liked!' : 'Like'}
            </div>
          </button>
          <button
            onClick={manageComment}
            className=' hover:text-blue-600  bg-transparent text-content font-semibold flex items-center duration-300 gap-1'
          >
            <MessageSquare />
            <span className='hidden lg:inline'> comment</span>
          </button>
          <button className=' hover:text-green-600 bg-transparent text-content font-semibold flex items-center duration-300 gap-1'>
            <Repeat2 /> 
            <span className='hidden lg:inline'> Repost</span>
          </button>
        </div>
        <div
          className={` flex   flex-col gap-3 text-secondary justify-around  ${
            pressedComment ? '' : 'hidden'
          }`}
        >
          <div>
            <div className=' flex bg-secondary p-2.5  rounded-2xl'>
              <input
                type='text'
                className='w-full text-content bg-secondary rounded-2xl  outline-none'
                placeholder='Write comment...'
                value={preCommentContent}
                onChange={(event) => {
                  setPreCommentContent(event.target.value);
                }}
              />
              <button
                className='text-white font-bold bg-blue-700 px-2 text-sm rounded-[0.50rem] rounded-r-[0.50rem] duration-300 '
                onClick={() => {
                  setCommentContent(preCommentContent);
                  setPreCommentContent('');
                }}
              >
               <span className='hidden lg:inline'> Reply</span> 
              </button>
            </div>
          </div>
          <div>{/* <Cmnt cmnt={commentContent} /> */}</div>
        </div>
      </motion.div>
    </>
  );
}
export default Post;
