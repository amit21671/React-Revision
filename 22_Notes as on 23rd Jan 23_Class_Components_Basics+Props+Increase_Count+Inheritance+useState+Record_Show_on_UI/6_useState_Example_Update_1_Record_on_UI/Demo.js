import {Component} from 'react';
class Demo extends Component
{    
    state={roll:1100,name:"kunal"};
    handleClick=()=>{        
           //this.setState({name:'kunal kapoor'});   
           this.setState({roll:5555,name:'sumit kumar'});
    }
    render()
    {          
        return(
            <>
                <h2>Demo Component</h2>
                <p>
                   Roll : {this.state.roll} <br />
                   Name : {this.state.name}             
                </p>
                <hr />
                <input type="button" value="Click HERE" onClick={this.handleClick} />
            </>
        );
    }
}
export default Demo;