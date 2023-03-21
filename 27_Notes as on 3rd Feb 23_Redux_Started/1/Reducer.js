const is={count:0};

const reducer=(state=is,action)=>{
    console.log(action);
    switch(action.type)
    {
        case "inc" : return{count:state.count+1};
        case "dec" : return{count:state.count-1};
        default: return state;
    }    
}
export default reducer;