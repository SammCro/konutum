import React from "react";
import { NavLink } from "react-router-dom";

export const Login = () => {
  return (
    <section className="py-4 py-md-5 my-5">
      <div className="container py-md-5">
        <div className="row">
          <div className="col-md-6 text-center">
            <img
              alt="login"
              className="img-fluid w-100"
              src="../assets/img/illustrations/login.svg?h=dd35c7dba58803954242d42488889a4c"
            />
          </div>
          <div className="col-md-5 col-xl-4 text-center text-md-start">
            <h2 className="display-6 fw-bold mb-5">
              <span className="underline pb-1">
                <strong>Giriş Yap</strong>
              </span>
            </h2>
            <form method="post">
              <div className="mb-3">
                <input
                  className="shadow form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <input
                  className="shadow form-control"
                  type="password"
                  name="password"
                  placeholder="Şifre"
                />
              </div>
              <div className="mb-5">
                <button className="btn btn-primary shadow" type="submit">
                  Giriş Yap
                </button>
              </div>
              <p className="text-muted">
                <NavLink to="/forgottenpassword">Şifrenizi mi unuttunuz?</NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
