import scrollTo from 'gatsby-plugin-smoothscroll';
import React from 'react';
import styled from 'styled-components';

const createButton = (text, id, reset) =>{
return <button onClick={()=>{
    scrollTo(id);
    reset()

}}>{text}</button>
}

const StyledWrapper = styled.div`
position: fixed;
top: 50%;
right: 10px;
z-index: 10;
display: flex;
flex-direction: column;

button{
    margin: 10px 0;
    color: rgb(20, 20, 20);
    border: none;
    border-radius: 50%;
    width: 43px;
    height: 43px;
    background: rgb(${({theme}) => theme.colors.menuBgColor});
    font-weight: 700;
}

`

const GalleryMenu = ({reset}) => {
    
    return (
        <StyledWrapper>
            {createButton("Land", "#land", reset)}
            {createButton("Port", "#port", reset)}
            {createButton("Fam", "#family", reset)}
        </StyledWrapper>
    );
}

export default GalleryMenu;
