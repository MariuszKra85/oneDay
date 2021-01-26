import React, { useState } from "react"
import { Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from "styled-components"
import GalleryMenu from "../components/galleryMenu"

const showImages = (images) =>{
  return images.map(e => (<Img fluid={e.node.childImageSharp.fluid}></Img>))
}
const settGallery = (gal, set, photo) =>{
  if(gal.length === 10 ){
    set(photo)
  }else{
    set(photo.slice(0, 10))
  }
}

const GalleryWrapper = styled.div`
text-align: center;
`

const Gallery = () => {
  const [gallery, setGallery] = useState("all")
  const photos = useStaticQuery(
    graphql`
    {
land : allFile(filter: {relativePath: {regex: "/land/"}}) {
edges {
  node {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  }
}

port: allFile(filter: {relativePath: {regex: "/port/"}}) {
edges {
  node {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  }
}
family: allFile(filter: {relativePath: {regex: "/family/"}}) {
edges {
  node {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  }
}
}`
)

  const [shortArrLand, setShortArrLand] =useState(photos.land.edges.slice(0, 10));
  const shortArrPort = photos.port.edges.slice(0, 10);
  const shortArrFamily = photos.family.edges.slice(0, 10);

  return(
  <Layout>
<SEO title="Gallery"/>
<GalleryMenu/>
<Link to='/'>home</Link>
<GalleryWrapper id='land'>
  <h3>Landscapes</h3>
  {photos ? showImages(shortArrLand) : null}
  <p><button onClick={()=> settGallery(shortArrLand, setShortArrLand, photos.land.edges)}>show more...</button> </p>
</GalleryWrapper>
<GalleryWrapper id='port'>
  <h3>Portraits</h3>
  {photos ? showImages(shortArrPort) : null}
  <p><button onClick={()=> setShortArrLand(photos.port.edges)}>show more...</button></p>
</GalleryWrapper>
<GalleryWrapper id='family'>
  <h3>Family</h3>
  {photos ? showImages(shortArrFamily) : null}
  <p><button onClick={()=> setShortArrLand(photos.family.edges)}>show more...</button></p>
</GalleryWrapper>
  </Layout>
)}

export default Gallery
