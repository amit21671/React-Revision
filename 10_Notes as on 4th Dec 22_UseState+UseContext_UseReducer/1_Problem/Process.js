import Show from "./Show";
const Process=(props)=>{
    return(
        <>
            <h2>Process</h2>
            <Show roll={props.roll} name={props.name} />
        </>
    );
}
export default Process;