import React,{useReducer} from 'react';
import {is,reducer} from './Reducer';
import Process from './Process';
export const MyContext=React.createContext();
const App=()=>{ 
    const[state,dispatch]=useReducer(reducer,is);       
    const rcd={
        state:state,
        dispatch:dispatch
    };
    return(
        <>
           <h1>App Component</h1>
           Roll is : {state.roll}   <br />
           Name is : {state.name} <br />                        
           <input type="button" value="Update from App" 
            onClick={()=>dispatch({type:"UPDATE",payload:{roll:2222,name:'amit_k'}})} />           
           <input type="button" value="Reset from App" 
            onClick={()=>dispatch({type:"RESET"})} />
            <hr />
            <MyContext.Provider value={rcd}>
                <Process />                
            </MyContext.Provider>
            
        </>
    );
}
export default App;