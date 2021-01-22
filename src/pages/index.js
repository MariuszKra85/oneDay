import React from "react"
import AboutMe from "../components/aboutme"
import Image from "../components/image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Image/>
    <AboutMe/>
  </Layout>
)

export default IndexPage
