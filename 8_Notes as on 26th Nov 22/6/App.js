import {useState} from 'react';
const App=()=>{ 
    const[myStyle,setMyStyle]=useState({fontSize:"50px",color:"red"});
    const handleUpdate=()=>{
        setMyStyle({fontSize:"70px",color:"green",backgroundColor:'yellow'});
    }
    return(
        <>
            <div style={myStyle}>Welcome</div>
            <hr />
            <input type="button" value="Update" onClick={handleUpdate} />
        </>
    );
}
export default App;