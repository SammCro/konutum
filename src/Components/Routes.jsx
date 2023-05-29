import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "./MainPages/Main";
import { About } from "./MainPages/About";
import { Contacts } from "./MainPages/Contacts";
import { Login } from "./MainPages/Login";
import { ForgottenPassword } from "./MainPages/ForgottenPassword";
import { Signup } from "./MainPages/Signup";
import { NotFoundPage } from "./MainPages/NotFoundPage";
import { UserMap } from "./UserPages/UserMap";
import { LocationDetect } from "./ProfessionalPages/LocationDetect";
import { FilterLocation } from "./UserPages/FilterLocation";
import { ChangesAccept } from "./AdminPages/ChangesAccept";
import { ProfessionalChange } from "./AdminPages/ProfessionalControl";
import { AddLocation } from "./AdminPages/AddLocation";

const Paths = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/about" element={<About></About>} />
      <Route path="/contacts" element={<Contacts></Contacts>} />
      <Route path="/login" element={<Login></Login>} />
      <Route
        path="/forgottenpassword"
        element={<ForgottenPassword></ForgottenPassword>}
      />
      <Route path="/signup" element={<Signup></Signup>} />
      <Route path="*" element={<NotFoundPage></NotFoundPage>} />
      {/* Users processes*/}
      <Route path="/userMap" element={<UserMap></UserMap>}></Route>
      <Route
        path="/userFilterLocation"
        element={<FilterLocation></FilterLocation>}
      ></Route>
      <Route
        path="/professionalMap"
        element={<LocationDetect></LocationDetect>}
      ></Route>
      <Route
        path="/changesAccept"
        element={<ChangesAccept></ChangesAccept>}
      ></Route>
      <Route
        path="/professionalControl"
        element={<ProfessionalChange></ProfessionalChange>}
      ></Route>
      <Route path="/addLocation" element={<AddLocation></AddLocation>}></Route>
    </Routes>
  );
};

export default Paths;
