import React, { lazy, Suspense, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Image from "../components/image"
import Modal from "../components/modal"
import useWindowWidth from "../utility/useWindowWidth";
const GalleryItem = lazy(()=>import("../components/galleryItem")); 

const StyledTitle = styled.h4`
letter-spacing: 2px;
text-align: center;
text-transform: uppercase;
`

const loading = () => <p>Loading...</p>


const Gallery = () => {

  const [modalData, setModalData] = useState();
  const [modalActive, setModalActive] = useState(false);
  const width = useWindowWidth();

  return(

      <Layout>
      <SEO title="Gallery"/>
      <Image/>
      <Suspense fallback={loading()}>

      <GalleryItem title='Portrety' modalActive={modalActive} setModalActive={setModalActive} setModalData={setModalData}></GalleryItem>
      </Suspense>
      <Suspense fallback={loading()}>

      <GalleryItem title='Rodzina' modalActive={modalActive} setModalActive={setModalActive} setModalData={setModalData}></GalleryItem>
      </Suspense>
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
