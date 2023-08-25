import React from 'react'
import {
    CircleMarker,
    MapContainer,
    Marker,
    Popup,
    TileLayer,
  } from "react-leaflet";


function Map({coordinates , formattedAddress}) {
  return (
    <div className="leaflet-container">

    <MapContainer
      style={{ height: "100%", width: "100%" }}
      center={[coordinates[1],coordinates[0]]}
      zoom={14}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[coordinates[1],coordinates[0]]}>
        <Popup>
          {formattedAddress} <br />
        </Popup>
      </Marker>
     
    </MapContainer>

  </div>
  )
}

export default Map