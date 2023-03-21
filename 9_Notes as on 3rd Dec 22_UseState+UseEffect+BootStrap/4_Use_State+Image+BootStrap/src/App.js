import {useState} from 'react';
import PIC from './sachin.jpg';
const App=()=>{ 
    const[count,setCount]=useState(0); 
    return(
        <>
           <h1>App Component</h1>
           <p>
                Count is : {count} <br />
                <input type="button" className='btn btn-info' value="Increment" onClick={()=>setCount(count+1)} /> 
                <br /> <br />
                <img src={PIC} className='rounded' width="200" alt="Sachin" />
           </p>
        </>
    );
}
export default App;