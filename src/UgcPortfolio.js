import React from "react";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.css";
import "./UgcPortfolio.css";

export default function UgcPortfolio() {
  return (
    <div className="UgcPortfolio">
      <Header />
      <div>
        <h4>My Media Kit</h4>
        <a href="https://beacons.ai/keebsncodes/mediakit">
          <button>Media Kit</button>
        </a>
      </div>
      <div>
        <h4>Shop my switches</h4>
        <h4>Shop my keyboards</h4>
        <h4>My gadgets</h4>
      </div>
      <footer>Partners</footer>
    </div>
  );
}
