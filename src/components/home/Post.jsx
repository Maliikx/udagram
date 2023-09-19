import { MessageSquare } from 'lucide-react';
import { Heart } from 'lucide-react';

function Post(props) {
  return (
    <>
      {/* post div */}
      <div className='  bg-secondary border p-5 border-white '>
        {/* user info div */}
        <div>
          <img src=''></img>
          <h1>{props.post.user}</h1>
        </div>
        {/* content */}
        <div> {props.post.content}</div>

        {/* buttons div */}

        <div className=' flex gap-10  text-secondary justify-around'>
          <button className=' hover:text-red-500 bg-secondary text-content flex gap-1'>
            <Heart className='' />
            like
          </button>
          <button className=' hover:text-blue-400  bg-secondary text-content flex gap-1'>
            <MessageSquare /> comment
          </button>
          <button className=' hover:text-gray-299  bg-secondary text-content'>
            share
          </button>
        </div>
      </div>
    </>
  );
}
export default Post;
