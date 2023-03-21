import * as actions from './Actions';
const is={count:0};
const reducer=(state=is,action)=>{
    console.log(action);
    switch(action.type)
    {
        case actions.INC : return{count:state.count+1};
        case actions.DEC : return{count:state.count-1};
        default: return state;
    }    
}
export default reducer;