import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 21.4242785,
      lng: 91.9315097
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '700px', width: '500px'}}>
         <GoogleMapReact
          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={21.4242785}
            lng={91.9315097}

            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;