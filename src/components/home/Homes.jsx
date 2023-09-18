
import React from 'react'
import Home from './Home';


const Homes = (props) => {

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
    <div className='bg-primary '>
        <div> 
            <img src=""></img>
           <h1>user1</h1>
        </div>

        <div>
         </div>
         <div>
            <button ></button>
            <button ></button>
            <button ></button>
           
         </div>
         {products.map((product)=>(
                <product product ={product}/>
            ))
                }


         {Homes.map((home)=>(
                <home home ={home}/>
            ))
                }



    </div>
    
    </>
  )
}

export default Homes;