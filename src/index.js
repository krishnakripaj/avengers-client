import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Avenger from "./components/avenger";
import Avengers from "./components/avengers";
import NavBar from "./components/navBar";
import Home from "./components/home";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/avengers" element={<Avengers />} />
      </Routes>
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById("root")
);
