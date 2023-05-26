import React from "react";
import { Navbar } from "./Components/Layout/Navbar";
import { Footer } from "./Components/Layout/Footer";

import Paths from "./Components/Routes";

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Paths></Paths>

      <Footer></Footer>
    </div>
  );
}

export default App;
