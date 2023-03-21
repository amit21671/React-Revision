import {useState} from 'react';
import Process from './Process';
import React from 'react';

export const MyContext=React.createContext();

const App=()=>{ 
    const[data,setData]=useState({roll:1100,name:'amit'});   
    const handleUpdate=(r,nm)=>{
        setData({roll:r,name:nm});
    }
    const reset=()=>{
        setData({roll:1100,name:'amit'});
    }
    const record={
        data:data,
        handleUpdate:handleUpdate,
        reset:reset
    };
    return(
        <>
           <h1>App Component</h1>          
           Roll : {data.roll} <br />
           Name : {data.name} <br />
           <input type="button" value="Update from App" onClick={()=>handleUpdate(2100,"amit kapoor")} />
           <input type="button" value="Reset from App" onClick={reset} />
           <hr /> 
           <MyContext.Provider value={record}>
                <Process />                
           </MyContext.Provider>
           
        </>
    );
}
export default App;