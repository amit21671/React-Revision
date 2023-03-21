import {Component} from 'react';
import { connect } from 'react-redux';
class Demo extends Component
{
    render()
    {
        return(
            <>
                <h2>Demo Component</h2>
                Count is : {this.props.ct} <hr />
                <input type="button" value="Increment" onClick={this.props.onInc} /> 
                <input type="button" value="Decrement" onClick={this.props.onDec} /> 
            </>
        );
    }
}

const mapStateToProps=(state)=>{
    return{ct:state.count};
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onInc:()=>dispatch({type:"inc"}),
        onDec:()=>dispatch({type:"dec"})
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Demo);