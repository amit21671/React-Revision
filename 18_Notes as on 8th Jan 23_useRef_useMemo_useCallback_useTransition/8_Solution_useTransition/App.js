import {useState,useTransition} from 'react';
const App=()=>{    
    const[input,setInput]=useState("");
    const[records,setRecords]=useState([]);
    const [isPending, startTransition] = useTransition();
    const handleChange=(e)=>{
            setInput(e.target.value);
            startTransition(()=>{
                const x=[];
                for(let v=0;v<20000;v++)
                {
                    x.push("Hello world : "+e.target.value);
                }
                setRecords(x);
            });
    }
    return(
        <>
            <h1>React App</h1>
            <input type="text" value={input} onChange={handleChange} />
            <br />
            {
                isPending? "Loading..." :
                records.map((row,i)=>{return(
                    <div key={i}>
                        {row}
                    </div>
                )})
            }
        </>
     );
}
export default App;