import {useState} from 'react';
import './App.css';
const App=()=>{   
    const[users,setUsers]=useState([]);
    const handleClick=()=>{
        fetch('https://randomuser.me/api/')
            .then((response) => response.json())
                .then((data) => {

                        console.log(data.results);
                        setUsers(data.results);
                        const user=data.results[0];
                        //console.log("user detail : ",user);
                        console.log("cell",user.cell);
                        console.log("age : ",user.dob.age);
                        console.log(user.email);
                        console.log(user.gender);
                        console.log(user.location.country);
                        console.log(user.name.first,user.name.last);
                        console.log(user.phone);
                        console.log(user.picture.large);
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
                        <p>
                            <img src={user.picture.large} alt={user.name.first} />
                        </p>
                        <h2>{user.name.first} {user.name.last}</h2>
                        <p>
                            {user.gender} <br />
                            {user.dob.age} <br />
                            {user.phone}
                        </p>
                    </div>
                )})
            }
        </>
    );
}
export default App;