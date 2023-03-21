import Home from './Home';
import Products from './Products';
import ProductDetail from './ProductDetail';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
const App=()=>{  
    return(
        <Router>                 
            <h1>Shopping cart App</h1>  
            <hr />
            <Link to="/">Home</Link>&nbsp;&nbsp;
            <Link to="/products">Products</Link>
            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/productdetail/:pid" element={<ProductDetail />} />
            </Routes>
        </Router>
     );
}
export default App;