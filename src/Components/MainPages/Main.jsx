import React from "react";
import { Faq } from "../Layout/Faq";
import { Navbar } from "../Layout/Navbar";
import { Footer } from "../Layout/Footer";

export const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <header className="pt-5">
        <div className="container pt-4 pt-xl-5">
          <div className="row pt-5">
            <div className="col-md-8 text-center text-md-start mx-auto">
              <div className="text-center">
                <h1 className="display-4 fw-bold mb-5">
                  Evinizin konumunu emin ellerde kendiniz&nbsp;
                  <span className="underline">seçin</span>.
                </h1>
                <p className="fs-5 text-muted mb-5">
                  Güvenilir uzmanlar tarafından seçilen en iyi konumda ki
                  konutlara ulaşın !&nbsp;
                </p>
                <form
                  className="d-flex justify-content-center flex-wrap"
                  method="post"
                >
                  <div className="shadow-lg mb-3">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Email Adresi"
                    />
                  </div>
                  <div className="shadow-lg mb-3">
                    <button className="btn btn-primary" type="submit">
                      Abone Ol !
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 col-lg-10 mx-auto">
              <div className="text-center position-relative">
                <img
                  alt="..."
                  className="img-fluid"
                  src="../assets/img/illustrations/desk.svg?h=564975c984a31da9215247a176652d21"
                  style={{ width: "800px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div class="container py-4 py-xl-5">
          <h3 class="display-6 fw-bold pb-md-4" style={{ textAlign: "center" }}>
            Özellikler&nbsp;
          </h3>
          <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
            <div class="col">
              <div class="card border-light border-1 d-flex justify-content-center p-4">
                <div class="card-body">
                  <div class="bs-icon-lg bs-icon-rounded bs-icon-secondary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-4 bs-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -32 576 576"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                    >
                      <path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="fw-bold">Kolay</h4>
                    <p class="text-muted">
                      Herkesin anlayabileceği ve kullanabileceği bir platformda
                      konutunuzu oturduğunuz yerden seçin!&nbsp;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-light border-1 d-flex justify-content-center p-4">
                <div class="card-body">
                  <div class="bs-icon-lg bs-icon-rounded bs-icon-secondary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-4 bs-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -32 576 576"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                    >
                      <path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="fw-bold">Güvenilir</h4>
                    <p class="text-muted">
                      Seçili uzmanlar tarafından değerlendirilen bölgeleri görün
                      ve en güvenli yerleri oturduğunuz yerden belirleyin!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-light border-1 d-flex justify-content-center p-4">
                <div class="card-body">
                  <div class="bs-icon-lg bs-icon-rounded bs-icon-secondary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-4 bs-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -32 576 576"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                    >
                      <path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="fw-bold">Esnek</h4>
                    <p class="text-muted">
                      Birden fazla lokasyonu belirleyin ve en güvenli bölgeyi
                      bulun!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container py-4 py-xl-5">
          <div class="row">
            <div class="col-md-6 col-xxl-7">
              <h3 class="display-6 fw-bold pb-md-4">
                Konutum uygulaması nasıl çalışır ?&nbsp;
              </h3>
            </div>
          </div>
          <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
            <div class="col">
              <div class="card border-light border-1 d-flex justify-content-center p-4">
                <div class="card-body">
                  <div class="bs-icon-lg bs-icon-rounded bs-icon-secondary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-4 bs-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -32 576 576"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                    >
                      <path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="fw-bold">Kullanıcı</h4>
                    <p class="text-muted">
                      Sadece sisteme kayıt olmanız yeterli !&nbsp;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-light border-1 d-flex justify-content-center p-4">
                <div class="card-body">
                  <div class="bs-icon-lg bs-icon-rounded bs-icon-secondary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-4 bs-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -32 576 576"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                    >
                      <path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="fw-bold">Uzman</h4>
                    <p class="text-muted">
                      Harita üzerinde yönetici tarafından eklenmiş lokasyonlara
                      ulaşır ve bu lokasyonlara kendi yetkinliğinden
                      faydalanarak görüşünü yazar.&nbsp;&nbsp;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-light border-1 d-flex justify-content-center p-4">
                <div class="card-body">
                  <div class="bs-icon-lg bs-icon-rounded bs-icon-secondary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-4 bs-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -32 576 576"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                    >
                      <path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="fw-bold">Yönetici</h4>
                    <p class="text-muted">
                      Sisteme yeni lokasyonlar ekler ve bu eklenen lokasyonlarda
                      ki, uzmanlar tarafından yapılmış yorumları inceler ve
                      rapora ekler.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-xxl-7">
              <h3 class="display-6 fw-bold pb-md-4">
                Sadece 4 adımda Konutum Sistemini kullanmaya başlayın.
              </h3>
            </div>
          </div>
          <div class="row gy-4 gy-md-0">
            <div class="col-md-6 d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
              <div>
                <div class="row gy-2 row-cols-1 row-cols-sm-2">
                  <div class="col text-center text-md-start">
                    <div class="d-flex justify-content-center align-items-center justify-content-md-start">
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
                        class="icon icon-tabler icon-tabler-sun fs-3 text-primary bg-warning"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                      </svg>
                      <h5 class="fw-bold mb-0 ms-2">Kayıt</h5>
                    </div>
                    <p class="text-muted my-3">
                      Sisteme kaydınızı gerçekleştirin.
                    </p>
                  </div>
                  <div class="col text-center text-md-start">
                    <div class="d-flex justify-content-center align-items-center justify-content-md-start">
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
                        class="icon icon-tabler icon-tabler-sun fs-3 text-primary bg-warning"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                      </svg>
                      <h5 class="fw-bold mb-0 ms-2">Konum Belirleme</h5>
                    </div>
                    <p class="text-muted my-3">
                      Harita üzerinde gezinerek en güvenilir konumları
                      belirleyin!
                    </p>
                  </div>
                  <div class="col text-center text-md-start">
                    <div class="d-flex justify-content-center align-items-center justify-content-md-start">
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
                        class="icon icon-tabler icon-tabler-sun fs-3 text-primary bg-warning"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                      </svg>
                      <h5 class="fw-bold mb-0 ms-2">Favorilerine Ekle</h5>
                    </div>
                    <p class="text-muted my-3">
                      Belirlediğiniz güvenli konumları filtreleyin ve listenize
                      ekleyin.
                    </p>
                  </div>
                  <div class="col text-center text-md-start">
                    <div class="d-flex justify-content-center align-items-center justify-content-md-start">
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
                        class="icon icon-tabler icon-tabler-sun fs-3 text-primary bg-warning"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                      </svg>
                      <h5 class="fw-bold mb-0 ms-2">Raporlar Elinde</h5>
                    </div>
                    <p class="text-muted my-3">
                      Belirlediğiniz güvenli bölgelerin artık raporlarına
                      ulaşabilirsiniz!&nbsp;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 order-first order-md-last">
              <div>
                <img
                  class="rounded img-fluid w-100 fit-cover"
                  style={{ minHeight: "300px" }}
                  src="../assets/img/illustrations/teamwork.svg?h=c9d16670db4191bc86105dabde77d312"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="container py-4 py-xl-5">
          <div class="row mb-5">
            <div class="col-md-8 col-xl-6 text-center mx-auto">
              <h2>Kullanılan Teknolojiler</h2>
            </div>
          </div>
          <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
            <div class="col">
              <div class="p-4">
                <h4>React JS</h4>
                <p>
                  - Yeniden Kullanılabilir Bileşenler
                  <br />- Kolay Veri Akışı (Redux Thunk)&nbsp; &nbsp;&nbsp;
                  <br />- Kolay Debugging
                  <br />- SEO Dostu
                </p>
                <div class="d-flex">
                  <div></div>
                  <img
                    class="rounded-circle flex-shrink-0 me-3 fit-cover"
                    width="218"
                    height="116"
                    src="../assets/img/9d0a6780-394a-11eb-9fd1-6296a684b124.jpg?h=33f2eeffd3a28d41a84322a4464da3ea"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-4">
                <h4>Java Spring Boot</h4>
                <p>
                  - Kolay Veritabanı (JPA Repository)
                  <br />
                  - Güvenlik
                  <br />
                  - Efektif Test Ortamı (Mockito)
                  <br />
                  <br />
                </p>
                <div className="d-flex">
                  <img
                    className="rounded-circle flex-shrink-0 me-3 fit-cover"
                    width="207"
                    height="133"
                    src="../assets/img/og-spring.png?h=823dc4719d62baf5ffa07b5498ee9f25"
                    alt="Java Spring Boot"
                  />
                  <div></div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-4">
                <h4>MySQL</h4>
                <p>
                  - Kolay Yönetim (MySQL Workbench)
                  <br />
                  - Yüksek Performans
                  <br />- Veri Güvenliği&nbsp;
                </p>
                <div className="d-flex">
                  <div>
                    <img
                      className="rounded-circle flex-shrink-0 me-3 fit-cover"
                      width="266"
                      height="112"
                      src="../assets/img/mysql-ar21.png?h=57470624da029e6a76a9e219cb38ec05"
                      alt="MySQL"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Faq></Faq>
      <Footer></Footer>
    </>
  );
};
