import {Component} from 'react';
class Demo extends Component
{    
    constructor(props)
    {
        super(props);
        this.state={count:0};
    }
    handleClick=()=>{        
        this.setState({count:this.state.count+1});        
    }
    render()
    {   
        console.log("render from Demo");     
        return(
            <>
                <h2>Demo Component 2.0</h2>
                <p>
                   Count is : {this.state.count} <br />                  
                </p>
                <hr />
                <input type="button" value="Click HERE" onClick={this.handleClick} />
            </>
        );
    }
}
export default Demo;