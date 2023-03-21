import {useParams,useLocation,useNavigate} from 'react-router-dom';
const About=()=>{
    const{fullname}=useParams();
    const{pathname}=useLocation();
    const nav=useNavigate();
    return(
        <>
            <h2>About</h2>
            <p>
                About related stuff goes here. About related stuff goes here. About related stuff goes here. About related stuff goes here. About related stuff goes here. About related stuff goes here. About related stuff goes here. 
            </p>
            <p>
                Name : {fullname} <br />
                Path name : {pathname}
            </p>
            <p>
                <input type="button" value="Click Here" onClick={()=>nav("/")} />
            </p>
        </>
    );
}
export default About;