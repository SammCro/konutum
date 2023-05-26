import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";

const createPopUp = (houseName, locationName, status) => {
  return (
    <Popup>
      <p className="fw-bolder">House Name : </p> <p>{houseName}</p> 
      <p className="fw-bolder">Location Name : </p> <p>{locationName}</p>{" "}
      <p className="fw-bolder">Status : </p> <p>{status}</p>
    </Popup>
  );
};

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
          {createPopUp("Sincan", "Ankara", 12)}
        </Marker>
      </MapContainer>
    </>
  );
};
