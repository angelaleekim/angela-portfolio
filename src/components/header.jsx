import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              <h1>Hi, I'm Angela Kim.</h1>
              <p className="lead">I'm a front-end web developer.</p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
