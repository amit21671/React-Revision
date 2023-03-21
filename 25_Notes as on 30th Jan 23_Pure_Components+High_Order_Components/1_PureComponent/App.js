import {Component} from 'react';
import Demo from './Demo';
import Test from './Test';
class App extends Component
{
    state={name:"Anil kumar"};
    render()
    {
        console.log("render from App");
        return(
            <>
                <h1>App Component..Class</h1>
                Name : {this.state.name} <br />
                <Demo name={this.state.name} />
                <hr />
                <Test name={this.state.name} />
            </>
        );
    }
    componentDidMount()
    {
        setInterval(()=>{
            this.setState({name:'Anil_k'});
        },3000);
    }
}
export default App;