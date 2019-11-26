/*
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import React, { Component } from 'react';
import MapGL from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import DeckGL, { GeoJsonLayer } from 'deck.gl';

// Please be a decent human and don't abuse my Mapbox API token.
// If you fork this sandbox, replace my API token with your own.
// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
const MAPBOX_TOKEN = process.env.REACT_APP_MAPS;

class SearchableMap2 extends Component {
  state = {
    viewport: {
      latitude: 30.0805339,
      longitude: -94.1839812,
      zoom: 8
    },
    searchResultLayer: null
  };

  mapRef = React.createRef();
  cachedResult = {};

  handleViewportChange = viewport => {
    // console.log(viewport);
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  };

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };
    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };

  handleOnResult = event => {
    // console.log("result", event.result);
    // console.log("viewport", this.state.viewport);
    this.cachedResult = event.result;
    this.setState({
      viewport: this.state.viewport
    });
    this.setState({
      searchResultLayer: new GeoJsonLayer({
        id: 'search-result',
        data: event.result.geometry,
        getFillColor: [255, 0, 0, 128],
        getRadius: 1000,
        pointRadiusMinPixels: 10,
        pointRadiusMaxPixels: 10
      })
    });
  };

  handleOnInit = mapboxGeocoder => {
    mapboxGeocoder.setInput(this.cachedResult.text || '');
  };

  render() {
    const { viewport } = this.state;

    return (
      <div style={{ height: '100vh' }}>
        <MapGL
          ref={this.mapRef}
          onClick={this.handleOnClick}
          {...viewport}
          width="100%"
          height="100%"
          onViewportChange={this.handleViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          <Geocoder
            mapRef={this.mapRef}
            onInit={this.handleOnInit}
            onResult={this.handleOnResult}
            onViewportChange={this.handleViewportChange}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            position="top-left"
          />
        </MapGL>
      </div>
    );
  }
}

export default SearchableMap2;

*/