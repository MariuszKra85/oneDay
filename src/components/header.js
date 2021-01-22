import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Menu from "./menu"

const StyledWrapper = styled.div`
width: 90%;
margin: 20px auto 0;
`

const Header = ({ siteTitle }) => <header>
  <StyledWrapper>
    <p>social</p>
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
