import React from "react";

export const ForgottenPassword = () => {
  return (
    <section class="py-4 py-md-5 mt-5">
      <div class="container py-md-5">
        <div class="row d-flex align-items-center">
          <div class="col-md-6 text-center">
            <img
              alt=""
              class="img-fluid w-100"
              src="../assets/img/illustrations/desk.svg?h=564975c984a31da9215247a176652d21"
            />
          </div>
          <div class="col-md-5 col-xl-4 text-center text-md-start">
            <h2 class="display-6 fw-bold mb-4">
              <span class="underline">Şifrenizi</span>&nbsp;mi unuttunuz ?
            </h2>
            <p class="text-muted">
              Mail adresinizi girebilirsiniz. Size şifre yenileme maili
              ileteceğiz.
            </p>
            <form method="post">
              <div class="mb-3">
                <input
                  class="shadow form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div class="mb-5">
                <button class="btn btn-primary shadow" type="submit">
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
