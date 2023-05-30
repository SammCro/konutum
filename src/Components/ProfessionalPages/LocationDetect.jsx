import React, { useState } from "react";
import { Map } from "../SubComponents/Map";

export const LocationDetect = () => {
  const [selectedHouse, setSelectedHouse] = useState([]);
  const [comment, setComment]= useState([]);

  async function submitComment(e){
    e.preventDefault()
    const response = await fetch("http://localhost:8090/commentRequest/addCommentRequest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        houseName: selectedHouse.houseName,
        locationName : selectedHouse.locationName,
        expert: "Samet",
        status: "pending",
        comment: comment
      })
    });
    const data = await response.json();
    console.log(data);
  }
  return (
    <section className="py-5 mt-5">
      <div className="container py-4 py-xl-5">
        <div className="row gy-4 gy-md-0">
          <div className="col-md-3 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
            <div style={{ maxWidth: "350px" }}>
              <form style={{ textAlign: "center"}} onSubmit={submitComment}>
                <label>{selectedHouse}</label>
                <textarea
                  className="form-control"
                  style={{ height: "340.1875px" }}
                  onChange={(e) => {setComment(e.target.value)}}
                  value={comment}
                ></textarea>
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{ marginTop: "24px" }}
                >
                  Button
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-9">
            <div>
              <Map setSelectedHouse =  {setSelectedHouse} userType={"Expert"}></Map>    
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
