import {useState} from 'react';
const App=()=>{   
    const[data,setData]=useState({fn:"",sn:"",res:""});
    const handleChange=(evt)=>{               
        if(evt.target.name==="fn")
        {
            setData({...data,fn:evt.target.value});
        }
        else if(evt.target.name==="sn")
        {
            setData({...data,sn:evt.target.value});
        }
        
    }
   
    const handleClick=()=>{
        const r=Number(data.fn)+Number(data.sn);        
        setData({...data,res:r});
    }   
    console.log(data); 
    return(
        <div>
            <h1>App Component 2.2</h1>
            First number : <input type="text" name="fn" value={data.fn} onChange={handleChange} /><br />
            Second number : <input type="text" name="sn" value={data.sn} onChange={handleChange} /><br />
            Result : <input type="text" value={data.res} readOnly /><br />
            <input type="button" value="add" onClick={handleClick} />            
        </div>
    );
}
export default App;