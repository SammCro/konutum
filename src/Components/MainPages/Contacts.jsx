import React from "react";
import { Faq } from "../Layout/Faq"
import { Navbar } from "../Layout/Navbar";
import { Footer } from "../Layout/Footer";

export const Contacts = () => {
  return (
    <>
    <Navbar></Navbar>
        <section className="py-5 mt-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 className="display-6 fw-bold mb-4">
              &nbsp;Sorunuz mu&nbsp;<span className="underline">var</span>?
            </h2>
            <p className="text-muted">
              Takımımız her zaman sorularınızı cevaplamak için burada. Bize bir
              mail ile ulaşabilirsiniz.
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div>
              <form className="p-3 p-xl-4" method="post">
                <div className="mb-3">
                  <input
                    className="shadow form-control"
                    type="text"
                    id="name-1"
                    name="name"
                    placeholder="İsim"
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="shadow form-control"
                    type="email"
                    id="email-1"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="shadow form-control"
                    id="message-1"
                    name="message"
                    rows="6"
                    placeholder="Mesajınız"
                  ></textarea>
                </div>
                <div>
                  <button
                    className="btn btn-primary shadow d-block w-100"
                    type="submit"
                  >
                    Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Faq></Faq>
    </section>
    <Footer></Footer>
    </>
  );
};
