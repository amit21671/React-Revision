import {useState} from 'react';
import Process from './Process';
const App=()=>{ 
    const[data,setData]=useState({roll:1100,name:'amit'});   
    return(
        <>
           <h1>App Component</h1>          
           <Process roll={data.roll} name={data.name} />
        </>
    );
}
export default App;