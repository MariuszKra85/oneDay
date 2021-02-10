import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image'

const Button = styled.button`
background: transparent;
border: none;
width: 100%;
height: 100%;
`

const GalleryWrapper = styled.section`
width: 100%;
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
   const widht = Math.floor((Math.floor(Math.random()*5)*20)+100);
    return (<div style={{width: `${widht}px`, height:  '180px'}} key={e.node.name}>
      <Button onClick={()=>modalOpen(e.node.name, modalSource, modalState, modalActive, modalData)}><StyledImg fluid={e.node.childImageSharp.fluid}  imgStyle={{objectPosition: "50% 20%"}}></StyledImg></Button>
    </div>)
  })
}

const GalleryItem = ({title, modalActive, setModalActive, setModalData}) => {
    const photos = useStaticQuery(
        graphql`
        {
    land : allFile(filter: {relativePath: {regex: "/land/"}}) {
    edges {
      node {
        name
        childImageSharp {
          fluid(maxWidth: 200) {
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
          fluid(maxWidth: 200) {
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
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      }
    }
    
        }
    `
    )


    return ( 
        <>
        <StyledHeader>{title}</StyledHeader>
        <GalleryWrapper id='port'>
        
        {title ==="Portrety" ? (photos ? (showImages(photos.port.edges, photos.port,modalActive, setModalActive, setModalData)) : null) : null}
        {title ==="Rodzina" ? (photos ? (showImages(photos.land.edges, photos.land,modalActive, setModalActive, setModalData)) : null) : null}
        {title ==="Dzieci" ? (photos ? (showImages(photos.port.edges, photos.port,modalActive, setModalActive, setModalData)) : null) : null}
        </GalleryWrapper>
    </>
    );
}

export default GalleryItem;
