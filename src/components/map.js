import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

const Marker = styled.div`
background-color: blue;
border: 1px solid rgba(40, 40, 40, 0.6);
box-shadow: 3px 3px 4px rgba(40, 40, 40, 0.7);
border-radius: 50%;
width:20px;
height:20px;
position: relative;
p{
  white-space: nowrap;
  position: absolute;
  left: -15px;
  bottom: -30px;
}
`
 
const AnyReactComponent = ({ text }) => <Marker><p>{text}</p></Marker>;

const StyledMapWrapper = styled.div`
height: 50vh;
width: 90vw;
margin: 0 auto;
`
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 53.70212,
      lng: -1.41691,
    },
    zoom: 15
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <StyledMapWrapper>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GATSBY_API_TOKEN_GOOGLEMAP }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={53.70212}
            lng={-1.41691}
            text="We are here!"
          />
        </GoogleMapReact>
      </StyledMapWrapper>
    );
  }
}
 
export default Map;