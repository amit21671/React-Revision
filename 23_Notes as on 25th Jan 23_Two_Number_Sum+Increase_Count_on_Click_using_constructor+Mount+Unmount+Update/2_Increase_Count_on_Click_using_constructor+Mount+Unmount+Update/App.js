import Demo from "./Demo";
import {useState} from 'react';
const App=()=>{ 
    const[vbl,setVbl]=useState(true);   
    return(
       <>
            <h1>App Component</h1> 
            <input type="button" value="Remove Demo" onClick={()=>setVbl(false)} /> <br />  
            {
                vbl?<Demo /> : null
            }
       </>
    
    );      
}
export default App;