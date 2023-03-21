import {Link} from 'react-router-dom';
const Menubar=()=>{
    const nm="Kapil kumar";
    return(
        <>
           <Link to="/">Home</Link>&nbsp;&nbsp;
           <Link to={"/about/"+nm}>About</Link>&nbsp;&nbsp;
           <Link to="/feedback">Feedback</Link>&nbsp;&nbsp;
        </>
    );
}
export default Menubar;