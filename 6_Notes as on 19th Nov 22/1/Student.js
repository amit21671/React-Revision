const Student=(props)=>{    
    console.log(props);
    console.log("Roll : ",props.roll);
    console.log("Name : ",props.name);
    return(
        <div>
            <h2>Student Component</h2>
            <div> 
               Roll : {props.roll} <br />
               Name : {props.name}
               <br />

               {props.children}
            </div>
        </div>
    );
}
export default Student;