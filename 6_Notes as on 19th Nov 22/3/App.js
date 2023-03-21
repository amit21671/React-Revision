const App=()=>{
    let count=0;
    const handleClick=()=>{
        count=count+1;
        console.log(count);
    }
    return(
        <div>
            <h1>App Component</h1>
            Count is : {count}
            <hr />
            <input type="button" value="Increment" onClick={handleClick} />
        </div>
    );
}
export default App;