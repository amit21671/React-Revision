import Demo from "./Demo";
import {useState} from 'react';
const App=()=>{ 
    const[vbl,setVbl]=useState(true);   
    const[name,setName]=useState("Anil kumar");
    return(
       <>
            <h1>App Component</h1> 
            <input type="button" value="Remove Demo" onClick={()=>setVbl(false)} /> <br /> 
            <input type="button" value="Update Name" onClick={()=>setName("Kunal kapoor")} />
            <br /> 
            {
                vbl?<Demo name={name} /> : null
            }
       </>
    
    );      
}
export default App;