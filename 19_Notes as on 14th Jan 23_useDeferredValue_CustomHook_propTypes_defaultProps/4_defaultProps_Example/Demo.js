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
    roll:PT.number,
    name:PT.string
};

Demo.defaultProps={
    roll:0,
    name:"not given yet"
};
export default Demo;