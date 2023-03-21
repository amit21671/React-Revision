import {useState,useEffect,useRef} from 'react';
const App=()=>{ 
  const[no,setNo]=useState(parseInt(Math.random()*500));  
  const count=useRef(1);
  useEffect(()=>{
      count.current=count.current+1;
  });
  
  
  const handleClick=()=>{
        setNo(parseInt(Math.random()*500));
  }


  console.log("before return : ",count);
    return(
        <>
            <h1>React App</h1>
            Number is : {no} <br />
            <input type="button" value="Generate random no" onClick={handleClick} />
            <hr />
            Total rendered : {count.current}  times
        </>
    );
}
export default App;