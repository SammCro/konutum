import React from "react";

export const FilterLocation = () => {
  return (
    <section class="py-4 py-md-5 my-5">
      <div class="container py-md-5">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Konum Adı</th>
                <th>Lokasyon</th>
                <th>Rapor</th>
                <th>Durum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Seyhanlar</td>
                <td>Bölge1</td>
                <td>RaporSeyhan.pdf</td>
                <td>%82</td>
              </tr>
              <tr>
                <td>Sincan</td>
                <td>Bölge3</td>
                <td>Sincan.pdf</td>
                <td>%98</td>
              </tr>
              <tr>
                <td>Konak</td>
                <td>Bölge41</td>
                <td>Konak.pdf</td>
                <td>%53</td>
              </tr>
              <tr>
                <td>Culuk</td>
                <td>Bölge12</td>
                <td>Culuk.pdf</td>
                <td>%12</td>
              </tr>
              <tr>
                <td>Hacıbektaş</td>
                <td>Bölge23</td>
                <td>Hacıbektas.pdf</td>
                <td>%76</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
