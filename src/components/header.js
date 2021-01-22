import PropTypes from "prop-types"
import React from "react"
import Menu from "./menu"



const Header = ({ siteTitle }) => <header>
  <div>
    <p>social</p>
  </div>
  <Menu/>
</header>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
