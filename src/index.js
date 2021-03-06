import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Avengers from "./components/avengers";
import NavBar from "./components/navbar";
import Home from "./components/home";
import AvengerIndividual from "./components/avengerindividual";

ReactDOM.render(
<BrowserRouter>
    <NavBar/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/avengers" component={Avengers}/>
    <Route exact path="/avengers/:id" component={AvengerIndividual}/>
</BrowserRouter>
, document.getElementById("root"));
