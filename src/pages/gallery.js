import React, { lazy, Suspense, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Image from "../components/image"
import Modal from "../components/modal"
import useWindowWidth from "../utility/useWindowWidth";
import GalleryItem from "../components/galleryItem"

const StyledTitle = styled.h4`
letter-spacing: 2px;
text-align: center;
text-transform: uppercase;
`

const Gallery = () => {

  const [modalData, setModalData] = useState();
  const [modalActive, setModalActive] = useState(false);
  const width = useWindowWidth();

  const isSSR = typeof window === "undefined";

  const loading = ()=> <p>Loading...</p>

  return(

      <Layout>
      <SEO title="Gallery"/>
      <Image/>
      {
        !isSSR && (
          <Suspense fallback={loading()}>

          <GalleryItem title='Portrety' modalActive={modalActive} setModalActive={setModalActive} setModalData={setModalData}></GalleryItem>
          </Suspense>
        )
      }
      {
        !isSSR && (
          <Suspense fallback={loading()}>

          <GalleryItem title='Rodzina' modalActive={modalActive} setModalActive={setModalActive} setModalData={setModalData}></GalleryItem>
          </Suspense>
        )
      }

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
