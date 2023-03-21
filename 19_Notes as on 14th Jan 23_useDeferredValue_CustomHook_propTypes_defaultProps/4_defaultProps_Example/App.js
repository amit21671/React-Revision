import Demo from "./Demo";
const App=()=>{
    const r=5500;    
    return(
        <>
            <h1>React App</h1>         
            <Demo roll={r} name="sunil" />
            <hr />
            <Demo roll={5100} />
            <hr />
            <Demo  />
        </>
     );
}
export default App;