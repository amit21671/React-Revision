import {useState} from 'react';


const App=()=>{ 
   const[count,setCount]=useState(1000);

    const handleClick=()=>{
        setCount((pc)=>{return pc+10;});
        setCount(pc=>pc+10);
        setCount(x=>x+100);
    }
    return(
        <>
            <h1>React App</h1>
            Count is : {count} <br />
            <input type="button" value="Increase" onClick={handleClick} />
           

        </>
     );
}
export default App;