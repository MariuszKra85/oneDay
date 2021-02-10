import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from "styled-components"
import Image from "../components/image"
import Modal from "../components/modal"
import useWindowWidth from "../utility/useWindowWidth";
import GalleryItem from "../components/galleryItem"


const Gallery = () => {

  const [modalData, setModalData] = useState();
  const [modalActive, setModalActive] = useState(false);
  const width = useWindowWidth();

  return(

      <Layout>
      <SEO title="Gallery"/>
      <Image/>
      <GalleryItem title='Portrety' modalActive={modalActive} setModalActive={setModalActive} setModalData={setModalData}></GalleryItem>
      <GalleryItem title='Rodzina' modalActive={modalActive} setModalActive={setModalActive} setModalData={setModalData}></GalleryItem>
      <StyledTitle>Photos</StyledTitle>

      <StyledTitle>Dzieci</StyledTitle>

      <StyledTitle>Ciążowa / Noworodki</StyledTitle>

      <StyledTitle>Reportaż</StyledTitle>

      <StyledTitle>Reklama</StyledTitle>

      <StyledTitle>Natura</StyledTitle>

      <StyledTitle>Architektur</StyledTitle>
<Modal img={modalData} modalState={modalActive} changeState={setModalActive}/>
        </Layout>
        
  )}

export default Gallery
