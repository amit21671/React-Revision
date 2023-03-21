import Home from './Home';
import About from './About';
import Feedback from './Feedback';
import {Routes,Route} from 'react-router-dom';
import Menubar from './Menubar';
import {Navigate} from 'react-router-dom';
import ErrorMsg from './ErrorMsg';
const App=()=>{ 
    const isLogged=true;
    return(
        <>
           <h1>App Component 2.0</h1>            
           <hr />
           <Menubar /> 
           <hr />

           <Routes>
                <Route path="/" element={<Home />} />

                {
                    isLogged?
                    <>
                            <Route path="/about/:fullname" element={<About />} />
                    </>
                    :
                    <>
                            <Route path="/about/:fullname" element={<Navigate to="/" />} />
                    </>
                }
                
                
                <Route path="/feedback" element={<Feedback />} />
                <Route path="*" element={<ErrorMsg />} />
           </Routes>  
        </>
    );
}
export default App;