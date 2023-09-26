import React , {useEffect,useState} from "react";


function Timer() {
    const [seconds,setSeconds]=useState(0);
    const [minuits,setMinutes]=useState(0);
    const [hour,setHour]=useState(0);


    let timer;
    useEffect(()=>{
        timer = setInterval(()=>{

        setSeconds(seconds+1);

        if (seconds===59){
            setMinutes(minuits+1);
            setSeconds(0);
        }
         else if (minuits===59){
      setHour(hour+1);
      setMinutes(0);

     } },1000)
   


    return()=>clearInterval(timer);
});

  return (
    <div className="  flex justify-items-center">
    
    <div className=" w-10">

        <h1>{hour<10? "0" +hour :hour}
        :{minuits<10? "0" +minuits :minuits}
        :{seconds<10? "0" +seconds: seconds}</h1>
    </div>
    </div>
    
  )
}

export default Timer;