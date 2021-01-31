import React, { useState } from "react"
import { useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from "styled-components"
import GalleryMenu from "../components/galleryMenu"
import Image from "../components/image"
import Modal from "../components/modal"

const StyledImg = styled(Img)`
min-width:100px;
width:100%;
height: 100%;
`

const modalOpen = (id, source,modalState, setActive, setData) =>{

  const image = source.edges.find(e => {
    return e.node.name == id;
  });
 setData(image);

  setActive(!modalState);
  
}

const showImages = (images, modalSource,madalState, modalActive, modalData) =>{
  return images.map(e => {
 const widht = Math.floor((Math.floor(Math.random()*10)*15)+100);
  return (<div style={{width: `${widht}px`, height:  '180px', maxWidth:'50%'}} key={e.node.name}>
    <Button onClick={()=>modalOpen(e.node.name, modalSource, madalState, modalActive, modalData)}><StyledImg fluid={e.node.childImageSharp.fluid}  imgStyle={{objectPosition: "50% 20%"}}></StyledImg></Button>
  </div>)
})
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
border: none;
width: 100%;
height: 100%;
`

const GalleryWrapper = styled.section`

text-align: center;
justify-content: center;
display: flex;
flex-wrap: wrap;
div{
  flex-grow: 1;
  margin: 8px 4px;
}
`

const StyledHeader = styled.h3`
text-align: center;
letter-spacing: 1.5px;
`
const StyledTitle = styled.h4`
letter-spacing: 2px;
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
      fluid(maxWidth: 300) {
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
      fluid(maxWidth: 300) {
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
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  }
}
  modalPort: allFile(filter: {relativePath: {regex: "/port/"}}) {
edges {
  node {
    name
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  }
}
    }
`
)

  const [shortArrLand, setShortArrLand] =useState(photos.land.edges.slice(0, 8));
  const [shortArrPort, setShortArrPort] =useState(photos.port.edges.slice(0, 10));
  const [shortArrFamily, setShortArrFamily] = useState(photos.family.edges.slice(0,9));
  const [modalData, setModalData] = useState();
  const [modalActive, setModalActive] = useState(false);

  return(
  <Layout>
<SEO title="Gallery"/>
<Image/>
<GalleryMenu reset = {()=>resetGallery(setShortArrLand, setShortArrPort, setShortArrFamily, photos)}/>
<StyledHeader>Portrety</StyledHeader>
<GalleryWrapper id='port'>
  {photos ? showImages(shortArrPort, photos.modalPort,modalActive, setModalActive, setModalData) : null}
</GalleryWrapper>
<StyledHeader>Biznesowe</StyledHeader>
<StyledTitle>Photos</StyledTitle>
<GalleryWrapper id='biz'>
  {photos ? showImages(shortArrFamily) : null}
</GalleryWrapper>
<StyledTitle>Rodzinna / dziecięca</StyledTitle>
<GalleryWrapper id='biz'>

  {photos ? showImages(shortArrLand) : null}
</GalleryWrapper>
<StyledTitle>Ciążowa / Noworodki</StyledTitle>
<GalleryWrapper id='biz'>

  {photos ? showImages(shortArrFamily) : null}
</GalleryWrapper>
<StyledTitle>Reportaż</StyledTitle>
<GalleryWrapper id='biz'>

  {photos ? showImages(shortArrPort) : null}
</GalleryWrapper>
<StyledTitle>Reklama</StyledTitle>
<GalleryWrapper id='biz'>

  {photos ? showImages(shortArrPort) : null}
</GalleryWrapper>
<StyledTitle>Natura</StyledTitle>
<GalleryWrapper id='biz'>

  {photos ? showImages(shortArrLand) : null}
</GalleryWrapper>
<Modal img={modalData} modalState={modalActive} changeState={setModalActive}/>
  </Layout>
)}

export default Gallery
