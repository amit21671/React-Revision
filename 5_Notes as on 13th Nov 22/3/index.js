import ReactDOM from 'react-dom/client';


const name="Amit kapoor";
const add=(fn,sn)=>fn+sn;
const element=  (
                    <div>
                        <div>
                            <h1>Name is :{name}. </h1> 
                            <p>
                                Next line : {10+2}. <br />
                                Testing : {add(12,33)}
                            </p>  
                        </div>
                        <h2>some more</h2>
                        <h3>testing</h3>
                    </div>                      
                );

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(element);