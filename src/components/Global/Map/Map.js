import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

function Map({ bikePosition }) {
  return (
    <div className="map__container">
      <MapContainer center={bikePosition} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <Marker position={bikePosition}></Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
