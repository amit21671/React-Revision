import axios from 'axios';
import {useState} from 'react';
import './App.css';
const App=()=>{ 
    const[users,setUsers]=useState([]);   
    const handleClick=()=>{      
          axios.get('https://randomuser.me/api/')
          .then((response) => {            
            console.log(response.data.results);
            const rcds=[...users];
            rcds.push(response.data.results[0]);
            setUsers(rcds);
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
                users.map((user,i)=>{return(
                    <div key={i} className="box">
                           <h2>{user.name.first} {user.name.last}</h2>
                           <p>
                               <img src={user.picture.large} alt={user.name.first} /> <br /> 
                               {user.gender} <br />
                               {user.email} <br />
                            </p>                                                       
                    </div>
                )})
            }
        </>
    );
}
export default App;