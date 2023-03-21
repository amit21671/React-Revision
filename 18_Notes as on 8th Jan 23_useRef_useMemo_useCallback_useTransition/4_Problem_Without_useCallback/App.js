import {useState} from 'react';

const c=new Set();

const App=()=>{ 
    const[count,setCount]=useState(1);
    const[anotherCount,setAnotherCount]=useState(2000);

    const handleInc=()=>{
        setCount(count+1);
    }
    const handleDec=()=>{
        setCount(count-1);
    }

    const handleAnotherCount=()=>{
        setAnotherCount(anotherCount+1);
    }


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