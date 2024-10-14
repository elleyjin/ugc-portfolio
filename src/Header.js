import React from "react";
import Navbar from "./Navbar";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header container-fluid">
      <Navbar />
      <div className="row header-container ">
        <div className="col-7">
          <h2>Keyboard / Mechanical switch Enthusiast</h2>
          <h3>Hello, I'm Jin</h3>
          <p>
            I'm Jin, I'm a keyboard / mechanical switch hobbyist who's really
            into different sounds of the mechanical switches. I love sharing
            reviews of switches that I've found on my Instagram, TikTok &
            Youtube channels.
          </p>
        </div>
      </div>
    </div>
  );
}
