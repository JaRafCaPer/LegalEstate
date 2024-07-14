import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Maps.css';

const Map = () => {
  return (
    <MapContainer center={[10.39972, -75.51444]} zoom={13} style={{height: '500px', width: '70%', margin:'auto', }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[10.412815702534695, -75.53580477981163]}>
        <Popup>
          Aquí está nuestra oficina.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
