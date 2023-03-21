import {useState} from 'react';
import './App.css';
const App=()=>{    
    const[records,setRecords]=useState([
                                            {roll:1001,name:'amit'},
                                            {roll:1002,name:'sumit'},
                                            {roll:1003,name:'rohit'},
                                            {roll:1004,name:'sohit'},
                                            {roll:1005,name:'mohit'}
                                      ]);
    const handleUpdate=()=>{
            setRecords([
                {roll:10010,name:'amit_k'},
                {roll:10020,name:'sumit_k'},
                {roll:10030,name:'rohit_k'},
                {roll:10040,name:'sohit_K'},
                {roll:10050,name:'mohit_K'}
          ]);
    }   
    console.log(records); 
    return(
        <div>
            <h1>App Component</h1>
            {
                records.map((row,i)=>{return(
                    <div key={i} className="box">
                        <h1>{row.roll}</h1>
                        <p>{row.name}</p>
                    </div>    
                )})
            }
            <hr />
            <input type="button" value="Update" onClick={handleUpdate} />
        </div>
    );
}
export default App;