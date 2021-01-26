import scrollTo from 'gatsby-plugin-smoothscroll';
import React from 'react';
import styled from 'styled-components';

const createButton = (text, id) =>{
return <button onClick={()=>scrollTo(id)}>{text}</button>
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
    border: none;
    border-radius: 50%;
    width: 43px;
    height: 43px;
    background: rgb(${({theme}) => theme.colors.menuBgColor});
    font-weight: 700;
}

`

const GalleryMenu = () => {
    
    return (
        <StyledWrapper>
            {createButton("Land", "#land")}
            {createButton("Port", "#port")}
            {createButton("Fam", "#family")}
        </StyledWrapper>
    );
}

export default GalleryMenu;
