import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
const Products=()=>{
    const[items,setItems]=useState([]);
    useEffect(()=>{      
        axios.get('https://fakestoreapi.com/products')
        .then((response) => {           
            //console.log(response.data);
            setItems(response.data);
        })
        .catch((error) => {            
            console.log(error);
        });      
    },[]);
    return(
        <>
            <h2>Showing All Products</h2>
            {
                items.map(item=>{return(
                    <div key={item.id}>
                        {item.title} <br />
                        <Link to={"/productdetail/"+item.id}>
                        <img src={item.image} width="200" alt={item.title} /> <br />
                        </Link>
                        {item.price}
                        <hr />
                    </div>
                )})
            }
        </>
    );
}
export default Products;