import React from "react";
import { Faq } from "../Layout/Faq"

export const Contacts = () => {
  return (
    <section class="py-5 mt-5">
      <div class="container py-5">
        <div class="row">
          <div class="col-md-8 col-xl-6 text-center mx-auto">
            <h2 class="display-6 fw-bold mb-4">
              &nbsp;Sorunuz mu&nbsp;<span class="underline">var</span>?
            </h2>
            <p class="text-muted">
              Takımımız her zaman sorularınızı cevaplamak için burada. Bize bir
              mail ile ulaşabilirsiniz.
            </p>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-md-6">
            <div>
              <form class="p-3 p-xl-4" method="post">
                <div class="mb-3">
                  <input
                    class="shadow form-control"
                    type="text"
                    id="name-1"
                    name="name"
                    placeholder="İsim"
                  />
                </div>
                <div class="mb-3">
                  <input
                    class="shadow form-control"
                    type="email"
                    id="email-1"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div class="mb-3">
                  <textarea
                    class="shadow form-control"
                    id="message-1"
                    name="message"
                    rows="6"
                    placeholder="Mesajınız"
                  ></textarea>
                </div>
                <div>
                  <button
                    class="btn btn-primary shadow d-block w-100"
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
  );
};
