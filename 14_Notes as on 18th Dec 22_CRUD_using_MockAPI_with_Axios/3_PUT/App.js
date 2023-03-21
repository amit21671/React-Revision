import {useState} from 'react';
import axios from 'axios';
import './App.css';
const App=()=>{   
    const[users,setUsers]=useState([]);
    const handleClick=()=>{
        axios.put('https://639ebc4a3542a261306089e3.mockapi.io/students/5', {
            name: 'Wilma_g',          
            country:"India"
          })
          .then((response) => {
                console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
       
    }
    return(
        <>
            <h1>App Component</h1>
            <input type="button" value="Fetch data" onClick={handleClick} />
            <hr />
            {
                users.map(user=>{return(
                    <div key={user.id} className="box">
                       <h2>{user.name}</h2>
                       <p>
                        {user.age}<br />
                        {user.country}
                       </p>
                    </div>
                )})
            }
        </>
    );
}
export default App;