import React from 'react';
import Post from './Post';
import PostInput from './PostInput';

const Posts = () => {
  const posts = [
    {
      id: 1,
      user: 'omar sand',
      content:
        "this is user1's postthis is user2's postthis is user2's postthis is user2's postthis is user2's postthis is user2's postthis is user2's post",
    },
    {
      id: 2,
      user: 'mohamed ahmed',
      content: "this is user2's post",
    },
    {
      id: 3,
      user: 'ashrf mohamed',
      content: "this is user3's post",
    },
    {
      id: 3,
      user: 'ashrf mohamed',
      content: "this is user3's post",
    },
    {
      id: 3,
      user: 'ashrf mohamed',
      content: "this is user3's post",
    },
  ];
  return (
    <>
      <div className=' rounded flex flex-col gap-6 w-full overflow-y-scroll no-scrollbar '>
        <PostInput />
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </>
  );
};

export default Posts;
