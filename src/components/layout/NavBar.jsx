import { Search, SearchCheck } from "lucide-react";

function NavBar (){
    return (
        
        <nav className="fixed h-14 flex bg-secondary w-full  z-50 justify-between mb-1" >
            <div className="flex pl-4 items-center">
            <img src='/assets/logo-dark.png ' className="w-10 h-10"/> 
            <h1 className=" text-3xl select-none">dagram</h1>
            
            </div>
            <div className="p-4 w-3/12 flex">
                <Search className="absolute text-gray-400 "/>
                <input type="text" placeholder="Search..." className="w-full pl-7 rounded-lg h text-black"/>
                 
            </div>
            
            <button className="text-secondary
            h-8 m-4 w-40
             p-1 rounded-md bg-blue-700
              text-white font-bold font-sans 
              text-base duration-300
               hover:bg-blue-800">
                Log Out</button>
            

        </nav>
        

    );
}
export default NavBar;