import {useState} from 'react';
const App=()=>{ 
    const[data,setData]=useState({name:"",age:"",email:"",address:"",country:""});     
    const handleChange=(evt)=>{

        setData({...data,[evt.target.name]:evt.target.value});
    }
    const handleSubmit=(evt)=>{
        console.log("Name : ",data.name);
        console.log("Age : ",data.age);
        console.log("Email : ",data.email);
        console.log("Address : ",data.address);
        console.log("Country : ",data.country);
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
            <input type="submit" value="Save Data" />
            </form>       
        </>
     );
}
export default App;