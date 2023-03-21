import './Student.css';
const Student=(props)=>{
    return(
        <div className='box'>
            <h1>{props.name}</h1>
            <p>{props.age}</p>
            <p>
                <input type="button" value="X" onClick={props.del} />
            </p>
        </div>
    );
}
export default Student;