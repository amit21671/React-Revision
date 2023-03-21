import {useState,useCallback} from 'react';

const c=new Set();

const App=()=>{ 
    const[count,setCount]=useState(1);
    const[anotherCount,setAnotherCount]=useState(2000);

    const handleInc=useCallback(()=>{
      setCount(count+1);
    },[count]);
    
    const handleDec=useCallback(()=>{
      setCount(count-1);
    },[count]);

    const handleAnotherCount=useCallback(()=>{
        setAnotherCount(anotherCount+1);
    },[anotherCount]);


    c.add(handleInc);
    c.add(handleDec);
    c.add(handleAnotherCount);

    console.log(c);
    return(
        <>
            <h1>React App</h1>
            Count is : {count} <br />
            <input type="button" value="Increment" onClick={handleInc} />
            <input type="button" value="Decrement" onClick={handleDec} /> <hr />

           Another count :  {anotherCount} <br />
           <input type="button" value="Incrase another count" onClick={handleAnotherCount} />

        </>
     );
}
export default App;