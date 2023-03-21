import Demo from "./Demo";
const App=()=>{   
    const handleClick=()=>{
        console.log("from handle click");
    }        
    return(
        <div>
            <h1>App Component</h1>
            <Demo roll={1100} name="amit" clk={handleClick} /> 
        </div>
    );
}
export default App;