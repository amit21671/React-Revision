import {useState} from 'react';
const App=()=>{   
    const[data,setData]=useState({fn:"",sn:"",res:""});
    const handleFirstChange=(evt)=>{               
        setData({...data,fn:evt.target.value});
    }
    const handleSecondChange=(evt)=>{
        setData({...data,sn:evt.target.value});
    }
    const handleClick=()=>{
        const r=Number(data.fn)+Number(data.sn);        
        setData({...data,res:r});
    }   
    console.log(data); 
    return(
        <div>
            <h1>App Component</h1>
            First number : <input type="text" value={data.fn} onChange={handleFirstChange} /><br />
            Second number : <input type="text" value={data.sn} onChange={handleSecondChange} /><br />
            Result : <input type="text" value={data.res} readOnly /><br />
            <input type="button" value="add" onClick={handleClick} />            
        </div>
    );
}
export default App;