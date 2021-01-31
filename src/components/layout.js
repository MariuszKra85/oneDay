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
import facebook from "../images/social/facebook.svg"
import linkedin from "../images/social/linkedin.svg"
import twitter from "../images/social/twitter.svg"

const StyledSocialWrapper = styled.div`
display: flex;
margin: 20px auto 20px;
justify-content: center;
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
margin: 50px 0 80px;

`

  return (
    <ThemeProvider theme={theme}>
<>
    <GlobalStyle/>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <StyledFooter>
      <StyledSocialWrapper>
    <a href="https://www.facebook.com/norbert.sokolowski.104" aria-label="facebook Icon" ><SocialIcon icon='facebook'/></a>
    <a href="https://www.facebook.com/norbert.sokolowski.104" aria-label="LinkedIn Icon"><SocialIcon icon='linkedin'/></a>
    <a href="https://www.facebook.com/norbert.sokolowski.104" aria-label="Twitter Icon"><SocialIcon icon=''/></a>
    </StyledSocialWrapper>
    <address>
      <h3>Studio One Day</h3>
      <p>Tel:07368 424514</p>
      <p>Mail: <a href="mailto:oneday.studio.uk@gmail.com">oneday.studio.uk@gmail.com</a></p>
    </address>
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
