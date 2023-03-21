const Demo=(props)=>{
    return(
        <>
            <h2>Demo</h2>
            Roll : {props.roll} <br />
            Name : {props.name} <br />
            <input type="button" value="Click me" onClick={props.clk} />
        </>
    );
}
export default Demo;
