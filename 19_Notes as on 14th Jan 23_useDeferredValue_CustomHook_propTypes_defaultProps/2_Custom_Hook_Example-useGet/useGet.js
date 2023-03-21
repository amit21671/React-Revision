import {useState,useEffect} from 'react';
import axios from 'axios';
const useGet=(url)=>{
    const[records,setRecords]=useState([]);
    useEffect(()=>{
        axios.get(url)
        .then((response) => {            
            //console.log(response.data);
            setRecords(response.data);
        })
        .catch((error) => {           
            console.log(error);
        });
    },[url]);
    return [records];
}
export default useGet;