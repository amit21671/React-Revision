import ReactDOM from 'react-dom/client';

const Student=()=>{
    let name="Kapil sharma";
    return(
        <div>
            <h1>Student Component</h1>
            <p>
                more content goes here related to Student. <br />
                Name : {name} <br />
                Some more : {10+2} <br />
                
            </p>
        </div>
    );
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Student />);