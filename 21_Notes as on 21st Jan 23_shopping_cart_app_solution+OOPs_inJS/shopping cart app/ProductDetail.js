import {useParams,Link} from 'react-router-dom';
import {useEffect,useState} from 'react';
import axios from 'axios';
const ProductDetail=()=>{
    const{pid}=useParams();
    const[items,setItems]=useState([]);
    useEffect(()=>{      
        axios.get('https://fakestoreapi.com/products/'+pid)
        .then((response) => {           
            console.log(response.data);
            const rcds=[...items];
            rcds.push(response.data);
            setItems(rcds);
        })
        .catch((error) => {            
            console.log(error);
        });      
    },[]);
    return(
        <>
            <h2>Showing detail of Product no : {pid}</h2>
            {
                items.map(item=>{return(
                    <div key={item.id}>
                        {item.category} <br />
                        {item.title} <br />                       
                        <img src={item.image} alt={item.title} /> <br />                       
                        {item.price} <br />
                        {item.description}    <br />
                        Rating : {item.rating.rate}                   
                    </div>
                )})
            }
            <hr />
            <Link to="/products">Back to Products</Link>
        </>
    );
}
export default ProductDetail;