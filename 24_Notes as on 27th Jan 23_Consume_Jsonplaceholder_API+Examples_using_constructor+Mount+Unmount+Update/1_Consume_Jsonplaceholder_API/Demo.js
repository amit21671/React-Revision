import {Component} from 'react';
import axios from 'axios';
class Demo extends Component
{
    state={records:[]};
    render()
    {
        //console.log(this.state.records);
        return(
            <>
                <h2>Demo Component</h2>
                {
                    this.state.records.map(row=>{return(
                        <div key={row.id}>
                            <h3>{row.name}</h3>
                            <p>
                                {row.email} <br />
                                {row.website} <br />
                            </p>
                            <hr />
                        </div>
                    )})
                }
            </>
        );
    }
    componentDidMount()
    {
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {               
                //console.log(response.data);
                this.setState({records:response.data});
            })
            .catch((error) => {                
                console.log(error);
            });
            
    }
}
export default Demo;