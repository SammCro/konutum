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
      <Route path="/usermap" element={<UserMap></UserMap>}></Route>
    </Routes>
  );
};

export default Paths;
