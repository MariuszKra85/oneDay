import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from "styled-components"
import Image from "../components/image"
import Modal from "../components/modal"
import useWindowWidth from "../utility/useWindowWidth";

const StyledImg = styled(Img)`
min-width:100px;
width:100%;
height: 100%;
`

const modalOpen = (id, source,modalState, setActive, setData) =>{

  const image = source.edges.find(e => {
    return e.node.name === id;
  });
 setData(image);

  setActive(!modalState);
  
}

const showImages = (images, modalSource,modalState, modalActive, modalData) =>{

  return images.map(e => {
 const widht = Math.floor((Math.floor(Math.random()*4)*50)+100);
  return (<div style={{width: `${widht}px`, height:  '180px'}} key={e.node.name}>
    <Button onClick={()=>modalOpen(e.node.name, modalSource, modalState, modalActive, modalData)}><StyledImg fluid={e.node.childImageSharp.fluid}  imgStyle={{objectPosition: "50% 20%"}}></StyledImg></Button>
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
text-transform: uppercase;
`
const StyledTitle = styled.h4`
letter-spacing: 2px;
text-align: center;
text-transform: uppercase;
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
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  }
}
landDesk : allFile(filter: {relativePath: {regex: "/land/"}}) {
edges {
  node {
    name
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  }
}

portDesk : allFile(filter: {relativePath: {regex: "/port/"}}) {
edges {
  node {
    name
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  }
}

    }
`
)


  const [shortArrLand, setShortArrLand] =useState(photos.land.edges);
  const [shortArrPort, setShortArrPort] =useState(photos.port.edges);
  const [shortArrPortDesk, setShortArrLandDesk] =useState(photos.portDesk.edges);
  const [shortArrFamily, setShortArrFamily] = useState(photos.family.edges.slice(0,20));
  const [modalData, setModalData] = useState();
  const [modalActive, setModalActive] = useState(false);
  const width = useWindowWidth();

  return(
  <Layout gallery>
<SEO title="Gallery"/>
<Image/>
<StyledHeader>Portrety</StyledHeader>
<GalleryWrapper id='port'>
  {console.log(width)}
  {photos ? (width < 1100 ? (showImages(shortArrPort, photos.modalPort,modalActive, setModalActive, setModalData)) : showImages(shortArrPort, photos.portDesk,modalActive, setModalActive, setModalData)) : null}
</GalleryWrapper>
<StyledTitle>Biznesowe</StyledTitle>
<GalleryWrapper id='biz'>
  {photos ? showImages(shortArrFamily) : null}
</GalleryWrapper>
<StyledTitle>Photos</StyledTitle>
<GalleryWrapper id='biz'>
  {photos ? showImages(shortArrFamily) : null}
</GalleryWrapper>
<StyledTitle>Rodzinna</StyledTitle>
<GalleryWrapper id='biz'>

  {photos ? showImages(shortArrLand) : null}
</GalleryWrapper>
<StyledTitle>Dzieci</StyledTitle>
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
<StyledTitle>Architektur</StyledTitle>
<GalleryWrapper id='biz'>

  {photos ? showImages(shortArrLand) : null}
</GalleryWrapper>
<Modal img={modalData} modalState={modalActive} changeState={setModalActive}/>
  </Layout>
)}

export default Gallery
