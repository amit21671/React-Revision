import {useState} from 'react';
import './App.css';
const App=()=>{
    const[data,setData]=useState({name:"",age:""});
    const[records,setRecords]=useState([]);
    const handleChange=(evt)=>{
        setData({...data,[evt.target.name]:evt.target.value});
    }
    const handleAdd=()=>{
        //console.log(data);
        const rcds=[...records];
        rcds.push(data);
        setRecords(rcds);
    }
    //console.log(records);
    const handleDel=(index)=>{
        //console.log(records[index]);
        const rcds=[...records];
        rcds.splice(index,1);
        setRecords(rcds);
    }
    return(
        <>
            Name : <input name="name" type="text" onChange={handleChange} /> <br />
            Age : <input name="age" type="number" onChange={handleChange} /> 
            <input type="button" value="add" onClick={handleAdd} /> <hr />
            {
                records.map((record,i)=>{return(
                    <div key={i} className="box">
                        <h1>{record.name}</h1>
                        <p>{record.age}</p>   
                        <p>
                            <input type="button" value="X" onClick={()=>handleDel(i)} />
                        </p> 
                    </div>
                )})
            }
        </>
    );
}
export default App;