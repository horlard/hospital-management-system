import React from 'react';
import ReactDOM from 'react-dom';
import styled, {keyframes} from 'styled-components';



const Modal = (props) => {

    const Bounce = keyframes`
    from,
    60%,
    75%,
    90%,
    to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -3000px, 0);
      transform: translate3d(0, -3000px, 0);
    }
  
    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, 25px, 0);
      transform: translate3d(0, 25px, 0);
    }
  
    75% {
      -webkit-transform: translate3d(0, -10px, 0);
      transform: translate3d(0, -10px, 0);
    }
  
    90% {
      -webkit-transform: translate3d(0, 5px, 0);
      transform: translate3d(0, 5px, 0);
    }
  
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  `;
    const Wrapper = styled.div`
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        display: flex;
        align-items: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 10;
`

    const Container = styled.div`
        margin:auto;
        background: #fff;
        width: 40%;
        box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
        border-radius: 6px;
        animation: ${Bounce};
        animation-duration: 1000ms;
        
    `

    return ReactDOM.createPortal(
        <Wrapper>
            <Container>
                {props.children}
            </Container>
        </Wrapper>,
        document.querySelector('#modal-overlay')
    )
}


export default Modal;