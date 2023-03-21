import {useMemo,useEffect,useDeferredValue} from 'react';
const ShowList=(props)=>{
    const dv=useDeferredValue(props.input);
    const list=useMemo(()=>{        
        const x=[];
        for(let v=0;v<20000;v++)
        {            
            x.push(<div key={v}>{dv}</div>);
        }
        return x;
    },[dv]);


    useEffect(()=>{
        console.log(props.input," : ",dv);
    },[props.input,dv]);

    return list;
}
export default ShowList;