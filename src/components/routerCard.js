import React from 'react';
import styled from 'styled-components'
import {appContext} from '../App'
import ModalForm from './modalForm'


const RouterCard = ({ title })=> {
    const Container = styled.div`
        width: 70%;
        background: #fff;
        margin:25px auto 0 auto;
        border-radius: 3px;
        display:flex;
        justify-content: space-between;
        align-items:center;

    `
    const H3= styled.h3`
        color: #000;
        padding: 15px;
    `
    const P = styled.p`
        border: 1px solid #3f00ff70;
        background: #3f00ff70;
        padding: 7px 20px 7px 20px;
        margin-right: 2%;
        border-radius: 3px;
        color:#fff;
        cursor:pointer;
    
    `
    return (
        <Container>
            <H3>{title}</H3>
        <appContext.Consumer>
            {
                context=> (
                  <P onClick={()=>context.openModal(<ModalForm/>)}>
                    {
                        title === 'Appointments' ? 'Book' : 'Add'
                    }
                    &nbsp;
                    {title}
                  </P>
                )
            }
            
        </appContext.Consumer>
        </Container>
    )
}

export default RouterCard;