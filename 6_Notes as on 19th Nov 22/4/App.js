import {useState} from 'react';
const App=()=>{    
    const[count,setCount]=useState(0);
    const handleClick=()=>{
        setCount(count+1);
    }
    console.log("before return");
    return(
        <div>
            <h1>App Component</h1>
            Count is : {count}
            <hr />
            <input type="button" value="Increment" onClick={handleClick} />
        </div>
    );
}
export default App;