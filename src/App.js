import React from "react";
import { Navbar } from "./Components/Layout/Navbar";
import { Footer } from "./Components/Layout/Footer";
import { LocationDetect } from "./Components/ProfessionalPages/LocationDetect";
import { Main } from "./Components/MainPages/Main";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
