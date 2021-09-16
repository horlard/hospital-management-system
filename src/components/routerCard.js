import React from 'react';
import styled from 'styled-components'


const RouterCard = ()=> {
    const Container = styled.div`
        width: 50%;
        background: #fff;
        margin:25px auto 0 auto;

    `
    const H3= styled.h3`
        color: #000;
        padding: 15px;
    `
    return (
        <Container>
            <H3>Home</H3>
        </Container>
    )
}

export default RouterCard;