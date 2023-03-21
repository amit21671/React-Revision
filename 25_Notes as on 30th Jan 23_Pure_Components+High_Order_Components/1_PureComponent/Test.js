import {PureComponent} from 'react';
class Test extends PureComponent
{
    render()
    {
        console.log("render from Test");
        return(
            <>
                <h2>Test Component</h2>
                <p>
                    Name : {this.props.name}
                </p>
            </>
        );
    }
}
export default Test;