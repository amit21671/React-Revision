import axios from 'axios';
const App=()=>{    
    const handleClick=()=>{
        axios.delete('https://639ebc4a3542a261306089e3.mockapi.io/students/5')
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
            
        </>
    );
}
export default App;