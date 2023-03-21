import {useState} from 'react';
const App=()=>{ 
    const[data,setData]=useState({name:"",age:"",email:"",address:"",country:"",sure:false});     
    const handleChange=(evt)=>{

        /*
        if(evt.target.type==="checkbox")
        {
            setData({...data,[evt.target.name]:evt.target.checked});
        }   
        else 
        {
            setData({...data,[evt.target.name]:evt.target.value});
        } 
        
        */
       const v=evt.target.type==="checkbox"? evt.target.checked : evt.target.value;
       setData({...data,[evt.target.name]:v});
    }
    const handleSubmit=(evt)=>{
        if(data.sure)
        {
            console.log("Name : ",data.name);
            console.log("Age : ",data.age);
            console.log("Email : ",data.email);
            console.log("Address : ",data.address);
            console.log("Country : ",data.country);            
        }
        else 
        {
            console.log("You have to be sure first");
        }
        evt.preventDefault();
        
    }
    return(
        <>
            <h1>React App</h1>  
            <form onSubmit={handleSubmit}>
            Name : <input type="text" name="name" value={data.name} onChange={handleChange} /><br />
            Age : <input type="number" name="age" value={data.age} onChange={handleChange} /><br />
            Email : <input type="email" name="email" value={data.email} onChange={handleChange} /> <br />
            Address : <textarea rows="10" cols="20" name="address" value={data.address} onChange={handleChange}></textarea> <br />
            Country : 
            <select name="country" value={data.country} onChange={handleChange}>
                <option value="">Select country</option>
                <option value="in">India</option>
                <option value="ch">China</option>
                <option value="sl">Sri lanka</option>
            </select> <br />
            Are you sure ? 
            <input type="checkbox" name="sure" checked={data.sure} onChange={handleChange} />
            <br />
            <input type="submit" value="Save Data" />
            </form>       
        </>
     );
}
export default App;