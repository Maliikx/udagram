import { Heart, HomeIcon, Sun, User2Icon } from "lucide-react";

function SideBar(){
    return(
        <nav className="fixed flex w-2/12 h-5/6 mt-20 ml-2  bg-secondary self-start rounded-xl " >
            <ul className="m-5 flex-row">
                <li className="m-7">
                  <HomeIcon className=" inline-block mr-2" />  
                  <button className=" inline-block text-2xl align-middle ">home</button>
                </li>
                <li className="m-7">
                  <User2Icon  className="inline-block mr-2" />
                  <button className="inline-block text-2xl align-middle ">profile</button>
                </li>
                <li className="m-7">
                  <Heart className="inline-block mr-2"/>
                  <button className="inline-block text-2xl align-middle ">likes</button>
                </li>
                <li className="m-7">
                  <Sun className="inline-block mr-2"/>
                  <button className="inline-block text-2xl align-middle ">light mood</button>
                </li>
            </ul>
            
        </nav>
    )
}
export default SideBar;