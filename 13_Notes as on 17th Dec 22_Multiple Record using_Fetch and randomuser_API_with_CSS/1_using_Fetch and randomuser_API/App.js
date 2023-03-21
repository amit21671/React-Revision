const App=()=>{   
    const handleClick=()=>{
        fetch('https://randomuser.me/api/')
            .then((response) => response.json())
                .then((data) => {
                        const user=data.results[0];
                        console.log("user detail : ",user);
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
        </>
    );
}
export default App;