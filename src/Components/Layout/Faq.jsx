import React from "react";

export const Faq = () => {
  return (
    <section class="py-4 py-xl-5 mb-5">
      <div class="container">
        <div class="row mb-2">
          <div class="col-md-8 col-xl-6 text-center mx-auto">
            <h2 class="display-6 fw-bold mb-5">
              <span class="pb-3 underline">SSS</span>
            </h2>
            <p class="text-muted mb-5">
              Aklınızda herhangi bir soru mu var ? Aşağıda bulabilirsiniz
              !&nbsp;
            </p>
          </div>
        </div>
        <div class="row mb-2">
          <div class="col-md-8 mx-auto">
            <div class="accordion text-muted" role="tablist" id="accordion-2">
              <div class="accordion-item">
                <h2 class="accordion-header" role="tab">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-2 .item-1"
                    aria-expanded="true"
                    aria-controls="accordion-2 .item-1"
                  >
                    Konutum uygulamasında ki bilgiler güvenilir mi ?&nbsp;
                  </button>
                </h2>
                <div
                  class="accordion-collapse collapse show item-1"
                  role="tabpanel"
                  data-bs-parent="#accordion-2"
                >
                  <div class="accordion-body">
                    <p>
                      Konutum uygulamasında ki tüm arazi bilgileri, risk
                      tespitleri alanında uzman kişiler tarafından
                      onaylanmaktadır..
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" role="tab">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-2 .item-2"
                    aria-expanded="false"
                    aria-controls="accordion-2 .item-2"
                  >
                    Uzman kişiler kimler ?&nbsp;
                  </button>
                </h2>
                <div
                  class="accordion-collapse collapse item-2"
                  role="tabpanel"
                  data-bs-parent="#accordion-2"
                >
                  <div class="accordion-body">
                    <p class="mb-0">
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                      Cras justo odio, dapibus ac facilisis in, egestas eget
                      quam. Donec id elit non mi porta gravida at eget metus.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" role="tab">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-2 .item-3"
                    aria-expanded="false"
                    aria-controls="accordion-2 .item-3"
                  >
                    Kendi komut listemi oluşturabilecek miyim ?&nbsp;
                  </button>
                </h2>
                <div
                  class="accordion-collapse collapse item-3"
                  role="tabpanel"
                  data-bs-parent="#accordion-2"
                >
                  <div class="accordion-body">
                    <p class="mb-0">
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                      Cras justo odio, dapibus ac facilisis in, egestas eget
                      quam. Donec id elit non mi porta gravida at eget metus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
