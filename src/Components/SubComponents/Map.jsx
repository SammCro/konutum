import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";

const createMarker = (
  houseName,
  locationName,
  status,
  userType,
  latitude,
  longitude,
  setSelectedHouse
) => {
  return (
    <Marker position={[latitude, longitude]}>
      <Popup>
        <p className="fw-bolder">House Name : </p> <p>{houseName}</p>
        <p className="fw-bolder">Location Name : </p> <p>{locationName}</p>{" "}
        <p className="fw-bolder">Status : </p> <p>{status}</p>
        {userType === "Admin" && (
          <button className="btn btn-danger btn-sm">Sil</button>
        )}
        {userType === "User" && (
          <button className="btn btn-success btn-sm">Ekle</button>
        )}
        {userType === "Expert" && (
          <button
            className="btn btn-primary btn-sm"
            onClick= { () => setSelectedHouse(houseName)}
          >
            Yorum Ekle
          </button>
        )}
      </Popup>
    </Marker>
  );
};

export const Map = ({ userType, setSelectedHouse }) => {
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
        {(userType === "Admin" || userType === "User") &&
          createMarker("House Name", "Location Name", "Status", userType, 32, 45)}
        {userType === "Expert" &&
          createMarker("Sincan", "Haymana", "12", userType, 37, 34, setSelectedHouse)}
      </MapContainer>
    </>
  );
};
