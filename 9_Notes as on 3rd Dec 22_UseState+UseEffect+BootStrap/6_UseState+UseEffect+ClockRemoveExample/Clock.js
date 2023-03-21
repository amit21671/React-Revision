import {useState,useEffect} from 'react';
const Clock=()=>{    
    const[dt,setDt]=useState(new Date());

    useEffect(()=>{
        const id=setInterval(()=>{
            console.log("I am here");
            setDt(new Date());
        },1000);

        return () => {            
            console.log("finished");
            clearInterval(id);
          };
    },[]);

    return(
        <>
            {dt.toLocaleTimeString()}
        </>
    );

}
export default Clock;