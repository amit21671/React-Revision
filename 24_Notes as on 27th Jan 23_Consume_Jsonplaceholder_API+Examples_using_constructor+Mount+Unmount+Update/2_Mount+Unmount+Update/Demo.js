import { Component } from "react";
class Demo extends Component
{   
    constructor(props)
    {
        super(props);
        this.state={count:0};
        console.log(" *****  constructor ******");
    } 
    handleClick=()=>{
        this.setState({count:this.state.count+1});
    }
    render()
    {
        console.log("**** from render ********");
        return(
            <>
                <h2>Demo Component</h2>
                <p>
                    Count is : {this.state.count} <br />
                    <input type="button" value="Increment" onClick={this.handleClick} />
                </p>
            </>
        );
    }  
    componentDidMount()
    {
        console.log("**** componentDidMount ********");
    }  
    componentDidUpdate()
    {
        console.log(" *****  componentDidUpdate *******");
    }
    componentWillUnmount()
    {
        console.log(" ***** commponentWillUnmount *****");
    }


    shouldComponentUpdate(nextProps, nextState)
    {
        console.log("shouldComponentUpdate");
        //console.log(nextProps," : ",nextState);
        //console.log("------------------------------");
        return true;
    }
}
export default Demo;