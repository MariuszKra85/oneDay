import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Menu from "./menu"
import facebook from "../images/social/facebook.svg"
import linkedin from "../images/social/linkedin.svg"
import twitter from "../images/social/twitter.svg"
import Image from "./image"

const StyledWrapper = styled.div`
width: 90%;
margin: 20px;
height: 60px;
`
const StyledDiv = styled.div`
width: 60px;
`




const Header = () => <header id="top">
  <StyledWrapper>
<StyledDiv>
  <Image/>
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
