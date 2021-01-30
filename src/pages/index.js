import React from "react"
import Image from "../components/image"
import Carousel from '../components/carousel'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const StyledHeder = styled.h3`
margin: 30px 20px;
letter-spacing: 1.5px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Image/>
    <StyledHeder>„Zdarzają się chwile, gdy nie masz przy sobie aparatu i wówczas widzisz najwspanialszy zachód słońca lub najpiękniejszą scenę, jaką zawsze chciałeś zobaczyć. Nie przejmuj się tym, że nie możesz go sfotografować. Usiądź i rozkoszuj się tym widokiem" - DeGriff.</StyledHeder>
    <Carousel/>
    
  </Layout>
)

export default IndexPage
