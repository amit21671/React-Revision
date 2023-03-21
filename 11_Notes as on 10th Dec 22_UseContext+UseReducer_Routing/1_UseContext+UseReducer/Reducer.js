export const is={roll:1001,name:'amit'};
export const reducer=(state,action)=>{   
    console.log(action); 
    switch(action.type)
    {
        case "UPDATE" : return {roll:action.payload.roll,name:action.payload.name};
        case "RESET" : return is; 
        default : return state;
    }
}
