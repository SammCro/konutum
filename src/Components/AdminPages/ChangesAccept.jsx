import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Map } from "../SubComponents/Map";

export const ChangesAccept = () => {
  const [pendingCommentRequests, setPendingCommentRequests] = useState([]);
  const [expertName, setExpertName] = useState([]);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const fetchPendingCommentRequests = () => {
      fetch("http://localhost:8090/commentRequest/getPendingCommentRequests")
        .then((response) => response.json())
        .then((data) => setPendingCommentRequests(data))
        .catch((error) => {
          console.log(error);
        });
    };
    fetchPendingCommentRequests();
  }, [pendingCommentRequests]);

  async function acceptCommentRequest(commentRequestId) {
    await fetch(
      "http://localhost:8090/commentRequest/acceptCommentRequest/" +
        commentRequestId
    );
  }

  async function rejectCommentRequest(commentRequestId) {
    await fetch(
      "http://localhost:8090/commentRequest/rejectCommentRequest/" +
        commentRequestId
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
                <NavLink className="nav-link" to="/addLocation">
                  Lokasyon Ekle
                </NavLink>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item"></li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/changesAccept">
                  Uzman Yorumları
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
                  <th>Uzman</th>
                  <th>Uzman Yorumu</th>
                  <th>Kabul / Red</th>
                </tr>
              </thead>
              <tbody>
                {pendingCommentRequests.map((commentRequest) => (
                  <tr key={commentRequest.id}>
                    <td>{commentRequest.houseName}</td>
                    <td>{commentRequest.locationName}</td>
                    <td>{commentRequest.expertName}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm"
                        type="button"
                        onClick={() => {
                          setExpertName(commentRequest.expertName);
                          setComment(commentRequest.comment);
                        }}
                      >
                        Göster
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          acceptCommentRequest(commentRequest.id);
                        }}
                        className="btn btn-success btn-sm"
                      >
                        Kabul
                      </button>
                      <button
                        onClick={() => {
                          rejectCommentRequest(commentRequest.id);
                        }}
                        className="btn btn-danger btn-sm"
                      >
                        Red
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <Map userType={"Admin"}></Map>
        </div>
      </section>
    </>
  );
};
