import { Component } from "react";
class Demo extends Component
{
    state={fn:"",sn:"",res:""};
    handleChange=(evt)=>{
        this.setState({[evt.target.name]:evt.target.value});
    }   
    handleClick=()=>{
        const a=parseInt(this.state.fn);
        const b=parseInt(this.state.sn);
        const c=a+b;
        this.setState({res:c});
    }
    render()
    {
        return(
            <>
                <h2>Demo Component</h2>
                First number : <input type="text" name="fn" value={this.state.fn}  onChange={this.handleChange} /><br />
                Second number : <input type="text" name="sn" value={this.state.sn} onChange={this.handleChange} /><br />
                Result : <input type="text" value={this.state.res} readOnly /> <br />
                <input type="button" value="add" onClick={this.handleClick} />
            </>
        );
    }
    
}
export default Demo;