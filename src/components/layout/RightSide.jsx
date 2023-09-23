import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RightSide() {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState();

  useEffect(() => {
    setRegisteredUsers(JSON.parse(localStorage.getItem("users")));
    setLoggedInUser(JSON.parse(localStorage.getItem("loggedInUser")));
  }, []);

  return (
    <nav className="flex  flex-col w-[15%] h-[85%] ml-2 mt-[calc(56px+2.5rem)] bg-secondary justify-center items-center rounded-3xl rounded-tl-none rounded-br-none ">
      {/* <h1 className="font-bold mb-5">YOU LOVE THIS WEBSITE!</h1>
      <img
        src="public/assets/Hypnotic-spiral.jpg"
        alt=""
        className="rounded-full animate-spin    w-48"
      /> */}
      <div className="h-full p-5 w-full flex flex-col items-center ">
        <h1 className="text-2xl">Also on Udagram</h1>
        <div className="flex flex-col w-full h-full">
          {registeredUsers
            .filter((user) => user.id !== loggedInUser.id)
            .map((user) => (
              <div
                key={user.id}
                className="flex items-center gap-2 my-2 cursor-pointer"
              >
                <img
                  src="/assets/cat.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <Link to = {`/profile/${user.username}`}><h1 className="font-bold capitalize hover:underline">{user.username}</h1></Link>
              </div>
            ))}
        </div>
      </div>
    </nav>
  );
}
export default RightSide;
