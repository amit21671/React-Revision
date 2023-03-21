import {useReducer} from 'react';
import {is,reducer} from './Reducer';
const App=()=>{ 
    const[state,dispatch]=useReducer(reducer,is);   
    return(
        <>
           <h1>App Component 5.5</h1>
           Count is : {state.count}   <br />   
           <input type="button" value="Increment" onClick={()=>dispatch({type:"INC"})} />
           <input type="button" value="Decrement" onClick={()=>dispatch({type:"DEC"})} />
           <input type="button" value="Reset" onClick={()=>dispatch({type:"RESET"})} />
           <input type="button" value="Increase by 50" onClick={()=>dispatch({type:"INC_BY_VAL",payload:50})} />
           <input type="button" value="Decrease by 30" onClick={()=>dispatch({type:"DEC_BY_VAL",payload:30})} />
           
        </>
    );
}
export default App;