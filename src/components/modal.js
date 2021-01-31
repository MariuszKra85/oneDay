import GatsbyImage from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
display: ${({modalState})=> modalState ? 'block' : 'none'};
position: fixed;
top:${({modalState})=> modalState ? '0' : '50%'};
left:${({modalState})=> modalState ? '0' : '50%'};
width: ${({modalState})=> modalState ? '100vw' : '0vw'};
height: ${({modalState})=> modalState ? '100vh' : '0vh'};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgba(200, 200, 200, 0.4);
z-index: 200;
transition: all 0.4s;
div{
    width: 90%;
}
button{
    display: ${({modalState})=> modalState ? 'block' : 'none'};
}
`

const Modal = ({img, modalState, changeState}) => {
    return (
        <ModalWrapper modalState={modalState}>
            {console.log(changeState)}
            {img ? <GatsbyImage fluid={img.node.childImageSharp.fluid}/> : null }
            <button onClick={()=>changeState(!modalState)}>Close</button>
        </ModalWrapper>
    );
}

export default Modal;
