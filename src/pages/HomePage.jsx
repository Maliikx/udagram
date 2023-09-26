import React, { useEffect } from "react";
import PostInput from "../components/home/PostInput";
import Posts from "../components/home/Posts";
import NavBar from "../components/layout/NavBar";
import RightSide from "../components/layout/RightSide";
import SideBar from "../components/layout/SideBar";
import { useNavigate } from "react-router-dom";
import Timer from "../components/Timer";

const HomePage = () => {

  const navigate = useNavigate()
  
  useEffect(()=>{
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser){
       navigate("/");

    }
  },[])
  return (
    <>
       <NavBar />
      <section className="w-full lg:w-[85%] h-screen relative flex items-start justify-around">
        <SideBar />
        <div className="w-[95%] mt-[70px] lg:mt-[calc(56px+2.5rem)] lg:w-[85%] bg-secondary p-10 flex gap-6 flex-col items-center  h-[85vh]  ">
          <Posts />
        </div>
        <RightSide />
      </section>
    </>
  );
};

export default HomePage;
