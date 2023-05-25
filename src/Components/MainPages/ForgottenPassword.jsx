import React from "react";

export const ForgottenPassword = () => {
  return (
    <section className="py-4 py-md-5 mt-5">
      <div className="container py-md-5">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 text-center">
            <img
              alt=""
              className="img-fluid w-100"
              src="../assets/img/illustrations/desk.svg?h=564975c984a31da9215247a176652d21"
            />
          </div>
          <div className="col-md-5 col-xl-4 text-center text-md-start">
            <h2 className="display-6 fw-bold mb-4">
              <span className="underline">Şifrenizi</span>&nbsp;mi unuttunuz ?
            </h2>
            <p className="text-muted">
              Mail adresinizi girebilirsiniz. Size şifre yenileme maili
              ileteceğiz.
            </p>
            <form method="post">
              <div className="mb-3">
                <input
                  className="shadow form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-5">
                <button className="btn btn-primary shadow" type="submit">
                  Şifre Yenile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
