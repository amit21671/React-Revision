import {Component} from 'react';
const Employee=(Comp,id,sal)=>{
    class NewComp extends Component
    {
        render()
        {            
            return(
                <Comp hocEid={id} hocSal={sal} {...this.props} />
            );
        }
    }
    return NewComp;
}
export default Employee;