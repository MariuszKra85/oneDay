import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Menu from "./menu"
import facebook from "../images/social/facebook.svg"
import linkedin from "../images/social/linkedin.svg"
import twitter from "../images/social/twitter.svg"

const StyledWrapper = styled.div`
width: 90%;
margin: 20px auto 0;
`
const SocialIcon = styled.div`
width: 20px;
height: 20px;
margin-right: 20px;
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
const StyledSocialWrapper = styled.div`
display: flex;
margin: 20px auto 0;
`

const Header = ({ siteTitle }) => <header id="top">
  <StyledWrapper>
    <StyledSocialWrapper>
    <a href="https://www.facebook.com/norbert.sokolowski.104"><SocialIcon icon='facebook'/></a>
    <a href="https://www.facebook.com/norbert.sokolowski.104"><SocialIcon icon=''/></a>
    </StyledSocialWrapper>
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
