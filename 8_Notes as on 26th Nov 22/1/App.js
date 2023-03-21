import {useState} from 'react';
const App=()=>{            
    const[no,setNo]=useState("");
    const[msg,setMsg]=useState({even:"",odd:"",prime:""});
  
    const handleClick=()=>{
        let forEven="",forOdd="",forPrime="";
        if(no%2===0)
        {
            forEven="Even : Yes";
            forOdd="Odd : No";
        }
        else 
        {
            forEven="Even : No";
            forOdd="Odd : Yes";
        }
        // logic of prime goes here
        forPrime="Not prime";

        setMsg({even:forEven,odd:forOdd,prime:forPrime});
    }
    return(
        <>
            <h1>App Component</h1>
            Enter no : <input type="text" value={no} onChange={(evt)=>setNo(evt.target.value)} /><br />
            <input type="button" value="Click HERE" onClick={handleClick} /> <hr />            
            {msg.even} <br />
            {msg.odd} <br/>
            {msg.prime}
        </>
    );
}
export default App;