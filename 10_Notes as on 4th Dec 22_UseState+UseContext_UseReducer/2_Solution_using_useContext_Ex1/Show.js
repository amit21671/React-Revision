import {MyContext} from './App';
import {useContext} from 'react';
const Show=()=>{
    const data=useContext(MyContext);
    console.log("from show : ",data);
    return(
        <>
            <h3>Show</h3>
            Roll : {data.roll} <br />
            Name : {data.name} <br />
        </>
    );
}
export default Show;