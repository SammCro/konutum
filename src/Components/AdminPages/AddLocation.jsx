import React from "react";
import { Map } from "../SubComponents/Map";

export const AddLocation = () => {
  return (
    <section className="py-5 mt-5">
      <div className="container py-4 py-xl-5">
        <div className="row gy-4 gy-md-0">
          <div className="col-md-3 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
            <div
              style={{
                maxWidth: "380px",
              }}
              className="shadow-lg p-3 mb-5 bg-white rounded"
            >
              <form style={{ textAlign: "center", maxWidth: "360px" }}>
                <p className="fs-3">Konum Ekle</p>
                <input
                  class="form-control"
                  type="text"
                  style={{ marginBottom: "12px" }}
                  placeholder="Konut İsmi"
                />
                <input
                  class="form-control"
                  type="text"
                  style={{ marginBottom: "12px" }}
                  placeholder="Lokasyon İsmi"
                />
                <div class="input-group" style={{ marginBottom: "12px" }}>
                  <input
                    class="form-control w-100 mb-3"
                    type="text"
                    placeholder="Enlem,Boylam"
                  />
                </div>
                <input class="btn btn-primary" type="submit" value={"Kaydet"} />
              </form>
            </div>
          </div>
          <div className="col-md-9">
            <div>
              <Map></Map>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
