import Student from "./Student";
const App=()=>{
    return(
        <div>
            <h1>App Component</h1>
            <Student roll="1100" name="kunal verma">
                I am here <br />
                More text goes here <hr />
                Third line 
            </Student>          
        </div>
    );
}
export default App;