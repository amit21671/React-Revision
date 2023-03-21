import axios from 'axios';
import {useState} from 'react';
import './App.css';
const App=()=>{ 
    const[city,setCity]=useState("");
    const[records,setRecords]=useState([]);   
    const handleClick=()=>{      
          
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + city+ '&appid=ecdf0d3a10c430f1a90e79bdb3cace1a&units=metric')
          .then((response) => {            
            //console.log(response.data);
            const temp=response.data.main.temp;            
            const icon=response.data.weather[0].icon;
            const url="http://openweathermap.org/img/wn/"+icon+"@2x.png";

            console.log(city);
            console.log(temp);
            console.log(url);
            
            const rcds=[...records];
            rcds.push({city:city,temp:temp,url:url});
            setRecords(rcds);            
            
          })
          .catch((error) => {          
            console.log(error);
          });
          
    }
    return(
        <>
            <h1>React App</h1>
            Enter city : <input type="text" value={city} onChange={(evt)=>setCity(evt.target.value)}  />
            <input type="button" value="go" onClick={handleClick} />
            <hr />
            {
              records.map((row,i)=>{return(
                <div key={i} className="box"> 
                    <h2>{row.city}</h2>
                    <p>
                        <img alt={row.city} src={row.url} /> <br />
                        {row.temp}
                    </p>
                </div>  
              )})
            }
        </>
    );
}
export default App;