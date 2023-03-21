import axios from 'axios';
import {useState} from 'react';
const App=()=>{ 
    const[users,setUsers]=useState([]);   
    const handleClick=()=>{
       /*
        async function getUser() {
            try {
              const response = await axios.get('https://jsonplaceholder.typicode.com/users');
              console.log(response);
            } catch (error) {
              console.error(error);
            }
          }
          getUser();
        */


          const getUser=async()=> {
            try {
              const response = await axios.get('https://jsonplaceholder.typicode.com/users');
              console.log(response.data);
              setUsers(response.data);
            } catch (error) {
              console.error(error);
            }
          }
          getUser();
    }
    return(
        <>
            <h1>App Component</h1>
            <input type="button" value="Fetch data" onClick={handleClick} />
            <hr />
            {
                users.map(user=>{return(
                    <div key={user.id}>
                           <h2>{user.name}</h2>
                           <p>
                                {user.username} <br />
                                {user.phone} <br />
                                {user.email} <br />
                                {user.website}<br />
                                <br /> living  in : {user.address.city} 
                            </p>  
                            <hr />
                    </div>
                )})
            }
        </>
    );
}
export default App;