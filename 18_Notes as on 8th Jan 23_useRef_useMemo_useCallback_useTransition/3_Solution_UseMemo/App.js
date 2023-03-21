import {useState,useMemo} from 'react';
const App=()=>{ 
    const[no,setNo]=useState(1);
    const[input,setInput]=useState("");

    const code=(n)=>{
      console.log("from code");
        for(let v=0;v<999999999;v++)
        {

        }
        return n*n;
    }
  
    const res=useMemo(()=>{
          return code(no);
    },[no]);
    return(
        <>
            <h1>React App</h1>
            Number is : {no} <br />
            Result is : {res} <hr />
            <input type="button" value="Increment" onClick={()=>setNo(no+1)} /> <hr />
            Enter name : <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} /> <br />
            {input}

        </>
     );
}
export default App;