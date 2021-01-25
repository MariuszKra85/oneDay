import React from "react"
import AboutMe from "../components/aboutme"
import Image from "../components/image"
import Carousel from '../components/carousel'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Offer from "../components/offer"
import Contact from "../components/contact"
import Map from "../components/map"
import PhotoSamp from '../components/photoSamp'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Image/>
    <AboutMe/>
    <Carousel/>
    <Offer/>
    <PhotoSamp/>
    <Contact/>
    <Map/>
    
  </Layout>
)

export default IndexPage
