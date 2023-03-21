import {useState} from 'react';
const App=()=>{   
    const[fn,setFn]=useState("");
    const[sn,setSn]=useState("");
    const[res,setRes]=useState("");

    const handleFirstChange=(evt)=>{               
        setFn(evt.target.value);
    }
    const handleSecondChange=(evt)=>{
        setSn(evt.target.value);
    }
    const handleClick=()=>{
        const r=Number(fn)+Number(sn);        
        setRes(r);
    }    
    return(
        <div>
            <h1>App Component</h1>
            First number : <input type="text" value={fn} onChange={handleFirstChange} /><br />
            Second number : <input type="text" value={sn} onChange={handleSecondChange} /><br />
            Result : <input type="text" value={res} readOnly /><br />
            <input type="button" value="add" onClick={handleClick} />            
        </div>
    );
}
export default App;