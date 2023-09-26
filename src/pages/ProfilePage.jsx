import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import SideBar from '../components/layout/SideBar';
import NavBar from '../components/layout/NavBar';
import RightSide from '../components/layout/RightSide';
import Post from '../components/home/Post';
import { quotes } from '../utils/constants/quotes';
import { motion } from 'framer-motion';

const ProfilePage = () => {
  const { username } = useParams();
  const [posts, setPosts] = useState([]);
  const [bio, setBio] = useState('');
  const [selectBio, setSelectBio] = useState(false);

  const [profilePosts, setProfilePosts] = useState([]);
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users'));

    if (loggedInUser.username === username) {
      setProfilePosts(loggedInUser.posts);
    } else {
      const user = users.filter((user) => {
        return user.username === username;
      })[0];
      setProfilePosts(user.posts);
    }
  }, [username]);

  useEffect(() => {
    if (!localStorage.getItem('posts')) {
      localStorage.setItem('posts', JSON.stringify([]));
    } else {
      setPosts(JSON.parse(localStorage.getItem('posts')));
    }
  }, []);

  return (
    <>
      <NavBar />
      <section className='w-full lg:w-[85%] h-screen relative flex items-start justify-around'>
        <SideBar />
        <div className=' w-full lg:w-[85%] w-2/3  overflow-x-hidden bg-secondary p-10 flex gap-6 flex-col items-center justify- h-[85vh] mt-[calc(56px+2.5rem)] '>
          <div className='w-full flex-col items-center flex  justify-center border-b pb-3   '>
            <img
              src='/assets/cat.jpg'
              alt=''
              className=' rounded-full border-4 border-blue-700 w-24'
            />
            <div className='flex items-center justify-center w-full relative'>
              <h1 className=' text-2xl font-bold capitalize'>{username}</h1>
              {loggedInUser.username === username && (
                <button
                  onClick={() => {
                    setSelectBio(!selectBio);
                    setBio('');
                  }}
                  className='bg-blue-700 font-bold rounded-full p-2 text-white absolute right-10 '
                >
                  {selectBio ? `${bio ? 'Save' : 'Cancel'}` : 'Edit'}
                </button>
              )}
            </div>
            {selectBio ? (
              <motion.div className=' flex overflow-x-scroll w-full  items-center justify-start border-b p-3 relative'
              transition={{ duration: 0.4, delay: 0.1 }}
              initial={{ opacity: 0, height: '0px'}}
              animate={{ opacity: 1, height: '100px' }}
              exit={{ opacity: 0, height: '0px'}}
              >
                <div className='flex gap-4'>
                  {quotes.map((quote, index) => (
                    <div
                      className={`px-4 py-2 flex-shrink-0 bg-accent text-content font-medium rounded p-2 cursor-pointer ${
                        bio === quote && 'bg-blue-700 text-white'
                      }`}
                      onClick={() => {
                        setBio(quote);
                      }}
                      key={index}
                    >
                      {quote}
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <h2 className='text-content font-mono font-bold'>
                {bio ? `"${bio}"` : ''}
              </h2>
            )}
          </div>
          <div className='rounded flex flex-col gap-6 w-full overflow-y-scroll no-scrollbar'>
            {profilePosts.length === 0 ? (
              <div className='self-center font-bold'>- Nothing to show -</div>
            ) : (
              profilePosts
                .sort((a, b) => b.createdAt - a.createdAt)
                .map((post) => (
                  <Post
                    post={post}
                    key={post.id}
                    setPosts={setPosts}
                    posts={posts}
                  />
                ))
            )}
          </div>
        </div>
        <RightSide />
      </section>
    </>
  );
};

export default ProfilePage;
