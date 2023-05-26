import React from "react";
import { NavLink } from "react-router-dom";

export const Signup = () => {
  return (
    <section className="py-4 py-md-5 my-5">
      <div className="container py-md-5">
        <div className="row">
          <div className="col-md-6 text-center">
            <img
              alt="register"
              className="img-fluid w-100"
              src="../assets/img/illustrations/register.svg?h=aa57a3341846af8b091dc008c25da279"
            />
          </div>
          <div className="col-md-5 col-xl-4 text-center text-md-start">
            <h2 className="display-6 fw-bold mb-5">
              <span className="underline pb-1">
                <strong>Kayıt Ol</strong>
              </span>
            </h2>
            <form method="post">
              <div className="mb-3">
                <input
                  className="shadow-sm form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <input
                  className="shadow-sm form-control"
                  type="password"
                  name="password"
                  placeholder="Şifre"
                />
              </div>
              <div className="mb-3">
                <input
                  className="shadow-sm form-control"
                  type="password"
                  name="password_repeat"
                  placeholder="Şifre Tekrar"
                />
              </div>
              <div className="mb-5">
                <button className="btn btn-primary shadow" type="submit">
                  Hesap oluştur
                </button>
              </div>
              <p className="text-muted">
                Zaten bir hesabın var mı ?&nbsp;&nbsp;
                <NavLink to="/login">
                  Giriş yap
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icon-tabler-arrow-narrow-right"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <line x1="15" y1="16" x2="19" y2="12"></line>
                    <line x1="15" y1="8" x2="19" y2="12"></line>
                  </svg>
                </NavLink>
                &nbsp;
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
