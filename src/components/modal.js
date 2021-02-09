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
opacity: ${({modalState})=> modalState ? '1' : '0'};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgba(200, 200, 200, 0.4);
z-index: 200;
transition: all 0.4s;

button{
    position: fixed;
    top: 30px;
    right: 50px;
    background-color: ${({theme})=> theme.colors.iconColor};
    border: none;
    border-radius: 20px;
    padding: 10px;
}
`
const Img = styled(GatsbyImage)`
margin: 0 auto;
    width: 100%;
    height: 90%;
`

const Modal = ({img, modalState, changeState}) => {
    return (
        <ModalWrapper modalState={modalState}>
            {img ? <Img imgStyle={{objectFit: "contain" }} objectFit="contain" fluid={img.node.childImageSharp.fluid}/> : null }
            <button onClick={()=>changeState(!modalState)}>Close</button>
        </ModalWrapper>
    );
}

export default Modal;
