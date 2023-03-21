import {Component} from 'react';
import './Demo.css';
class Demo extends Component
{    
    state={
            records:[
                        {roll:1001,name:'anil'},
                        {roll:1002,name:'deepak'},
                        {roll:1003,name:'amit'},
                        {roll:1004,name:'rahul'},
                        {roll:1005,name:'rajiv'}
                    ]
          };   
    render()
    {          
        return(
            <>
                <h2>Demo Component</h2>                
                <hr />
                {
                    this.state.records.map(row=>{return(
                        <div key={row.roll} className="box">
                            <h3>{row.roll}</h3>
                            <p>{row.name}</p>
                        </div>
                    )})
                }

            </>
        );
    }
}
export default Demo;