import {useState} from 'react';
const Calculator=()=>{
    const[data,setData]=useState({fn:"",opt:"",res:""});
    const handleNo=(evt)=>{
        if(data.res==="")
        {
            setData({...data,res:evt.target.value});
        }
        else 
        {
            setData({...data,res: data.res+evt.target.value});
        }
    }
    const handleOpt=(evt)=>{
        setData({...data,fn:data.res,opt:evt.target.value,res:""});
    }
    const handleEql=()=>{
        let a=Number(data.fn);
        let b=Number(data.res);
        let c="";
        switch(data.opt)
        {
            case "+" : c=a+b;
                        break;
            case "-" : c=a-b;
                        break;
            case "*" : c=a*b;
                        break;
            case "/" : c=parseInt(a/b);
                        break;        
        }
        setData({fn:"",opt:"",res:c});
    }
    const handleClr=()=>{
        setData({fn:"",opt:"",res:""});
    }
    console.log(data);
    return(
        <>
            <input type="text" readOnly value={data.res} /> <br />
            <input type="button" value="1" onClick={handleNo} />
            <input type="button" value="2" onClick={handleNo} />
            <input type="button" value="3" onClick={handleNo} />
            <input type="button" value="4" onClick={handleNo} /> <br />
            <input type="button" value="5" onClick={handleNo} />
            <input type="button" value="6" onClick={handleNo} />
            <input type="button" value="7" onClick={handleNo} />
            <input type="button" value="8" onClick={handleNo} /> <br />
            <input type="button" value="9" onClick={handleNo} />
            <input type="button" value="0" onClick={handleNo} />

            <input type="button" value="+" onClick={handleOpt} />
            <input type="button" value="-" onClick={handleOpt} /> <br />
            <input type="button" value="*" onClick={handleOpt} />
            <input type="button" value="/" onClick={handleOpt} />
            
            <input type="button" value="=" onClick={handleEql} />
            <input type="button" value="CLR" onClick={handleClr} />

        </>
    );
}
export default Calculator;