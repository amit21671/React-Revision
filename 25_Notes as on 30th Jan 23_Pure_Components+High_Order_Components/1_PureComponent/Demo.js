import {Component} from 'react';
class Demo extends Component
{
    render()
    {
        console.log("render from Demo");
        return(
            <>
                <h2>Demo Component</h2>
                <p>
                    Name : {this.props.name}
                </p>
            </>
        );
    }
}
export default Demo;