import React from "react";

export const ProfessionalChange = () => {
  return (
    <section className="py-4 py-md-5 my-5">
      <div className="container py-md-5">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Uzman Adı</th>
                <th>Uzman Yetkileri</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>
                  <button
                    className="btn btn-danger"
                    type="button"
                    style = {{borderRadius : "34px"}}
                  >
                    Sil
                  </button>
                </td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
