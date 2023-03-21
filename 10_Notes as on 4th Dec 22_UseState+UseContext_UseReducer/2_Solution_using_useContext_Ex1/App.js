import {useState} from 'react';
import Process from './Process';
import React from 'react';

export const MyContext=React.createContext();

const App=()=>{ 
    const[data,setData]=useState({roll:1100,name:'amit'});   
    return(
        <>
           <h1>App Component</h1>          
           <MyContext.Provider value={data}>
                <Process />                
           </MyContext.Provider>
           
        </>
    );
}
export default App;