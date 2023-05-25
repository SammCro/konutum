import React from "react";

export const NotFoundPage = () => {
  return (
    <section className="py-5 mt-5">
      <div className="container">
        <div className="row row-cols-1 d-flex justify-content-center align-items-center">
          <div className="col-md-10 text-center">
            <img
              className="img-fluid w-100"
              src="assets/img/illustrations/404.svg?h=e977af73548094596c29b66e8ed72eb9"
              alt="404"
            />
          </div>
          <div className="col text-center">
            <h2 className="display-3 fw-bold mb-4">Sayfa Bulunamadı.</h2>
            <p className="fs-4 text-muted">
              Yanlış bir sayfaya ulaşmaya çalışıyor olabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
