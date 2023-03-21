import { MyContext } from "./App";
import {useContext} from 'react';
import './Show.css';
const Show=()=>{  
    const rcd=useContext(MyContext);
    const{state,dispatch}=rcd;
    //console.log(state.records);  
    return(
        <>
            <h2>Show</h2>
            {
                state.records.map((row,i)=>{return(
                    <div key={i} className="box">
                        <h2>{row.name}</h2>
                        <p>
                            {row.age} <br />
                            {row.email}
                        </p>
                        <p>
                            <input type="button" value="X" onClick={()=>dispatch({type:"DEL",payload:i})} />
                        </p>
                    </div>
                )})
            }
        </>
    );
}
export default Show;