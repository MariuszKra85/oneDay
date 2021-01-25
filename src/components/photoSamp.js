import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image'
import React from 'react';

const PhotoSamp = () => {
    const photos = useStaticQuery(
        graphql`
        {
  land : allFile(filter: {name: {regex: "/land/"}}) {
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
  
  port: allFile(filter: {name: {regex: "/port/"}}) {
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
  family: allFile(filter: {name: {regex: "/family/"}}) {
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
    return (
        <div>
            <Img fluid={photos.land.edges[0].node.childImageSharp.fluid}/>
            <Img fluid={photos.port.edges[0].node.childImageSharp.fluid} imgStyle={{objectPosition: "50% 15%"}}/>
            <Img fluid={photos.family.edges[0].node.childImageSharp.fluid}/>
            <Img fluid={photos.land.edges[1].node.childImageSharp.fluid}/>
        </div>
    );
}

export default PhotoSamp;
