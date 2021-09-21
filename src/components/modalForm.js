import React from 'react';
import styled from 'styled-components'
import {appContext} from '../App'

const ModalForm =()=> {
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





    return (
        <Container>
            <Header>
                <h3>Patients</h3>
                <appContext.Consumer>
                    {
                        Context=> (
                            <span onClick={()=> Context.closeModal()}>x</span>
                        )
                    }
                </appContext.Consumer>
                
            </Header>
        <form>
            <InputFields>
                <label htmlFor="first">First Name :</label>
                <input type="text" id='first' required/>
            </InputFields>
            <InputFields>
                <label htmlFor="last">Last Name :</label>
                <input type="text" id='last'/>
            </InputFields>
            <InputFields>
                <label htmlFor="insurance">Insurance No :</label>
                <input type="text" id='insurance'/>
            </InputFields>
            <InputFields>
                <label htmlFor="phone">Phone Number :</label>
                <input type="text" id='phone'/>
            </InputFields>
            <InputFields>
                <label htmlFor="address">Address :</label>
                <textarea id='address'/>
            </InputFields>
            <FormBtns>
                <span>Close</span>
                <span>Save Changes</span>
            </FormBtns>
        </form>
        </Container>
        
    )
}

export default ModalForm;