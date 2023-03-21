import PT from 'prop-types';
const Demo=(props)=>{
    return(
        <>
            <h2>Demo Component</h2>
            Roll : {props.roll} <br />
            Name : {props.name}
        </>
    );
}

Demo.propTypes={
    roll:PT.number.isRequired,
    name:PT.string.isRequired
};
export default Demo;