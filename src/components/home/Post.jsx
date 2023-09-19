function Post(props) {
  return (
    <>
      {/* post div */}
      <div className="  bg-secondary border rounded-[3px] p-5 border-white ">
        {/* user info div */}
        <div>
          <img src=""></img>
          <h1>{props.post.user}</h1>
        </div>
        {/* content */}
        <div> {props.post.content}</div>

        {/* buttons div */}
        <div className=" flex gap-10  text-secondary justify-around">
          <button className=" border-[1px]  bg-secondary text-content">like</button>
          <button className=" border-[1px]  bg-secondary text-content">comment</button>
          <button className=" border-[1px]  bg-secondary text-content">share</button>
        </div>
      </div>
    </>
  );
}
export default Post;
