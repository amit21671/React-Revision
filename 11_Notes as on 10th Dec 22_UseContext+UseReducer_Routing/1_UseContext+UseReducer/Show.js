import {useContext} from 'react';
import { MyContext } from './App';
const Show=()=>{
    const rcd=useContext(MyContext);
    const{state,dispatch}=rcd;
    return(
        <>
            <h3>Show</h3>
            Roll is : {state.roll}   <br />
            Name is : {state.name} <br />                        
            <input type="button" value="Update from Show" 
                onClick={()=>dispatch({type:"UPDATE",payload:{roll:8888,name:'amit_g'}})} />           
            <input type="button" value="Reset from Show" 
                onClick={()=>dispatch({type:"RESET"})} />
        </>
    );
}
export default Show;