import React from 'react';
import styled from 'styled-components';

const Header = () => {

    const Container= styled.div`
        width:100%;
        background: #0000ff5c;

    
    
    `

    const H2= styled.h2`
        color: #fff;
        padding: 20px;
    `
    return (
       <Container>
           <H2>Hospital Management System</H2>
       </Container>
    )
}

export default Header;
