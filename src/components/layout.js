/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import GlobalStyle from "../utility/globalStyle"
import styled, { ThemeProvider } from "styled-components"
import { theme } from "../utility/theme"



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

const StyledFooter = styled.footer`
text-align: center;
margin: 50px 0;

`

  return (
    <ThemeProvider theme={theme}>
<>
    <GlobalStyle/>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <StyledFooter>
        <p>instagram</p>
        © {new Date().getFullYear()}, created by
        {` `}
        <a href="https://www.gatsbyjs.com">Mariusz Krawczyk</a>
      </StyledFooter>
    </>
    </ThemeProvider>
    
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
