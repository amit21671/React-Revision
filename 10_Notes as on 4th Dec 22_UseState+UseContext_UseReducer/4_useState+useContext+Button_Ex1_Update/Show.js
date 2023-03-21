import {MyContext} from './App';
import {useContext} from 'react';
const Show=()=>{
    const record=useContext(MyContext);
    const{data,handleUpdate}=record;    
    return(
        <>
            <h3>Show</h3>
            Roll : {data.roll} <br />
            Name : {data.name} <br />
            <input type="button" value="Update from Show" onClick={()=>handleUpdate(3100,"amit khanna")} />
        </>
    );
}
export default Show;