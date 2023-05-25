import React from "react";
import { Navbar } from "./Components/Layout/Navbar";
import { Footer } from "./Components/Layout/Footer";
import { BrowserRouter} from "react-router-dom";

import Paths from "./Components/Routes";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <BrowserRouter>
        <Paths></Paths>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
