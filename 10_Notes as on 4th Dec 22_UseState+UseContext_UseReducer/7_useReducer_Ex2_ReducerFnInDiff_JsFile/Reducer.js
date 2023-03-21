export const is={count:0};
export const reducer=(state,action)=>{    
    switch(action.type)
    {
        case "INC" : return{count:state.count+1};
        case "DEC" : return{count:state.count-1};
        case "RESET" : return is; 
        case "INC_BY_VAL" : return {count:state.count+action.payload};
        case "DEC_BY_VAL" : return {count:state.count-action.payload};
        default : return state;
    }
}
