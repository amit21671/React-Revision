import useGet from "./useGet";
const App=()=>{    
    const [users]=useGet("https://jsonplaceholder.typicode.com/users");   
    //console.log(users);   
    return(
        <>
            <h1>React App</h1>
         
            <hr />
            {
                users.map(user=>{return(
                    <div key={user.id}>
                        <h2>{user.name}</h2>
                        <p>
                            {user.username} <br />
                            {user.email} <br />
                            {user.website}
                        </p>
                        <hr />
                    </div>
                )})
            }
            
        </>
     );
}
export default App;