import React from "react";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-light navbar-expand-md fixed-top navbar-shrink py-3"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <span>Konutum</span>
        </a>
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
              <a className="nav-link" href="/">
                Ana Sayfa
              </a>
            </li>
            <li className="nav-item"></li>
            <li className="nav-item"></li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                Hakkımızda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacts">
                İletişim
              </a>
            </li>
          </ul>
          <a
            className="btn btn-primary shadow"
            role="button"
            href="/signup"
          >
            Giriş Yap / Kayıt Ol
          </a>
        </div>
      </div>
    </nav>
  );
};
