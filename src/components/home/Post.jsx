import { MessageSquare } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Repeat2 } from 'lucide-react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Cmnt from './Cmnt';
import toast from 'react-hot-toast';

// import Comment from "/components/home/Comment.jsx";

function Post(props) {
  const [isLiked, setIsLiked] = useState(false);
  const [pressedComment, setPressedComment] = useState(false);

  const [commentContent, setCommentContent] = useState({
    user: {},
    content: '',
  });
  const [preCommentContent, setPreCommentContent] = useState('');
  const [comments, setComments] = useState([]);
  // useEffect(,[])

  // const [loggedInUser, setLoggedInUser] = useState([]);

  const users = JSON.parse(localStorage.getItem('users'));
  let posts = JSON.parse(localStorage.getItem('posts'));
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const loggedInUserIndex = users.findIndex(
    (user) => user.id === loggedInUser.id
  );

  const currentPost = props.posts.filter(
    (post) => post.id === props.post.id
  )[0];

  useEffect(() => {
    setComments(currentPost.comments);
    if (!currentPost) return;

    const isPostLiked = loggedInUser.likes.reduce((a, b) => {
      return a || b == currentPost['id'];
    }, false);
    if (isPostLiked) setIsLiked(true);
  }, []);

  function manageLike() {
    if (!isLiked) {
      loggedInUser.likes.push(currentPost.id);
      users[loggedInUserIndex].likes.push(currentPost.id);
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
      localStorage.setItem('users', JSON.stringify(users));
    } else {
      loggedInUser.likes = loggedInUser.likes.filter(
        (postId) => postId !== currentPost.id
      );
      users[loggedInUserIndex].likes = users[loggedInUserIndex].likes.filter(
        (postId) => postId.id !== currentPost.id
      );
      props.setLikedPosts((prevLikes) =>
        prevLikes.filter((post) => post.id !== currentPost.id)
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

  function manageRepost() {
    if (loggedInUser.postIds.includes(currentPost.id)) {
      toast.error('Already reposted');
      return;
    }
    if (currentPost.user.id === loggedInUser.id) {
      toast.error('Cannot repost your own post');
      return;
    } else {
      toast.success('Reposted');
      loggedInUser.postIds.push(currentPost.id);
      users[loggedInUserIndex].postIds.push(currentPost.id);
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
      localStorage.setItem('users', JSON.stringify(users));
    }
  }

  return (
    <>
      {/* post div */}
      <motion.div
        transition={{ duration: 0.4, delay: 0.1 }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className='  text-base lg:text-lg w-full bg-accent rounded-tl-none rounded-br-none rounded-3xl px-5 py-4  flex flex-col gap-6  '
      >
        {/* user info div */}
        <div className='text-content flex  items-center  relative justify-between '>
          <div className='flex items-center gap-2'>
            <img
              src='/assets/cat.jpg'
              alt=''
              className='w-10 h-10 rounded-full rounded-tl-none border border-blue-700 border-x-2'
            />
            <h1 className=' text-lg lg:text-xl capitalize hover:underline'>
              <Link to={`/profile/${props.post.user.username}`}>
                <b>{props.post.user.username} </b>
              </Link>
            </h1>
          </div>
          {props.post.user.bio && (
            <span className=' text-sm italic bg-blue-700 rounded-lg rounded-tl-none rounded-br-none p-1  text-white'>
              {props.post.user.bio}
            </span>
          )}
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
            className=' hover:text-red-600 group bg-transparent text-content flex items-center duration-300 gap-1'
          >
            <Heart
              className={`${isLiked ? 'fill-red-600 text-red-600' : ''} `}
              fill='transparent'
            />
            <div
              className={`group-hover:text-red-600 hidden lg:inline duration-300 ${
                isLiked ? 'text-red-600 ' : 'text-content '
              } font-semibold `}
            >
              {isLiked ? 'Liked!' : 'Like'}
            </div>
          </button>
          <button
            onClick={manageComment}
            className=' hover:text-blue-600  bg-transparent text-content font-semibold flex items-center duration-300 gap-1'
          >
            <MessageSquare />
            <span className='hidden lg:inline'>Comment</span>
          </button>
          <button
            onClick={() => {
              manageRepost();
            }}
            className=' hover:text-green-600 bg-transparent text-content font-semibold flex items-center duration-300 gap-1'
          >
            <Repeat2 />
            <span className='hidden lg:inline'>Repost</span>
          </button>
        </div>
        <motion.div
          animate={pressedComment ? 'open' : 'closed'}
          className={` flex flex-col gap-3 text-secondary justify-around  ${
            pressedComment ? '' : 'hidden'
          }`}
          transition={{ type: 'keyframes', stiffness: 150, bounce: 1 }}
          variants={{
            open: { opacity: 1, height: 'auto' },
            closed: {
              opacity: 0,
              height: '0px',
            },
          }}
        >
          <div
            className=' flex bg-secondary p-2.5  rounded-2xl rounded-br-none'
            hidden={!pressedComment}
          >
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
              className='text-white font-bold bg-blue-700 px-2 text-sm rounded-[0.50rem] rounded-br-none  duration-300 '
              onClick={() => {
                if (preCommentContent === '') {
                  toast.error('Comment cannot be empty');
                  return;
                }
                setCommentContent({
                  user: loggedInUser,
                  content: preCommentContent,
                });

                setComments((prevComments) => [
                  ...prevComments,
                  {
                    user: loggedInUser,
                    content: preCommentContent,
                  },
                ]);
                currentPost.comments.push({
                  user: loggedInUser,
                  content: preCommentContent,
                });

                let currentPostIndex = posts.findIndex(
                  (post) => post.id === currentPost.id
                );
                posts[currentPostIndex].comments.push({
                  user: loggedInUser,
                  content: preCommentContent,
                });
                localStorage.setItem('posts', JSON.stringify(posts));
                setPreCommentContent('');
              }}
            >
              <span className='text-xs sm:text-base'> Reply</span>
            </button>
          </div>
          <div className='flex flex-col gap-3 mt-3'>
            {comments.map((comment) => (
              <Cmnt
                comment={comment}
                setcomments={setComments}
                cmnt={comment}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
export default Post;
