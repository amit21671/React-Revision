import Demo from "./Demo";
const App=()=>{   
    const handleClick=(no)=>{
        console.log("from handle click : ",no);
    }        
    return(
        <div>
            <h1>App Component</h1>
            <Demo roll={1100} name="amit" clk={()=>handleClick(5000)} /> 
        </div>
    );
}
export default App;