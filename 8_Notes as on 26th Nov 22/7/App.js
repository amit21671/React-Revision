import {useState} from 'react';
import './App.css';
const App=()=>{     
    const[count,setCount]=useState(1);
    const handleClick=()=>{
        setCount(count+1);
    }
    const arr=[];
    if(count>9)
    {
        arr.push("clr");
    }
    if(count>14)
    {
        arr.push("bld");
    }
    console.log(arr);
    return(
        <>
            <div className={arr.join(" ")}>Count is : {count}</div>
            <hr />
            <input type="button" value="Increase" onClick={handleClick} />
        </>
    );
}
export default App;