import React from "react";
import { Map } from "../SubComponents/Map";
import { NavLink } from "react-router-dom";

export const UserMap = () => {
  const userType = "User"
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
              <NavLink className="nav-link" to="/userMap">
                Konum Haritası
              </NavLink>
            </li>
            <li className="nav-item"></li>
            <li className="nav-item"></li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/userFilterLocation">
                Favori Konumlar
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
      <div className="container">
        <div className="row">
          {" "}
          <div className="col-md-12">
            <Map userType={userType}></Map>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
