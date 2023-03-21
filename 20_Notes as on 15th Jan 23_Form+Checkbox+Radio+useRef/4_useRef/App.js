import {useRef} from 'react';
const App=()=>{ 
    
    const nm=useRef();
    const ag=useRef();
    const em=useRef();
    const fh=useRef();
    const handleSubmit=(evt)=>{
        console.log("Name : ",nm.current.value);
        console.log("Age : ",ag.current.value);
        console.log("Email : ",em.current.value);
        console.log("File :  : ",fh.current.files[0].name);

        nm.current.value="";
        nm.current.focus();
        evt.preventDefault();
        
    }
    return(
        <>
            <h1>React App</h1>          
            <form onSubmit={handleSubmit}>
             Name : <input type="text" ref={nm}  /> <br />
             Age : <input type="number"  ref={ag} /> <br />
             Email : <input type="email"  ref={em} /> <br />
             Select file : <input type="file" ref={fh}  /> <br />
            <input type="submit" value="Save Data" />
            </form>       
        </>
     );
}
export default App;