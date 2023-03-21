import {useState} from 'react';
const App=()=>{    
    const[data,setData]=useState({roll:1001,name:'amit',place:'Noida sector 15'});
    const handleUpdate=()=>{
        //setData({name:'amit kapoor',place:"Delhi"});
        setData({...data,name:'amit kapoor',place:"Delhi"});
    }
    console.log("before return");
    return(
        <div>
            <h1>App Component</h1>
            Roll : {data.roll} <br />
            Name : {data.name} <br />
            Place : {data.place} <hr />      
            <input type="button" value="Update" onClick={handleUpdate} />
        </div>
    );
}
export default App;