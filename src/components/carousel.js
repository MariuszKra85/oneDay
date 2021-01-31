import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    lazyLoad: true,
  }
 const data = useStaticQuery(graphql`
    query{
      Image: allFile(filter: {relativePath: {regex: "/carusel/"}}) {
    edges {
      node {
        id,
        name,
        childImageSharp{
          fluid(maxWidth: 600){
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
    }
  `)
    return (
      <div>
        <Slider {...settings}>
          <Img fluid={data.Image.edges[0].node.childImageSharp.fluid}/>
          
          <Img fluid={data.Image.edges[1].node.childImageSharp.fluid}/>
          
          <Img fluid={data.Image.edges[2].node.childImageSharp.fluid}/>
        </Slider>
      </div>
    );
}

export default Carousel;
