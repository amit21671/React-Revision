import {Component} from 'react';
class Demo extends Component
{
    handleClick=()=>{
        console.log("I am here");
    }
    render()
    {        
        return(
            <>
                <h2>Demo Component</h2>
                <p>
                   Some text goes here
                </p>
                <hr />
                <input type="button" value="Click HERE" onClick={this.handleClick} />
            </>
        );
    }
}
export default Demo;