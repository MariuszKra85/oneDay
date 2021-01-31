import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Menu from "./menu"
import facebook from "../images/social/facebook.svg"
import linkedin from "../images/social/linkedin.svg"
import twitter from "../images/social/twitter.svg"

const StyledWrapper = styled.div`
width: 90%;
margin: 20px;
height: 60px;
`
const StyledDiv = styled.div`
width: 60px;

&::before{
  z-index:101;
  width: 38px;
  height: 38px;
  content: "";
position: fixed;
border-radius: 50%;
top: 31px;
left: 21px;
background-color: rgba(10,10,10, 0.6);
}

`

const SocialIcon = styled.div`
z-index:102;
position: fixed;
top: 30px;
left: 20px;
width: 40px;
height: 40px;
background-color: orange;
mask: ${({icon}) => {if(icon === 'facebook'){
    return( `url(${facebook}) no-repeat center `)
}
if(icon=== 'linkedin'){
    return(`url(${linkedin}) no-repeat center`)
}else{
    return(`url(${twitter}) no-repeat center`) 
} 
}};



`


const Header = () => <header id="top">
  <StyledWrapper>
<StyledDiv>
  <a href="https://www.facebook.com/ONE-DAY-107150937749715/" aria-label="facebook Icon"><SocialIcon icon='facebook'/></a>
</StyledDiv>
    <Menu/>
  </StyledWrapper>
  
</header>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
