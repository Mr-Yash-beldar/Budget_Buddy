import React from "react";
import {  NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header className="header_section fixed-top border border-white bg-pink">
      <div className="container-fluid ">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <NavLink className="navbar-brand" to="/">
            <span>BudgetBuddy</span>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ">
              <li className="nav-item ">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Feature">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#About">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  Signup
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
