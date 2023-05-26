import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
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
              <NavLink className="nav-link" to="/">
                Ana Sayfa
              </NavLink>
            </li>
            <li className="nav-item"></li>
            <li className="nav-item"></li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                Hakkımızda
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacts">
                İletişim
              </NavLink>
            </li>
          </ul>
          <NavLink
            className="btn btn-primary shadow"
            role="button"
            to="/signup"
          >
            Giriş Yap / Kayıt Ol
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
