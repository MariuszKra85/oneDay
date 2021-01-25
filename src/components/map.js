import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
            text="My Marker"
          />
        </GoogleMapReact>
      </StyledMapWrapper>
    );
  }
}
 
export default Map;