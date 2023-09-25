import React from "react";
import PostInput from "../components/home/PostInput";
import Posts from "../components/home/Posts";
import NavBar from "../components/layout/NavBar";
import RightSide from "../components/layout/RightSide";
import SideBar from "../components/layout/SideBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <section className="w-full lg:w-[85%] h-screen relative flex items-start justify-around">
        <SideBar />
        <div className="w-full lg:w-[85%] bg-secondary p-10 flex gap-6 flex-col items-center justify- h-[85vh] mt-[calc(56px+2.5rem)] ">
          <Posts />
        </div>
        <RightSide />
      </section>
    </>
  );
};

export default HomePage;
