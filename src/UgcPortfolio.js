import React from "react";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.css";
import CoverImage from "./image/cover-image.JPG";
import "./UgcPortfolio.css";

export default function UgcPortfolio() {
  return (
    <div className="UgcPortfolio">
      <div className="container-fluid">
        <Navbar />
        <div className="row">
          <div className="col">
            <h2>Keyboard / Mechanical switch Enthusiast</h2>
            <img src={CoverImage} alt="keyboard" />
          </div>
        </div>
      </div>
    </div>
  );
}
