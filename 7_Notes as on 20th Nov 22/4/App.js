import {useState} from 'react';
const App=()=>{   
    const[data,setData]=useState({fn:"",sn:"",res:""});
    const handleChange=(evt)=>{               
       
       /*
       const name=evt.target.name;
       const value=evt.target.value;
       console.log("name : ",name);
       console.log("value : ",value);
       setData({...data,[name]:value}); 
       */

       setData({...data,[evt.target.name]:evt.target.value});
    }
   
    const handleClick=()=>{
        const r=Number(data.fn)+Number(data.sn);        
        setData({...data,res:r});
    }   
    console.log("before return : ",data); 
    return(
        <div>
            <h1>App Component 3.3</h1>
            First number : <input type="text" name="fn" value={data.fn} onChange={handleChange} /><br />
            Second number : <input type="text" name="sn" value={data.sn} onChange={handleChange} /><br />
            Result : <input type="text" value={data.res} readOnly /><br />
            <input type="button" value="add" onClick={handleClick} />            
        </div>
    );
}
export default App;