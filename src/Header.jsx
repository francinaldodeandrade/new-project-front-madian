import React from "react";
import "./App.css";
import "./Header.css";
import logo from "./img/icone logo.png";
import logo1 from "./img/logo.png";
import logo2 from "./img/logo transparente.png";
//import logo3 from "./img/logo3.jpg";
import logo4 from "./img/img_leila.jpg";

export default function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" />
        <img src={logo2} className="logo_header" />
      </header>
      <section className="container">
        <div className="div-lf">
          <img src={logo4} id="img-lf" />
        </div>
        <div className="div-rg">
          <img src={logo1} id="img-rg" />
        </div>
      </section>
    </div>
  );
}
