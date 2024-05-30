import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  return (
    <MapContainer center={[10.39972, -75.51444]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[10.39972, -75.51444]}>
        <Popup>
          Aquí está nuestra oficina.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
