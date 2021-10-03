import React from 'react'
import styled from 'styled-components'
import CardFilters from '../components/cardFilter'


const Card = (props) => {
    const Container= styled.div`
        width: 65%;
        background: #fff;
        margin : 20px auto 0 auto;
        border-radius: 3px;
    
    `


    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default Card;