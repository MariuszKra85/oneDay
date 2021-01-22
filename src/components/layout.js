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
import { ThemeProvider } from "styled-components"
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

  return (
    <ThemeProvider theme={theme}>
<>
    <GlobalStyle/>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, created by
        {` `}
        <a href="https://www.gatsbyjs.com">Mariusz Krawczyk</a>
      </footer>
    </>
    </ThemeProvider>
    
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
