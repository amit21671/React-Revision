import {Component} from 'react';
class Demo extends Component
{
    render()
    {
        console.log(this.props);
        return(
            <>
                <h2>Demo Component 2.0</h2>
                <p>
                   Roll : {this.props.roll}<br />
                   Name : {this.props.name}
                </p>
            </>
        );
    }
}
export default Demo;