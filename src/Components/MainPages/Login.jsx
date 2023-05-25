import React from "react";

export const Login = () => {
  return (
    <section class="py-4 py-md-5 my-5">
      <div class="container py-md-5">
        <div class="row">
          <div class="col-md-6 text-center">
            <img
              alt="login"
              class="img-fluid w-100"
              src="../assets/img/illustrations/login.svg?h=dd35c7dba58803954242d42488889a4c"
            />
          </div>
          <div class="col-md-5 col-xl-4 text-center text-md-start">
            <h2 class="display-6 fw-bold mb-5">
              <span class="underline pb-1">
                <strong>Giriş Yap</strong>
              </span>
            </h2>
            <form method="post">
              <div class="mb-3">
                <input
                  class="shadow form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div class="mb-3">
                <input
                  class="shadow form-control"
                  type="password"
                  name="password"
                  placeholder="Şifre"
                />
              </div>
              <div class="mb-5">
                <button class="btn btn-primary shadow" type="submit">
                  Giriş Yap
                </button>
              </div>
              <p class="text-muted">
                <a href="forgotten-password.html">Şifrenizi mi unuttunuz?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
