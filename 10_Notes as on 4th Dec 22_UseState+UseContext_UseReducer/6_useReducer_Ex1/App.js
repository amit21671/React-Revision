import {useReducer} from 'react';

const is={count:0};
const reducer=(state,action)=>{
    //console.log("state : ",state);
    //console.log("action : ",action);
    switch(action.type)
    {
        case "INC" : return{count:state.count+1};
        case "DEC" : return{count:state.count-1};
        case "RESET" : return is; 
        default : return state;
    }
}
const App=()=>{ 
    const[state,dispatch]=useReducer(reducer,is);   
    //console.log("before return"); 
    return(
        <>
           <h1>App Component</h1>
           Count is : {state.count}   <br />   
           <input type="button" value="Increment" onClick={()=>dispatch({type:"INC"})} />
           <input type="button" value="Decrement" onClick={()=>dispatch({type:"DEC"})} />
           <input type="button" value="Reset" onClick={()=>dispatch({type:"RESET"})} />
        </>
    );
}
export default App;