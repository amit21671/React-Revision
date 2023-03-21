import {useState} from 'react';
import Process from './Process';
import React from 'react';

export const MyContext=React.createContext();

const App=()=>{ 
    const[data,setData]=useState({roll:1100,name:'amit'});   
    const handleUpdate=()=>{
        setData({roll:2100,name:'amit kapoor'});
    }
    const record={
        data:data,
        handleUpdate:handleUpdate
    };
    return(
        <>
           <h1>App Component</h1>          
           Roll : {data.roll} <br />
           Name : {data.name} <br />
           <input type="button" value="Update from App" onClick={handleUpdate} />
           <hr />
           <MyContext.Provider value={record}>
                <Process />                
           </MyContext.Provider>
           
        </>
    );
}
export default App;