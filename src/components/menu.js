import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';


const StyledMenu = styled.div`

margin: 10px 0 0 10px;
display: flex;
flex-direction: row;


`
const StyledHamburger = styled.button`
  display: inline-block;
  cursor: pointer;
  position: fixed;
  -webkit-transform: translateY(0);
  transform: translateX(0);
  z-index: 101;
  right: 20px;
  top: 30px;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  padding: 0;
  background: #fff;
	box-shadow: 0px 2px 8px;

    &:hover{
        ${({active})=> active ? 
            ``:(
        `span{
            &:after {
		    top: 11px;
			left: 0px;
			width: 30px;
            };
            &:before{
            top: -11px;
			left: 0px;
			width: 30px;
            };
        }`
        ) }
        
    }

    ${({theme})=> theme.media.desktop.m}{
        display:none;
    }

` 
const StyledBar = styled.span`
display: inline-block;
		position: relative;
		height: ${({active})=>active ? '0' : "2px"} ;
		width: 30px;
		border-radius: 1px;
		background: #293335;
		vertical-align: middle;

        &:before, &:after {
		  display: inline-block;
			position: absolute;
			content: "";
			height: 2px;
			border-radius: 1px;
			background: #293335;
			transition: all 200ms;
		}
		&:before {
		  top: ${({active})=>active ? '0' : "-11px"};
			left: ${({active})=>active ? '0' : "3px"};
			width: ${({active})=>active ? '30px' : "22px"};
            transform: rotate(${({active})=>active ? '45deg' : "0"});
		}
		&:after {
		  top: ${({active})=>active ? '0' : "11px"};
			left: ${({active})=>active ? '0' : "6px"};
			width: ${({active})=>active ? '30px' : "18px"};
            transform: rotate(${({active})=>active ? '-45deg' : "0"});
		}

        &:focus {outline: none};

`
const StyledMenuList = styled.ul`
background-color: rgba(${({theme})=> theme.colors.menuBgColor});

position:fixed;
top:0;
left:0;
width: 100vw;
height: 100vh;
list-style: none;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index:100;
transition: transform 0.5s;
transform: ${({active}) => active ? `translateX(0)` : `translateX(-140vw)`};

li{
    padding: 25px 30px 10px 0;
}
${({theme})=> theme.media.desktop.m}{
    position: relative;
    margin-top: 0;
    max-width: 1400px;
background: none;
height: 10px;
transform: translateX(0);
flex-direction: row;
align-items:flex-start;
justify-content: flex-end;
li{
    margin-right: 10px;
    padding: 0 20px 10px 0;
    a{
        color: ${({theme})=> theme.colors.fontColor};
    }
}
}

`
const StyledLink = styled(Link)`
padding: 10px 10px 0 10px;
border: none;
border-bottom: 2px solid orange;
background: transparent;
color: rgb(30, 30, 30);
font-weight: 600;
font-size: 28px;
transition: all 0.4s;
        &:hover{
            border-bottom: 2px solid rgba(0, 0, 0, 1);
        }

`


const handleActive = (active, setActive) => {
    setActive(!active);
}

const Menu = () => {
    let [active, setActive] = useState(false);
    return (
        <StyledMenu>
            
            <StyledHamburger active={active} onClick={()=>handleActive(active, setActive)} aria-label="Menu">
                <StyledBar active={active}> </StyledBar>
            </StyledHamburger>
            <StyledMenuList active={active}>
                <li><StyledLink onClick={()=>handleActive(active, setActive)} to='/'>Home</StyledLink></li>
                <li><StyledLink onClick={()=>handleActive(active, setActive)} to='/aboutUs'>O nas</StyledLink></li>
                <li><StyledLink onClick={()=>handleActive(active, setActive)} to='/offer'>Oferta</StyledLink></li>
                <li><StyledLink onClick={()=>handleActive(active, setActive)} to='/gallery'>Galeria</StyledLink></li>
                <li><StyledLink onClick={()=>handleActive(active, setActive)} to='/prices'>Cennik</StyledLink></li>
                <li><StyledLink onClick={()=>handleActive(active, setActive)} to='/contact'>Kontakt</StyledLink></li>
            </StyledMenuList>
        </StyledMenu>
    ); 
}

export default Menu
