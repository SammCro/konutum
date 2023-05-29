import React from "react";
import { Map } from "../SubComponents/Map";

export const UserMap = () => {
  const userType = "User"
  return (
    <section className="py-5 mt-5">
      <div className="container">
        <div className="row">
          {" "}
          <div className="col-md-12">
            <Map userType={userType}></Map>
          </div>
        </div>
      </div>
    </section>
  );
};
