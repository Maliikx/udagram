import React from 'react';
import Post from './Post';

const Posts = (props) => {
  const posts = [
    {
      id: 1,
      user: 'user1',
      content: "this is user1's post",
    },
    {
      id: 2,
      user: 'user2',
      content: "this is user2's post",
    },
    {
      id: 3,
      user: 'user3',
      content: "this is user3's post",
    },
  ];
  return (
    <>
      <div className=' flex flex-col gap-20 '>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </>
  );
};

export default Posts;
