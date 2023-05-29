import React, { useEffect, useState } from "react";
import { Map } from "../SubComponents/Map";

export const LocationDetect = () => {
  const [selectedHouse, setSelectedHouse] = useState([]);
  return (
    <section className="py-5 mt-5">
      <div className="container py-4 py-xl-5">
        <div className="row gy-4 gy-md-0">
          <div className="col-md-3 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
            <div style={{ maxWidth: "350px" }}>
              <form style={{ textAlign: "center"}}>
                <label>{selectedHouse}</label>
                <textarea
                  className="form-control"
                  style={{ height: "340.1875px" }}
                ></textarea>
                <button
                  className="btn btn-primary"
                  type="button"
                  style={{ marginTop: "24px" }}
                >
                  Button
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-9">
            <div>
              <Map setSelectedHouse =  {setSelectedHouse} userType={"Expert"}></Map>    
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
