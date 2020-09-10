import React, { Component } from "react";
import NavBar from "./components/nav-bar";
import Header from "./components/header";
import AboutMe from "./components/about-me";
import "./App.css";
import "./assets/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <AboutMe />
      </div>
    );
  }
}

export default App;
