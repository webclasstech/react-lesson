import React from "react";

import "./App.css";

import { SpeakersGallery } from "./components/SpeakersGallery/SpeakersGallery";
import { MyFirstProvider } from "./state/MyFirstContext";
import NavBar from "./components/NavBar/NavBar";
import { arrForNav } from "./components/NavBar/NavBarInfo";
import { BrowserRouter } from "react-router-dom";
import { CompC } from "./components/DemoTheContext/CompC/CompC";
// import NavBar from "./components/NavBar/NavBar";
// import { arrForNav } from "./components/NavBar/NavBarInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyFirstProvider>
          <NavBar navbarArr={arrForNav} />
          <hr />
          <CompC />
          <hr />
          <SpeakersGallery />
        </MyFirstProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
