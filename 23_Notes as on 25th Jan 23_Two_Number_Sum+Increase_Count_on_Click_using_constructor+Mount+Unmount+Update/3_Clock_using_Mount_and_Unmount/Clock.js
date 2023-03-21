import { Component } from "react"; 
class Clock extends Component
{
    state={dt:new Date()};
    render()
    {
        console.log("from render");
        return(
            <>
                <h2>Time is : {this.state.dt.toLocaleTimeString()}</h2>
            </>
        );        
    }
    componentDidMount()
    {
        this.id=setInterval(()=>{
            this.setState({dt:new Date()});
            console.log("from setInterval");
        },1000);
    }
    componentWillUnmount()
    {
        clearInterval(this.id);
    }
}
export default Clock;