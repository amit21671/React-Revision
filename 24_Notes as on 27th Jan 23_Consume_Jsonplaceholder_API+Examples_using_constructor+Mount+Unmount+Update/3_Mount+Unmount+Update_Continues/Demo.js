import { Component } from "react";
class Demo extends Component
{   
    constructor(props)
    {
        super(props);       
        console.log(" *****  constructor ******");       
    }
   
    render()
    {
        console.log("**** from render ********");        
        return(
            <>
                <h2>Demo Component</h2>  
                Name : {this.props.name}             
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
}
export default Demo;