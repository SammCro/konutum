import React, { useEffect, useState } from "react";

export const FilterLocation = () => {
  const [favoriteHouses, setFavoriteHouses] = useState([]);

  useEffect(() => {
    getUserFavorites(1).catch((error) => {
      console.log("error when trying to get favorite houses.");
    });
  }, [favoriteHouses]);

  async function getUserFavorites(userId) {
    const response = await fetch(
      "http://localhost:8090/user/getUserFavorites/" + userId
    );
    const data = await response.json();
    setFavoriteHouses(data);
  }

  async function generateReport(houseName) {
    await fetch(
      "http://localhost:8090/commentRequest/generateReport/" + houseName
    );
  }

  function getGenerateReportButton(houseName) {
    return (
      <button
        onClick={ () => {generateReport(houseName)}}
        className="btn btn-primary btn-sm"
      >
        Rapor Oluştur
      </button>
    );
  }

  return (
    <section className="py-4 py-md-5 my-5">
      <div className="container py-md-5">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Konum Adı</th>
                <th>Lokasyon</th>
                <th>Rapor</th>
                <th>Durum</th>
              </tr>
            </thead>
            <tbody>
              {favoriteHouses.map((house) => (
                <tr key={house.houseId}>
                  <td>{house.houseName}</td>
                  <td>{house.locationName}</td>
                  <td>{getGenerateReportButton(house.houseName)}</td>
                  <td>{house.confidenceLevel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
