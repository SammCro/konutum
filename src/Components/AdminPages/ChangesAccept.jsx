import React from "react";

export const ChangesAccept = () => {
  return (
    <section className="py-4 py-md-5 my-5">
      <div className="container py-md-5">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Konum Adı</th>
                <th>Lokasyon</th>
                <th>Uzman</th>
                <th>Uzman Yorumu</th>
                <th>Kabul / Red</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Seyhanlar</td>
                <td>Bölge2</td>
                <td>Uzman1</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    type="button"
                    style={{borderRadius : "10px"}}
                  >
                    Göster
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-success btn-sm"
                    type="button"
                    style={{borderRadius : "10px", marginRight : "4px"}}
                  >
                    Kabul
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
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
                <td>Uzman2</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    type="button"
                    style={{borderRadius : "10px"}}
                  >
                    Göster
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-success btn-sm"
                    type="button"
                    style={{borderRadius : "10px", marginRight : "4px"}}
                  >
                    Kabul
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
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
                <td>Uzman3</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    type="button"
                    style={{borderRadius : "10px"}}
                  >
                    Göster
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-success btn-sm"
                    type="button"
                    style={{borderRadius : "10px", marginRight : "4px"}}
                  >
                    Kabul
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
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
