import React, { useEffect, useState } from "react";

export const ChangesAccept = () => {
  const[pendingCommentRequests, setPendingCommentRequests] = useState([]);
  useEffect(() => {
    const fetchPendingCommentRequests = () =>{
      fetch("http://localhost:8090/commentRequest/getPendingCommentRequests")
      .then((response) => response.json())
      .then((data) => setPendingCommentRequests(data))
      .catch((error) => {console.log(error)})
    }
    fetchPendingCommentRequests();
  }, [pendingCommentRequests]) 

  async function acceptCommentRequest(commentRequestId){
    await fetch("http://localhost:8090/commentRequest/acceptCommentRequest/" + commentRequestId)
  }

  async function rejectCommentRequest(commentRequestId){
    await fetch("http://localhost:8090/commentRequest/rejectCommentRequest/" + commentRequestId)
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
                  <td>{commentRequest.expertComment}</td>
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
    </section>
  );
};
