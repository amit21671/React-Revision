import Home from './Home';
import About from './About';
import Feedback from './Feedback';
import {Routes,Route} from 'react-router-dom';
import Menubar from './Menubar';
import ErrorMsg from './ErrorMsg';
const App=()=>{ 
    return(
        <>
           <h1>App Component 2.0</h1>            
           <hr />
           <Menubar /> 
           <hr />

           <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about/:fullname" element={<About />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="*" element={<ErrorMsg />} />
           </Routes>  
        </>
    );
}
export default App;