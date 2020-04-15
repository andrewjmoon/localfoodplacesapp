import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import * as parkDate from './data/restaurants.json';
import Indicator from './assets/location.png';

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 30.0506676,
    longitude: -94.0422391,
    width: '150vw',
    height: '150vh',
    zoom: 10
  });

  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === 'Escape') {
        setSelectedPark(null);
      }
    };
    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPS}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {parkDate.features.map(park => (
          <Marker
            key={park.properties.FACILITYID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedPark(park);
              }}
            >
              <img src={Indicator} alt="Location" />
            </button>
          </Marker>
        ))}

        {selectedPark ? (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.ADDRESS}</p>
              <p>{selectedPark.properties.DESCRIPTION}</p>
              <a
                className="Link2"
                href={selectedPark.properties.WEBSITE}
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectedPark.properties.WEBSITE}
              </a>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}
