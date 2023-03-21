import {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './Actions';
class Demo extends Component
{
    render()
    {
        return(
            <>
                <h2>Demo Component 2.0</h2>
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
        onInc:()=>dispatch({type:actions.INC}),
        onDec:()=>dispatch({type:actions.DEC})
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Demo);