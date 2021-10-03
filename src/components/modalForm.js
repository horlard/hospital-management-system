import React from 'react';
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
import {appContext} from '../App'
import {connect} from 'react-redux'
import {addPatient} from '../actions'
import {addDoctor} from '../actions'





const Container = styled.div`
        
    `
    const Header= styled.div`
        display: flex;
        align-items:center;
        justify-content:space-between;
        padding: 20px;
        border-bottom: 1px solid #eee;
        &>span {
            font-size: 20px;
            font-weight:900;
            color: #c1b6b6;
            cursor:pointer;
        }
    
    `

    const InputFields = styled.div`
        padding: 20px;
        &>label {
            width: 87px;
            display:inline-block;
            margin-right: 5%;
        }
        &>input {
            width: 70%;
            font-size:16px;
            font-family:inherit;
            padding: 13px;
            border-radius:3px;
            border:1px solid #ddd;
            &:focus {
                outline:none;
            }
        }
        &>textarea {
            font-size:16px;
            width: 70.5%;
            max-width:70.5%;
            padding:11px;
            font-family:inherit;
            border-radius:3px;
            border:1px solid #ddd;
            &:focus{
                outline:none;
            }
        }
    
    `

    const FormBtns= styled.div`
        text-align:right;
        padding: 30px 20px 20px 0;
        border-top: 1px solid #ddd;
        &>span:nth-child(1) {
            border: 1px solid #ddd;
            padding:10px 15px 10px 15px;
            margin-right:5px;
            border-radius:3px;
            cursor:pointer;
        }

        &>span:nth-child(2) {
            border: 1px solid #3f00ff70;
            padding:10px;
            color:#fff;
            background: #3f00ff70;
            border-radius:3px;
            cursor:pointer;
        }
    
    `
    
    
class ModalForm extends React.Component {

    state={
        firstName : '',
        lastName : '',
        insurance : '',
        phoneNo : '',
        address : '',
        formValues : {}
    }

    onSubmitHandler=()=> {
        
        this.setState((state)=> ({
            formValues: {firstName:state.firstName,lastName:state.lastName,insurance:state.insurance,phone:state.phoneNo,address: state.address, id:uuidv4()}
        }),()=> {
            if (this.props.title==='Patients') {
                this.props.addPatient(this.state.formValues)
                this.props.close()
            }else if (this.props.title==='Doctors') {
                this.props.addDoctor(this.state.formValues)
                this.props.close()
            }
            

        })
    }

    firstNameHandler=(e)=> {
        this.setState({firstName : e.target.value})

    }

    lastNameHandler=(e)=> {
        this.setState({lastName : e.target.value})
    }

    insuranceHandler=(e)=> {
        this.setState({insurance : e.target.value})
    }

    phoneHandler=(e)=> {
        this.setState({phoneNo : e.target.value})
    }

    addressHandler=(e)=> {
        this.setState({address : e.target.value})
    }

    formHandler=(e)=> {
        this.setState({[e.target.name]:e.target.value})
    }

    

render() {
    const {title} = this.props;
    return (
        <Container>
            <appContext.Consumer>
                {
                    Context=> (
                        <>
                        <Header>
                            <h3>{title}</h3>
                            <span onClick={()=>Context.closeModal()}>x</span>
                        </Header>
                        <InputFields>
                            <label htmlFor="first">First Name :</label>
                            <input 
                            type="text" 
                            id='first' 
                            name='firstName' 
                             
                            onChange={this.firstNameHandler}
                            />
                        </InputFields>
                        <InputFields>
                            <label htmlFor="last">Last Name :</label>
                            <input 
                            type="text" 
                            id='last'
                            name='lastName' 
                             
                            onChange={this.lastNameHandler} 
                            />
                        </InputFields>
                        {
                            title==='Patients' ? <InputFields>
                                                    <label htmlFor="insurance">Insurance No :</label>
                                                    <input 
                                                    type="text" 
                                                    id='insurance'
                                                    name='insurance' 
                        
                                                    onChange={this.insuranceHandler} 
                                                    />
                                                 </InputFields> : <></>
                        }
                        <InputFields>
                            <label htmlFor="phone">Phone Number :</label>
                            <input 
                            type="text" 
                            id='phone'
                            name='phoneNo' 
                             
                            onChange={this.phoneHandler}
                            />
                        </InputFields>
                        <InputFields>
                            <label htmlFor="address">Address :</label>
                            <textarea 
                            id='address'
                            name='address' 
                            onChange={this.addressHandler}
                            />
                        </InputFields>
                        <FormBtns>
                            <span onClick={()=> Context.closeModal()}>Close</span>
                            <span onClick={()=>{
                                this.onSubmitHandler()
                                
                            }}>Save Changes</span>
                        </FormBtns>
                        </>
                    )
}
            </appContext.Consumer>
        </Container>
        
    )
}
}



export default connect(null,{addPatient,addDoctor})(ModalForm);