import React, { useState } from "react"
import { useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from "styled-components"
import GalleryMenu from "../components/galleryMenu"

const StyledImg = styled(Img)`
max-width: 400px;
width: 80%;
`

const showImages = (images) =>{
  return images.map(e => (<StyledImg fluid={e.node.childImageSharp.fluid} key={e.node.name}></StyledImg>))
}
const settGallery = (gal, set, photo) =>{
  if(gal.length === 3 ){
    set(photo)
  }else{
    set(photo.slice(0, 3))
  }
}

const resetGallery = (setLand, setPort, setFamily, photo) => {
setLand(photo.land.edges.slice(0,3));
setPort(photo.port.edges.slice(0,3))
setFamily(photo.family.edges.slice(0,3))
}

const Button = styled.button`
background: transparent;
border: 1px solid whitesmoke;
padding: 10px 20px;
border-radius: 10px;
`

const GalleryWrapper = styled.div`
text-align: center;

div{
  margin: 20px auto;
}
`

const Gallery = () => {
  const photos = useStaticQuery(
    graphql`
    {
land : allFile(filter: {relativePath: {regex: "/land/"}}) {
edges {
  node {
    name
    childImageSharp {
      fluid(maxWidth: 350) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  }
}

port: allFile(filter: {relativePath: {regex: "/port/"}}) {
edges {
  node {
    name
    childImageSharp {
      fluid(maxWidth: 350) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  }
}
family: allFile(filter: {relativePath: {regex: "/family/"}}) {
edges {
  node {
    name
    childImageSharp {
      fluid(maxWidth: 350) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  }
}
}`
)

  const [shortArrLand, setShortArrLand] =useState(photos.land.edges.slice(0, 3));
  const [shortArrPort, setShortArrPort] =useState(photos.port.edges.slice(0, 3));
  const [shortArrFamily, setShortArrFamily] = useState(photos.family.edges.slice(0, 3));

  return(
  <Layout>
<SEO title="Gallery"/>
<GalleryMenu reset = {()=>resetGallery(setShortArrLand, setShortArrPort, setShortArrFamily, photos)}/>
<GalleryWrapper id='land'>
  <h3>Landscapes</h3>
  {photos ? showImages(shortArrLand) : null}
  <p><Button onClick={()=> settGallery(shortArrLand, setShortArrLand, photos.land.edges)}>show more...</Button> </p>
</GalleryWrapper>
<GalleryWrapper id='port'>
  <h3>Portraits</h3>
  {photos ? showImages(shortArrPort) : null}
  <p><Button onClick={()=> settGallery(shortArrPort, setShortArrPort, photos.port.edges)}>show more...</Button></p>
</GalleryWrapper>
<GalleryWrapper id='family'>
  <h3>Family</h3>
  {photos ? showImages(shortArrFamily) : null}
  <p><Button onClick={()=> settGallery(shortArrFamily, setShortArrFamily, photos.family.edges)}>show more...</Button></p>
</GalleryWrapper>
  </Layout>
)}

export default Gallery
