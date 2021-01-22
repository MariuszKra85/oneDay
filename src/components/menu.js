import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';


const StyledMenu = styled.div`

margin: 20px 0 0 10px;
display: flex;
flex-direction: row;


`
const StyledName = styled.div`
font-size: 32px;
font-weight: 700;



`
const StyledHamburger = styled.button`
  display: inline-block;
  cursor: pointer;
  position: fixed;
  z-index: 101;
  right: 20px;
  top: 20px;
  width: 50px;
  height: 50px;
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

    ${({theme})=> theme.media.tablet}{
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
    padding: 20px;
    a{
        font-size: 20px;
        border-bottom: 2px solid rgba(0, 0, 0, 0);
        transition: all 0.4s;
        &:hover{
            border-bottom: 2px solid rgba(0, 0, 0, 1);
        }
    }
}

${({theme})=> theme.media.tablet}{
    position: relative;
    width: 70%;
    height: 50px;
    flex-direction: row;
    justify-content: start;
    margin-left: 30px;
    transform: translateX(0);
    li{
        a{
            font-size: 24px;
            white-space: nowrap;
    }
}
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
                <li><Link onClick={()=>handleActive(active, setActive)} to='/about'>About Me</Link></li>
                <li><Link onClick={()=>handleActive(active, setActive)} to='/article'>Article</Link></li>
                <li><Link onClick={()=>handleActive(active, setActive)} to='/gallery'>Gallery</Link></li>
                <li><Link onClick={()=>handleActive(active, setActive)} to='/contact'>Contact</Link></li>
            </StyledMenuList>
        </StyledMenu>
    ); 
}

export default Menu
