import React from "react"
import Image from "../components/image"
import Carousel from '../components/carousel'
import Layout from "../components/layout"
import SEO from "../components/seo"
import useWindowWidth from '../utility/useWindowWidth'
import IndexText from "../components/indexText"


const IndexPage = () => { 
  let a = useWindowWidth();
  return (
  <Layout>
    <SEO title="Home" />
    {a ? (a < 770 ? ( 
      <>
    <Image />
      <IndexText/>
    <Carousel size="max-width:500px"/>
    </>
    ):(
     <>
     <Carousel desktop/>
     <IndexText desktop/>
     </>)): 'loading...'}
    
   
    
  </Layout>
)}

export default IndexPage
