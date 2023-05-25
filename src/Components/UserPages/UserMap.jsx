import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";
  
export const UserMap = () => {
  return (
    <section class="py-5 mt-5">
      <div class="container">
        <div class="row">          <div class="col-md-12">
            <MapContainer
              center={[51.505, -0.09]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
