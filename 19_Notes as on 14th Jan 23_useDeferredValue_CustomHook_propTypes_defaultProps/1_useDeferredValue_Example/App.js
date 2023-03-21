import {useState} from 'react';
import ShowList from './ShowList';
const App=()=>{    
    const[input,setInput]=useState("");    
    const handleChange=(e)=>{
            setInput(e.target.value);            
    }
    return(
        <>
            <h1>React App</h1>
            <input type="text" value={input} onChange={handleChange} />
            <br />
            <ShowList input={input} />
            
        </>
     );
}
export default App;