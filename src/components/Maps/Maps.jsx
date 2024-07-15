import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Maps.css';

const Map = () => {
  return (
    <div className="map-container">
      <MapContainer center={[10.39972, -75.51444]} zoom={13} className="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[10.412815702534695, -75.53580477981163]}>
          <Popup>
            Aquí está nuestra oficina.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

