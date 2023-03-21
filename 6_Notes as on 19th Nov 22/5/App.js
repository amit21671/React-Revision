import {useState} from 'react';
const App=()=>{    
    const[no,setNo]=useState(5000);
    const[fruit,setFruit]=useState("mango");
    const handleUpdate=()=>{
        setNo(9000);
        setFruit("apple");
    }
    console.log("before return");
    return(
        <div>
            <h1>App Component</h1>
            Number is : {no} <br />
            Fruit is : {fruit} <hr />            
            <input type="button" value="Update" onClick={handleUpdate} />
        </div>
    );
}
export default App;