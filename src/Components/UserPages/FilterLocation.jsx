import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
    const response = await fetch(
      "http://localhost:8090/commentRequest/generateReport/" + houseName
    );

    if (response.ok) {
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = houseName + ".pdf";
      link.click();

      // Clean up the URL object
      URL.revokeObjectURL(url);
    } else {
      console.error("Error generating the report.");
    }
  }

  function getGenerateReportButton(houseName) {
    return (
      <button
        onClick={() => {
          generateReport(houseName);
        }}
        className="btn btn-primary btn-sm"
      >
        Rapor Göster
      </button>
    );
  }

  return (
    <>
      <nav
        className="navbar navbar-light navbar-expand-md fixed-top navbar-shrink py-3"
        id="mainNav"
      >
        <div className="container">
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <span>Konutum</span>
          </NavLink>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-1"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/userMap">
                  Konum Haritası
                </NavLink>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item"></li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/userFilterLocation">
                  Favori Konumlar
                </NavLink>
              </li>
            </ul>
            <NavLink
              className="btn btn-danger shadow"
              role="button"
              to="/login"
            >
              Çıkış Yap
            </NavLink>
          </div>
        </div>
      </nav>
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
    </>
  );
};
