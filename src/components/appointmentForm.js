import React from 'react';
import styled from 'styled-components'
import {appContext} from '../App'
import {connect} from 'react-redux'
import {addAppointments} from '../actions'



const Header= styled.div`
        display: flex;
        align-items:center;
        justify-content:space-between;
        padding: 20px;
        border-bottom: 1px solid #eee;
        margin-bottom: 5%;
        &>span {
            font-size: 20px;
            font-weight:900;
            color: #c1b6b6;
            cursor:pointer;
        }
    
    `

    const InputFields = styled.div`
            padding: 20px;
            margin-top: -20px;
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
            `
    const Span = styled.span`
                width: 87px;
                display:inline-block;
                margin-right: 5%;
    `
    const Select = styled.div`
        margin-left: 20px;
        &:not(:last-child) {
            padding-bottom: 20px;
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

    const Dropdown = styled.select`
        width: 72%;
        border-radius: 3px;
        background-color: transparent;
        border:1px solid #ddd;
        font-size: 16px;
        font-weight: normal;
        font-family: inherit;
        appearance: none;
        padding: 13px;
        &:focus {
        outline: none;
        }
        &:not(:last-child) {
        margin-bottom: 10px;
        }
        appearance: none;
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xLjQxIDAuMjk1TDYgNC44NzVMMTAuNTkgMC4yOTVMMTIgMS43MDVMNiA3LjcwNUwwIDEuNzA1TDEuNDEgMC4yOTVaIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjU0Ii8+Cjwvc3ZnPgo=');
        background-size: 0.9em;
        background-position: calc(100% - 1.3em) center;
        background-repeat: no-repeat;
    `;


class AppointmentForm extends React.Component {

    state= {
        patient: '',
        doctor: '',
        date: '',
        time: '',
        formValues:{}
    }

    patientHandler=(e)=> {
        this.setState({patient:e.target.value})
    }
    doctorHandler=(e)=> {
        this.setState({doctor:e.target.value})
    }
    dateHandler=(e)=> {
        this.setState({date:e.target.value})
    }
    timeHandler=(e)=> {
        this.setState({time:e.target.value})
        console.log(e.target.value)
    }

    onSubmitHandler=()=> {
        console.log(this.state);

        this.setState(state=>({
            formValues:{
                doctor: state.doctor,
                patient: state.patient,
                date: JSON.stringify(new Date(state.date).toDateString()),
                time: state.time
            }
        }),()=> {
            this.props.addAppointments(this.state.formValues)
            this.props.close()
        })
        
    }


render() {
    return (
        <div>
            <appContext.Consumer>
                {
                    context => (
                        <>
                        <Header>
                            <h3>Appointment</h3>
                            <span onClick={()=> context.closeModal()}>x</span>
                        </Header>
                        <Select>
                        <Span>Doctor :</Span>
                        <Dropdown onChange={this.doctorHandler} value={this.state.doctor}>
                            <option value="Doctor">Doctor</option>
                            <option value="Saulih">Saulih</option>
                            <option value="Yussuff">Yussuff</option>
                            <option value="Sulaiman">Sulaiman</option>
                        </Dropdown>
                        </Select>
                        <Select>
                        <Span>Patient :</Span>
                        <Dropdown onChange={this.patientHandler} value={this.state.patient}>
                            <option value="Patient">Patient</option>
                            <option value="Nasir">Nasir</option>
                            <option value="Abolaji">Abolaji</option>
                            <option value="Bolakale">Bolakale</option>
                        </Dropdown>
                        </Select>
                        <InputFields>
                            <label htmlFor="Date">Appointment Date :</label>
                            <input 
                            type="date" 
                            id='Date' 
                            onChange={this.dateHandler}
                            value={this.state.date}
                            />
                        </InputFields>
                        <InputFields>
                            <label htmlFor='time'>Time :</label>
                            <input 
                            type="time" 
                            id='time' 
                            onChange={this.timeHandler}
                            value={this.state.time}
                            />
                        
                        </InputFields>
                        <FormBtns>
                            <span onClick={()=> context.closeModal()}>Close</span>
                            <span onClick={()=>{
                                this.onSubmitHandler()
                                
                            }}>Save Changes</span>
                        </FormBtns>
                        </>
                    )
                }
            </appContext.Consumer>
            
        </div>
    
    )
 }
}




export default connect(null,{addAppointments})(AppointmentForm);