import { Link, BrowserRouter as Router } from "react-router-dom";
import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <section className="main-app">
        <nav className="navbar navbar-expand-lg  navbar-light bg-light">
          <Link to="/list" className="navbar-brand">
            Todo First App
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/list">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">
                  Create <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    );
  }
}
export default Header;
