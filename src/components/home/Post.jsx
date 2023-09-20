import { MessageSquare } from "lucide-react";
import { Heart } from "lucide-react";
import { Repeat2 } from "lucide-react";

function Post(props) {
  return (
    <>
      {/* post div */}
      <div className="  bg-secondary border rounded-2xl p-5 border-white flex flex-col gap-2 ">
        {/* user info div */}
        <div className=" text-red-600 flex gap-1 items-center ">
          <img
            src="/assets/cat.jpg"
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <h1>
            <b>{props.post.user}</b>
          </h1>
        </div>
        {/* content */}
        <div> {props.post.content}</div>

        {/* buttons div */}

        <div className=" flex gap-10  text-secondary justify-around">
          <button className=" hover:text-red-500 bg-secondary text-content flex gap-1">
            <Heart className="" />
            like
          </button>
          <button className=" hover:text-blue-400  bg-secondary text-content flex gap-1">
            <MessageSquare /> comment
          </button>
          <button className=" hover:text-green-500 bg-secondary text-content flex gap-1">
            <Repeat2 />
            share
          </button>
        </div>
      </div>
    </>
  );
}
export default Post;
