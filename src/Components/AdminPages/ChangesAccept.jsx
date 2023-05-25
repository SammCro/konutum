import React from "react";

export const ChangesAccept = () => {
  return (
    <section class="py-4 py-md-5 my-5">
      <div class="container py-md-5">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Konum Adı</th>
                <th>Lokasyon</th>
                <th>Uzman Yorumu</th>
                <th>Kabul / Red</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Seyhanlar</td>
                <td>Bölge2</td>
                <td>
                  <button
                    class="btn btn-primary btn-sm"
                    type="button"
                    style={{borderRadius : "10px"}}
                  >
                    Göster
                  </button>
                </td>
                <td>
                  <button
                    class="btn btn-success btn-sm"
                    type="button"
                    style={{borderRadius : "10px", marginRight : "4px"}}
                  >
                    Kabul
                  </button>
                  <button
                    class="btn btn-danger btn-sm"
                    type="button"
                    style={{borderRadius : "10px", marginRight : "4px"}}
                  >
                    Red
                  </button>
                </td>
              </tr>
              <tr>
                <td>Sincan</td>
                <td>Bölge31</td>
                <td>
                  <button
                    class="btn btn-primary btn-sm"
                    type="button"
                    style={{borderRadius : "10px"}}
                  >
                    Göster
                  </button>
                </td>
                <td>
                  <button
                    class="btn btn-success btn-sm"
                    type="button"
                    style={{borderRadius : "10px", marginRight : "4px"}}
                  >
                    Kabul
                  </button>
                  <button
                    class="btn btn-danger btn-sm"
                    type="button"
                    style={{borderRadius : "10px", marginRight : "4px"}}
                  >
                    Red
                  </button>
                </td>
              </tr>
              <tr>
                <td>Culuk</td>
                <td>Bölge21</td>
                <td>
                  <button
                    class="btn btn-primary btn-sm"
                    type="button"
                    style={{borderRadius : "10px"}}
                  >
                    Göster
                  </button>
                </td>
                <td>
                  <button
                    class="btn btn-success btn-sm"
                    type="button"
                    style={{borderRadius : "10px", marginRight : "4px"}}
                  >
                    Kabul
                  </button>
                  <button
                    class="btn btn-danger btn-sm"
                    type="button"
                    style={{borderRadius : "10px", marginRight : "4px"}}
                  >
                    Red
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
