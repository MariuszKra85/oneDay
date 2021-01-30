import React from "react"
import Image from "../components/image"
import Carousel from '../components/carousel'
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Image/>
    <Carousel/>
    
  </Layout>
)

export default IndexPage
