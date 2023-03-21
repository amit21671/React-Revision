import Home from './Home';
import About from './About';
import Feedback from './Feedback';
import {Routes,Route,BrowserRouter,Link} from 'react-router-dom';
const App=()=>{ 
    return(
        <BrowserRouter>
           <h1>App Component</h1>            
           <hr />
           <Link to="/">Home</Link>&nbsp;&nbsp;
           <Link to="/about">About</Link>&nbsp;&nbsp;
           <Link to="/feedback">Feedback</Link>&nbsp;&nbsp;
           <hr />

           <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/feedback" element={<Feedback />} />
           </Routes>  
        </BrowserRouter>
    );
}
export default App;