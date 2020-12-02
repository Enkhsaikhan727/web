import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/Header";
import Dynamic from "./components/dynamic/Dynamic";
import "./components/example/Example.css";
import "./styles/main.css";

ReactDOM.render(
  <div>
    <Header />
    <Dynamic />
  </div>,
  document.getElementById("reactapp")
);