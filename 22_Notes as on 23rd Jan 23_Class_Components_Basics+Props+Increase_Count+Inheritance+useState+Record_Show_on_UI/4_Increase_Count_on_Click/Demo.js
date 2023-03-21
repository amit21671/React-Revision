import {Component} from 'react';
class Demo extends Component
{
    state={count:0};
    handleClick=()=>{
        //this.setState({count:5000});
        //this.setState({count:this.state.count+1});
        let c=this.state.count;
        c=c+1;
        this.setState({count:c});
    }
    render()
    {   
        console.log("render from Demo");     
        return(
            <>
                <h2>Demo Component</h2>
                <p>
                   Count is : {this.state.count}
                </p>
                <hr />
                <input type="button" value="Click HERE" onClick={this.handleClick} />
            </>
        );
    }
}
export default Demo;