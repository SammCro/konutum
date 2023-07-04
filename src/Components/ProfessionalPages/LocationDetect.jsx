import React, { useState } from "react";
import { Map } from "../SubComponents/Map";
import { NavLink } from "react-router-dom";

export const LocationDetect = () => {
  const [selectedHouse, setSelectedHouse] = useState([]);
  const [comment, setComment] = useState([]);

  async function submitComment(e) {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:8090/commentRequest/addCommentRequest",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          houseName: selectedHouse[1],
          locationName: selectedHouse[2],
          expertName: "Cagla",
          status: "pending",
          comment: comment,
        }),
      }
    );

    setComment("");
    setSelectedHouse([]);
  }
  return (
    <>
      <nav
        className="navbar navbar-light navbar-expand-md fixed-top navbar-shrink py-3"
        id="mainNav"
      >
        <div className="container">
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <span>Konutum</span>
          </NavLink>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-1"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/professionalMap">
                  Lokasyon Ekle
                </NavLink>
              </li>
            </ul>
            <NavLink
              className="btn btn-danger shadow"
              role="button"
              to="/login"
            >
              Çıkış Yap
            </NavLink>
          </div>
        </div>
      </nav>
      <section className="py-5 mt-5">
        <div className="container py-4 py-xl-5">
          <div className="row gy-4 gy-md-0">
            <div className="col-md-3 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
              <div style={{ maxWidth: "350px" }}>
                <form style={{ textAlign: "center" }} onSubmit={submitComment}>
                  <label>{selectedHouse[1]}</label>
                  <textarea
                    className="form-control"
                    style={{ height: "340.1875px" }}
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                    value={comment}
                  ></textarea>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    style={{ marginTop: "24px" }}
                  >
                    Yorum Ekle
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-9">
              <div>
                <Map
                  setSelectedHouse={setSelectedHouse}
                  userType={"Expert"}
                ></Map>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
