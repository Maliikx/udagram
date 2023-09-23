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
      <section className="w-full h-screen relative flex items-start justify-around">
        <SideBar />
        <div className="w-2/3 bg-secondary p-10 flex gap-6 flex-col items-center justify- h-[85vh] mt-[calc(56px+2.5rem)] rounded-3xl rounded-tl-none rounded-br-none">
          <Posts />
        </div>
        <RightSide />
      </section>
    </>
  );
};

export default HomePage;
