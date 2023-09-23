import { MessageSquare } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Repeat2 } from 'lucide-react';


function Post(props) {
  return (
    <>
      {/* post div */}
      <div className='  w-full bg-accent rounded-tl-none rounded-br-none rounded-3xl px-5 py-4 text-lg flex flex-col gap-6 '>
        {/* user info div */}
        <div className='text-content flex gap-1 items-center '>
          <img
            src='/assets/cat.jpg'
            alt=''
            className='w-10 h-10 rounded-full rounded-tl-none border border-blue-700 border-x-2'
          />
          <h1 className='text-xl capitalize'>
            <b>{props.post.user.username}</b>
          </h1>
        </div>
        {/* content */}
        <div> {props.post.content}</div>
        {/* buttons div */}
        <hr />
        <div className=' flex text-secondary justify-around'>
          <button className=' hover:text-red-600 bg-transparent text-content flex items-center duration-300 gap-1'>
            <Heart className='' />
            Like
          </button>
          <button className=' hover:text-blue-600  bg-transparent text-content flex items-center duration-300 gap-1'>
            <MessageSquare /> Comment
          </button>
          <button className=' hover:text-green-600 bg-transparent text-content flex items-center duration-300 gap-1'>
            <Repeat2 />
            Share
          </button>
        </div>
      </div>
    </>
  );
}
export default Post;
