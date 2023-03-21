import {Component} from 'react';
const Employee=(Comp)=>{
    class NewComp extends Component
    {
        render()
        {
            console.log(this.props);
            return(
                <Comp hocEid="E-2023_1" hocSal="23000" {...this.props} />
            );
        }
    }
    return NewComp;
}
export default Employee;