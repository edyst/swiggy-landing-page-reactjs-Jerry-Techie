import "./App.css";
import Header from "./Components/Header";

import { useState } from "react";
import FeatureSection from "./Components/FeatureSection";
import PocketSection from "./Components/PocketSection";
import CitySection from "./Components/CitySection.js";
import ActionSection from "./Components/ActionSection";
import Footer from "./Components/Footer";
import Slider from "./Components/Slider";
import SignIn from "./Components/SignIn";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <div className="header123">
        <Header />
      </div>

      <div className="brightlow">
        <div className="feature123">
          <FeatureSection />
        </div>
        <div className="pocket123">
          {" "}
          <PocketSection />
        </div>
        <div className="action123">
          {" "}
          <ActionSection />
        </div>

        <div className="city123">
          <CitySection />
        </div>
        <div className="footer123">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
