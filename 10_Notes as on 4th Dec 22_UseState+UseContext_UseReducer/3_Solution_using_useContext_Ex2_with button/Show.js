import {MyContext} from './App';
import {useContext} from 'react';
const Show=()=>{
    const record=useContext(MyContext);
    const{data,handleUpdate}=record;
    console.log("from show : ",data);
    return(
        <>
            <h3>Show 3.0</h3>
            Roll : {data.roll} <br />
            Name : {data.name} <br />
            <input type="button" value="Update from Show" onClick={record.handleUpdate} />
        </>
    );
}
export default Show;