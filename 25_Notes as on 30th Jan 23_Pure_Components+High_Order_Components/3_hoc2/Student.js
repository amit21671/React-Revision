import Employee from "./Employee";
const Student=(props)=>{
    return(
        <>
            <h2>Student Component</h2>
            <p>
                Roll : {props.roll} <br />
                Name : {props.name} <br />
                Employee id : {props.hocEid} <br />
                Salary : {props.hocSal}
            </p>
        </>
    );
}
export default Employee(Student,"Y-3003",31000);