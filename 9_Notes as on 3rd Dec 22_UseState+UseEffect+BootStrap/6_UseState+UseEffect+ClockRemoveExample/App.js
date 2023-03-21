import Clock from "./Clock";
import {useEffect, useState} from 'react';
const App=()=>{  
    const[vbl,setVbl]=useState(true); 
    return(
        <>
           <h1>App Component</h1>
           <input type="button" value="Remove Clock" onClick={()=>setVbl(false)} />
           <br />
           {
                vbl ?<Clock />:null 
           }
        </>
    );
}
export default App;