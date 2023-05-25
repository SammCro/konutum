import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";

export const Map = () => {
  return (
    <>
      <MapContainer
        center={[39.57, 32.53]}
        zoom={6}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "calc(75vh - 4rem)" }}
      >
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[39.57, 32.53]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};
